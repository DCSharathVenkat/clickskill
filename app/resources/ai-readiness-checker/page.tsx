'use client'

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle, XCircle, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

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
        if (option) totalScore += option.score
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
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }

  const handleConsultationRedirect = () => {
    const score = calculateScore()
    const readiness = getReadinessLevel(score)
    const percentage = (score / 20) * 100

    sessionStorage.setItem(
      "aiReadinessResults",
      JSON.stringify({
        score,
        percentage: Math.round(percentage),
        level: readiness.level,
        description: readiness.description,
        answers: questions.map((q) => ({
          question: q.question,
          answer: q.options.find((o) => o.value === answers[q.id])?.label || "",
        })),
        recommendations: readiness.recommendations,
      })
    )

    router.push("/consultation?from=ai-readiness")
  }

  const score = calculateScore()
  const readiness = getReadinessLevel(score)
  const percentage = (score / 20) * 100

  return (
    <div className="pt-20" id="main-content">
      {/* Hero Section with Image Background and Wave */}
      <section className="relative h-[520px] flex items-center justify-center">
        <Image
          src="/images/bgmainhero.png"
          alt="AI Hero Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-10 text-center max-w-4xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">AI Readiness Checker</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-800 leading-relaxed">
            Assess your organization's readiness for AI implementation and get personalized recommendations for your AI journey.
          </p>
        </div>
        <div className="absolute bottom-0 w-full">
<svg viewBox="0 0 1440 325" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[100px] lg:h-[100px]">
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

      {/* Assessment Form */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {!showResults ? (
              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-8">
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
                            <Label htmlFor={`${question.id}-${option.value}`} className="text-neutral-600 cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                  <Button
                    onClick={handleSubmit}
                    disabled={Object.keys(answers).length !== questions.length}
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    Get My AI Readiness Score
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div ref={resultsRef}>
                <Card className="shadow-lg">
                  <CardContent className="p-8 text-center space-y-6">
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
                        <span>{score}/20 ({Math.round(percentage)}%)</span>
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
