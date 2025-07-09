"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowLeft, ArrowRight, Play } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechCorp Industries",
    content:
      "ClickSkill transformed our legacy systems with their AI-powered solutions. The ROI was evident within the first quarter, and their team's expertise in digital transformation is unmatched.",
    rating: 5,
    industry: "Manufacturing",
    projectType: "AI & Digital Transformation",
    results: "300% efficiency increase",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    title: "VP of Digital Innovation",
    company: "Global Finance Solutions",
    content:
      "Their fintech expertise helped us launch our digital banking platform ahead of schedule. The security and compliance standards they maintained were exceptional.",
    rating: 5,
    industry: "Fintech",
    projectType: "Digital Banking Platform",
    results: "Launched 2 months early",
    avatar: "MC",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Chief Medical Officer",
    company: "HealthTech Innovations",
    content:
      "The telemedicine platform ClickSkill developed has revolutionized how we deliver patient care. Their understanding of healthcare compliance and user experience is remarkable.",
    rating: 5,
    industry: "Healthcare",
    projectType: "Telemedicine Platform",
    results: "50% more patient reach",
    avatar: "ER",
  },
  {
    name: "David Thompson",
    title: "Head of Technology",
    company: "RetailMax Group",
    content:
      "Our ecommerce platform built by ClickSkill has increased our operational efficiency by 300%. Their agile approach and technical excellence exceeded our expectations.",
    rating: 5,
    industry: "eCommerce",
    projectType: "Enterprise eCommerce",
    results: "300% efficiency boost",
    avatar: "DT",
  },
  {
    name: "Lisa Wang",
    title: "Director of Operations",
    company: "LogiFlow International",
    content:
      "The supply chain optimization solution has given us real-time visibility across our global operations. ClickSkill's team understood our complex requirements perfectly.",
    rating: 5,
    industry: "Logistics",
    projectType: "Supply Chain Optimization",
    results: "Real-time global visibility",
    avatar: "LW",
  },
  {
    name: "Robert Martinez",
    title: "Chief Innovation Officer",
    company: "InsureTech Solutions",
    content:
      "Their AI-powered risk assessment platform has transformed our underwriting process. The machine learning models they developed are incredibly accurate and efficient.",
    rating: 5,
    industry: "Insurance",
    projectType: "AI Risk Assessment",
    results: "99.2% accuracy rate",
    avatar: "RM",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate mb-6">What Our Clients Say</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about their transformative experience
            working with ClickSkill.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-slate to-slate/95 text-white shadow-2xl border-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />

              <CardContent className="p-8 md:p-12 relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <Quote className="h-12 w-12 text-primary mb-6" />

                    <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-white/95">
                      "{currentTestimonial.content}"
                    </blockquote>

                    <div className="flex items-center mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {currentTestimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-white">{currentTestimonial.name}</div>
                        <div className="text-primary font-medium">{currentTestimonial.title}</div>
                        <div className="text-white/80">{currentTestimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h4 className="font-semibold text-white mb-4">Project Highlights</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="text-white/70 text-sm">Industry</div>
                          <div className="text-white font-medium">{currentTestimonial.industry}</div>
                        </div>
                        <div>
                          <div className="text-white/70 text-sm">Solution</div>
                          <div className="text-white font-medium">{currentTestimonial.projectType}</div>
                        </div>
                        <div>
                          <div className="text-white/70 text-sm">Key Result</div>
                          <div className="text-primary font-semibold">{currentTestimonial.results}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="bg-white border-gray-200 hover:bg-gray-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="bg-white border-gray-200 hover:bg-gray-50"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="bg-white border-gray-200 hover:bg-gray-50"
                >
                  <Play className={`h-4 w-4 ${isAutoPlaying ? "opacity-50" : ""}`} />
                  {isAutoPlaying ? "Pause" : "Play"}
                </Button>
              </div>

              <div className="text-sm text-neutral-500">
                {currentIndex + 1} of {testimonials.length}
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Client Grid Preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                  index === currentIndex
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xs mb-2">
                  {testimonial.avatar}
                </div>
                <div className="text-sm font-medium text-slate truncate">{testimonial.name}</div>
                <div className="text-xs text-neutral-500 truncate">{testimonial.company}</div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-6">Ready to join our success stories?</p>
            <Button size="lg" asChild className="bg-[#038f94] text-white hover:bg-[#04a5ab]">
              <Link href="/consultation">Start Your Success Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
