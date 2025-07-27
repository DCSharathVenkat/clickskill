import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function CybersecurityTrendsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center justify-center bg-gray-100">
        <Image
          src="/images/bgmainhero.png"
          alt="Cybersecurity Trends Hero"
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

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary */}
          <div className="mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-800">
            Cybersecurity Trends to Watch in 2025
          </h1>
          </div>

          {/* Tags and Metadata */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Cybersecurity", "Threat Intelligence", "Security Trends", "2025"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm text-neutral-500 mb-12 gap-6">
            <div className="flex items-center"><User className="h-4 w-4 mr-1" /> James Miller</div>
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> December 3, 2024</div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-1" /> 11 min read</div>
          </div>

          {/* Article Body */}
          <article className="space-y-10 text-neutral-800 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Introduction</h2>
              <p>
                As cyber threats evolve, so must our defense mechanisms. In 2025, enterprises will face increasingly complex attacks, requiring new strategies, tools, and a deeper focus on proactive threat management. This article explores the top trends shaping cybersecurity in the year ahead.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">1. AI-Powered Threat Detection</h3>
              <p>
                Attackers are leveraging AI to build sophisticated phishing and malware campaigns. In response, cybersecurity platforms will increasingly adopt AI to identify patterns, detect anomalies, and automate incident response.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">2. Zero Trust Architecture Goes Mainstream</h3>
              <p>
                The “never trust, always verify” model is gaining traction. More organizations will adopt Zero Trust to secure access at every level—from user identities to microservices and IoT devices.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">3. Quantum Threat Readiness</h3>
              <p>
                As quantum computing advances, cryptographic systems are at risk. Enterprises and governments are starting to explore post-quantum cryptography to safeguard sensitive data from future decryption.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">4. Supply Chain Attacks on the Rise</h3>
              <p>
                High-profile breaches have highlighted the vulnerabilities in third-party software and service providers. Expect more investments in securing CI/CD pipelines, vendor risk management, and software bill of materials (SBOMs).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">5. Privacy Regulations Tighten Globally</h3>
              <p>
                New privacy laws from countries like India and updates to existing frameworks like GDPR and CCPA will place greater compliance pressures on companies. Cybersecurity teams must work closely with legal and data governance functions.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">6. Ransomware Evolution</h3>
              <p>
                Ransomware attacks are becoming multi-extortion schemes—stealing data before encryption, threatening public leaks, and even targeting customers. Detection and rapid recovery capabilities are critical.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">7. Cloud-Native Security Maturity</h3>
              <p>
                As businesses migrate to cloud-native apps, they must adopt cloud-first security models. Expect widespread use of tools like CSPM (Cloud Security Posture Management) and CNAPP (Cloud-Native Application Protection Platforms).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">8. Security as a Board-Level Priority</h3>
              <p>
                Cybersecurity is no longer just an IT problem. In 2025, CISOs will work directly with boards and executive leadership to shape policies, allocate budgets, and drive organization-wide security culture.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Conclusion</h2>
              <p>
                2025 will test the resilience and agility of cybersecurity programs. Organizations that embrace proactive strategies, adopt intelligent tools, and foster cross-functional collaboration will be best positioned to face the challenges ahead.
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
