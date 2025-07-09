import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    title: "Fortune 500 Bank Transforms Customer Experience with AI",
    industry: "Fintech",
    challenge: "Legacy systems limiting customer engagement",
    solution: "AI-powered customer service and personalized banking",
    results: ["40% increase in customer satisfaction", "60% reduction in response time", "$2M annual savings"],
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Global Manufacturer Achieves Industry 4.0 Transformation",
    industry: "Manufacturing",
    challenge: "Inefficient production processes and quality control",
    solution: "IoT sensors, predictive analytics, and automated quality control",
    results: ["25% increase in production efficiency", "50% reduction in defects", "30% cost savings"],
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Healthcare Provider Revolutionizes Patient Care with Digital Solutions",
    industry: "Healthcare",
    challenge: "Fragmented patient data and inefficient workflows",
    solution: "Integrated EHR system with AI-powered diagnostics",
    results: ["35% improvement in patient outcomes", "45% reduction in administrative time", "99.9% uptime"],
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Discover how we've helped Fortune 500 companies transform their businesses with innovative technology
              solutions and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gray-100 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{study.industry}</span>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {study.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate mb-3 line-clamp-2">{study.title}</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-semibold text-slate text-sm mb-1">Challenge:</h4>
                      <p className="text-neutral-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate text-sm mb-1">Solution:</h4>
                      <p className="text-neutral-600 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate text-sm mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-neutral-600 text-sm flex items-center">
                          <TrendingUp className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let's discuss how we can help you achieve similar results and transform your business with innovative
              technology solutions.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/consultation">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
