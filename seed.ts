import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@coinlaa.com' },
    update: {},
    create: {
      email: 'admin@coinlaa.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin'
    }
  })
  console.log('✅ Admin user created:', admin.email)

  // Create sliders
  const sliders = [
    {
      title: "An Entire Crypto Ecosystem",
      punchline: "One platform, unlimited potential. Everything you need is right here.",
      fomo: "Crypto's Only Social Space – Don't Miss Out on Exclusive Content",
      ctaText: "Become a Community Insider",
      ctaLink: "https://app.coinlaa.com",
      backgroundImage: "/api/placeholder/1920/1080",
      iconName: "Users",
      order: 0
    },
    {
      title: "The Largest AI Toolkit in Crypto",
      punchline: "Build, Audit, & Launch with confidence.",
      fomo: "57.1% of traders miss opportunities without proper tools",
      ctaText: "Explore AI Tools",
      ctaLink: "https://app.coinlaa.com",
      backgroundImage: "/api/placeholder/1920/1080",
      iconName: "CPU",
      order: 1
    },
    {
      title: "Give Your Community Superpowers",
      punchline: "Deploy an AI Agent for automated tasks.",
      fomo: "Early adopters get 3 months free premium features",
      ctaText: "Deploy Your AI Agent",
      ctaLink: "https://app.coinlaa.com",
      backgroundImage: "/api/placeholder/1920/1080",
      iconName: "Zap",
      order: 2
    },
    {
      title: "Get Alerted Instantly",
      punchline: "Never Miss a Profitable Opportunity!",
      fomo: "Join 10,000+ traders already using our alerts",
      ctaText: "Activate Event Alerts Now",
      ctaLink: "https://app.coinlaa.com",
      backgroundImage: "/api/placeholder/1920/1080",
      iconName: "Calendar",
      order: 3
    },
    {
      title: "100+ Courses Only for Crypto",
      punchline: "Accelerate Your Success, Today",
      fomo: "Limited time: Get your first lesson free",
      ctaText: "Start Your First Lesson Free",
      ctaLink: "https://app.coinlaa.com",
      backgroundImage: "/api/placeholder/1920/1080",
      iconName: "BookOpen",
      order: 4
    },
    {
      title: "Join the Crypto Revolution",
      punchline: "Connect, Learn, and Earn Together",
      fomo: "Top traders, creators, and innovators are already here",
      ctaText: "Join the Movement",
      ctaLink: "https://app.coinlaa.com",
      backgroundImage: "/api/placeholder/1920/1080",
      iconName: "TrendingUp",
      order: 5
    }
  ]

  for (const slider of sliders) {
    await prisma.slider.create({
      data: slider
    })
  }
  console.log('✅ 6 sliders created')

  // Create FAQs
  const faqs = [
    {
      question: "How do I register for Coinlaa?",
      answer: "Registration is simple! Visit https://app.coinlaa.com and click on any 'Join Now' or 'Free Registration' button, fill out the short form, and you'll get immediate access to our free tier.",
      order: 0
    },
    {
      question: "Are the AI tools difficult to use?",
      answer: "Not at all! Our AI tools are designed for both beginners and experts. With intuitive interfaces and comprehensive documentation, you'll be up and running in minutes. Join us at https://app.coinlaa.com to try them free.",
      order: 1
    },
    {
      question: "What makes Coinlaa different from other platforms?",
      answer: "Coinlaa is the only crypto platform that combines social networking, AI tools, real-time alerts, and comprehensive education in one ecosystem. Experience the difference at https://app.coinlaa.com.",
      order: 2
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, absolutely! We offer flexible subscription plans with no long-term commitments. You can upgrade, downgrade, or cancel your subscription at any time from your account dashboard at https://app.coinlaa.com.",
      order: 3
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a generous free tier that includes access to basic features, community content, and select AI tools. You can explore the platform without any commitment at https://app.coinlaa.com.",
      order: 4
    },
    {
      question: "How secure is my data on Coinlaa?",
      answer: "Security is our top priority. We use industry-standard encryption, two-factor authentication, and regular security audits to protect your data and assets. Your safety is guaranteed at https://app.coinlaa.com.",
      order: 5
    }
  ]

  for (const faq of faqs) {
    await prisma.fAQ.create({
      data: faq
    })
  }
  console.log('✅ 6 FAQs created')

  // Create Pricing Plans
  const plans = [
    {
      name: "Explorer",
      description: "Perfect for getting started with crypto",
      badge: null,
      isHighlighted: false,
      order: 0
    },
    {
      name: "Alpha",
      description: "Most popular choice for serious traders",
      badge: "Most Popular",
      isHighlighted: true,
      order: 1
    },
    {
      name: "Whale",
      description: "Enterprise-grade features for teams",
      badge: null,
      isHighlighted: false,
      order: 2
    }
  ]

  const createdPlans: any[] = []
  for (const plan of plans) {
    const createdPlan = await prisma.pricingPlan.create({
      data: plan
    })
    createdPlans.push(createdPlan)
  }
  console.log('✅ 3 pricing plans created')

  // Create Pricing Tiers
  const tiers = [
    // Explorer Plan Tiers
    {
      planId: createdPlans[0].id,
      period: "monthly",
      price: "Free",
      originalPrice: null,
      features: JSON.stringify([
        "Basic community access",
        "3 AI tools per month",
        "Standard alerts",
        "Email support"
      ]),
      ctaText: "Start for Free"
    },
    {
      planId: createdPlans[0].id,
      period: "quarterly",
      price: "Free",
      originalPrice: null,
      features: JSON.stringify([
        "Basic community access",
        "3 AI tools per month",
        "Standard alerts",
        "Email support"
      ]),
      ctaText: "Start for Free"
    },
    {
      planId: createdPlans[0].id,
      period: "yearly",
      price: "Free",
      originalPrice: null,
      features: JSON.stringify([
        "Basic community access",
        "3 AI tools per month",
        "Standard alerts",
        "Email support"
      ]),
      ctaText: "Start for Free"
    },
    // Alpha Plan Tiers
    {
      planId: createdPlans[1].id,
      period: "monthly",
      price: "$49",
      originalPrice: null,
      features: JSON.stringify([
        "Full community access",
        "Unlimited AI tools",
        "Real-time alerts",
        "Priority support",
        "Advanced analytics",
        "Exclusive content"
      ]),
      ctaText: "Choose Your Plan & Start Today"
    },
    {
      planId: createdPlans[1].id,
      period: "quarterly",
      price: "$137",
      originalPrice: "$147",
      features: JSON.stringify([
        "Full community access",
        "Unlimited AI tools",
        "Real-time alerts",
        "Priority support",
        "Advanced analytics",
        "Exclusive content",
        "7% discount"
      ]),
      ctaText: "Choose Your Plan & Start Today"
    },
    {
      planId: createdPlans[1].id,
      period: "yearly",
      price: "$487",
      originalPrice: "$588",
      features: JSON.stringify([
        "Full community access",
        "Unlimited AI tools",
        "Real-time alerts",
        "Priority support",
        "Advanced analytics",
        "Exclusive content",
        "17% discount"
      ]),
      ctaText: "Choose Your Plan & Start Today"
    },
    // Whale Plan Tiers
    {
      planId: createdPlans[2].id,
      period: "monthly",
      price: "Custom",
      originalPrice: null,
      features: JSON.stringify([
        "Everything in Alpha",
        "Custom AI solutions",
        "Dedicated account manager",
        "API access",
        "White-label options",
        "Custom integrations"
      ]),
      ctaText: "Book a Demo"
    },
    {
      planId: createdPlans[2].id,
      period: "quarterly",
      price: "Custom",
      originalPrice: null,
      features: JSON.stringify([
        "Everything in Alpha",
        "Custom AI solutions",
        "Dedicated account manager",
        "API access",
        "White-label options",
        "Custom integrations"
      ]),
      ctaText: "Book a Demo"
    },
    {
      planId: createdPlans[2].id,
      period: "yearly",
      price: "Custom",
      originalPrice: null,
      features: JSON.stringify([
        "Everything in Alpha",
        "Custom AI solutions",
        "Dedicated account manager",
        "API access",
        "White-label options",
        "Custom integrations"
      ]),
      ctaText: "Book a Demo"
    }
  ]

  for (const tier of tiers) {
    await prisma.pricingTier.create({
      data: tier
    })
  }
  console.log('✅ 9 pricing tiers created')

  console.log('🎉 Database seeding completed successfully!')
  console.log('')
  console.log('📊 Admin Login:')
  console.log('   Email: admin@coinlaa.com')
  console.log('   Password: admin123')
  console.log('')
  console.log('🚀 Your app is now ready to use!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })