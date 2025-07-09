"use client"

import { useEffect, useState } from "react"

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successfully completed projects across industries",
  },
  { number: 50, suffix: "+", label: "Global Clients", description: "Fortune 500 companies trust our expertise" },
  { number: 6, suffix: "", label: "Countries", description: "Global presence with local expertise" },
  { number: 99, suffix: "%", label: "Client Satisfaction", description: "Consistently exceeding client expectations" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Trusted by Industry Leaders Worldwide</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Our track record speaks for itself. We've helped organizations across the globe achieve their digital
            transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="mb-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {isVisible ? <CountUp end={stat.number} suffix={stat.suffix} /> : "0"}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate mb-2 group-hover:text-primary transition-colors">
                {stat.label}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
