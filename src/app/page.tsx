'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowUpRight, Globe, Bot, Zap, BookOpen, Users, TrendingUp, Shield, Clock, Star, ChevronRight, Menu, X, Check, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { CryptoPriceTicker } from '@/components/crypto-price-ticker'
import { FullScreenHeroCarousel } from '@/components/full-screen-hero-carousel'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Hardcoded pricing data (base monthly prices)
  const pricingPlans = [
    {
      name: "Explorer",
      description: "Perfect for getting started",
      monthlyPrice: 0,
      features: [
        "Access to basic AI tools",
        "Community forum access",
        "5 AI agent interactions/month",
        "Basic market data",
        "Email support"
      ],
      cta: "Start for Free",
      popular: false
    },
    {
      name: "Alpha",
      description: "Most popular for serious traders",
      monthlyPrice: 49,
      features: [
        "1000+ AI tools unlimited access",
        "200+ AI agents deployment",
        "Real-time event alerts",
        "Advanced analytics dashboard",
        "100+ crypto courses",
        "Priority support",
        "API access",
        "Custom AI agent training"
      ],
      cta: "Choose Your Plan & Start Today",
      popular: true
    },
    {
      name: "Whale",
      description: "For institutions and power users",
      monthlyPrice: 199,
      features: [
        "Everything in Alpha plan",
        "Unlimited AI agent deployments",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "Exclusive research reports",
        "Early access to new features"
      ],
      cta: "Book a Demo",
      popular: false
    }
  ]

  // Hardcoded FAQ data
  const faqItems = [
    {
      question: "How do I register for Coinlaa?",
      answer: "Registration is simple! Click on any 'Join Now' or 'Free Registration' button, fill out the short form, and you'll get immediate access to our free tier."
    },
    {
      question: "Are the AI tools difficult to use?",
      answer: "Not at all! Our AI tools are designed with user-friendliness in mind. We provide comprehensive tutorials, documentation, and video guides to help you get started quickly."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. No long-term commitments or hidden fees. You'll continue to have access until the end of your billing period."
    },
    {
      question: "Do you offer customer support?",
      answer: "We offer 24/7 customer support via email and live chat. Alpha and Whale plan members also get priority support with faster response times."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely! We use industry-standard encryption and security measures to protect your data. We're also compliant with GDPR and other data protection regulations."
    },
    {
      question: "Can I integrate Coinlaa with other platforms?",
      answer: "Yes! We offer API access for Alpha and Whale plans, allowing you to integrate our tools and data with your existing workflows and platforms."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation Menu */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Coinlaa" 
              className="w-32 h-16 object-contain"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#why-coinlaa" className="text-sm font-medium hover:text-primary transition-colors">Why CoinLaa</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a 
              href="https://app.coinlaa.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Sign Up Free
              </Button>
            </a>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="container px-4 py-4 space-y-3">
              <a href="#why-coinlaa" className="block text-sm font-medium hover:text-primary transition-colors">Why CoinLaa</a>
              <a href="#pricing" className="block text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="block text-sm font-medium hover:text-primary transition-colors">FAQ</a>
              <a 
                href="https://app.coinlaa.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Sign Up Free
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Real-time Crypto Price Ticker */}
      <CryptoPriceTicker />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-50" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-4 md:py-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-3">
              <div className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-4 py-2 text-base font-medium backdrop-blur-sm rounded-full border inline-flex items-center">
                <Star className="w-4 h-4 mr-2" />
                The Complete Crypto Social Network with 1000+ AI Tools & 200+ AI Agents
              </div>
            </div>

            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 leading-tight">
              Connect, Learn, and Analyze with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                AI-Powered Crypto Intelligence
              </span>
            </h1>

            {/* <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6"> */}
              {/* <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base px-6 py-3 h-auto rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25"> */}
                {/* Access AI Tools Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button variant="outline" className="border-purple-400/60 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 text-base px-6 py-3 h-auto rounded-full font-semibold transition-all duration-300 backdrop-blur-sm bg-purple-500/10">
                Deploy AI Agents
              </Button>
            </div> */}

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
                <Clock className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-800">24/7 Intelligence</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Full-Screen Hero Carousel */}
      <FullScreenHeroCarousel />

      {/* Why CoinLaa Section */}
      <div id="why-coinlaa" className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CoinLaa?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most comprehensive crypto platform with AI-powered tools and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>1000+ AI Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access the largest collection of AI-powered tools for trading analysis, portfolio management, and market research.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>200+ AI Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deploy custom AI agents that automate tasks, provide insights, and engage with your community 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Real-time Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get instant notifications for market movements, price breakouts, and important crypto events.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>100+ Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from expert-led courses covering trading strategies, blockchain technology, and crypto security.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bank-grade security and 99.9% uptime ensure your data and investments are always protected.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join thousands of traders, investors, and innovators in the world's first crypto social network.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">AI Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-sm text-muted-foreground">AI Agents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Intelligence</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the plan that fits your needs. Start free and scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isAnnual ? 'font-medium' : 'text-muted-foreground'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-orange-500' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'font-medium' : 'text-muted-foreground'}`}>
                Annual (Save 25%)
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => {
              const monthlyPrice = plan.monthlyPrice
              const annualMonthlyPrice = Math.round(monthlyPrice * 0.75) // 25% off
              const annualTotal = annualMonthlyPrice * 12
              const displayPrice = isAnnual ? annualMonthlyPrice : monthlyPrice

              return (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-orange-500 shadow-lg shadow-orange-500/10' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">${displayPrice}</span>
                      <span className="text-muted-foreground ml-2">/mo</span>
                    </div>
                    {isAnnual && monthlyPrice > 0 && (
                      <div className="text-sm mt-1 text-center">
                        <span className="text-muted-foreground line-through">${monthlyPrice}/mo</span>
                        <span className="text-muted-foreground ml-2">Billed ${annualTotal}/year</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={
                      plan.name === "Explorer" 
                        ? "https://app.coinlaa.com/register"
                        : plan.name === "Alpha"
                        ? "https://app.coinlaa.com/pricing?plan=alpha"
                        : "https://app.coinlaa.com/enterprise"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : ''}`}>
                      {plan.cta}
                    </Button>
                  </a>
                </CardContent>
              </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-20 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Have questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="cursor-pointer" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                    <ChevronRight className={`w-5 h-5 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} />
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Crypto Revolution?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey with thousands of traders and investors building wealth together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.coinlaa.com/register/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Sign Up Now
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a 
              href="https://app.coinlaa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-4 px-4 bg-background border-t">
        <div className="container">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Coinlaa" 
                className="w-32 h-16 object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              The ultimate crypto social network for traders and investors.
            </p>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Coinlaa. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}