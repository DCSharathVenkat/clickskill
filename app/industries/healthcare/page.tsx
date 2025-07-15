import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Shield, Users, Monitor, Smartphone, Database } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Heart,
    title: "Patient Care Solutions",
    description: "Comprehensive patient management and care coordination platforms.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Fully compliant healthcare solutions with advanced data protection.",
  },
  {
    icon: Users,
    title: "Telemedicine",
    description: "Secure video consultations and remote patient monitoring.",
  },
  {
    icon: Monitor,
    title: "Clinical Decision Support",
    description: "AI-powered tools to assist healthcare professionals in decision-making.",
  },
  {
    icon: Smartphone,
    title: "Mobile Health Apps",
    description: "Patient engagement and health monitoring mobile applications.",
  },
  {
    icon: Database,
    title: "Health Data Analytics",
    description: "Advanced analytics for population health and clinical research.",
  },
]

const relatedIndustries = [
  {
    title: "Fintech",
    description: "Healthcare payment systems and financial solutions",
    href: "/industries/fintech",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Insurance",
    description: "Health insurance and claims processing solutions",
    href: "/industries/insurance",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "Manufacturing",
    description: "Medical device manufacturing and compliance",
    href: "/industries/manufacturing",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function HealthcarePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Healthcare Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Transform healthcare delivery with innovative technology solutions that improve patient outcomes, enhance
              clinical workflows, and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Get Healthcare Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/*<Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/demo">View Healthcare Solutions</Link>
              </Button>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our Healthcare Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We deliver comprehensive healthcare technology solutions that enhance patient care, improve operational
              efficiency, and ensure regulatory compliance.
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

      {/* Related Industries */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Related Industries</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore how our healthcare expertise applies to other industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedIndustries.map((industry) => (
              <Card
                key={industry.title}
                className={`border-2 ${industry.color} transition-all duration-300 hover:shadow-lg`}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate mb-3">{industry.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{industry.description}</p>
                  <Link
                    href={industry.href}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Healthcare?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create innovative healthcare solutions that improve patient outcomes and streamline care delivery.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your Healthcare Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
