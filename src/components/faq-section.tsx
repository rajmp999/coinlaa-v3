'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

const FAQS: FAQ[] = [
  {
    question: "How do I register for Coinlaa?",
    answer: "Registration is simple! Click on any 'Join Now' or 'Free Registration' button, fill out the short form, and you'll get immediate access to our free tier.",
  },
  {
    question: "Are the AI agents difficult to use?",
    answer: "Not at all. Our AI agents are designed with a user-friendly interface. Plus, we provide step-by-step guides and case studies in our Crypto Academy to help you maximize their potential.",
  },
  {
    question: "Can I deploy an AI agent in my existing community (e.g., Discord, Telegram)?",
    answer: "Yes! Our AI agents are designed for easy integration with popular community platforms. The setup process is straightforward, and our support team is here to help if you have a custom plan.",
  },
  {
    question: "What kind of courses are in the Crypto Academy?",
    answer: "Our academy covers a wide range of topics, from beginner guides on blockchain technology to advanced trading strategies, smart contract security, DeFi deep dives, and NFT market analysis.",
  },
  {
    question: "How reliable are the event alerts and news signals?",
    answer: "We aggregate data from multiple trusted sources in real-time. Our system is built for speed and accuracy, ensuring you get critical information like breaking news, scam warnings, and major market signals as they happen.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day money-back guarantee on our paid plans. If you're not satisfied for any reason, just contact support within the first two weeks for a full refund."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const toggleAll = () => {
    if (openItems.length === FAQS.length) {
      setOpenItems([])
    } else {
      setOpenItems(FAQS.map((_, index) => index))
    }
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500 text-white border-0">
            <HelpCircle className="w-3 h-3 mr-1" />
            Support
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We've got answers. Find everything you need to know about Coinlaa.
          </p>
        </div>

        {/* Toggle All Button */}
        <div className="flex justify-end mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={toggleAll}
            className="text-sm"
          >
            {openItems.length === FAQS.length ? 'Collapse All' : 'Expand All'}
            {openItems.length === FAQS.length ? (
              <ChevronUp className="w-4 h-4 ml-2" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-2" />
            )}
          </Button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openItems.includes(index)
            
            return (
              <Card 
                key={index}
                className={`transition-all duration-300 hover:shadow-md ${
                  isOpen ? 'ring-2 ring-orange-500/20 shadow-lg' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-0 h-auto text-left"
                    onClick={() => toggleItem(index)}
                  >
                    <CardTitle className="text-lg font-semibold text-left pr-4">
                      {faq.question}
                    </CardTitle>
                    <div className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    </div>
                  </Button>
                </CardHeader>
                
                {isOpen && (
                  <CardContent className="pt-0">
                    <div className="text-muted-foreground leading-relaxed animate-in slide-in-from-top-2 fade-in-0 duration-300">
                      {faq.answer}
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-950/20 dark:to-blue-950/20 border-orange-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Contact Support
                </Button>
                <Button variant="outline">
                  Visit Help Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}