import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function EdgeComputingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center justify-center bg-gray-100">
        <Image
          src="/images/bgmainhero.png"
          alt="Edge Computing Hero"
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
          {/* SVG Waves */}
          {/* ...same as before */}
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
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-800">
            The Rise of Edge Computing: Transforming Data Processing
          </h1>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Edge Computing", "Data Processing", "IoT"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center text-sm text-neutral-500 mb-12 gap-6">
            <div className="flex items-center"><User className="h-4 w-4 mr-1" /> Michael Chen</div>
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> December 12, 2024</div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-1" /> 8 min read</div>
          </div>

          {/* Article */}
          <article className="space-y-10 text-neutral-800 leading-relaxed">
            {/* Intro */}
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Introduction</h2>
              <p>
                In the age of digital transformation, speed and responsiveness are everything. Edge computing has emerged as a powerful approach that brings data processing closer to the source—reducing latency, enhancing performance, and enabling smarter decision-making in real-time.
              </p>
            </section>

            {/* Core Concept */}
            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">What Is Edge Computing?</h3>
              <p>
                Edge computing involves processing data locally, at or near the location where it's generated, instead of relying solely on centralized cloud infrastructure. This decentralized model is especially valuable for applications that require low latency and real-time responsiveness.
              </p>
            </section>

            {/* Benefits */}
            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Why It Matters</h3>
              <p>
                Centralized cloud computing struggles with latency, bandwidth, and connectivity in certain applications. Edge computing offers faster data analysis, reduced operational costs, and improved data privacy—all essential for sectors like autonomous driving, manufacturing, and healthcare.
              </p>
            </section>

            {/* Use Cases */}
            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Use Cases</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Autonomous vehicles processing sensor data in milliseconds</li>
                <li>Manufacturing robots adjusting to anomalies in real-time</li>
                <li>Smart cities managing traffic lights and energy consumption</li>
              </ul>
            </section>

            {/* Challenges */}
            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Challenges</h3>
              <p>
                While edge computing brings numerous benefits, it also introduces complexity in deployment, maintenance, and security. Organizations must ensure edge devices are regularly updated and protected against threats, especially when deployed in uncontrolled environments.
              </p>
            </section>

            {/* Trends */}
            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Trends in Edge Adoption</h3>
              <p>
                Enterprises are increasingly integrating edge with AI, enabling local devices to make intelligent decisions without cloud round-trips. Additionally, 5G is boosting edge capabilities by offering higher speeds and lower latency to support edge-heavy workloads.
              </p>
            </section>

            {/* Cloud vs Edge */}
            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Cloud vs. Edge: A Complementary Model</h3>
              <p>
                Edge computing is not a replacement for cloud but a complement. While cloud excels in scalability and long-term storage, edge shines in speed and immediacy. A hybrid model allows businesses to choose the best of both worlds depending on workload needs.
              </p>
            </section>

            {/* Best Practices */}
            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Best Practices for Implementation</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Define clear business objectives for edge deployments</li>
                <li>Ensure hardware resilience in remote/harsh environments</li>
                <li>Establish secure communication between edge and core systems</li>
                <li>Monitor device health and model drift continuously</li>
              </ul>
            </section>

            {/* Future */}
            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">The Future of Edge Computing</h3>
              <p>
                As data volumes explode and latency-sensitive applications grow, edge computing will become foundational to IT architectures. Expect to see greater synergy between AI, 5G, and edge, empowering a new wave of intelligent automation across industries.
              </p>
            </section>

            {/* Conclusion */}
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Conclusion</h2>
              <p>
                Edge computing represents a major leap toward decentralized, intelligent systems. By embracing this paradigm shift, organizations can unlock unprecedented agility, efficiency, and customer experience in a data-driven world.
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
