import type { Metadata } from "next"

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
openGraph?: {
  title?: string
  description?: string
  type?: "website" | "article" // ⬅️ Removed "service"
  images?: Array<{
    url: string
    width: number
    height: number
    alt: string
  }>
}

  twitter?: {
    card?: "summary" | "summary_large_image"
    title?: string
    description?: string
    images?: string[]
  }
  structuredData?: Record<string, any>
}

const defaultSEO = {
  siteName: "ClickSkill.io",
  siteUrl: "https://clickskill.io",
  defaultTitle: "ClickSkill.io - Global Technology & Consulting Excellence",
  defaultDescription:
    "Leading global technology and consulting company delivering AI & ML Development, Product Engineering, Digital Transformation, and GRC services to Fortune 500 companies.",
  defaultKeywords: [
    "AI development",
    "ML consulting",
    "digital transformation",
    "product engineering",
    "MLOps",
    "DevOps",
    "staff augmentation",
    "corporate venturing",
    "EdTech",
    "GRC",
    "cybersecurity",
    "data engineering",
    "technology consulting",
    "enterprise solutions",
    "Fortune 500",
  ],
  defaultImage: {
    url: "/images/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "ClickSkill.io - Global Technology & Consulting Excellence",
  },
}

export function generateMetadata(config: SEOConfig): Metadata {
  const { title, description, keywords = [], canonical, openGraph, twitter } = config

  const fullTitle = title.includes("ClickSkill") ? title : `${title} | ${defaultSEO.siteName}`
  const ogTitle = openGraph?.title || title
  const ogDescription = openGraph?.description || description
  const twitterTitle = twitter?.title || ogTitle
  const twitterDescription = twitter?.description || ogDescription

  return {
    title: fullTitle,
    description,
    keywords: [...defaultSEO.defaultKeywords, ...keywords].join(", "),
    authors: [{ name: "ClickSkill.io", url: defaultSEO.siteUrl }],
    creator: "ClickSkill.io",
    publisher: "ClickSkill.io",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(defaultSEO.siteUrl),
    alternates: {
      canonical: canonical || defaultSEO.siteUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical || defaultSEO.siteUrl,
      siteName: defaultSEO.siteName,
      type: openGraph?.type || "website",
      locale: "en_US",
      images: openGraph?.images || [defaultSEO.defaultImage],
    },
    twitter: {
      card: twitter?.card || "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: twitter?.images || [defaultSEO.defaultImage.url],
      creator: "@ClickSkillIO",
      site: "@ClickSkillIO",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  }
}

export function generateStructuredData(type: string, data: Record<string, any>) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  }

  return {
    ...baseData,
    ...data,
  }
}

// Organization structured data
export const organizationStructuredData = generateStructuredData("Organization", {
  name: "ClickSkill.io",
  alternateName: "ClickSkill",
  url: "https://clickskill.io",
  logo: "https://clickskill.io/images/clickskill-logo.png",
  description: defaultSEO.defaultDescription,
  foundingDate: "2010",
  numberOfEmployees: "500+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Business Ave, Suite 100",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@clickskill.io",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/clickskill",
    "https://twitter.com/ClickSkillIO",
    "https://github.com/clickskill",
  ],
  areaServed: ["US", "IN", "AU", "UK", "CA", "SG"],
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
})

// Website structured data
export const websiteStructuredData = generateStructuredData("WebSite", {
  name: "ClickSkill.io",
  url: "https://clickskill.io",
  description: defaultSEO.defaultDescription,
  publisher: {
    "@type": "Organization",
    name: "ClickSkill.io",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://clickskill.io/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
})
