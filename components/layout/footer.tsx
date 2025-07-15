import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"


const services = [
  { name: "AI & ML Development", href: "/services/ai-ml-development" },
  { name: "Product Engineering", href: "/services/product-engineering" },
  { name: "Digital Transformation", href: "/services/digital-transformation" },
  { name: "GRC", href: "/services/grc" },
  { name: "EdTech", href: "/services/edtech-development" },
]

const solutions = [
  { name: "Enterprise Mobility", href: "/solutions/enterprise-mobility" },
  { name: "AI Solutions", href: "/solutions/ai-solutions" },
  { name: "Digital Healthcare", href: "/solutions/digital-healthcare" },
  { name: "Enterprise Digital Transformation", href: "/solutions/enterprise-digital-transformation" },
]

const resources = [
  { name: "AI Readiness Checker", href: "/resources/ai-readiness-checker" },
  { name: "Project Cost Calculator", href: "/resources/cost-calculator" },
  { name: "Contact Us", href: "/contact" },
  // { name: "Case Studies", href: "/resources/case-studies" },
  // { name: "White Papers", href: "/resources/white-papers" },
  // { name: "Articles", href: "/resources/articles" },
]


export function Footer() {
  return (
    <footer className="bg-slate text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 py-16">
          {/* Logo + Contact */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <img
                src="/images/clickskill-logo.png"
                alt="ClickSkill Logo"
                className="h-7 transition-transform duration-300 group-hover:scale-110"
                style={{ filter: "invert(1) brightness(2)" }}
              />
              <span className="text-3xl font-bold">ClickSkill</span>
            </Link>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Empowering businesses with cutting-edge<br /> AI solutions, digital transformation <br />and innovative technology services.
            </p>
<div className="flex space-x-4">
  <Link href="#" aria-label="Facebook" className="flex items-center gap-1 hover:text-primary">
    <Facebook size={16} />
    <span className="sr-only">Facebook</span>
  </Link>
  <Link href="https://x.com/ClickSkillUSA" aria-label="Twitter" className="flex items-center gap-1 hover:text-primary">
    <Twitter size={16} />
    <span className="sr-only">Twitter</span>
  </Link>
  <Link href="#" aria-label="LinkedIn" className="flex items-center gap-1 hover:text-primary">
    <Linkedin size={16} />
    <span className="sr-only">LinkedIn</span>
  </Link>
  <Link href="#" aria-label="Instagram" className="flex items-center gap-1 hover:text-primary">
    <Instagram size={16} />
    <span className="sr-only">Instagram</span>
  </Link>
</div>

          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-primary text-sm transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-primary text-sm transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Industries</h4>
            <ul className="space-y-2">
              <li><Link href="/industries/fintech" className="text-gray-300 hover:text-primary text-sm">Fintech</Link></li>
              <li><Link href="/industries/manufacturing" className="text-gray-300 hover:text-primary text-sm">Manufacturing</Link></li>
              <li><Link href="/industries/healthcare" className="text-gray-300 hover:text-primary text-sm">Healthcare</Link></li>
              <li><Link href="/industries/ecommerce" className="text-gray-300 hover:text-primary text-sm">eCommerce</Link></li>
              <li><Link href="/industries/sports" className="text-gray-300 hover:text-primary text-sm">Sports Technology</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-primary text-sm transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 py-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <span>&copy; 2024 ClickSkill. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-center md:text-right">
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-primary">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
