import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FutureOfWorkPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center justify-center bg-gray-100">
        <Image
          src="/images/bgmainhero.png"
          alt="Future of Work Hero"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-10 text-center max-w-4xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 drop-shadow-md">
            The Future of Work: How AI is Reshaping Job Roles
          </h1>
          <p className="text-lg text-gray-800 font-medium">
            by David Thompson · December 8, 2024 · 7 min read
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

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Summary</h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              An analysis of how artificial intelligence is transforming traditional job functions and creating new opportunities.
            </p>
          </div>

          {/* Tags and Metadata */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["AI", "Future of Work", "Job Roles", "Automation"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm text-neutral-500 mb-12 gap-6">
            <div className="flex items-center"><User className="h-4 w-4 mr-1" /> David Thompson</div>
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> December 8, 2024</div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-1" /> 7 min read</div>
          </div>

          {/* Article Content */}
          <article className="space-y-10 text-neutral-800 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Introduction</h2>
              <p>
                Artificial Intelligence (AI) is no longer just a buzzword—it's actively transforming how we work. From automating repetitive tasks to augmenting creative processes, AI is reshaping the way we define and perform job roles across industries.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">The Shift from Automation to Augmentation</h3>
              <p>
                Initially, AI was associated with replacing manual or low-skill jobs. Today, the narrative is shifting toward augmentation—AI as a co-pilot. It assists professionals in fields like medicine, marketing, engineering, and customer support by handling data-heavy tasks and surfacing insights quickly.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Emerging Roles Fueled by AI</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Prompt Engineers—specialists who craft input queries for large language models</li>
                <li>AI Ethicists—ensuring fairness, privacy, and regulatory compliance in algorithms</li>
                <li>Automation Architects—designing end-to-end AI-driven workflows</li>
                <li>Human-AI Interaction Designers—bridging the UX gap between people and machines</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Industries Undergoing Transformation</h3>
              <p>
                While manufacturing and logistics saw early adoption of AI, knowledge work is now in the spotlight. Sectors like finance, legal, HR, and healthcare are experiencing dramatic changes in how work is executed, documented, and validated—with AI taking over routine cognitive labor.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Upskilling for the AI Economy</h3>
              <p>
                The most resilient workers are those who adapt. AI literacy—understanding how algorithms work, what data powers them, and their ethical implications—is becoming a must-have skill. Organizations are investing in reskilling programs for both technical and non-technical teams.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Risks and Considerations</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Bias in algorithms can perpetuate inequality in hiring or credit scoring</li>
                <li>Lack of transparency in AI decisions can erode trust</li>
                <li>Rapid displacement of roles without safety nets can widen economic gaps</li>
              </ul>
              <p className="mt-2">
                Governments and companies must work together to create ethical frameworks, safety nets, and inclusive growth strategies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Conclusion</h2>
              <p>
                The future of work is not man versus machine—it’s man with machine. AI is transforming job roles, but also creating new ones. Adaptability, creativity, and empathy remain core human advantages. The winners in this transition will be those who embrace change and learn to work alongside intelligent systems.
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
