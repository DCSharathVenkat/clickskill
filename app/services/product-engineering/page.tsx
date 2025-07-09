import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Smartphone, Cloud, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web and mobile application development with modern frameworks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable cloud-native solutions and microservices architecture.",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "RESTful and GraphQL APIs with comprehensive documentation.",
  },
  {
    icon: Shield,
    title: "Security Integration",
    description: "Built-in security best practices and compliance standards.",
  },
  {
    icon: Users,
    title: "User Experience Design",
    description: "Intuitive UI/UX design focused on user engagement and conversion.",
  },
]

const relatedServices = [
  {
    title: "AI & ML Development",
    description: "Integrate AI capabilities into your products",
    href: "/services/ai-ml-development",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Data Engineering",
    description: "Build robust data infrastructure for your applications",
    href: "/services/data-engineering",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "MLOps & DevOps",
    description: "Streamline deployment and operations",
    href: "/services/mlops-devops",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function ProductEngineeringPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-700">Product Engineering </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Transform your ideas into market-ready products with our comprehensive product engineering services. From
              concept to deployment, we build scalable, secure, and user-centric solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Get Product Strategy Consultation
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our Product Engineering Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We deliver end-to-end product development services that bring your vision to life with cutting-edge
              technology and best practices.
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
              Enhance your product with our complementary services for a complete solution.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Next Product?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your product vision and create a development strategy that delivers results.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your Product Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
