import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Cloud, BarChart, Users, Cog, Shield } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Zap,
    title: "Legacy System Modernization",
    description: "Transform outdated systems into modern, scalable digital platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud-First Architecture",
    description: "Design and implement cloud-native solutions for maximum scalability.",
  },
  {
    icon: BarChart,
    title: "Data-Driven Insights",
    description: "Advanced analytics and business intelligence for informed decision-making.",
  },
  {
    icon: Users,
    title: "Employee Experience",
    description: "Digital workplace solutions that enhance productivity and collaboration.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Intelligent automation of business processes and workflows.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Built-in security and compliance frameworks for enterprise-grade solutions.",
  },
]

const relatedSolutions = [
  {
    title: "AI Solutions",
    description: "Integrate AI capabilities into your transformation",
    href: "/solutions/ai-solutions",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Enterprise Mobility",
    description: "Mobile-first transformation strategies",
    href: "/solutions/enterprise-mobility",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "Digital Healthcare",
    description: "Transform healthcare delivery and operations",
    href: "/solutions/digital-healthcare",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function EnterpriseDigitalTransformationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Enterprise Digital Transformation</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Accelerate your enterprise transformation with comprehensive digital solutions that modernize operations,
              enhance customer experiences, and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Get Transformation Roadmap
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/demo">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our Transformation Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We deliver end-to-end digital transformation solutions that modernize your enterprise and position you for
              future success.
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

      {/* Related Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Related Solutions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Accelerate your transformation with our specialized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedSolutions.map((solution) => (
              <Card
                key={solution.title}
                className={`border-2 ${solution.color} transition-all duration-300 hover:shadow-lg`}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate mb-3">{solution.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{solution.description}</p>
                  <Link
                    href={solution.href}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create a comprehensive digital transformation strategy that positions your organization for the
              future.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Begin Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
