'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Brain, Heart, Building } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const solutions = [
  {
    icon: Smartphone,
    title: 'Enterprise Mobility',
    description:
      'Mobile solutions for workforce productivity and customer engagement across all devices.',
    href: '/solutions/enterprise-mobility',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description:
      'AI-powered insights and automation to transform business processes.',
    href: '/solutions/ai-solutions',
  },
  {
    icon: Heart,
    title: 'Digital Healthcare',
    description:
      'HIPAA-compliant platforms that streamline care and improve outcomes.',
    href: '/solutions/digital-healthcare',
  },
  {
    icon: Building,
    title: 'Digital Transformation',
    description:
      'Modernizing legacy systems through end-to-end digital strategies.',
    href: '/solutions/enterprise-digital-transformation',
  },
]

export function SolutionsShowcase() {
  return (
    <section className="relative w-full pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-white text-gray-900">
      {/* Optional Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/bgmainhero.png"
          alt="Background Graphic"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left: Animated Image */}
        <motion.div
          className="w-full lg:w-1/2 mt-0 lg:-mt-16"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/images/illust.png"
              alt="Solutions Image"
              width={600}
              height={500}
              className="mx-auto drop-shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Right: Text and Cards */}
        <motion.div
          className="w-full lg:w-1/2 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-slate"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tailored Digital Solutions
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Scalable, secure, and future-ready platforms for every business need.
          </motion.p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
  {solutions.map((solution, index) => {
    const Icon = solution.icon
    return (
      <motion.div
        key={solution.title}
        className="h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="h-full group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl border-0 bg-white">
          <CardContent className="p-5 flex flex-col gap-4 h-full justify-between">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:animate-bounce transition-all duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-slate group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {solution.description}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href={solution.href}
                className="text-primary text-sm font-medium inline-flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  })}
</div>


          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              asChild
              className="bg-[#0A6373] text-white hover:bg-[#04a5ab] transition-all duration-300 hover:scale-105"
            >
              <Link href="/solutions">
                View All Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
