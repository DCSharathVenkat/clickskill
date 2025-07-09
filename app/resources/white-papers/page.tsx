import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, FileText, Calendar, Eye } from "lucide-react"
import Link from "next/link"

const whitePapers = [
  {
    title: "The Future of AI in Enterprise: A Strategic Guide for 2025",
    description:
      "Comprehensive analysis of AI trends, implementation strategies, and ROI considerations for enterprise leaders.",
    category: "AI & Machine Learning",
    publishDate: "December 2024",
    pages: 32,
    downloads: "2.1K",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Digital Transformation Roadmap: From Legacy to Cloud-Native",
    description: "Step-by-step guide for modernizing enterprise infrastructure and applications for the digital age.",
    category: "Digital Transformation",
    publishDate: "November 2024",
    pages: 28,
    downloads: "1.8K",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Cybersecurity in the Age of Remote Work: Best Practices and Frameworks",
    description:
      "Essential security strategies and compliance frameworks for distributed teams and hybrid work environments.",
    category: "Security & Compliance",
    publishDate: "October 2024",
    pages: 24,
    downloads: "1.5K",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Data Engineering at Scale: Building Modern Data Architectures",
    description: "Technical guide to designing and implementing scalable data pipelines and analytics infrastructure.",
    category: "Data Engineering",
    publishDate: "September 2024",
    pages: 36,
    downloads: "1.3K",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "MLOps Best Practices: From Model Development to Production",
    description:
      "Complete guide to implementing MLOps practices for reliable and scalable machine learning operations.",
    category: "MLOps & DevOps",
    publishDate: "August 2024",
    pages: 30,
    downloads: "1.7K",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The ROI of Product Engineering: Measuring Success in Digital Products",
    description: "Framework for measuring and optimizing return on investment in product engineering initiatives.",
    category: "Product Engineering",
    publishDate: "July 2024",
    pages: 26,
    downloads: "1.2K",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function WhitePapersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">White Papers</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              In-depth research and strategic insights on the latest technology trends, best practices, and industry
              analysis from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whitePapers.map((paper, index) => (
              <Card key={paper.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gray-100 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{paper.category}</span>
                    <div className="flex items-center space-x-4 text-neutral-500 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {paper.publishDate}
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        {paper.pages} pages
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate mb-3 line-clamp-2">{paper.title}</h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">{paper.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {paper.downloads} downloads
                    </div>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <Link href="/contact">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Stay Updated</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Subscribe to our newsletter to receive the latest white papers, research insights, and industry analysis
              directly in your inbox.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
