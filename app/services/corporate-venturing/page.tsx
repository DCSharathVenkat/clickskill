import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Target, TrendingUp, Users, Rocket, BarChart } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Lightbulb,
    title: "Innovation Strategy",
    description: "Develop comprehensive innovation strategies aligned with your business objectives.",
  },
  {
    icon: Target,
    title: "Market Research",
    description: "In-depth market analysis to identify opportunities and validate business concepts.",
  },
  {
    icon: TrendingUp,
    title: "Venture Development",
    description: "End-to-end support for developing and launching new business ventures.",
  },
  {
    icon: Users,
    title: "Partnership Development",
    description: "Strategic partnerships and alliances to accelerate venture growth.",
  },
  {
    icon: Rocket,
    title: "Startup Incubation",
    description: "Comprehensive incubation programs for internal and external startups.",
  },
  {
    icon: BarChart,
    title: "Investment Advisory",
    description: "Strategic investment advice and portfolio management for corporate ventures.",
  },
]

const relatedServices = [
  {
    title: "AI & ML Development",
    description: "Integrate cutting-edge AI into your ventures",
    href: "/services/ai-ml-development",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Product Engineering",
    description: "Build innovative products for your ventures",
    href: "/services/product-engineering",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "Digital Transformation",
    description: "Transform traditional business models",
    href: "/services/digital-transformation",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function CorporateVenturingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-700">Corporate Venturing </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Drive innovation and explore new business opportunities with our comprehensive corporate venturing
              services. From ideation to market launch, we help you build the future of your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Explore Innovation Opportunities
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our Corporate Venturing Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide end-to-end corporate venturing services that help you identify, develop, and scale new business
              opportunities.
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

      {/* Related Services */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Related Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Enhance your corporate ventures with our complementary technology services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Card
                key={service.title}
                className={`border-2 ${service.color} transition-all duration-300 hover:shadow-lg`}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate mb-3">{service.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
                  <Link
                    href={service.href}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate and Venture?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's explore new business opportunities and build the next generation of innovative solutions together.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your Venture Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
