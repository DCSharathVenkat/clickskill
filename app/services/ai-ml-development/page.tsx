import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Zap, Target, Shield, BarChart, Cog } from "lucide-react"
import Link from "next/link"
import { StructuredData } from "@/components/seo/structured-data"
import { generateStructuredData } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI & ML Development Services - Custom AI Solutions | ClickSkill.io",
  description:
    "Transform your business with custom AI and machine learning solutions. Expert AI development services including NLP, computer vision, predictive analytics, and intelligent automation.",
  keywords:
    "AI development, machine learning services, custom AI solutions, NLP development, computer vision, predictive analytics, AI consulting, ML models, artificial intelligence",
  openGraph: {
    title: "AI & ML Development Services - Custom AI Solutions",
    description:
      "Expert AI and machine learning development services that drive innovation and automate processes for Fortune 500 companies.",
    type: "website",
    images: [
      {
        url: "/images/og-ai-ml.jpg",
        width: 1200,
        height: 630,
        alt: "AI & ML Development Services by ClickSkill.io",
      },
    ],
  },
  alternates: {
    canonical: "https://clickskill.io/services/ai-ml-development",
  },
}

const capabilities = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Custom ML models for prediction, classification, and recommendation systems.",
  },
  {
    icon: Zap,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for text analysis, chatbots, and language understanding.",
  },
  {
    icon: Target,
    title: "Computer Vision",
    description: "Image recognition, object detection, and visual analytics solutions.",
  },
  {
    icon: Shield,
    title: "AI Ethics & Governance",
    description: "Responsible AI implementation with bias detection and ethical guidelines.",
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting models for business intelligence.",
  },
  {
    icon: Cog,
    title: "AI Integration",
    description: "Seamless integration of AI capabilities into existing business processes.",
  },
]

const useCases = [
  {
    title: "Intelligent Document Processing",
    description: "Automate document extraction and processing with 99% accuracy",
    industry: "Finance, Legal, Healthcare",
  },
  {
    title: "Predictive Maintenance",
    description: "Reduce equipment downtime by up to 50% with AI-powered predictions",
    industry: "Manufacturing, Energy",
  },
  {
    title: "Customer Behavior Analytics",
    description: "Increase conversion rates by 35% with personalized recommendations",
    industry: "Retail, eCommerce",
  },
  {
    title: "Fraud Detection Systems",
    description: "Detect fraudulent activities in real-time with 99.9% accuracy",
    industry: "Banking, Insurance",
  },
]

// Structured data for AI & ML Development service
const serviceStructuredData = generateStructuredData("Service", {
  name: "AI & ML Development Services",
  description: "Custom AI and machine learning development services for enterprise clients",
  provider: {
    "@type": "Organization",
    name: "ClickSkill.io",
    url: "https://clickskill.io",
  },
  serviceType: "AI & ML Development",
  areaServed: ["US", "IN", "AU", "UK", "CA", "SG"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI & ML Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Machine Learning Models",
          description: "Custom ML models for prediction, classification, and recommendation systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Natural Language Processing",
          description: "Advanced NLP solutions for text analysis and language understanding",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Computer Vision",
          description: "Image recognition, object detection, and visual analytics solutions",
        },
      },
    ],
  },
  url: "https://clickskill.io/services/ai-ml-development",
})

const breadcrumbStructuredData = generateStructuredData("BreadcrumbList", {
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://clickskill.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://clickskill.io/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI & ML Development",
      item: "https://clickskill.io/services/ai-ml-development",
    },
  ],
})

export default function AIMLDevelopmentPage() {
  return (
    <>
      <StructuredData data={serviceStructuredData} />
      <StructuredData data={breadcrumbStructuredData} />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-700">AI & ML Development</h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Transform your business with custom AI and machine learning solutions that drive innovation, automate
                processes, and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                  <Link href="/consultation">
                    Get AI Strategy Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our AI & ML Capabilities</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                From concept to deployment, we deliver end-to-end AI solutions that integrate seamlessly with your
                existing infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon
                return (
                  <Card
                    key={capability.title}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate mb-3">{capability.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{capability.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Real-World AI Applications</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                See how our AI solutions are transforming businesses across industries with measurable results and ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={useCase.title} className="bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-slate mb-4">{useCase.title}</h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">{useCase.description}</p>
                    <div className="text-sm text-primary font-medium">Industries: {useCase.industry}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how AI and machine learning can transform your business processes and drive competitive
                advantage.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/consultation">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
