"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter submission
    console.log("Newsletter signup:", email)
    setEmail("")
    // Show success message
    alert("Thank you for subscribing! You'll receive our latest insights and updates.")
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary to-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Join hundreds of forward-thinking companies that have accelerated their digital transformation with
            ClickSkill's expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full group"
              asChild
            >
              <Link href="/consultation">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Free</div>
              <div className="text-white/80">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Global Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">30 Days</div>
              <div className="text-white/80">Project Kickoff</div>
            </div>
          </div>*/}

          {/* Newsletter Section */}
          {/*<div className="border-t border-white/20 pt-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with ClickSkill</h3>
              <p className="text-white/80 mb-6">
                Get the latest insights on AI, digital transformation, and technology trends delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 rounded-full px-6"
                  required
                />
                <Button
                  type="submit"
                  className="bg-white text-primary hover:bg-white/90 whitespace-nowrap rounded-full px-8"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}
