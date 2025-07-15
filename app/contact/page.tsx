"use client"

import type React from "react"

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
      <section className="section-padding bg-gradient-to-br from-slate to-slate/90 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Ready to transform your business with cutting-edge technology? Our experts are here to help you every step
              of the way.
            </p>
          </div>
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
