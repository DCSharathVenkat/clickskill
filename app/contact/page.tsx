"use client"

import type React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

const offices = [
  {
    country: "United States (HQ)",
    city: "Winter Garden",
    address: "Florida",
    phone: "+1 (571) 600-4595",
    email: "hello@clickskill.io",
    hours: "9:00 AM - 6:00 PM EST",
  },
]

const otherCountries = "India | Australia"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white text-gray-900">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/bgmainhero.png"
      alt="Background"
      fill
      className="object-cover"
      priority
    />
  </div>
  <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      Let's Build Something Amazing Together
    </h1>
    <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl">
      Ready to transform your business with cutting-edge technology? Our experts are here to help you every step
      of the way.
    </p>
  </div>

  {/* Wave Divider at Bottom */}
  <div className="absolute -bottom-px left-0 w-full z-0">
    <svg
      viewBox="0 0 1440 325"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-[60px] lg:h-[100px]"
    >
      <path
        d="M810.109 190.723V324.906H1439.97V141.635C1399.11 107.824 1358.5 72.4044 1316.96 48.4386C1146.99 -48.5261 971.704 0.680438 810.109 190.723Z"
        fill="#0A6373"
      />
      <path
        d="M654.316 239.05C706.182 255.407 756.402 284.718 808.124 302.496C881.8 327.838 958.526 329.369 1032.09 303.091C1103.57 277.612 1177.69 215.47 1248.33 183.899C1310.97 155.889 1379.36 144.355 1440 179.351V324.595H366.918V283.141C458.546 224.252 557.938 209.003 654.316 239.052V239.05Z"
        fill="#E66C6C"
      />
      <path
        d="M0 185.047L29.9989 177.248C59.9979 169.739 119.996 153.704 179.994 165.586C239.991 177.029 299.989 216.391 359.987 239.498C419.985 263.043 479.983 270.332 539.981 262.824C599.979 255.025 659.976 231.699 719.974 212.237C779.972 193.066 839.97 177.03 899.968 188.911C959.966 200.355 1019.96 239.717 1079.96 251.162C1139.96 263.043 1199.96 247.007 1259.95 251.162C1319.95 255.028 1379.95 278.35 1409.95 290.013L1439.97 301.858L1439.95 325H0V185.047Z"
        fill="#ffffff"
      />
    </svg>
  </div>
</section>


      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate mb-6">Get in Touch</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate mb-2">
                      Company *
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate mb-2">
                      Service Interest
                    </label>
                    <Select onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-ml">AI & ML Development</SelectItem>
                        <SelectItem value="product-engineering">Product Engineering</SelectItem>
                        <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                        <SelectItem value="staff-augmentation">Staff Augmentation</SelectItem>
                        <SelectItem value="grc">GRC Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate mb-2">
                      Project Budget
                    </label>
                    <Select onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                        <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                        <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                        <SelectItem value="500k+">$500K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate mb-6">Our Global Offices</h2>
              <p className="text-neutral-600 mb-8">
                With offices worldwide, we're always available to support your business needs.
              </p>

              <div className="space-y-6">
                {offices.map((office) => (
                  <Card key={office.country} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-slate mb-4">{office.country}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-neutral-600 text-sm">{office.address}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="text-neutral-600 text-sm hover:text-primary">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="text-neutral-600 text-sm hover:text-primary">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                          <p className="text-neutral-600 text-sm">{office.hours}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Other Countries */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <h3 className="font-semibold text-slate mb-2">Other Locations</h3>
                <p className="text-neutral-600 text-sm">{otherCountries}</p>
              </div>

              {/* Urgent Contact */}

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
