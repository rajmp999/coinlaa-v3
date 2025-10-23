"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  Globe,
  Bot,
  Zap,
  BookOpen,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Star,
  ChevronRight,
  Menu,
  X,
  Check,
  ArrowRight,
  Bitcoin,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Hardcoded crypto data
  const cryptoPrices = [
    { symbol: "BTC", change: "+$2,345", price: "$67,890", isPositive: true },
    { symbol: "ETH", change: "+$156", price: "$3,456", isPositive: true },
    { symbol: "SOL", change: "-$12", price: "$178", isPositive: false },
    { symbol: "BNB", change: "+$8", price: "$612", isPositive: true },
    { symbol: "XRP", change: "+$0.05", price: "$0.62", isPositive: true },
  ];

  // Hardcoded carousel data
  const carouselItems = [
    {
      id: 1,
      title: "The Largest AI Toolkit in Crypto",
      subtitle: "Build, Audit, & Launch",
      description:
        "Access 1000+ AI-powered tools for trading analysis, smart contract auditing, and portfolio management.",
      image: "/slide-tools.jpg",
      cta: "Explore AI Tools",
      icon: Bot,
    },
    {
      id: 2,
      title: "Deploy Your AI Agent",
      subtitle: "Give Your Community Superpowers",
      description:
        "Create and deploy custom AI agents that automate tasks, engage users, and provide 24/7 support.",
      image: "/slide-agents.jpg",
      cta: "Deploy AI Agent",
      icon: Zap,
    },
    {
      id: 3,
      title: "Get Alerted Instantly",
      subtitle: "Never Miss a Profitable Opportunity",
      description:
        "Real-time alerts for market movements, price breakouts, and important crypto events.",
      image: "/slide-events.jpg",
      cta: "Activate Event Alerts",
      icon: TrendingUp,
    },
    {
      id: 4,
      title: "100+ Courses Only for Crypto",
      subtitle: "Accelerate Your Success, Today",
      description:
        "Master trading, technology, and security. The earlier you learn, the further you go.",
      image: "/slide-academy.jpg",
      cta: "Start Your First Lesson Free",
      icon: BookOpen,
    },
    {
      id: 5,
      title: "Crypto's Only Social Space",
      subtitle: "Don't Miss Out on Exclusive Content",
      description:
        "Join the movement. Top traders, creators, and innovators are already here.",
      image: "/slide-community.jpg",
      cta: "Become a Community Insider",
      icon: Users,
    },
  ];

  // Hardcoded pricing data
  const pricingPlans = [
    {
      name: "Explorer",
      description: "Perfect for getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      isFree: true,
      features: [
        "Access to basic AI tools",
        "Community forum access",
        "5 AI agent interactions/month",
        "Basic market data",
        "Email support",
      ],
      cta: "Start for Free",
      popular: false,
    },
    {
      name: "Alpha",
      description: "Most popular for serious traders",
      monthlyPrice: 25,
      annualPrice: 18.75, // 25% off: 25 * 0.75 = 18.75
      isFree: false,
      features: [
        "1000+ AI tools unlimited access",
        "200+ AI agents deployment",
        "Real-time event alerts",
        "Advanced analytics dashboard",
        "100+ crypto courses",
        "Priority support",
        "API access",
        "Custom AI agent training",
      ],
      cta: "Choose Your Plan & Start Today",
      popular: true,
    },
    {
      name: "Whale",
      description: "For institutions and power users",
      monthlyPrice: 99,
      annualPrice: 149.25, // 25% off: 199 * 0.75 = 149.25
      isFree: false,
      features: [
        "Everything in Alpha plan",
        "Unlimited AI agent deployments",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "Exclusive research reports",
        "Early access to new features",
      ],
      cta: "Book a Demo",
      popular: false,
    },
  ];

  // Hardcoded FAQ data
  const faqItems = [
    {
      question: "How do I register for Coinlaa?",
      answer:
        "Registration is simple! Click on any 'Join Now' or 'Free Registration' button, fill out the short form, and you'll get immediate access to our free tier.",
    },
    {
      question: "Are the AI tools difficult to use?",
      answer:
        "Not at all! Our AI tools are designed with user-friendliness in mind. We provide comprehensive tutorials, documentation, and video guides to help you get started quickly.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. No long-term commitments or hidden fees. You'll continue to have access until the end of your billing period.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "We offer 24/7 customer support via email and live chat. Alpha and Whale plan members also get priority support with faster response times.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely! We use industry-standard encryption and security measures to protect your data. We're also compliant with GDPR and other data protection regulations.",
    },
    {
      question: "Can I integrate Coinlaa with other platforms?",
      answer:
        "Yes! We offer API access for Alpha and Whale plans, allowing you to integrate our tools and data with your existing workflows and platforms.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation Menu */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <a href="/">
              <img
                src="/logo.png"
                alt="Coinlaa"
                className="w-32 h-16 object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#why-coinlaa"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Why CoinLaa
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Sign Up
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="container px-4 py-4 space-y-3">
              <a
                href="#why-coinlaa"
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                Why CoinLaa
              </a>
              <a
                href="#pricing"
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                FAQ
              </a>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Crypto Price Ticker */}
      <header className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container overflow-hidden">
          <div className="flex items-center space-x-8 py-3 animate-scroll">
            {[...cryptoPrices, ...cryptoPrices].map((crypto, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 whitespace-nowrap"
              >
                <span className="text-sm font-medium">{crypto.symbol}</span>
                <span
                  className={`text-sm ${
                    crypto.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {crypto.change}
                </span>
                <span className="text-sm text-muted-foreground">
                  {crypto.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

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
                The Complete Crypto Social Network with 1000+ AI Tools & 200+ AI
                Agents
              </div>
            </div>

            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                AI-Powered Crypto Intelligence
              </span>
            </h1>

            {/* <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base px-6 py-3 h-auto rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25">
                Access AI Tools Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button variant="outline" className="border-purple-400/60 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 text-base px-6 py-3 h-auto rounded-full font-semibold transition-all duration-300 backdrop-blur-sm bg-purple-500/10">
                Deploy AI Agents
              </Button>
            </div> */}

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-green-100/90 to-green-200/90 backdrop-blur-sm border border-green-300/50 rounded-full px-4 py-2.5 shadow-lg shadow-green-500/20">
                <Bitcoin className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-800">
                  BTC AI tool
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-100/90 to-orange-200/90 backdrop-blur-sm border border-orange-300/50 rounded-full px-4 py-2.5 shadow-lg shadow-orange-500/20">
                <Bot className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-800">
                  1000+ AI Tools
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100/90 to-purple-200/90 backdrop-blur-sm border border-purple-300/50 rounded-full px-4 py-2.5 shadow-lg shadow-purple-500/20">
                <Zap className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-800">
                  200+ AI Agents
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100/90 to-blue-200/90 backdrop-blur-sm border border-blue-300/50 rounded-full px-4 py-2.5 shadow-lg shadow-blue-500/20">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">
                  100+ Courses
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Hero Carousel Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
              {carouselItems.map((item) => (
                <Card
                  key={item.id}
                  className="min-w-[300px] md:min-w-[350px] bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700 snap-center"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-500 p-2 rounded-full">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {item.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 mb-4">{item.description}</p>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      {item.cta}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why CoinLaa Section */}
      <div id="why-coinlaa" className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose CoinLaa?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most comprehensive crypto platform with AI-powered tools and
              insights
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
                  Access the largest collection of AI-powered tools for trading
                  analysis, portfolio management, and market research.
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
                  Deploy custom AI agents that automate tasks, provide insights,
                  and engage with your community 24/7.
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
                  Get instant notifications for market movements, price
                  breakouts, and important crypto events.
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
                  Learn from expert-led courses covering trading strategies,
                  blockchain technology, and crypto security.
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
                  Bank-grade security and 99.9% uptime ensure your data and
                  investments are always protected.
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
                  Join thousands of traders, investors, and innovators in the
                  world's first crypto social network.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">$2.5B+</div>
              <div className="text-sm text-muted-foreground">Trading Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">500K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the plan that fits your needs. Start free and scale as you
              grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span
                className={`text-sm ${
                  !isAnnual ? "font-medium" : "text-muted-foreground"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? "bg-orange-500" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm ${
                  isAnnual ? "font-medium" : "text-muted-foreground"
                }`}
              >
                Annual (Save 25%)
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular
                    ? "border-orange-500 shadow-lg shadow-orange-500/10"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      {plan.isFree ? (
                        <span className="text-4xl font-bold">Free</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold">
                            ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-muted-foreground ml-2">
                            /mo
                          </span>
                        </>
                      )}
                    </div>
                    {!plan.isFree && isAnnual && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <span className="line-through">
                          ${plan.monthlyPrice}/mo
                        </span>
                        <span className="text-green-600 ml-2">Save 25%</span>
                      </div>
                    )}
                    {isAnnual && !plan.isFree && (
                      <div className="text-sm text-green-600 mt-1">
                        Billed annually (${Math.round(plan.annualPrice * 12)}
                        /year)
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
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-orange-500 hover:bg-orange-600" : ""
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-20 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="cursor-pointer"
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        expandedFaq === index ? "rotate-90" : ""
                      }`}
                    />
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
            Start your journey with thousands of traders and investors building
            wealth together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Sign Up Now
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-4 px-4 bg-background border-t">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <a href="/">
                  <img
                    src="/logo.png"
                    alt="Coinlaa"
                    className="w-32 h-16 object-contain"
                  />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                The ultimate crypto social network with AI-powered tools for
                traders and investors.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://twitter.com/coinlaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/coinlaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/coinlaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p>&copy; 2024 Coinlaa. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a
                  href="/privacy"
                  className="hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="hover:text-orange-500 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
                  className="hover:text-orange-500 transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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
      `}</style>
    </div>
  );
}
