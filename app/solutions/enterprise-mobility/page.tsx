import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Smartphone, Shield, Cloud, Users, Zap, Settings } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Smartphone,
    title: "Cross-Platform Development",
    description: "Native and hybrid mobile applications for iOS, Android, and web platforms.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security features including MDM, MAM, and data encryption.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with enterprise cloud services and APIs.",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Comprehensive user authentication and role-based access control.",
  },
  {
    icon: Zap,
    title: "Offline Capabilities",
    description: "Robust offline functionality with automatic data synchronization.",
  },
  {
    icon: Settings,
    title: "Enterprise Integration",
    description: "Integration with existing enterprise systems and workflows.",
  },
]

const relatedSolutions = [
  {
    title: "AI Solutions",
    description: "Add intelligent features to your mobile apps",
    href: "/solutions/ai-solutions",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Digital Healthcare",
    description: "Mobile health solutions for healthcare providers",
    href: "/solutions/digital-healthcare",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "Enterprise Digital Transformation",
    description: "Transform your business with mobile-first strategies",
    href: "/solutions/enterprise-digital-transformation",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function EnterpriseMobilityPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Enterprise Mobility Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Empower your workforce with secure, scalable mobile solutions that enhance productivity and enable
              seamless collaboration across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Get Mobility Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/demo">View Mobile Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our Enterprise Mobility Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We deliver comprehensive mobile solutions that transform how your organization operates and engages with
              customers.
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
              Enhance your enterprise mobility with our complementary solutions.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Mobilize Your Enterprise?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create a comprehensive mobility strategy that empowers your workforce and drives business growth.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your Mobility Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
