"use client"

import { useState } from "react"
import emailjs from "emailjs-com"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Clock,
  Users,
  Zap,
  ArrowRight,
  Calendar,
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image"

const SERVICE_ID = "service_1uxbhhu"
const TEMPLATE_ID = "template_2yf41d7"
const PUBLIC_KEY = "gurLHZgOM8lP3NZ7b"

const projectTypes = [
  "AI & Machine Learning",
  "Product Engineering",
  "Digital Transformation",
  "Data Engineering",
  "Mobile App Development",
  "Web Development",
  "Cloud Migration",
  "DevOps & MLOps",
  "Staff Augmentation",
  "Other",
]

const budgetRanges = [
  "Under $25K",
  "$25K - $50K",
  "$50K - $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K+",
  "Not sure yet",
]

const timelines = [
  "ASAP (Rush project)",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "12+ months",
  "Flexible",
]

const benefits = [
  {
    icon: CheckCircle,
    title: "Free 60-Minute Consultation",
    description:
      "Comprehensive project assessment and strategic recommendations",
  },
  {
    icon: Clock,
    title: "24-Hour Response Time",
    description: "Quick turnaround on all consultation requests",
  },
  {
    icon: Users,
    title: "Expert Team Access",
    description:
      "Connect with our senior architects and technology leaders",
  },
  {
    icon: Zap,
    title: "Actionable Insights",
    description:
      "Leave with a clear roadmap and next steps for your project",
  },
]

export default function ConsultationClientPage() {
  const [selectedProjectType, setSelectedProjectType] = useState("")
  const [selectedBudget, setSelectedBudget] = useState("")
  const [selectedTimeline, setSelectedTimeline] = useState("")
  const [isSent, setIsSent] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value,
      projectType: selectedProjectType,
      budget: selectedBudget,
      timeline: selectedTimeline,
      message: e.target.message.value,
    }

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      console.log("Email sent:", result.text)
      setIsSent(true)
    } catch (error: any) {
      console.error("EmailJS error:", error?.text || error)
      setErrorMsg("There was a problem sending your message.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
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
          <Badge className="mb-4 bg-primary/50 text-gray-900 border-primary/80 text-base px-4 py-2 rounded-md">
            Schedule Consultation
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-Gray-800">
            Let's Build Something
            <span className="block text-gray-800">Amazing Together</span>
          </h1>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation with our experts to discuss your project, explore possibilities, and create a roadmap for success.
          </p>
        </div>
        <div className="absolute -bottom-px left-0 w-full z-0">
          <svg viewBox="0 0 1440 325" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] lg:h-[100px]">
            <path d="M810.109 190.723V324.906H1439.97V141.635C1399.11 107.824 1358.5 72.4044 1316.96 48.4386C1146.99 -48.5261 971.704 0.680438 810.109 190.723Z" fill="#0A6373" />
            <path d="M654.316 239.05C706.182 255.407 756.402 284.718 808.124 302.496C881.8 327.838 958.526 329.369 1032.09 303.091C1103.57 277.612 1177.69 215.47 1248.33 183.899C1310.97 155.889 1379.36 144.355 1440 179.351V324.595H366.918V283.141C458.546 224.252 557.938 209.003 654.316 239.052V239.05Z" fill="#E66C6C" />
            <path d="M0 185.047L29.9989 177.248C59.9979 169.739 119.996 153.704 179.994 165.586C239.991 177.029 299.989 216.391 359.987 239.498C419.985 263.043 479.983 270.332 539.981 262.824C599.979 255.025 659.976 231.699 719.974 212.237C779.972 193.066 839.97 177.03 899.968 188.911C959.966 200.355 1019.96 239.717 1079.96 251.162C1139.96 263.043 1199.96 247.007 1259.95 251.162C1319.95 255.028 1379.95 278.35 1409.95 290.013L1439.97 301.858L1439.95 325H0V185.047Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-slate mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl text-slate">Tell Us About Your Project</CardTitle>
                  <CardDescription className="text-base">
                    The more details you provide, the better we can prepare for our consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSent ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-slate mb-2">Request Submitted!</h3>
                      <p className="text-gray-600 mb-6">We'll get back to you shortly.</p>
                      <Button asChild>
                        <a href="/">Return to Home</a>
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><Label htmlFor="firstName">First Name *</Label><Input id="firstName" name="firstName" required /></div>
                        <div><Label htmlFor="lastName">Last Name *</Label><Input id="lastName" name="lastName" required /></div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required /></div>
                        <div><Label htmlFor="phone">Phone *</Label><Input id="phone" name="phone" type="tel" required /></div>
                      </div>

                      <div><Label htmlFor="company">Company *</Label><Input id="company" name="company" required /></div>

                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-slate mb-4">Project Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label>Project Type *</Label>
                            <Select value={selectedProjectType} onValueChange={setSelectedProjectType}>
                              <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                              <SelectContent>
                                {projectTypes.map((type) => (
                                  <SelectItem key={type} value={type}>{type}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Budget *</Label>
                            <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                              <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range}>{range}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Timeline *</Label>
                            <Select value={selectedTimeline} onValueChange={setSelectedTimeline}>
                              <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
                              <SelectContent>
                                {timelines.map((t) => (
                                  <SelectItem key={t} value={t}>{t}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div><Label htmlFor="message">Project Description *</Label><Textarea id="message" name="message" rows={5} required /></div>

                      {errorMsg && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                          <p className="text-red-600 text-sm">{errorMsg}</p>
                        </div>
                      )}

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-medium">
                        Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader><CardTitle className="text-lg">Get In Touch</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3"><Mail className="h-5 w-5 text-primary" /><div><p className="font-medium">Email</p><p className="text-sm text-gray-600">hello@clickskill.io</p></div></div>
                  <div className="flex items-center space-x-3"><Phone className="h-5 w-5 text-primary" /><div><p className="font-medium">Phone</p><p className="text-sm text-gray-600">+1 (571) 600-4595</p></div></div>
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Response Time</p><p className="text-sm text-gray-600">Within 24 hours</p></div></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
