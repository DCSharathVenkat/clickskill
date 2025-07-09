"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calculator, DollarSign, Clock, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

// Pricing configuration - easily customizable
const PRICING_CONFIG = {
  projectTypes: {
    "web-app": {
      name: "Web Application",
      baseRate: 150,
      complexityMultiplier: { simple: 1, medium: 1.5, complex: 2.2 },
      description: "Custom web applications and platforms",
    },
    "mobile-app": {
      name: "Mobile Application",
      baseRate: 180,
      complexityMultiplier: { simple: 1.2, medium: 1.8, complex: 2.5 },
      description: "iOS and Android mobile applications",
    },
    "ai-ml": {
      name: "AI/ML Solution",
      baseRate: 220,
      complexityMultiplier: { simple: 1.5, medium: 2.2, complex: 3.0 },
      description: "Machine learning and AI implementations",
    },
    "data-engineering": {
      name: "Data Engineering",
      baseRate: 200,
      complexityMultiplier: { simple: 1.3, medium: 2.0, complex: 2.8 },
      description: "Data pipelines and analytics infrastructure",
    },
    "digital-transformation": {
      name: "Digital Transformation",
      baseRate: 175,
      complexityMultiplier: { simple: 1.4, medium: 2.1, complex: 3.2 },
      description: "Comprehensive digital modernization",
    },
    "devops-mlops": {
      name: "DevOps/MLOps",
      baseRate: 160,
      complexityMultiplier: { simple: 1.2, medium: 1.7, complex: 2.3 },
      description: "Infrastructure and deployment automation",
    },
  },
  teamSizes: {
    small: { name: "Small Team (2-4 people)", multiplier: 1 },
    medium: { name: "Medium Team (5-8 people)", multiplier: 1.8 },
    large: { name: "Large Team (9+ people)", multiplier: 2.5 },
  },
  urgencyMultipliers: {
    standard: { name: "Standard (3-6 months)", multiplier: 1 },
    fast: { name: "Fast Track (1-3 months)", multiplier: 1.3 },
    rush: { name: "Rush (< 1 month)", multiplier: 1.8 },
  },
}

export default function CostCalculatorPage() {
  const [projectType, setProjectType] = useState("")
  const [complexity, setComplexity] = useState("")
  const [teamSize, setTeamSize] = useState("")
  const [urgency, setUrgency] = useState("")
  const [duration, setDuration] = useState([12]) // weeks
  const [estimate, setEstimate] = useState<{
    low: number
    high: number
    recommended: number
  } | null>(null)

  const calculateEstimate = () => {
    if (!projectType || !complexity || !teamSize || !urgency) return null

    const config = PRICING_CONFIG.projectTypes[projectType as keyof typeof PRICING_CONFIG.projectTypes]
    const baseRate = config.baseRate
    const complexityMult = config.complexityMultiplier[complexity as keyof typeof config.complexityMultiplier]
    const teamMult = PRICING_CONFIG.teamSizes[teamSize as keyof typeof PRICING_CONFIG.teamSizes].multiplier
    const urgencyMult =
      PRICING_CONFIG.urgencyMultipliers[urgency as keyof typeof PRICING_CONFIG.urgencyMultipliers].multiplier

    const weeks = duration[0]
    const hoursPerWeek = teamSize === "small" ? 80 : teamSize === "medium" ? 160 : 240

    const baseEstimate = baseRate * complexityMult * teamMult * urgencyMult * weeks * (hoursPerWeek / 40)

    return {
      low: Math.round(baseEstimate * 0.8),
      high: Math.round(baseEstimate * 1.3),
      recommended: Math.round(baseEstimate),
    }
  }

  useEffect(() => {
    setEstimate(calculateEstimate())
  }, [projectType, complexity, teamSize, urgency, duration])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Project Cost
              <span className="block text-primary">Calculator</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get an instant estimate for your project. Our calculator uses real market data and our extensive project
              experience to provide accurate cost projections.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate flex items-center">
                    <DollarSign className="h-6 w-6 mr-2 text-primary" />
                    Project Details
                  </CardTitle>
                  <CardDescription>
                    Provide details about your project to get an accurate cost estimate.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Project Type */}
                  <div>
                    <Label className="text-base font-medium">Project Type</Label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(PRICING_CONFIG.projectTypes).map(([key, config]) => (
                          <SelectItem key={key} value={key}>
                            <div>
                              <div className="font-medium">{config.name}</div>
                              <div className="text-sm text-gray-500">{config.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Complexity */}
                  <div>
                    <Label className="text-base font-medium">Project Complexity</Label>
                    <Select value={complexity} onValueChange={setComplexity}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select complexity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simple">
                          <div>
                            <div className="font-medium">Simple</div>
                            <div className="text-sm text-gray-500">Basic features, standard integrations</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="medium">
                          <div>
                            <div className="font-medium">Medium</div>
                            <div className="text-sm text-gray-500">Custom features, multiple integrations</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="complex">
                          <div>
                            <div className="font-medium">Complex</div>
                            <div className="text-sm text-gray-500">Advanced features, complex architecture</div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Team Size */}
                  <div>
                    <Label className="text-base font-medium">Team Size</Label>
                    <Select value={teamSize} onValueChange={setTeamSize}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(PRICING_CONFIG.teamSizes).map(([key, config]) => (
                          <SelectItem key={key} value={key}>
                            {config.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <Label className="text-base font-medium">Timeline</Label>
                    <Select value={urgency} onValueChange={setUrgency}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(PRICING_CONFIG.urgencyMultipliers).map(([key, config]) => (
                          <SelectItem key={key} value={key}>
                            {config.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Duration Slider */}
                  <div>
                    <Label className="text-base font-medium">Project Duration: {duration[0]} weeks</Label>
                    <div className="mt-4">
                      <Slider
                        value={duration}
                        onValueChange={setDuration}
                        max={52}
                        min={4}
                        step={2}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>4 weeks</span>
                        <span>52 weeks</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Sidebar */}
            <div className="space-y-6">
              {/* Cost Estimate */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Cost Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {estimate ? (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {formatCurrency(estimate.recommended)}
                        </div>
                        <Badge variant="secondary" className="mb-4">
                          Recommended Budget
                        </Badge>
                      </div>

                      <Separator />

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Low Estimate</span>
                          <span className="font-medium">{formatCurrency(estimate.low)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">High Estimate</span>
                          <span className="font-medium">{formatCurrency(estimate.high)}</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="text-xs text-gray-500 space-y-1">
                        <p>• Estimates include development, testing, and deployment</p>
                        <p>• Final costs may vary based on specific requirements</p>
                        <p>• Maintenance and support costs not included</p>
                      </div>

                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link href="/consultation">
                          Get Detailed Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calculator className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Fill out the form to see your project estimate</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dedicated development team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">Project management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">Quality assurance testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="text-sm">Deployment and launch support</span>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Disclaimer:</strong> This calculator provides rough estimates based on typical project
                    parameters. Actual costs may vary significantly based on specific requirements, integrations, and
                    complexity. For accurate pricing, please schedule a consultation with our team.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
