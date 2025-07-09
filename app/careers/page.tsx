import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Globe } from "lucide-react"
import Link from "next/link"

const openPositions = [
  {
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions for Fortune 500 clients.",
  },
  {
    title: "Product Manager - Digital Transformation",
    department: "Product",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive product strategy for our digital transformation consulting services.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Sydney, Australia",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain scalable infrastructure for global enterprise clients.",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Toronto, Canada / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create exceptional user experiences for enterprise software solutions.",
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "5+ years",
    description: "Expand our presence in the Middle East market and build strategic partnerships.",
  },
  {
    title: "Data Scientist",
    department: "Engineering",
    location: "Singapore / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop data-driven insights and predictive models for enterprise clients.",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs.",
  },
  {
    icon: Zap,
    title: "Professional Growth",
    description: "Learning budget, conference attendance, and career development programs.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work with international teams and opportunities for global assignments.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Inclusive environment with diverse teams and open communication.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and generous PTO.",
  },
  {
    icon: MapPin,
    title: "Global Offices",
    description: "Beautiful offices in 6 countries with modern amenities and facilities.",
  },
]

const values = [
  {
    title: "Innovation First",
    description: "We stay at the forefront of technology, constantly exploring new solutions.",
  },
  {
    title: "Client Success",
    description: "Our success is measured by our clients' success and long-term partnerships.",
  },
  {
    title: "Global Excellence",
    description: "We combine global expertise with local market knowledge.",
  },
  {
    title: "Continuous Learning",
    description: "We invest in our people's growth and encourage lifelong learning.",
  },
]

export default function CareersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate to-slate/90 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Global Team</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Build the future of technology with a team of passionate innovators. We're looking for talented
              individuals who want to make a meaningful impact on businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="#open-positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/contact">Contact HR Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Why Work at ClickSkill?</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're building a company where talented people can do their best work, grow their careers, and make a
              meaningful impact on the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate mb-3">{value.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-neutral-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-neutral-600">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-neutral-600">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8</div>
              <div className="text-neutral-600">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Benefits & Perks</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks to support your personal and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate mb-3">{benefit.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Open Positions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Join our team and help us build the future of technology. We're always looking for talented individuals
              who share our passion for innovation.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={position.title} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-slate">{position.title}</h3>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {position.department}
                        </span>
                      </div>
                      <p className="text-neutral-600 mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button className="bg-primary hover:bg-primary/90" asChild>
                        <Link href="/contact">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Don't see a position that fits? We're always looking for great talent.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link href="/contact">Send Us Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 text-white/90">
              Take the next step in your career and help us build innovative solutions that transform businesses
              worldwide.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
