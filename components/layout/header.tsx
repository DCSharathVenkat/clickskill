"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu, Lightbulb, Settings, TrendingUp, Database, Users, Rocket,
  GraduationCap, ShieldCheck, Smartphone, Brain, Stethoscope, Repeat,FileText,BookOpen,
  Banknote, Factory, ShoppingCart, Trophy, CheckCircle2, Calculator, Phone
} from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const services = [
  { icon: <Brain size={16} />, name: "AI & ML Development", href: "/services/ai-ml-development", description: "Custom AI solutions & ML models" },
  { icon: <Lightbulb size={16} />, name: "Product Engineering", href: "/services/product-engineering", description: "End-to-end product development and engineering" },
  { icon: <Settings size={16} />, name: "MLOps & DevOps", href: "/services/mlops-devops", description: "Streamlined deployment and operations" },
  { icon: <TrendingUp size={16} />, name: "Digital Transformation", href: "/services/digital-transformation", description: "Comprehensive digital modernization" },
  { icon: <Database size={16} />, name: "Data Engineering", href: "/services/data-engineering", description: "Scalable data pipelines and analytics infrastructure" },
  { icon: <Users size={16} />, name: "Staff Augmentation", href: "/services/staff-augmentation", description: "Expert talent for your projects" },
  { icon: <Rocket size={16} />, name: "Corporate Venturing", href: "/services/corporate-venturing", description: "Innovation and venture development" },
  { icon: <GraduationCap size={16} />, name: "EdTech Development", href: "/services/edtech-development", description: "Educational technology solutions" },
  { icon: <ShieldCheck size={16} />, name: "Governance, Risk & Compliance", href: "/services/grc", description: "GRC, cybersecurity, and risk advisory" },
]

const solution = [
  { icon: <Smartphone size={16} />, name: "Enterprise Mobility", href: "/solutions/enterprise-mobility" },
  { icon: <Brain size={16} />, name: "AI Solutions", href: "/solutions/ai-solutions" },
  { icon: <Stethoscope size={16} />, name: "Digital Healthcare", href: "/solutions/digital-healthcare" },
  { icon: <Repeat size={16} />, name: "Enterprise Digital Transformation", href: "/solutions/enterprise-digital-transformation" },
]

const industries = [
  { icon: <Banknote size={16} />, name: "Fintech", href: "/industries/fintech" },
  { icon: <Factory size={16} />, name: "Manufacturing", href: "/industries/manufacturing" },
  { icon: <Stethoscope size={16} />, name: "Healthcare", href: "/industries/healthcare" },
  { icon: <ShoppingCart size={16} />, name: "eCommerce", href: "/industries/ecommerce" },
  { icon: <Trophy size={16} />, name: "Sports Technology", href: "/industries/sports" },
]

const resources = [
  { icon: <CheckCircle2 size={16} />, name: "AI Readiness Checker", href: "/resources/ai-readiness-checker" },
  { icon: <Calculator size={16} />, name: "Project Cost Calculator", href: "/resources/cost-calculator" },
  { icon: <FileText size={16} />, name: "Case-Studies", href: "/resources/case-studies" },
  { icon: <BookOpen size={16} />, name: "Articles", href: "/resources/articles" },
  { icon: <Phone size={16} />, name: "Contact Us", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500 ease-out",
      isScrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-transparent"
    )}>
      <div className="container">

        
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/images/clickskill-logo.png"
              alt="ClickSkill Logo"
              className="h-7 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl lg:text-3xl font-bold text-black leading-none transition-colors duration-300">
              ClickSkill
            </span>
          </Link>

          <NavigationMenu className="hidden lg:flex">

            <NavigationMenuList>
              {[{ name: "About", href: "/about" }, { name: "Services", menu: services }, { name: "Solutions", menu: solution }, { name: "Industries", menu: industries }, { name: "Resources", menu: resources }].map((item) =>
                item.menu ? (
                  <NavigationMenuItem key={item.name}>
<NavigationMenuTrigger className="relative bg-transparent text-black hover:text-primary px-4 py-2 text-lg font-medium transition">
  {item.name}
</NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <div className="grid w-[200px] md:grid-cols-1">
                        {item.menu.map((menuItem) => (
                          <NavigationMenuLink key={menuItem.name} asChild>
                            <Link href={menuItem.href} className="flex items-start gap-2 p-3 rounded-md hover:bg-accent transition">
                              <span className="mt-1 text-muted-foreground">{menuItem.icon}</span>
                              <span>
                                <div className="text-sm font-medium">{menuItem.name}</div>
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className="text-black hover:text-primary px-4 py-2 text-lg font-medium bg-transparent rounded-md transition">
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center lg:flex">
            <Button className="rounded-full px-6 py-2 font-medium bg-[#0A6373] hover:bg-[#E66C6C] transition-all duration-300 hover:scale-105">
              <Link href="/consultation">Get Consultation</Link>
            </Button>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-slate hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col space-y-4 mt-8">
<Link href="/about" className="text-black hover:bg-sky-100 hover:text-primary px-4 py-2 text-lg font-medium bg-transparent rounded-md transition" onClick={() => setIsMobileMenuOpen(false)}>
  About
</Link>

                {[{ title: "Services", list: services }, { title: "Solutions", list: solution }, { title: "Industries", list: industries }, { title: "Resources", list: resources }].map((section) => (
                  <div key={section.title} className="border-t pt-3">
                    <button onClick={() => toggleSection(section.title)} className="w-full text-left font-semibold text-md px-4 py-2 hover:bg-gray-100 rounded-md transition">
                      {section.title}
                    </button>
                    {expandedSections[section.title] && (
                      <div className="ml-4 mt-2 space-y-1">
                        {section.list.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm px-3 py-1 hover:bg-accent rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
