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
import { motion, useAnimation } from 'framer-motion' // Import useAnimation

export function HeroSection() {
  const [typedText1, setTypedText1] = useState('')
  const [typedText2, setTypedText2] = useState('')
  const fullText1 = 'Engineering Solutions'
  const fullText2 = 'That Deliver Results'

  // Controls for description and features animations
  const controlsDescription = useAnimation()
  const controlsFeatures = useAnimation()

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;

    // Function to type the first line
    const typeFirstLine = () => {
      const interval1 = setInterval(() => {
        setTypedText1(prev => fullText1.slice(0, index1 + 1));
        index1++;
        if (index1 > fullText1.length) { // Use > for clean stop
          clearInterval(interval1);
          setTimeout(typeSecondLine, 50); // Small delay between lines
        }
      }, 40); // Typing speed (e.g., 40ms)
      return interval1; // Return interval ID for cleanup
    };

    // Function to type the second line
    const typeSecondLine = () => {
      const interval2 = setInterval(() => {
        setTypedText2(prev => fullText2.slice(0, index2 + 1));
        index2++;
        if (index2 > fullText2.length) { // Use > for clean stop
          clearInterval(interval2);
          // Once typing is done, start the next animations
          setTimeout(() => {
            controlsDescription.start({ opacity: 1, x: 0 });
            controlsFeatures.start(i => ({
              opacity: 1,
              x: 0,
              transition: { delay: i * 0.1 } // Staggered animation for each feature icon
            }));
          }, 200); // Small delay after typing before content animates
        }
      }, 40); // Typing speed
      return interval2; // Return interval ID for cleanup
    };

    // Start typing immediately when the component mounts
    const initialInterval1 = typeFirstLine();

    // Cleanup function for intervals
    return () => {
      // Clear any pending intervals if the component unmounts early
      clearInterval(initialInterval1);
    };
  }, [controlsDescription, controlsFeatures]); // Dependencies for useAnimation

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
          initial={{ opacity: 0, x: -40 }} // Initial animation for the whole text block
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-6">
            <br />{' '}
            <span className="whitespace-nowrap text-black">
              {typedText1} <br/> {typedText2}
            </span>
          </h1>

          {/* Description with fade-in from left */}
          <motion.p
            className="text-lg text-gray-700 mb-10"
            initial={{ opacity: 0, x: -50 }} // Start hidden and off to the left
            animate={controlsDescription} // Control this animation with useAnimation
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            ClickSkill help enterprises build, integrate, and scale intelligent products with a focus on security, performance, and lasting transformation.
          </motion.p>

          {/* Icons with tooltips - each animated individually */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
            {features.map(({ Icon, title }, idx) => (
              <motion.div
                key={idx}
                className="relative group flex flex-col items-center"
                custom={idx} // Pass index as custom prop for staggered animation
                initial={{ opacity: 0, x: -20 }} // Start hidden and slightly off to the left
                animate={controlsFeatures} // Control this animation with useAnimation
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <Icon className="h-8 w-8 text-gray-700 hover:text-gray-900 transition-transform duration-300 group-hover:animate-bounce" />
                <span className="absolute top-12 px-3 py-1.5 text-xs font-medium text-white [background-color:#E66C6C] rounded-md shadow-lg whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20">
                  {title}
                  <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-400 rotate-45 z-[-1]" />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* iPad image */}
        <motion.div
          className="w-full lg:w-1/2 mt-0 lg:mt-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 100 }}
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
                src="/images/hero.png"
                alt="Tablet Interface"
                width={1000}
                height={1000}
                className="mx-auto drop-shadow-xl -mt-1"
                priority
              />
            </motion.div>
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
    className="w-full h-[60px] lg:h-[250px]"
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