import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clickskill.io"

  // Static pages
  const staticPages = ["", "/about", "/contact", "/consultation", "/careers", "/services"]

  // Service pages
  const servicePages = [
    "/services/ai-ml-development",
    "/services/product-engineering",
    "/services/data-engineering",
    "/services/mlops-devops",
    "/services/digital-transformation",
    "/services/staff-augmentation",
    "/services/corporate-venturing",
    "/services/edtech-development",
    "/services/grc",
  ]

  // Solution pages
  const solutionPages = [
    "/solutions/ai-solutions",
    "/solutions/enterprise-mobility",
    "/solutions/digital-healthcare",
    "/solutions/enterprise-digital-transformation",
  ]

  // Industry pages
  const industryPages = [
    "/industries/fintech",
    "/industries/healthcare",
    "/industries/manufacturing",
    "/industries/ecommerce",
    "/industries/sports",
  ]

  // Resource pages
  const resourcePages = [
    "/resources/ai-readiness-checker",
    "/resources/cost-calculator",
    "/resources/case-studies",
    "/resources/white-papers",
    "/resources/articles",
  ]

  const allPages = [...staticPages, ...servicePages, ...solutionPages, ...industryPages, ...resourcePages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1 : page.startsWith("/services") ? 0.9 : 0.8,
  }))
}
