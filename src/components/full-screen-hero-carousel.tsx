'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Users, Cpu, Zap, Calendar, GraduationCap, Radio } from 'lucide-react'

interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  punchline: string
  fomo: string
  cta: string
  backgroundImage: string
  appLink: string
}

const FEATURES: Feature[] = [
  {
    id: "community",
    icon: <Users className="h-8 w-8 text-orange-500" />,
    title: "Crypto's Own Community",
    punchline: "Crypto's Own Social Space – Don't Miss Out on Exclusive Connections!",
    fomo: "Join the movement. Top traders, creators, and innovators are already here.",
    cta: "Become a Community Insider",
    backgroundImage: "/slide-community.jpg",
    appLink: "https://app.coinlaa.com/members/"
  },
  {
    id: "tools",
    icon: <Cpu className="h-8 w-8 text-orange-500" />,
    title: "1000+ Crypto AI Tools",
    punchline: "The World's Largest AI Tools Collection – Analyze, Build & Optimize.",
    fomo: "From token analysis to market predictions. Every crypto tool you'll ever need, all in one place.",
    cta: "Explore AI Tools",
    backgroundImage: "/slide-tools.jpg",
    appLink: "https://app.coinlaa.com/ai-tools"
  },
  {
    id: "agents",
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "200+ AI Agents for Communities",
    punchline: "Deploy Intelligent AI Agents – Automate & Scale Your Community.",
    fomo: "24/7 automated responses, market alerts, and community management. Your AI-powered community assistant.",
    cta: "Deploy AI Agents",
    backgroundImage: "/slide-agents.jpg",
    appLink: "https://app.coinlaa.com/crypto-agents/"
  },
  {
    id: "events",
    icon: <Calendar className="h-8 w-8 text-orange-500" />,
    title: "Events with Alerts",
    punchline: "Get Alerted Instantly – Never Miss a Profitable Opportunity!",
    fomo: "We notify you on breaking events so you can act fast and avoid costly mistakes.",
    cta: "Activate Event Alerts Now",
    backgroundImage: "/slide-events.jpg",
    appLink: "https://app.coinlaa.com/crypto-agents/"
  },
  {
    id: "academy",
    icon: <GraduationCap className="h-8 w-8 text-orange-500" />,
    title: "Crypto Academy",
    punchline: "100+ Courses Only for Crypto – Accelerate Your Success, Today!",
    fomo: "Master trading, technology, and security. The earlier you learn, the further you go.",
    cta: "Start Your First Lesson Free",
    backgroundImage: "/slide-academy.jpg",
    appLink: "https://app.coinlaa.com/courses/"
  },
  {
    id: "news",
    icon: <Radio className="h-8 w-8 text-orange-500" />,
    title: "News & Signals",
    punchline: "News That Moves Markets – Be the First to Know!",
    fomo: "Signal and news feeds so you're never left out. The best traders never wait.",
    cta: "Activate Crypto Signals",
    backgroundImage: "/slide-news.jpg",
    appLink: "https://app.coinlaa.com/crypto-news/"
  }
]

export function FullScreenHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % FEATURES.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + FEATURES.length) % FEATURES.length)
    setIsAutoPlaying(false)
  }

  const handleCTAClick = (feature: Feature) => {
    setIsAutoPlaying(false)
    window.open(feature.appLink, '_blank')
  }

  const currentFeature = FEATURES[currentSlide]

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${currentFeature.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                {currentFeature.icon}
              </div>
            </div>

            {/* Title */}
            <Badge className="mb-4 bg-orange-500 text-white border-0 px-4 py-2 text-sm">
              {currentFeature.title}
            </Badge>

            {/* Punchline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {currentFeature.punchline}
            </h1>

            {/* FOMO Text */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {currentFeature.fomo}
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className={`${
                currentFeature.id === 'tools' 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : currentFeature.id === 'agents'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              } text-lg px-8 py-6 h-auto rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
              onClick={() => handleCTAClick(currentFeature)}
            >
              {currentFeature.cta}
              <Play className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {FEATURES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 right-8 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
      >
        <Play className={`h-4 w-4 ${isAutoPlaying ? '' : 'ml-0.5'}`} />
      </Button>
    </div>
  )
}