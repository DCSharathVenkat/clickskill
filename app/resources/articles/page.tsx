import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    image: "/images/aiarticle.jpg",
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
        <section className="relative h-[520px] flex items-center justify-center">
  <Image
    src="/images/bgmainhero.png " // Replace with your actual article hero image
    alt="Articles Hero Background"
    fill
    className="object-cover z-0"
    priority
  />
  <div className="relative z-10 text-center max-w-4xl px-6 text-white">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">Articles & Insights</h1>
    <p className="text-xl md:text-2xl mb-6 text-gray-800 leading-relaxed">
      Stay informed with the latest technology insights, industry trends, and expert analysis from our team of
      thought leaders and technical experts.
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
                    <Link href="/resources/articles/ai-implementation-mistakes">
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
