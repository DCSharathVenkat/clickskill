import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GitBranch, Server, Monitor, Shield, Zap, Settings } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automated deployment pipelines for ML models and applications with version control.",
  },
  {
    icon: Server,
    title: "Container Orchestration",
    description: "Docker and Kubernetes deployment for scalable and reliable ML operations.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Logging",
    description: "Real-time monitoring of model performance and system health with alerting.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Built-in security practices and compliance frameworks for enterprise deployments.",
  },
  {
    icon: Zap,
    title: "Auto-scaling",
    description: "Dynamic resource allocation based on demand and performance metrics.",
  },
  {
    icon: Settings,
    title: "Infrastructure as Code",
    description: "Automated infrastructure provisioning and management using IaC tools.",
  },
]

const relatedServices = [
  {
    title: "AI & ML Development",
    description: "Build ML models that integrate seamlessly with MLOps",
    href: "/services/ai-ml-development",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Data Engineering",
    description: "Create robust data pipelines for ML workflows",
    href: "/services/data-engineering",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "Product Engineering",
    description: "Integrate MLOps into your product development lifecycle",
    href: "/services/product-engineering",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function MLOpsDevOpsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-700">MLOps & DevOps</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Streamline your ML model deployment and operations with our comprehensive MLOps and DevOps solutions. From
              development to production, we ensure reliable, scalable, and efficient ML workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Get MLOps Consultation
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our MLOps & DevOps Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide end-to-end MLOps and DevOps solutions that accelerate your ML model deployment and ensure
              reliable operations at scale.
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
              Enhance your MLOps implementation with our complementary services.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your ML Operations?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's build a robust MLOps infrastructure that scales with your business and accelerates your AI
              initiatives.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your MLOps Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
