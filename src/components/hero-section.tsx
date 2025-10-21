'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, Bot, Users, BookOpen, Globe, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0))]" />
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-4 md:py-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-3">
            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-4 py-2 text-base font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              The Complete Crypto Social Network with 1000+ AI Tools & 200+ AI Agents
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 leading-tight">
            Connect, Learn, and Analyze with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              AI-Powered Crypto Intelligence
            </span>
          </h1>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base px-6 py-3 h-auto rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25"
              onClick={() => window.open('https://app.coinlaa.com/ai-tool/', '_blank')}
            >
              Access AI Tools Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-400/60 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 text-base px-6 py-3 h-auto rounded-full font-semibold transition-all duration-300 backdrop-blur-sm bg-purple-500/10"
              onClick={() => window.open('https://app.coinlaa.com/crypto-agents/', '_blank')}
            >
              Deploy AI Agents
            </Button>
          </div> */}

          {/* Feature Pills - Enhanced Visibility with Dark Text */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-100/90 to-orange-200/90 backdrop-blur-sm border border-orange-300/50 rounded-full px-4 py-2.5 shadow-lg shadow-orange-500/20">
              <Bot className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-800">1000+ AI Tools</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100/90 to-purple-200/90 backdrop-blur-sm border border-purple-300/50 rounded-full px-4 py-2.5 shadow-lg shadow-purple-500/20">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">200+ AI Agents</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100/90 to-blue-200/90 backdrop-blur-sm border border-blue-300/50 rounded-full px-4 py-2.5 shadow-lg shadow-blue-500/20">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">100+ Courses</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-100/90 to-green-200/90 backdrop-blur-sm border border-green-300/50 rounded-full px-4 py-2.5 shadow-lg shadow-green-500/20">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-800">24/7 Intelligence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}