import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Brain, Settings, TrendingUp, Database, Users, Smartphone, Stethoscope, Repeat, CheckCircle2, Calculator, LayoutDashboard, BookOpen, FileText, Banknote, Factory, ShoppingCart, Trophy } from "lucide-react"

const services = [
  { name: "AI & ML Development", href: "/services/ai-ml-development", icon: <Brain size={16} /> },
  { name: "Product Engineering", href: "/services/product-engineering", icon: <Settings size={16} /> },
  { name: "Digital Transformation", href: "/services/digital-transformation", icon: <TrendingUp size={16} /> },
  { name: "Data Engineering", href: "/services/data-engineering", icon: <Database size={16} /> },
  { name: "Staff Augmentation", href: "/services/staff-augmentation", icon: <Users size={16} /> },
]

const solutions = [
  { name: "Enterprise Mobility", href: "/solutions/enterprise-mobility", icon: <Smartphone size={16} /> },
  { name: "AI Solutions", href: "/solutions/ai-solutions", icon: <Brain size={16} /> },
  { name: "Digital Healthcare", href: "/solutions/digital-healthcare", icon: <Stethoscope size={16} /> },
  { name: "Enterprise Digital Transformation", href: "/solutions/enterprise-digital-transformation", icon: <Repeat size={16} /> },
]

const resources = [
  { name: "AI Readiness Checker", href: "/resources/ai-readiness-checker", icon: <CheckCircle2 size={16} /> },
  { name: "Project Cost Calculator", href: "/resources/cost-calculator", icon: <Calculator size={16} /> },
  { name: "Case Studies", href: "/resources/case-studies", icon: <LayoutDashboard size={16} /> },
  { name: "White Papers", href: "/resources/white-papers", icon: <BookOpen size={16} /> },
  { name: "Articles", href: "/resources/articles", icon: <FileText size={16} /> },
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
              <Link href="#" aria-label="Facebook" className="hover:text-primary"><Facebook size={16} /></Link>
              <Link href="https://x.com/ClickSkillUSA" aria-label="Twitter" className="hover:text-primary"><Twitter size={16} /></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin size={16} /></Link>
              <Link href="#" aria-label="Instagram" className="hover:text-primary"><Instagram size={16} /></Link>
            </div>

          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center gap-2 text-gray-300 hover:text-primary text-sm transition-colors duration-200">
                    {item.icon}
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
                  <Link href={item.href} className="flex items-center gap-2 text-gray-300 hover:text-primary text-sm transition-colors duration-200">
                    {item.icon}
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
    <li>
      <Link href="/industries/fintech" className="flex items-center gap-2 text-gray-300 hover:text-primary text-sm transition-colors duration-200">
        <Banknote size={16} />
        Fintech
      </Link>
    </li>
    <li>
      <Link href="/industries/manufacturing" className="flex items-center gap-2 text-gray-300 hover:text-primary text-sm transition-colors duration-200">
        <Factory size={16} />
        Manufacturing
      </Link>
    </li>
    <li>
      <Link href="/industries/healthcare" className="flex items-center gap-2 text-gray-300 hover:text-primary text-sm transition-colors duration-200">
        <Stethoscope size={16} />
        Healthcare
      </Link>
    </li>
    <li>
      <Link href="/industries/ecommerce" className="flex items-center gap-2 text-gray-300 hover:text-primary text-sm transition-colors duration-200">
        <ShoppingCart size={16} />
        eCommerce
      </Link>
    </li>
    <li>
      <Link href="/industries/sports" className="flex items-center gap-2 text-gray-300 hover:text-primary text-sm transition-colors duration-200">
        <Trophy size={16} />
        Sports Technology
      </Link>
    </li>
  </ul>
</div>


          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center gap-2 text-gray-300 hover:text-primary text-sm transition-colors duration-200">
                    {item.icon}
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
    
    {/* Left: Copyright */}
    <div className="text-center md:text-left">
      <span>&copy; 2024 ClickSkill. All rights reserved.</span>
    </div>

    {/* Right: Links */}
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
