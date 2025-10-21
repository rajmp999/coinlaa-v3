'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, Users, Bot, Shield, Zap, Globe, Star, CheckCircle, ArrowRight, BookOpen, TrendingUp, MessageSquare, Calendar, AlertCircle, Cpu } from 'lucide-react'

export function WhyCoinLaa() {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: "1000+ Crypto AI Tools",
      description: "World's largest collection of crypto-specific AI tools for analysis and trading",
      bullets: [
        "Rug Pull Analyzer & Token Security",
        "Market Fear & Greed Index",
        "AI Crypto Chat Assistant",
        "Price Prediction & Analysis Tools",
        "Wallet & Token Analytics"
      ],
      image: "🔧",
      badge: "ANALYSIS TOOLS"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "200+ AI Agents",
      description: "Intelligent AI agents for community automation and management",
      bullets: [
        "Automated community moderation",
        "24/7 customer support responses",
        "Market alert broadcasting",
        "Social media automation",
        "Custom workflow automation"
      ],
      image: "🤖",
      badge: "AUTOMATION AGENTS"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Crypto Social Network",
      description: "Connect with crypto enthusiasts, traders, and developers",
      bullets: [
        "Exclusive community groups",
        "Real-time trading signals",
        "Expert AMAs and webinars",
        "Social sentiment analysis"
      ],
      image: "👥",
      badge: "ACTIVE COMMUNITY"
    },

    {
      icon: <Calendar className="w-8 h-8 text-purple-500" />,
      title: "Crypto Events Hub",
      description: "Never miss important IDOs, ICOs, webinars, and regulatory events",
      bullets: [
        "Upcoming token launches",
        "AMA & webinar schedules",
        "Regulatory event tracking",
        "Exchange listing alerts"
      ],
      image: "📅",
      badge: "EVENT TRACKING"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
      title: "100+ Crypto Courses",
      description: "Master crypto from beginner to advanced with expert-led courses",
      bullets: [
        "Blockchain fundamentals",
        "DeFi deep dives",
        "Technical analysis mastery",
        "Security best practices"
      ],
      image: "📚",
      badge: "LEARNING HUB"
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: "Real-Time Intelligence",
      description: "Breaking news, price tracking, and market insights 24/7",
      bullets: [
        "Breaking crypto news",
        "Real-time price alerts",
        "Exchange integration",
        "Global market coverage"
      ],
      image: "🌍",
      badge: "LIVE INTELLIGENCE"
    }
  ]

  const toolCategories = [
    { name: "Token Analysis", count: 15, icon: "🔍" },
    { name: "Market Tools", count: 12, icon: "📊" },
    { name: "Security Tools", count: 8, icon: "🔒" },
    { name: "DeFi Tools", count: 7, icon: "💰" },
    { name: "NFT Tools", count: 5, icon: "🎨" },
    { name: "Wallet Tools", count: 6, icon: "👛" }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
            🔥 THE CRYPTO SUPER APP
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
            Why Crypto Enthusiasts Choose CoinLaa
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            More than a trading platform - CoinLaa is your complete crypto ecosystem. 
            Join thousands of users who use our 
            <span className="text-orange-500 font-bold"> 1000+ AI tools</span> and 
            <span className="text-purple-500 font-bold"> 200+ AI agents</span> daily to make smarter crypto decisions.
          </p>
          
          {/* FOMO Counter - Enhanced Visibility */}
          <div className="bg-gradient-to-r from-orange-50 via-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 mb-8 border border-orange-200 dark:border-orange-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-4xl md:text-5xl font-bold rounded-xl p-4 mb-2 shadow-lg group-hover:shadow-xl transition-shadow">
                  1000+
                </div>
                <div className="text-lg font-semibold text-orange-600 dark:text-orange-400">AI Tools</div>
                <div className="text-sm text-muted-foreground">Powered Solutions</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white text-4xl md:text-5xl font-bold rounded-xl p-4 mb-2 shadow-lg group-hover:shadow-xl transition-shadow">
                  200+
                </div>
                <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">AI Agents</div>
                <div className="text-sm text-muted-foreground">Smart Automation</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-4xl md:text-5xl font-bold rounded-xl p-4 mb-2 shadow-lg group-hover:shadow-xl transition-shadow">
                  100+
                </div>
                <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">Crypto Courses</div>
                <div className="text-sm text-muted-foreground">Expert Learning</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-green-400 to-green-600 text-white text-4xl md:text-5xl font-bold rounded-xl p-4 mb-2 shadow-lg group-hover:shadow-xl transition-shadow">
                  24/7
                </div>
                <div className="text-lg font-semibold text-green-600 dark:text-green-400">Live Intelligence</div>
                <div className="text-sm text-muted-foreground">Real-time Data</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools Showcase */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">World's Largest Crypto AI Tools Collection</h3>
            <p className="text-muted-foreground">1000+ unique AI-powered tools for analysis, trading, and research</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {toolCategories.map((category, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-semibold text-sm">{category.name}</div>
                <div className="text-xs text-muted-foreground">{category.count} tools</div>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Agents Showcase */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Intelligent AI Agents for Automation</h3>
            <p className="text-muted-foreground">200+ specialized AI agents for community management and automation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { name: "Community Moderators", count: "50+", icon: "🛡️" },
              { name: "Trading Assistants", count: "40+", icon: "📈" },
              { name: "Support Agents", count: "35+", icon: "💬" },
              { name: "Alert Bots", count: "30+", icon: "🔔" },
              { name: "Analytics Agents", count: "25+", icon: "📊" },
              { name: "Custom Agents", count: "20+", icon: "⚙️" }
            ].map((category, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-semibold text-sm">{category.name}</div>
                <div className="text-xs text-muted-foreground">{category.count} agents</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-orange-100 to-purple-100 dark:from-orange-900/20 dark:to-purple-900/20">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <div className="text-4xl mb-4 text-center">{feature.image}</div>
                
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Tools Preview */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Most Popular AI Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Rug Pull Analyzer", "Fear & Greed Index", "AI Chat Assistant", 
              "Token Economics Analyzer", "Wallet Validator", "Market Correlation Analyzer",
              "DeFi Risk Analyzer", "NFT Wallet Analyzer"
            ].map((tool, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-white dark:bg-slate-800 rounded-lg">
                <Cpu className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Agents Preview */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Most Popular AI Agents</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Community Moderator", "Trading Assistant", "Support Agent", 
              "Alert Bot", "Analytics Agent", "Social Media Manager",
              "Content Creator", "Custom Workflow Agent"
            ].map((agent, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-white dark:bg-slate-800 rounded-lg">
                <Zap className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium">{agent}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-gradient-to-r from-orange-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              ⚠️ LIMITED BETA ACCESS
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Crypto Intelligence Revolution
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Get instant access to <span className="font-bold text-yellow-300">1000+ AI tools</span> and 
              <span className="font-bold text-yellow-300"> 200+ AI agents</span> used by 
              <span className="font-bold text-yellow-300"> thousands of crypto enthusiasts</span>. 
              <span className="font-bold text-yellow-300"> Only 1,000 beta spots left!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-6" onClick={() => window.open('https://app.coinlaa.com/ai-tool/', '_blank')}>
                Explore AI Tools
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-purple-500/20 text-purple-200 hover:bg-white hover:text-purple-600 font-bold text-lg px-8 py-6 backdrop-blur-sm" onClick={() => window.open('https://app.coinlaa.com/crypto-agents/', '_blank')}>
                Deploy AI Agents
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                1000+ AI tools free forever
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                200+ AI agents available
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}