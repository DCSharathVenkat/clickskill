import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Zap, Target, Shield, BarChart, Cog } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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
        url: "/images/bgmainhero.png",
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

// Structured Data
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
{/* Hero Section */}
<section className="relative pt-20 pb-32 overflow-hidden bg-white text-gray-900">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/bgmainhero.png"
      alt="Background"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">AI & ML Development</h1>
    <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl">
      Transform your business with custom AI and machine learning solutions that drive innovation, automate processes, and unlock new opportunities.
    </p>
    <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
      <Link href="/consultation">
        Get AI Strategy Consultation
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </Button>
  </div>

  {/* Wave Divider at Bottom */}
  <div className="absolute -bottom-px left-0 w-full z-0">
    <svg
      viewBox="0 0 1440 325"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-[60px] lg:h-[100px]"
    >
      <path
        d="M810.109 190.723V324.906H1439.97V141.635C1399.11 107.824 1358.5 72.4044 1316.96 48.4386C1146.99 -48.5261 971.704 0.680438 810.109 190.723Z"
        fill="#0A6373"
      />
      <path
        d="M654.316 239.05C706.182 255.407 756.402 284.718 808.124 302.496C881.8 327.838 958.526 329.369 1032.09 303.091C1103.57 277.612 1177.69 215.47 1248.33 183.899C1310.97 155.889 1379.36 144.355 1440 179.351V324.595H366.918V283.141C458.546 224.252 557.938 209.003 654.316 239.052V239.05Z"
        fill="#E66C6C"
      />
      <path
        d="M0 185.047L29.9989 177.248C59.9979 169.739 119.996 153.704 179.994 165.586C239.991 177.029 299.989 216.391 359.987 239.498C419.985 263.043 479.983 270.332 539.981 262.824C599.979 255.025 659.976 231.699 719.974 212.237C779.972 193.066 839.97 177.03 899.968 188.911C959.966 200.355 1019.96 239.717 1079.96 251.162C1139.96 263.043 1199.96 247.007 1259.95 251.162C1319.95 255.028 1379.95 278.35 1409.95 290.013L1439.97 301.858L1439.95 325H0V185.047Z"
        fill="#ffffff"
      />
    </svg>
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
              {capabilities.map((capability) => {
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
              {useCases.map((useCase) => (
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
