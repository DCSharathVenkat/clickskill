'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Eye, MessageSquare, BarChart, Cog, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const capabilities = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Custom ML models for prediction, classification, and recommendation systems.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced NLP for chatbots, sentiment analysis, and document processing.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition, object detection, and visual analytics solutions.",
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting for business intelligence.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Intelligent automation of business processes and workflows.",
  },
  {
    icon: Zap,
    title: "Real-time AI",
    description: "Real-time AI processing for immediate insights and responses.",
  },
]

const relatedSolutions = [
  {
    title: "Enterprise Mobility",
    description: "Add AI capabilities to your mobile applications",
    href: "/solutions/enterprise-mobility",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Digital Healthcare",
    description: "AI-powered healthcare solutions and diagnostics",
    href: "/solutions/digital-healthcare",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "Enterprise Digital Transformation",
    description: "Transform your business with AI-driven insights",
    href: "/solutions/enterprise-digital-transformation",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function AISolutionsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-32 overflow-hidden bg-white text-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bgmainhero.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">AI Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
            Harness the power of artificial intelligence to transform your business operations, enhance customer
            experiences, and drive innovation across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#0A6373] hover:bg-[#E66C6C]  text-white shadow-lg hover:shadow-xl" asChild>
              <Link href="/consultation">
                Get AI Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute -bottom-px left-0 w-full z-0">
<svg viewBox="0 0 1440 325" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[100px] lg:h-[100px]">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our AI Solution Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We deliver comprehensive AI solutions that solve real business problems and create measurable value for
              your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate mb-3">{title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Related Solutions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Integrate AI capabilities across your technology ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedSolutions.map(({ title, description, href, color }) => (
              <Card
                key={title}
                className={`border-2 ${color} transition-all duration-300 hover:shadow-lg`}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate mb-3">{title}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{description}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock AI's Potential?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's explore how AI can transform your business and create new opportunities for growth and innovation.
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
  )
}
