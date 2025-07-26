import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
             <section className="relative h-[520px] flex items-center justify-center">
  <Image
    src="/images/bgmainhero.png" // Replace with your case studies banner
    alt="Case Studies Hero Background"
    fill
    className="object-cover z-0"
    priority
  />
  <div className="relative z-10 text-center max-w-4xl px-6 text-white">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">Case Studies</h1>
    <p className="text-xl md:text-2xl mb-6 text-gray-800 leading-relaxed">
      Discover how we've helped Fortune 500 companies transform their businesses with innovative technology
      solutions and measurable results.
    </p>
  </div>
  <div className="absolute bottom-0 w-full">
    <svg viewBox="0 0 1440 325" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[100px] lg:h-[100px]">
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
