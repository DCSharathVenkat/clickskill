'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, FileCheck, AlertTriangle, Users, BarChart, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import path from "path"

const capabilities = [
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Comprehensive risk identification, analysis, and mitigation strategies.",
  },
  {
    icon: FileCheck,
    title: "Compliance Management",
    description: "Ensure adherence to regulatory requirements and industry standards.",
  },
  {
    icon: AlertTriangle,
    title: "Cybersecurity",
    description: "Advanced cybersecurity solutions to protect against evolving threats.",
  },
  {
    icon: Users,
    title: "Governance Framework",
    description: "Establish robust governance structures and decision-making processes.",
  },
  {
    icon: BarChart,
    title: "Risk Monitoring",
    description: "Continuous monitoring and reporting of risk metrics and KPIs.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "GDPR, CCPA, and other data privacy compliance solutions.",
  },
]

const relatedServices = [
  {
    title: "Digital Transformation",
    description: "Secure transformation with built-in compliance",
    href: "/services/digital-transformation",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Data Engineering",
    description: "Build compliant data infrastructure",
    href: "/services/data-engineering",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "AI & ML Development",
    description: "Implement ethical AI with governance frameworks",
    href: "/services/ai-ml-development",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function GRCPage() {
  return (
    <div className="pt-20">
      {/* Hero Section with Background */}
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Governance, Risk & Compliance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
            Protect your organization with comprehensive GRC services. We help you navigate complex regulatory
            landscapes, manage risks effectively, and maintain robust governance frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
              <Link href="/consultation">
                Get GRC Assessment
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

      {/* Capabilities Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our GRC Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide comprehensive governance, risk, and compliance services that protect your organization and
              ensure regulatory adherence.
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

      {/* Related Services */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Related Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Integrate GRC considerations into your technology initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map(({ title, description, href, color }) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Strengthen Your GRC Framework?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's build a comprehensive governance, risk, and compliance strategy that protects your organization and
              enables growth.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your GRC Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
