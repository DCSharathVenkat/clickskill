import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { StructuredData } from "@/components/seo/structured-data"
import { organizationStructuredData, websiteStructuredData } from "@/lib/seo"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "ClickSkill.io - Global Technology & Consulting Excellence",
    template: "%s | ClickSkill.io",
  },
  description:
    "Leading global technology and consulting company delivering AI & ML Development, Product Engineering, Digital Transformation, and GRC services to Fortune 500 companies worldwide.",
  keywords: [
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
    "artificial intelligence",
    "machine learning",
    "cloud computing",
    "software development",
  ].join(", "),
  authors: [{ name: "ClickSkill.io", url: "https://clickskill.io" }],
  creator: "ClickSkill.io",
  publisher: "ClickSkill.io",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://clickskill.io"),
  alternates: {
    canonical: "https://clickskill.io",
  },
  openGraph: {
    title: "ClickSkill.io - Global Technology & Consulting Excellence",
    description:
      "Leading global technology and consulting company delivering AI & ML Development, Product Engineering, Digital Transformation, and GRC services to Fortune 500 companies.",
    url: "https://clickskill.io",
    siteName: "ClickSkill.io",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClickSkill.io - Global Technology & Consulting Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickSkill.io - Global Technology & Consulting Excellence",
    description:
      "Leading global technology and consulting company delivering AI & ML Development, Product Engineering, Digital Transformation, and GRC services.",
    images: ["/images/og-image.jpg"],
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
  google: process.env.NEXT_PUBLIC_VERIFICATION_GOOGLE,
  yandex: process.env.NEXT_PUBLIC_VERIFICATION_YANDEX,
}
,
  category: "Technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Structured Data */}
        <StructuredData data={organizationStructuredData} />
        <StructuredData data={websiteStructuredData} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1" id="main-content" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
