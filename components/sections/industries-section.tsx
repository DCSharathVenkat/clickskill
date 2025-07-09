import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Banknote, Factory, Heart, ShoppingBag, Trophy } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    icon: Banknote,
    title: "Fintech",
    description: "Digital banking, payment solutions, and financial services innovation.",
    href: "/industries/fintech",
    stats: "50+ Projects",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industry 4.0, IoT integration, and smart manufacturing solutions.",
    href: "/industries/manufacturing",
    stats: "30+ Projects",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Digital health platforms, telemedicine, and medical device integration.",
    href: "/industries/healthcare",
    stats: "40+ Projects",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce",
    description: "Omnichannel retail, marketplace solutions, and customer experience.",
    href: "/industries/ecommerce",
    stats: "60+ Projects",
  },
  {
    icon: Trophy,
    title: "Sports Technology",
    description: "Fan engagement, performance analytics, and sports management platforms.",
    href: "/industries/sports",
    stats: "20+ Projects",
  },
]

export function IndustriesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate mb-6">Industries We Transform</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Deep industry expertise combined with cutting-edge technology to deliver solutions that address
            sector-specific challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <Card
                key={industry.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {industry.stats}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{industry.description}</p>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="bg-[#038f94] text-white hover:bg-[#04a5ab]">
            <Link href="/industries">
              Explore All Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
