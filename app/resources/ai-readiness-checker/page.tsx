"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle, XCircle, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const questions = [
  {
    id: "data-quality",
    question: "How would you rate your organization's data quality and accessibility?",
    options: [
      { value: "excellent", label: "Excellent - Clean, structured, and easily accessible", score: 4 },
      { value: "good", label: "Good - Mostly clean with some accessibility challenges", score: 3 },
      { value: "fair", label: "Fair - Mixed quality with significant gaps", score: 2 },
      { value: "poor", label: "Poor - Inconsistent and difficult to access", score: 1 },
    ],
  },
  {
    id: "technical-infrastructure",
    question: "What is the current state of your technical infrastructure?",
    options: [
      { value: "cloud-native", label: "Cloud-native with modern architecture", score: 4 },
      { value: "hybrid", label: "Hybrid cloud with some modern components", score: 3 },
      { value: "traditional", label: "Traditional on-premise with limited cloud", score: 2 },
      { value: "legacy", label: "Legacy systems with minimal modernization", score: 1 },
    ],
  },
  {
    id: "team-skills",
    question: "How would you assess your team's AI/ML skills and experience?",
    options: [
      { value: "expert", label: "Expert - Dedicated AI/ML team with proven experience", score: 4 },
      { value: "intermediate", label: "Intermediate - Some team members with AI/ML knowledge", score: 3 },
      { value: "basic", label: "Basic - Limited AI/ML experience across the team", score: 2 },
      { value: "none", label: "None - No current AI/ML expertise in-house", score: 1 },
    ],
  },
  {
    id: "use-cases",
    question: "How well-defined are your AI use cases and business objectives?",
    options: [
      { value: "clear", label: "Clear - Specific use cases with defined ROI metrics", score: 4 },
      { value: "identified", label: "Identified - General areas but need refinement", score: 3 },
      { value: "exploring", label: "Exploring - Early stage of identifying opportunities", score: 2 },
      { value: "unclear", label: "Unclear - No specific use cases identified yet", score: 1 },
    ],
  },
  {
    id: "budget-timeline",
    question: "What is your budget and timeline commitment for AI initiatives?",
    options: [
      { value: "committed", label: "Committed - Approved budget with clear timeline", score: 4 },
      { value: "planned", label: "Planned - Budget allocated for next fiscal year", score: 3 },
      { value: "considering", label: "Considering - Evaluating budget requirements", score: 2 },
      { value: "uncertain", label: "Uncertain - No clear budget or timeline yet", score: 1 },
    ],
  },
]

export default function AIReadinessCheckerPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateScore = () => {
    let totalScore = 0
    questions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.value === answer)
        if (option) {
          totalScore += option.score
        }
      }
    })
    return totalScore
  }

  const getReadinessLevel = (score: number) => {
    const percentage = (score / 20) * 100
    if (percentage >= 80)
      return {
        level: "High",
        color: "text-green-600",
        icon: CheckCircle,
        description: "Your organization is well-positioned for AI implementation",
        recommendations: [
          "Begin with pilot AI projects in high-impact areas",
          "Establish AI governance and ethics framework",
          "Scale successful pilots across the organization",
          "Invest in advanced AI capabilities and talent",
        ],
      }
    if (percentage >= 60)
      return {
        level: "Medium",
        color: "text-yellow-600",
        icon: AlertCircle,
        description: "Your organization has good potential with some areas to improve",
        recommendations: [
          "Improve data quality and accessibility",
          "Invest in team training and AI skills development",
          "Start with low-risk AI proof of concepts",
          "Develop clear AI strategy and use cases",
        ],
      }
    return {
      level: "Low",
      color: "text-red-600",
      icon: XCircle,
      description: "Your organization needs significant preparation before AI implementation",
      recommendations: [
        "Focus on data infrastructure and quality improvement",
        "Build foundational technical capabilities",
        "Invest in AI education and change management",
        "Partner with AI experts for guidance and support",
      ],
    }
  }

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true)
      // Scroll to results section after a brief delay to ensure it's rendered
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    }
  }

  const handleConsultationRedirect = () => {
    const score = calculateScore()
    const readiness = getReadinessLevel(score)
    const percentage = (score / 20) * 100

    // Create readiness summary
    const readinessSummary = {
      score,
      percentage: Math.round(percentage),
      level: readiness.level,
      description: readiness.description,
      answers: questions.map((question) => ({
        question: question.question,
        answer: question.options.find((opt) => opt.value === answers[question.id])?.label || "",
      })),
      recommendations: readiness.recommendations,
    }

    // Store in sessionStorage to pass to consultation page
    sessionStorage.setItem("aiReadinessResults", JSON.stringify(readinessSummary))

    // Redirect to consultation page
    router.push("/consultation?from=ai-readiness")
  }

  const score = calculateScore()
  const readiness = getReadinessLevel(score)
  const percentage = (score / 20) * 100

  return (
    <div className="pt-20" id="main-content">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">AI Readiness Checker</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Assess your organization's readiness for AI implementation and get personalized recommendations for your
              AI journey.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {!showResults ? (
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {questions.map((question, index) => (
                      <div key={question.id} className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate">
                          {index + 1}. {question.question}
                        </h3>
                        <RadioGroup
                          value={answers[question.id] || ""}
                          onValueChange={(value) => handleAnswerChange(question.id, value)}
                        >
                          {question.options.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                              <Label
                                htmlFor={`${question.id}-${option.value}`}
                                className="text-neutral-600 cursor-pointer"
                              >
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    ))}

                    <div className="pt-6">
                      <Button
                        onClick={handleSubmit}
                        disabled={Object.keys(answers).length !== questions.length}
                        className="w-full bg-primary hover:bg-primary/90"
                        size="lg"
                      >
                        Get My AI Readiness Score
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div ref={resultsRef}>
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="flex items-center justify-center space-x-3">
                        <readiness.icon className={`h-12 w-12 ${readiness.color}`} />
                        <div>
                          <h2 className="text-3xl font-bold text-slate">AI Readiness: {readiness.level}</h2>
                          <p className="text-neutral-600">{readiness.description}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Readiness Score</span>
                          <span>
                            {score}/20 ({Math.round(percentage)}%)
                          </span>
                        </div>
                        <Progress value={percentage} className="h-3" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <Card className="bg-gray-50">
                          <CardContent className="p-6">
                            <h3 className="font-semibold text-slate mb-3">Recommended Next Steps</h3>
                            <ul className="space-y-2 text-sm text-neutral-600">
                              {readiness.recommendations.map((rec, index) => (
                                <li key={index}>• {rec}</li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="bg-primary/5">
                          <CardContent className="p-6">
                            <h3 className="font-semibold text-slate mb-3">How We Can Help</h3>
                            <ul className="space-y-2 text-sm text-neutral-600">
                              <li>• AI Strategy Development</li>
                              <li>• Data Infrastructure Assessment</li>
                              <li>• Team Training & Upskilling</li>
                              <li>• Proof of Concept Development</li>
                              <li>• Implementation Roadmap</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="pt-6 space-y-4">
                        <Button
                          onClick={handleConsultationRedirect}
                          className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                          size="lg"
                        >
                          Get Personalized AI Strategy
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <p className="text-sm text-neutral-500">
                          Your results will be shared with our AI experts for a personalized consultation
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
