import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GraduationCap, Smartphone, Users, BarChart, Shield, Zap } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: GraduationCap,
    title: "Learning Management Systems",
    description: "Comprehensive LMS platforms with course management, assessments, and progress tracking.",
  },
  {
    icon: Smartphone,
    title: "Mobile Learning Apps",
    description: "Engaging mobile applications for on-the-go learning and skill development.",
  },
  {
    icon: Users,
    title: "Virtual Classrooms",
    description: "Interactive virtual learning environments with real-time collaboration tools.",
  },
  {
    icon: BarChart,
    title: "Assessment Tools",
    description: "Advanced assessment and analytics tools to measure learning outcomes.",
  },
  {
    icon: Shield,
    title: "Student Data Protection",
    description: "FERPA-compliant solutions ensuring student privacy and data security.",
  },
  {
    icon: Zap,
    title: "AI-Powered Personalization",
    description: "Adaptive learning experiences powered by AI and machine learning algorithms.",
  },
]

const relatedServices = [
  {
    title: "AI & ML Development",
    description: "Integrate AI for personalized learning experiences",
    href: "/services/ai-ml-development",
    color: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Product Engineering",
    description: "Build scalable educational technology platforms",
    href: "/services/product-engineering",
    color: "border-secondary/20 hover:border-secondary/40",
  },
  {
    title: "Data Engineering",
    description: "Analyze learning data for insights and improvements",
    href: "/services/data-engineering",
    color: "border-primary/20 hover:border-primary/40",
  },
]

export default function EdTechDevelopmentPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-700">EdTech Development</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Transform education with innovative technology solutions. We build comprehensive EdTech platforms that
              enhance learning experiences and improve educational outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-300 hover:bg-blue-400 text-white shadow-lg hover:shadow-xl" asChild>
                <Link href="/consultation">
                  Get EdTech Consultation
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our EdTech Development Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We create innovative educational technology solutions that make learning more accessible, engaging, and
              effective for students and educators.
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
              Enhance your EdTech solutions with our complementary technology services.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Education?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create innovative EdTech solutions that enhance learning experiences and drive educational success.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your EdTech Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
