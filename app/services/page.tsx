import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Code, Cloud, Zap, Users, Rocket, GraduationCap, Shield, Database } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "AI & ML Development",
    description:
      "Custom AI solutions, machine learning models, and intelligent automation to drive business innovation.",
    href: "/services/ai-ml-development",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    color: "from-primary to-primary/80",
  },
  {
    icon: Code,
    title: "Product Engineering",
    description: "End-to-end product development from concept to deployment with cutting-edge technologies.",
    href: "/services/product-engineering",
    features: ["Full-Stack Development", "Mobile Applications", "Cloud Architecture", "API Development"],
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Cloud,
    title: "MLOps & DevOps",
    description: "Streamlined deployment, monitoring, and operations for ML models and applications.",
    href: "/services/mlops-devops",
    features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging", "Infrastructure as Code"],
    color: "from-primary to-primary/80",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Comprehensive digital modernization strategies to accelerate your business growth.",
    href: "/services/digital-transformation",
    features: ["Legacy Modernization", "Process Automation", "Cloud Migration", "Change Management"],
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Scalable data pipelines and analytics infrastructure that transform raw data into insights.",
    href: "/services/data-engineering",
    features: ["Data Pipelines", "Data Warehousing", "Real-time Analytics", "Data Governance"],
    color: "from-primary to-primary/80",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Expert talent and specialized teams to scale your projects and capabilities.",
    href: "/services/staff-augmentation",
    features: ["Dedicated Teams", "Skill-based Hiring", "Flexible Scaling", "Quality Assurance"],
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Rocket,
    title: "Corporate Venturing",
    description: "Innovation consulting and venture development to explore new business opportunities.",
    href: "/services/corporate-venturing",
    features: ["Innovation Strategy", "Venture Development", "Market Research", "Partnership Development"],
    color: "from-primary to-primary/80",
  },
  {
    icon: GraduationCap,
    title: "EdTech Development",
    description: "Educational technology solutions that transform learning experiences and outcomes.",
    href: "/services/edtech-development",
    features: ["Learning Management Systems", "Mobile Learning Apps", "Assessment Tools", "Virtual Classrooms"],
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Shield,
    title: "Governance, Risk & Compliance",
    description: "Comprehensive GRC services including cybersecurity, data protection, and risk advisory.",
    href: "/services/grc",
    features: ["Risk Assessment", "Compliance Management", "Cybersecurity", "Data Protection"],
    color: "from-primary to-primary/80",
  },
]

const stats = [
  { number: "500+", label: "Projects Delivered", description: "Successfully completed across all service areas" },
  { number: "50+", label: "Global Clients", description: "Fortune 500 companies trust our expertise" },
  { number: "99%", label: "Client Satisfaction", description: "Consistently exceeding expectations" },
  { number: "24/7", label: "Global Support", description: "Round-the-clock service across time zones" },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate to-slate/90 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Comprehensive technology services designed to accelerate your digital transformation and drive measurable
              business outcomes across every aspect of your organization.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Trusted by Fortune 500 Companies Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-slate mb-2">{stat.label}</h3>
                <p className="text-neutral-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Complete Technology Solutions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From AI innovation to digital transformation, we deliver end-to-end solutions that drive measurable
              business outcomes for global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-2 transition-all duration-300"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our comprehensive technology services can accelerate your digital transformation and
              drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/consultation">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Our Experts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
