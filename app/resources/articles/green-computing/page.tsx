import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function SustainableTechPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center justify-center bg-gray-100">
        <Image
          src="/images/bgmainhero.png"
          alt="Sustainable Technology Hero"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-10 text-center max-w-4xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 drop-shadow-md">
            Sustainable Technology: Green Computing in Enterprise
          </h1>
          <p className="text-lg text-gray-800 font-medium">
            by Lisa Wang · December 5, 2024 · 9 min read
          </p>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 325" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[100px] lg:h-[100px]">
            <path d="M810.109 190.723V324.906H1439.97V141.635C1399.11 107.824 1358.5 72.4044 1316.96 48.4386C1146.99 -48.5261 971.704 0.680438 810.109 190.723Z" fill="#0A6373" />
            <path d="M654.316 239.05C706.182 255.407 756.402 284.718 808.124 302.496C881.8 327.838 958.526 329.369 1032.09 303.091C1103.57 277.612 1177.69 215.47 1248.33 183.899C1310.97 155.889 1379.36 144.355 1440 179.351V324.595H366.918V283.141C458.546 224.252 557.938 209.003 654.316 239.052V239.05Z" fill="#E66C6C" />
            <path d="M0 185.047L29.9989 177.248C59.9979 169.739 119.996 153.704 179.994 165.586C239.991 177.029 299.989 216.391 359.987 239.498C419.985 263.043 479.983 270.332 539.981 262.824C599.979 255.025 659.976 231.699 719.974 212.237C779.972 193.066 839.97 177.03 899.968 188.911C959.966 200.355 1019.96 239.717 1079.96 251.162C1139.96 263.043 1199.96 247.007 1259.95 251.162C1319.95 255.028 1379.95 278.35 1409.95 290.013L1439.97 301.858L1439.95 325H0V185.047Z" fill="#ffffff" />
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
              How organizations are adopting sustainable technology practices to reduce environmental impact while maintaining performance.
            </p>
          </div>

          {/* Tags and Metadata */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Green Tech", "Sustainability", "Enterprise", "Cloud"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm text-neutral-500 mb-12 gap-6">
            <div className="flex items-center"><User className="h-4 w-4 mr-1" /> Lisa Wang</div>
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> December 5, 2024</div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-1" /> 9 min read</div>
          </div>

          {/* Article Body */}
          <article className="space-y-10 text-neutral-800 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Introduction</h2>
              <p>
                As climate change accelerates, enterprises are under pressure to reduce their carbon footprint while keeping performance high. Green computing—designing and using IT resources more efficiently—is a critical step in driving sustainable innovation.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Why Sustainability in Tech Matters</h3>
              <p>
                Data centers consume massive energy. Devices pile up in landfills. And supply chains rely heavily on fossil fuels. The tech sector is responsible for about 2-3% of global emissions—more than the airline industry. As businesses digitize further, sustainable practices are essential for long-term growth and environmental responsibility.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Principles of Green Computing</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>Energy efficiency:</strong> Use hardware with low power consumption and enable power-saving modes.</li>
                <li><strong>Virtualization:</strong> Reduce physical servers by consolidating workloads in cloud environments.</li>
                <li><strong>Lifecycle management:</strong> Reuse, recycle, and refurbish equipment rather than replace frequently.</li>
                <li><strong>Sustainable sourcing:</strong> Partner with vendors who prioritize eco-friendly manufacturing and materials.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Enterprise Examples</h3>
              <p>
                Major companies are committing to sustainability:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Google runs its data centers on carbon-free energy 24/7.</li>
                <li>Microsoft aims to be carbon negative by 2030, including carbon removal programs.</li>
                <li>Dell offers take-back and recycling programs for used equipment.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Cloud & Sustainability</h3>
              <p>
                Cloud computing, when used wisely, can be a green solution. Shared infrastructure improves utilization rates and can be optimized for lower energy use. However, the efficiency depends on choosing cloud providers with clean energy commitments and optimizing workloads.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Challenges to Overcome</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Short hardware life cycles driven by performance demands</li>
                <li>Lack of standard sustainability metrics across industries</li>
                <li>Initial costs of switching to sustainable solutions</li>
              </ul>
              <p className="mt-2">
                Solving these challenges requires cross-functional collaboration, regulatory alignment, and long-term thinking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Conclusion</h2>
              <p>
                Green computing is not a luxury—it’s a necessity. Enterprises that embrace sustainable practices are not only reducing environmental impact but also lowering costs, boosting brand value, and preparing for a future where climate action is non-negotiable.
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
