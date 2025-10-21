'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Features', action: () => scrollToSection('hero-carousel') },
    { label: 'Why CoinLaa', action: () => scrollToSection('why-coinlaa') },
    { label: 'Pricing', action: () => scrollToSection('pricing') },
    { label: 'FAQ', action: () => scrollToSection('faq') },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/coinlaa-logo.jpg" 
              alt="Coinlaa" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              CoinLaa
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-foreground hover:text-orange-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button className="w-full bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}