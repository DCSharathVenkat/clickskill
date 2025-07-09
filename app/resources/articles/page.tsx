import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "10 AI Implementation Mistakes Every Enterprise Should Avoid",
    excerpt:
      "Learn from common pitfalls and discover best practices for successful AI adoption in large organizations.",
    author: "Dr. Sarah Johnson",
    publishDate: "December 15, 2024",
    readTime: "6 min read",
    category: "AI & Machine Learning",
    tags: ["AI Strategy", "Enterprise", "Best Practices"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The Rise of Edge Computing: Transforming Data Processing",
    excerpt:
      "Explore how edge computing is revolutionizing real-time data processing and reducing latency for critical applications.",
    author: "Michael Chen",
    publishDate: "December 12, 2024",
    readTime: "8 min read",
    category: "Technology Trends",
    tags: ["Edge Computing", "Data Processing", "IoT"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Building Resilient Cloud Architectures: Lessons from 2024",
    excerpt:
      "Key insights and architectural patterns for creating robust, scalable cloud infrastructure that can withstand disruptions.",
    author: "Emily Rodriguez",
    publishDate: "December 10, 2024",
    readTime: "10 min read",
    category: "Cloud Architecture",
    tags: ["Cloud", "Architecture", "Resilience"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The Future of Work: How AI is Reshaping Job Roles",
    excerpt:
      "An analysis of how artificial intelligence is transforming traditional job functions and creating new opportunities.",
    author: "David Thompson",
    publishDate: "December 8, 2024",
    readTime: "7 min read",
    category: "Future of Work",
    tags: ["AI Impact", "Workforce", "Digital Transformation"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Sustainable Technology: Green Computing in Enterprise",
    excerpt:
      "How organizations are adopting sustainable technology practices to reduce environmental impact while maintaining performance.",
    author: "Lisa Wang",
    publishDate: "December 5, 2024",
    readTime: "9 min read",
    category: "Sustainability",
    tags: ["Green Tech", "Sustainability", "Enterprise"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Cybersecurity Trends to Watch in 2025",
    excerpt:
      "Emerging cybersecurity threats and defense strategies that will shape the security landscape in the coming year.",
    author: "James Miller",
    publishDate: "December 3, 2024",
    readTime: "11 min read",
    category: "Cybersecurity",
    tags: ["Security", "Trends", "Risk Management"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categories = [
  "All Articles",
  "AI & Machine Learning",
  "Technology Trends",
  "Cloud Architecture",
  "Future of Work",
  "Sustainability",
  "Cybersecurity",
]

export default function ArticlesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Articles & Insights</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Stay informed with the latest technology insights, industry trends, and expert analysis from our team of
              thought leaders and technical experts.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section-padding bg-white">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Articles" ? "default" : "outline"}
                className={
                  category === "All Articles"
                    ? "bg-primary hover:bg-primary/90"
                    : "border-gray-300 hover:border-primary hover:text-primary"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={article.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gray-100 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">{article.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-neutral-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.publishDate}
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss an Update</h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter and get the latest articles, insights, and technology trends delivered to your
              inbox weekly.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">
                Subscribe Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
