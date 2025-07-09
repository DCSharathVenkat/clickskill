import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Eye, MessageSquare, BarChart, Cog, Zap } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Custom ML models for prediction, classification, and recommendation systems.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced NLP for chatbots, sentiment analysis, and document processing.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition, object detection, and visual analytics solutions.",
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting for business intelligence.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Intelligent automation of business processes and workflows.",
  },
  {
    icon: Zap,
    title: "Real-time AI",
    description: "Real-time AI processing for immediate insights and responses.",
  },
]

const relatedSolutions = [
  {
    title: "Enterprise Mobility",
    description: "Add AI capabilities to your mobile applications",
    href: "/solutions/enterprise-mobility",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Digital Healthcare",
    description: "AI-powered healthcare solutions and diagnostics",
    href: "/solutions/digital-healthcare",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "Enterprise Digital Transformation",
    description: "Transform your business with AI-driven insights",
    href: "/solutions/enterprise-digital-transformation",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function AISolutionsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">AI Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations, enhance customer
              experiences, and drive innovation across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Get AI Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/demo">View AI Demos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our AI Solution Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We deliver comprehensive AI solutions that solve real business problems and create measurable value for
              your organization.
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
              Integrate AI capabilities across your technology ecosystem.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock AI's Potential?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's explore how AI can transform your business and create new opportunities for growth and innovation.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
