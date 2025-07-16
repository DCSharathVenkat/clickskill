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
    <section className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-14">
          What Our Clients Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-2xl p-10 shadow-xl mx-auto max-w-3xl"
            >
              <div className="text-lg text-gray-700 italic mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === index
                    ? 'bg-primary scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-12">
          <Button
            size="lg"
            className="bg-[#0A6373] text-white hover:bg-[#04a5ab] transition-all duration-300 hover:scale-105"
          >
            Work With Us
          </Button>
        </div>
      </div>
    </section>
  )
}
