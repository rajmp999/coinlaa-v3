'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, ArrowRight, Zap } from 'lucide-react'

interface PricingPlan {
  name: string
  monthlyPrice: string
  yearlyPrice: string
  lifetimePrice?: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
  badge?: string
}

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Explorer",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    description: "Perfect for getting started with crypto social networking",
    features: [
      "Basic community access",
      "Track 10 cryptocurrencies",
      "Join public discussions",
      "Basic news feed",
      "Community support"
    ],
    cta: "Start for Free"
  },
  {
    name: "Alpha",
    monthlyPrice: "$20",
    yearlyPrice: "$200",
    description: "Most popular choice for serious crypto enthusiasts",
    features: [
      "Everything in Explorer, plus:",
      "Full community access",
      "Track unlimited cryptocurrencies",
      "Advanced AI agents (50/month)",
      "Real-time event alerts",
      "Crypto Academy courses",
      "Priority support",
      "Custom AI agent deployment"
    ],
    highlighted: true,
    cta: "Choose Your Plan & Start Today",
    badge: "Most Popular"
  },
  {
    name: "Whale",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    lifetimePrice: "$1000",
    description: "Enterprise solution for teams and power users",
    features: [
      "Everything in Alpha, plus:",
      "Unlimited AI agents",
      "White-label solutions",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced analytics",
      "Priority feature requests"
    ],
    cta: "Book a Demo"
  }
]

export function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly' | 'lifetime'>('monthly')

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-slate-50 dark:to-slate-900">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500 text-white border-0">
            Simple, Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, no surprises. Just powerful crypto tools at fair prices.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center rounded-lg bg-muted p-1 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5">
                25% OFF
              </Badge>
            </button>
            <button
              onClick={() => setBillingCycle('lifetime')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'lifetime'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Lifetime
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'border-orange-500 shadow-xl ring-2 ring-orange-500/20' 
                  : 'border-border hover:border-orange-300'
              }`}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white px-4 py-1 text-sm font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  {billingCycle === 'monthly' && (
                    <>
                      <span className="text-4xl font-bold">{plan.monthlyPrice}</span>
                      {plan.monthlyPrice !== "Free" && plan.monthlyPrice !== "Custom" && (
                        <span className="text-muted-foreground">/month</span>
                      )}
                    </>
                  )}
                  {billingCycle === 'yearly' && (
                    <>
                      <span className="text-4xl font-bold">{plan.yearlyPrice}</span>
                      {plan.yearlyPrice !== "Free" && plan.yearlyPrice !== "Custom" && (
                        <span className="text-muted-foreground">/year</span>
                      )}
                      {plan.monthlyPrice !== "Free" && plan.monthlyPrice !== "Custom" && (
                        <div className="text-sm text-green-600 font-medium mt-1">
                          Save 25% vs monthly
                        </div>
                      )}
                    </>
                  )}
                  {billingCycle === 'lifetime' && plan.lifetimePrice && (
                    <>
                      <span className="text-4xl font-bold">{plan.lifetimePrice}</span>
                      <span className="text-muted-foreground">/lifetime</span>
                      <div className="text-sm text-orange-600 font-medium mt-1 flex items-center justify-center">
                        <Zap className="w-3 h-3 mr-1" />
                        Best Value
                      </div>
                    </>
                  )}
                  {billingCycle === 'lifetime' && !plan.lifetimePrice && (
                    <div className="text-2xl font-bold text-muted-foreground">
                      Contact Sales
                    </div>
                  )}
                </div>
                <CardDescription className="mt-2 text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-background hover:bg-orange-50 border-2 border-orange-200 text-orange-600 hover:border-orange-500'
                  }`}
                  onClick={() => setHoveredPlan(null)}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Yearly Savings Highlight */}
        {billingCycle === 'yearly' && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-2">
              <Zap className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Yearly billing saves you 25% compared to monthly plans
              </span>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>14-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}