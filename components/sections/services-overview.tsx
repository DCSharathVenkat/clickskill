"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Code, Cloud, Zap, Users, Rocket, GraduationCap, Shield, Database,} from "lucide-react"
import Link from "next/link"


const services = [
  {
    icon: Brain,
    title: "AI & ML Development",
    description:
      "Custom AI solutions, machine learning models, and intelligent automation to drive business innovation.",
    href: "/services/ai-ml-development",
    color: "text-primary",
  },
  {
    icon: Code,
    title: "Product Engineering",
    description: "End-to-end product development from concept to deployment with cutting-edge technologies.",
    href: "/services/product-engineering",
    color: "text-secondary",
  },
  {
    icon: Cloud,
    title: "MLOps & DevOps",
    description: "Streamlined deployment, monitoring, and operations for ML models and applications.",
    href: "/services/mlops-devops",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Comprehensive digital modernization strategies to accelerate your business growth.",
    href: "/services/digital-transformation",
    color: "text-secondary",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Scalable data pipelines and analytics infrastructure that transform raw data into insights.",
    href: "/services/data-engineering",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Expert talent and specialized teams to scale your projects and capabilities.",
    href: "/services/staff-augmentation",
    color: "text-secondary",
  },
  {
    icon: Rocket,
    title: "Corporate Venturing",
    description: "Innovation consulting and venture development to explore new business opportunities.",
    href: "/services/corporate-venturing",
    color: "text-primary",
  },
  {
    icon: GraduationCap,
    title: "EdTech Development",
    description: "Educational technology solutions that transform learning experiences and outcomes.",
    href: "/services/edtech-development",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Governance, Risk & Compliance",
    description: "Comprehensive GRC services including cybersecurity, data protection, and risk advisory.",
    href: "/services/grc",
    color: "text-primary",
  },
]

export function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate mb-6">
            Comprehensive Technology Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From AI innovation to digital transformation, we deliver end-to-end solutions that drive measurable business
            outcomes for global enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 text-black" />

                  </div>
<h3 className="text-lg font-semibold mb-3 text-black transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent group-hover:opacity-100">
  {service.title}
</h3>

                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-black hover:text-primary/80 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="bg-[#555879] text-white hover:bg-[#04a5ab]">
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
