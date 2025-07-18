import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Code, Cloud, Zap, Users, Rocket, GraduationCap, Shield, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
{/* Hero Section with Background */}
<section className="relative w-full pt-24 pb-32 overflow-hidden bg-white text-gray-900">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/bgmainhero.png"
      alt="Hero Background"
      fill
      className="object-cover"
      priority
    />
  </div>

  <div className="relative z-10 container mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
      Our Services
    </h1>
    <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
      Comprehensive technology services designed to accelerate your digital transformation and drive measurable
      business outcomes across every aspect of your organization.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        className="bg-[#0A6373] hover:bg-[#E66C6C]  text-white shadow-lg hover:shadow-xl"
        asChild
      >
        <Link href="/consultation">
          Get Free Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </div>

  {/* Wave Divider */}
  <div className="absolute -bottom-px left-0 w-full z-0">
    <svg
      viewBox="0 0 1440 325"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-[100px] lg:h-[100px]"
    >
      <path
        d="M810.109 190.723V324.906H1439.97V141.635C1399.11 107.824 1358.5 72.4044 1316.96 48.4386C1146.99 -48.5261 971.704 0.680438 810.109 190.723Z"
        fill="#0A6373"
      />
      <path
        d="M654.316 239.05C706.182 255.407 756.402 284.718 808.124 302.496C881.8 327.838 958.526 329.369 1032.09 303.091C1103.57 277.612 1177.69 215.47 1248.33 183.899C1310.97 155.889 1379.36 144.355 1440 179.351V324.595H366.918V283.141C458.546 224.252 557.938 209.003 654.316 239.052V239.05Z"
        fill="#E66C6C"
      />
      <path
        d="M0 185.047L29.9989 177.248C59.9979 169.739 119.996 153.704 179.994 165.586C239.991 177.029 299.989 216.391 359.987 239.498C419.985 263.043 479.983 270.332 539.981 262.824C599.979 255.025 659.976 231.699 719.974 212.237C779.972 193.066 839.97 177.03 899.968 188.911C959.966 200.355 1019.96 239.717 1079.96 251.162C1139.96 263.043 1199.96 247.007 1259.95 251.162C1319.95 255.028 1379.95 278.35 1409.95 290.013L1439.97 301.858L1439.95 325H0V185.047Z"
        fill="#ffffff"
      />
    </svg>
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
