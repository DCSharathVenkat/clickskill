import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Brain, Heart, Building } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Smartphone,
    title: "Enterprise Mobility",
    description:
      "Comprehensive mobile solutions that enable workforce productivity and customer engagement across all devices.",
    features: ["Cross-platform development", "Enterprise security", "Offline capabilities", "Real-time sync"],
    href: "/solutions/enterprise-mobility",
    color: "from-primary to-primary/80",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Intelligent automation and AI-powered insights that transform business processes and decision-making.",
    features: ["Machine learning models", "Natural language processing", "Computer vision", "Predictive analytics"],
    href: "/solutions/ai-solutions",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Heart,
    title: "Digital Healthcare",
    description: "HIPAA-compliant healthcare solutions that improve patient outcomes and streamline medical workflows.",
    features: ["Telemedicine platforms", "EHR integration", "Patient portals", "Medical IoT"],
    href: "/solutions/digital-healthcare",
    color: "from-primary to-primary/80",
  },
  {
    icon: Building,
    title: "Enterprise Digital Transformation",
    description: "End-to-end digital transformation strategies that modernize legacy systems and processes.",
    features: ["Legacy modernization", "Cloud migration", "Process automation", "Change management"],
    href: "/solutions/enterprise-digital-transformation",
    color: "from-secondary to-secondary/80",
  },
]

export function SolutionsShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate mb-6">Industry-Leading Solutions</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Tailored solutions that address specific industry challenges and drive measurable business outcomes across
            diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={solution.title}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${solution.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate mb-3 group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={solution.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-2 transition-all duration-300"
                  >
                    Explore Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="bg-[#038f94] text-white hover:bg-[#04a5ab]">
            <Link href="/solutions">
              View All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
