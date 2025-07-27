import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ResilientCloudPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center justify-center bg-gray-100">
        <Image
          src="/images/bgmainhero.png"
          alt="Cloud Resilience Hero"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-10 text-center max-w-4xl px-6 text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-800">
            Articles & Insights
          </h1>
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
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-800">
            Building Resilient Cloud Architectures: Lessons from 2024
          </h1>
          </div>

          {/* Tags and Metadata */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Cloud Architecture", "Resilience", "DevOps", "Scalability"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm text-neutral-500 mb-12 gap-6">
            <div className="flex items-center"><User className="h-4 w-4 mr-1" /> Emily Rodriguez</div>
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> December 10, 2024</div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-1" /> 7 min read</div>
          </div>

          {/* Article Content */}
          <article className="space-y-10 text-neutral-800 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Introduction</h2>
              <p>
                The events of 2024—including record outages, security breaches, and unprecedented traffic spikes—have redefined how modern cloud systems should be architected. This article unpacks lessons learned and best practices to help you build cloud platforms that thrive under pressure.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Why Resilience Matters</h3>
              <p>
                Uptime isn't optional—it's a business imperative. From e-commerce to fintech, users expect seamless availability and performance. Cloud resilience is about building systems that anticipate failures, isolate impact, and recover automatically.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Common Failure Patterns Observed in 2024</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Single-region dependencies causing full system downtime</li>
                <li>Unpatched services leading to lateral security breaches</li>
                <li>Poor observability leading to delayed incident detection</li>
                <li>Inadequate autoscaling during seasonal surges</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Resilient Architecture Principles</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>Redundancy:</strong> Design for failure with multi-zone and multi-region deployment strategies.</li>
                <li><strong>Isolation:</strong> Use microservices and container boundaries to reduce blast radius.</li>
                <li><strong>Observability:</strong> Implement structured logging, distributed tracing, and real-time alerts.</li>
                <li><strong>Graceful degradation:</strong> Ensure partial functionality when components fail.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Design Patterns for Resilience</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>Retry with exponential backoff:</strong> Helps systems recover from transient faults.</li>
                <li><strong>Circuit breaker pattern:</strong> Prevents cascading failures across services.</li>
                <li><strong>Blue-green deployments:</strong> Enables seamless rollbacks and zero-downtime releases.</li>
                <li><strong>Chaos engineering:</strong> Regular failure injection to test system behavior under stress.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Best Practices for Teams</h3>
              <p>
                Building resilient systems is not just a technical challenge—it’s also cultural. Teams must:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Run postmortems that are blameless and actionable</li>
                <li>Practice incident response drills regularly</li>
                <li>Prioritize automation over manual recovery</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Tools That Help</h3>
              <p>
                The following tools gained momentum in 2024:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>Terraform</strong> and <strong>Crossplane</strong> for infrastructure-as-code with rollback support</li>
                <li><strong>Datadog</strong>, <strong>Prometheus</strong>, and <strong>Honeycomb</strong> for observability</li>
                <li><strong>Linkerd</strong> and <strong>Istio</strong> for service mesh reliability features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Conclusion</h2>
              <p>
                In 2024, cloud resilience became a boardroom topic. By applying these architectural lessons and engineering disciplines, organizations can deliver continuous, secure, and scalable digital services even in times of crisis.
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
