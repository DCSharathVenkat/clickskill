import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found - ClickSkill.io",
  description: "The page you are looking for could not be found. Explore our technology services and solutions.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="max-w-md w-full text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate mb-4">Page Not Found</h2>
          <p className="text-neutral-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/services">
              <Search className="mr-2 h-5 w-5" />
              Explore Our Services
            </Link>
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-neutral-500 mb-4">Popular pages:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/about" className="text-sm text-primary hover:underline">
              About
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/contact" className="text-sm text-primary hover:underline">
              Contact
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/consultation" className="text-sm text-primary hover:underline">
              Consultation
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/careers" className="text-sm text-primary hover:underline">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
