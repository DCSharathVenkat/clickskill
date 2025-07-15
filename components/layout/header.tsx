"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu, LayoutDashboard, Lightbulb, Settings, TrendingUp,
  Database, Users, Rocket, GraduationCap, ShieldCheck,
  Smartphone, Brain, Stethoscope, Repeat, Banknote, Factory,
  ShoppingCart, Trophy, CheckCircle2, Calculator, BookOpen,
  FileText, Phone
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
  { icon: <Brain size={16} />, name: "AI & ML Development", href: "/services/ai-ml-development", description: "Custom AI solutions and machine learning models" },
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
  //{ icon: <LayoutDashboard size={16} />, name: "Case Studies", href: "/resources/case-studies" },
  //{ icon: <BookOpen size={16} />, name: "White Papers", href: "/resources/white-papers" },
  //{ icon: <FileText size={16} />, name: "Articles", href: "/resources/articles" },
  { icon: <Phone size={16} />, name: "Contact Us", href: "/contact" },
]


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine if header should be transparent (only on home page and when not scrolled)
  const isTransparent = isHomePage && !isScrolled

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500 ease-out",
          isTransparent
            ? "bg-transparent backdrop-blur-sm"
            : "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100",
        )}
      >
        <div className="container">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="flex items-center space-x-2 group">  
        <img
          src="/images/clickskill-logo.png"
          alt="ClickSkill Logo"
          className="h-7 w-auto text:White transition-transform duration-300 group-hover:scale-110"
          style={{
    filter: isTransparent ? "invert(1) brightness(2)" : "invert(0) brightness(1)",
  }}
        />

              <span
                className={cn(
                  "text-xl lg:text-3xl font-bold transition-colors duration-300 leading-none",
                  isTransparent ? "text-white" : "text-slate",
                )}
              >
                ClickSkill
              </span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-colors hover:bg-white/10 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        isTransparent
                          ? "text-white/90 hover:text-white"
                          : "text-slate hover:bg-gray-100 hover:text-primary",
                      )}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>



                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-colors hover:bg-white/10 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",

                      isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-slate hover:bg-gray-100 hover:text-primary",
                    )}
                  >
                    
                    


                    
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[300px] ">

                    <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
{services.map((service) => (
  <NavigationMenuLink key={service.name} asChild>
    <Link
      href={service.href}
      className="flex items-start gap-3 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <span className="mt-1 text-muted-foreground">{service.icon}</span>
      <span>
        <div className="text-sm font-medium leading-none">{service.name}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{service.description}</p>
      </span>
    </Link>
  </NavigationMenuLink>
))}

                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-colors hover:bg-white/10 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",

                      isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-slate hover:bg-gray-100 hover:text-primary",
                    )}
                  >
                    Solutions
                  </NavigationMenuTrigger>
<NavigationMenuContent>
  <div className="relative">
    <div className="grid w-[400px] gap-1 p-4">
      {solution.map((solution) => (
        <NavigationMenuLink key={solution.name} asChild>
          <Link
            href={solution.href}
            className="flex items-center gap-3 rounded-md p-2 text-sm font-medium text-slate-700 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span className="text-muted-foreground">{solution.icon}</span>
            <span>{solution.name}</span>
          </Link>
        </NavigationMenuLink>
      ))}
    </div>
  </div>
</NavigationMenuContent>


                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-colors hover:bg-white/10 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",

                      isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-slate hover:bg-gray-100 hover:text-primary",
                    )}
                  >
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
{industries.map((industries) => (
                        <NavigationMenuLink key={industries.name} asChild>
                          <Link
                            href={industries.href}
                            className="flex items-start gap-3 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                                    <span className="mt-1 text-muted-foreground">{industries.icon}</span>
      <span>
        <div className="text-sm font-medium leading-none">{industries.name}</div>
      </span>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-colors hover:bg-white/10 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",

                      isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-slate hover:bg-gray-100 hover:text-primary",
                    )}
                  >
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
{resources.map((resources) => (
                        <NavigationMenuLink key={resources.name} asChild>
                          <Link
                            href={resources.href}
                            className="flex items-start gap-3 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                                    <span className="mt-1 text-muted-foreground">{resources.icon}</span>
      <span>
        <div className="text-sm font-medium leading-none">{resources.name}</div>
      </span>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <div className="hidden items-center lg:flex">
              <Button
                asChild
                className={cn(
                  "rounded-full px-6 py-2 font-medium transition-all duration-300 hover:scale-105",
                  isTransparent
                    ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                    : "bg-[#555879] text-white hover:bg-[#04a5ab]",
                )}
              >
                <Link href="/consultation">Get Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "transition-colors duration-300",
                    isTransparent ? "text-white hover:bg-white/10" : "text-slate hover:bg-gray-100",
                  )}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/about"
                    className="block px-2 py-1 text-sm hover:bg-accent rounded font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Services</h3>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-2 py-1 text-sm hover:bg-accent rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Solutions</h3>
                    {solution.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="block px-2 py-1 text-sm hover:bg-accent rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Industries</h3>
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block px-2 py-1 text-sm hover:bg-accent rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Resources</h3>
                    {resources.map((resource) => (
                      <Link
                        key={resource.name}
                        href={resource.href}
                        className="block px-2 py-1 text-sm hover:bg-accent rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2 pt-4">
 
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
