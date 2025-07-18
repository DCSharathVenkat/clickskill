"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Code,
  Cloud,
  Zap,
  Users,
  Rocket,
  GraduationCap,
  Shield,
  Database,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Brain,
    title: "AI & ML Development",
    description:
      "Custom AI solutions, machine learning models, and intelligent automation to drive business innovation.",
    href: "/services/ai-ml-development",
  },
  {
    icon: Code,
    title: "Product Engineering",
    description:
      "End-to-end product development from concept to deployment with cutting-edge technologies.",
    href: "/services/product-engineering",
  },
    {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Comprehensive digital modernization strategies to accelerate your business growth.",
    href: "/services/digital-transformation",
  },
  
  {
    icon: Shield,
    title: "Governance, Risk & Compliance",
    description:
      "Comprehensive GRC services including cybersecurity, data protection, and risk advisory.",
    href: "/services/grc",
  },
  {
    icon: Cloud,
    title: "MLOps & DevOps",
    description:
      "Streamlined deployment, monitoring, and operations for ML models and applications.",
    href: "/services/mlops-devops",
  },
    {
    icon: GraduationCap,
    title: "EdTech Development",
    description:
      "Educational technology solutions that transform learning experiences and outcomes.",
    href: "/services/edtech-development",
  },

  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Scalable data pipelines and analytics infrastructure that transform raw data into insights.",
    href: "/services/data-engineering",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description:
      "Expert talent and specialized teams to scale your projects and capabilities.",
    href: "/services/staff-augmentation",
  },
  {
    icon: Rocket,
    title: "Corporate Venturing",
    description:
      "Innovation consulting and venture development to explore new business opportunities.",
    href: "/services/corporate-venturing",
  },

]

export function ServicesOverview() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-white text-gray-900">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Left: Text and Cards */}
        <motion.div
          className="w-full lg:w-7/12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate mb-6">
            Comprehensive <br/>Technology Services
          </h2>
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl">
            From AI innovation to digital transformation, we deliver end-to-end solutions that drive measurable business outcomes for global enterprises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 bg-gray-100 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-black group-hover:text-primary">
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

          <div className="mt-10">
            <Button size="lg" asChild className="bg-[#0A6373] text-white hover:bg-[#04a5ab] transition-all duration-300 hover:scale-105">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right: Animated Image */}
        <motion.div
          className="w-full lg:w-5/12"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/solution.png"
              alt="Services Illustration"
              width={550}
              height={450}
              className="mx-auto drop-shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
