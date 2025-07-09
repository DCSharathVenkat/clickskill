import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string | ReactNode
  description: string
  badge?: string
  className?: string
  children?: ReactNode
}

export function PageHero({ title, description, badge, className, children }: PageHeroProps) {
  return (
    <section className={cn("pt-24 pb-16 bg-gradient-to-br from-slate to-slate/90", className)}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          {badge && <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">{badge}</Badge>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">{description}</p>
          {children}
        </div>
      </div>
    </section>
  )
}
