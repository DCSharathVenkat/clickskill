'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO, TechCorp Industries',
    content:
      'ClickSkill transformed our legacy systems with their AI-powered solutions. The ROI was evident within the first quarter.',
    avatar: '/avatars/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    title: 'VP, Global Finance Solutions',
    content:
      'Their fintech expertise helped us launch our digital banking platform ahead of schedule.',
    avatar: '/avatars/michael.jpg',
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'CMO, HealthTech Innovations',
    content:
      'The telemedicine platform ClickSkill developed has revolutionized how we deliver patient care.',
    avatar: '/avatars/emily.jpg',
  },
]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = testimonials[index]

  return (
    <section className="relative py-24 px-6 md:px-10 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14">
          Trusted by Industry Leaders
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 mx-auto max-w-3xl"
            >
              <div className="text-xl text-gray-800 italic mb-8 leading-relaxed">
                “{testimonial.content}”
              </div>

              <div className="flex items-center justify-center gap-5 mt-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-200 shadow-md">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ring-1 ring-slate-300 ${
                  idx === index
                    ? 'bg-blue-600 scale-125 ring-blue-400'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Button
            size="lg"
            className="bg-[#0A6373] text-white hover:bg-[#04a5ab] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  )
}
