import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CreditCard, Shield, TrendingUp, Smartphone, Users, BarChart } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: CreditCard,
    title: "Digital Banking",
    description: "Modern banking platforms with seamless user experiences and advanced features.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "PCI DSS, SOX, and regulatory compliance with advanced security measures.",
  },
  {
    icon: TrendingUp,
    title: "Trading Platforms",
    description: "High-performance trading systems with real-time data and analytics.",
  },
  {
    icon: Smartphone,
    title: "Mobile Payments",
    description: "Secure mobile payment solutions and digital wallet integrations.",
  },
  {
    icon: Users,
    title: "Customer Onboarding",
    description: "Streamlined KYC/AML processes with digital identity verification.",
  },
  {
    icon: BarChart,
    title: "Risk Analytics",
    description: "Advanced risk assessment and fraud detection using AI and ML.",
  },
]

const relatedIndustries = [
  {
    title: "Insurance",
    description: "InsurTech solutions and digital insurance platforms",
    href: "/industries/insurance",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Healthcare",
    description: "Healthcare payment systems and financial solutions",
    href: "/industries/healthcare",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "eCommerce",
    description: "Payment processing and financial services for retail",
    href: "/industries/ecommerce",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function FintechPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Fintech Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Transform financial services with innovative technology solutions that enhance customer experiences,
              improve operational efficiency, and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Get Fintech Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/*<Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/demo">View Fintech Solutions</Link>
              </Button>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our Fintech Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We deliver comprehensive fintech solutions that modernize financial services and create exceptional
              customer experiences.
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
              Explore how our fintech expertise applies to other industries.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate in Fintech?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create cutting-edge fintech solutions that transform how financial services are delivered and
              experienced.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your Fintech Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
