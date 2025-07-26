import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AiImplementationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center justify-center bg-gray-100">
        <Image
          src="/images/bgmainhero.png"
          alt="AI Implementation Hero"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-10 text-center max-w-4xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 drop-shadow-md">
            10 AI Implementation Mistakes Every Enterprise Should Avoid
          </h1>
          <p className="text-lg text-gray-800 font-medium">
            by Dr. Sarah Johnson · December 15, 2024 · 6 min read
          </p>
        </div>
        <div className="absolute bottom-0 w-full">
          {/* Decorative SVG waves */}
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

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Summary</h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Learn from common pitfalls and discover best practices for successful AI adoption in large organizations.
            </p>
          </div>

          {/* Tags and Metadata */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["AI Strategy", "Enterprise", "Best Practices"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm text-neutral-500 mb-12 gap-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Dr. Sarah Johnson
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              December 15, 2024
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              6 min read
            </div>
          </div>

          {/* Article Body */}
          <article className="space-y-10 text-neutral-800 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Introduction</h2>
              <p>
                As AI technologies mature, enterprises are rapidly adopting them to drive growth, efficiency, and innovation. 
                However, without a thoughtful approach, AI projects can fail—costing time, money, and strategic momentum. 
                Here are 10 common mistakes to avoid.
              </p>
            </section>

            {[
              {
                title: "1. Lack of Clear Business Objectives",
                text: "AI without purpose is a recipe for waste. Ensure every AI initiative aligns with business goals and delivers measurable outcomes."
              },
              {
                title: "2. Poor Data Quality",
                text: "AI is only as good as the data it’s fed. Inconsistent, incomplete, or siloed data can render even the best models ineffective."
              },
              {
                title: "3. Skipping Change Management",
                text: "Teams need time to adapt to AI-driven processes. Invest in communication, training, and stakeholder buy-in to increase adoption."
              },
              {
                title: "4. Choosing Tech Before Strategy",
                text: "Don’t let flashy tools distract from your core needs. Define your AI goals first, then choose the right tools—not the other way around."
              },
              {
                title: "5. Underestimating the Talent Gap",
                text: "AI requires skilled engineers, data scientists, and product thinkers. Upskill internally and bring in talent to fill key gaps."
              },
              {
                title: "6. Ignoring Ethics and Compliance",
                text: "Responsible AI matters. Be mindful of bias, privacy, and explainability. Regulations are tightening, and so are customer expectations."
              },
              {
                title: "7. Treating AI as a One-Time Project",
                text: "AI is a journey, not a checkbox. Build for continuous improvement, from model retraining to updated governance and feedback loops."
              },
              {
                title: "8. Skipping Pilot Testing",
                text: "Validate assumptions with pilots. Pilots help reveal user behavior, technical issues, and adoption bottlenecks before scaling."
              },
              {
                title: "9. Infrastructure Not Ready",
                text: "AI demands compute power, storage, and pipelines. Legacy systems may struggle—cloud-native and scalable architectures are key."
              },
              {
                title: "10. No Plan for Monitoring and Maintenance",
                text: "AI models decay over time. Put in place performance monitoring, human-in-the-loop oversight, and ongoing updates."
              },
            ].map((item, idx) => (
              <section key={idx}>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Conclusion</h2>
              <p>
                Avoiding these pitfalls can dramatically improve your chances of AI success. 
                AI is not just about algorithms—it's about business transformation, supported by people, platforms, and strategy.
              </p>
            </section>
          </article>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/resources/articles">
                Back to Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
