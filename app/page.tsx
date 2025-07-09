import { HeroSection } from "@/components/sections/hero-section"
import { ServicesOverview } from "@/components/sections/services-overview"
import { SolutionsShowcase } from "@/components/sections/solutions-showcase"
import { IndustriesSection } from "@/components/sections/industries-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateStructuredData } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ClickSkill.io - Global Technology & Consulting Excellence",
  description:
    "Transform your business with AI & ML Development, Product Engineering, Digital Transformation, and GRC services. Trusted by Fortune 500 companies worldwide.",
  keywords:
    "AI development, ML consulting, digital transformation, product engineering, technology consulting, Fortune 500, enterprise solutions",
  openGraph: {
    title: "ClickSkill.io - Global Technology & Consulting Excellence",
    description:
      "Transform your business with cutting-edge technology solutions. Trusted by Fortune 500 companies worldwide.",
    type: "website",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "ClickSkill.io Homepage - Technology Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://clickskill.io",
  },
}

// Structured data for homepage
const homepageStructuredData = generateStructuredData("WebPage", {
  name: "ClickSkill.io - Global Technology & Consulting Excellence",
  description: "Leading technology consulting company delivering AI, ML, and digital transformation services",
  url: "https://clickskill.io",
  mainEntity: {
    "@type": "Organization",
    name: "ClickSkill.io",
    description: "Global technology and consulting company",
    serviceType: [
      "AI & ML Development",
      "Product Engineering",
      "Digital Transformation",
      "Data Engineering",
      "MLOps & DevOps",
      "Staff Augmentation",
      "Corporate Venturing",
      "EdTech Development",
      "GRC Services",
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://clickskill.io",
      },
    ],
  },
})

export default function HomePage() {
  return (
    <>
      <StructuredData data={homepageStructuredData} />
      <div id="main-content">
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        <SolutionsShowcase />
        <IndustriesSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  )
}
