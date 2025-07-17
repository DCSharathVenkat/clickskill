'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Brain,
  Code,
  Cloud,
  Zap,
  Database,
  Users,
  Rocket,
  GraduationCap,
  Shield,
  ChevronDown,
} from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const [typedText1, setTypedText1] = useState('')
  const [typedText2, setTypedText2] = useState('')
  const fullText1 = 'AI-Powered'
  const fullText2 = 'Innovation'

  useEffect(() => {
    let index = 0
    const typeFirst = () => {
      const interval1 = setInterval(() => {
        setTypedText1(fullText1.slice(0, index + 1))
        index++
        if (index === fullText1.length) {
          clearInterval(interval1)
          setTimeout(() => typeSecond(), 300)
        }
      }, 80)
    }

    const typeSecond = () => {
      let i = 0
      const interval2 = setInterval(() => {
        setTypedText2(fullText2.slice(0, i + 1))
        i++
        if (i === fullText2.length) {
          clearInterval(interval2)
        }
      }, 80)
    }

    typeFirst()
  }, [])

  const features = [
    { Icon: Brain, title: 'AI & ML' },
    { Icon: Code, title: 'Product Engineering' },
    { Icon: Cloud, title: 'MLOps & DevOps' },
    { Icon: Zap, title: 'Digital Transformation' },
    { Icon: Database, title: 'Data Engineering' },
    { Icon: Users, title: 'Staff Augmentation' },
    { Icon: Rocket, title: 'Corporate Venturing' },
    { Icon: GraduationCap, title: 'EdTech' },
    { Icon: Shield, title: 'GRC' },
  ]

  return (
    <section className="relative w-full pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-white text-gray-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgmainhero.png"
          alt="Background Graphic"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left text */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="lg:text-4xl font-extrabold leading-snug mb-6">
            Empower Your Business with<br />{' '}
            <span className="whitespace-nowrap bg-gradient-to-r from-[#b5331f] via-[#d4471f] to-[#f97316] bg-clip-text text-transparent">
              {typedText1} {typedText2}
            </span>
          </h1>

          <p className="text-lg text-gray-700 mb-10">
            Scalable technology, enterprise-grade innovation and next-gen AI capabilities — all in one platform
            designed to accelerate your growth.
          </p>

          {/* Icons with tooltips */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
            {features.map(({ Icon, title }, idx) => (
              <div key={idx} className="relative group flex flex-col items-center">
                <Icon className="h-8 w-8 text-gray-700 hover:text-gray-900 transition-transform duration-300 group-hover:animate-bounce" />
                <span className="absolute top-12 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-orange-400 to-yellow-500 rounded-md shadow-lg whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20">
                  {title}
                  <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-400 rotate-45 z-[-1]" />
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right images (Mobile and Tablet) */}
        <motion.div
  className="w-full lg:w-1/2 flex items-center justify-center space-x-[-60px] lg:space-x-[-80px] mt-0 lg:-mt-50"
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
>
  {/* Larger iPhone image */}
<motion.div
  style={{ marginTop: '200px' }}
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut',
  }}
>
  <Image
    src="/images/iphone.png"
    alt="Mobile Interface"
    width={800}           
    height={2400}          
    priority
  />
</motion.div>



  {/* iPad image */}
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
      src="/images/ipad.png"
      alt="Tablet Interface"
      width={1800}
      height={1500}
      className="mx-auto drop-shadow-xl"
      priority
    />
  </motion.div>
</motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center mt-12 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-600">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 text-gray-600" />
        </div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute -bottom-px left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 325"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px] lg:h-[300px]"
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
  )
}
