import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Clock, Shield, Award, Zap } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Full-time dedicated teams that integrate seamlessly with your existing workforce.",
  },
  {
    icon: Target,
    title: "Skill-based Hiring",
    description: "Access specialized talent with specific skills tailored to your project requirements.",
  },
  {
    icon: Clock,
    title: "Flexible Scaling",
    description: "Scale your team up or down based on project demands and business cycles.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous vetting process ensures only top-tier professionals join your team.",
  },
  {
    icon: Award,
    title: "Domain Expertise",
    description: "Industry-specific knowledge and experience across various technology domains.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick onboarding process to get your augmented team productive within days.",
  },
]

const relatedServices = [
  {
    title: "Product Engineering",
    description: "Augment your product development teams",
    href: "/services/product-engineering",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "AI & ML Development",
    description: "Add AI/ML specialists to your team",
    href: "/services/ai-ml-development",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "Data Engineering",
    description: "Scale your data engineering capabilities",
    href: "/services/data-engineering",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function StaffAugmentationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-700">Staff Augmentation</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Scale your team with top-tier technology professionals. Our staff augmentation services provide you with
              the right talent, at the right time, for the right project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Find Your Team
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our Staff Augmentation Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide flexible staffing solutions that help you build high-performing teams with the exact skills you
              need.
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
              Combine staff augmentation with our other services for maximum impact.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Team?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your staffing needs and find the perfect talent to accelerate your projects.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Get Staffing Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
