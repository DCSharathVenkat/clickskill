"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
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
} from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const fullText1 = "AI-Powered";
  const fullText2 = "Innovation";
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let index = 0;
    const typeFirst = () => {
      const interval1 = setInterval(() => {
        setTypedText1(fullText1.slice(0, index + 1));
        index++;
        if (index === fullText1.length) {
          clearInterval(interval1);
          setTimeout(() => typeSecond(), 400);
        }
      }, 100);
    };

    const typeSecond = () => {
      let i = 0;
      const interval2 = setInterval(() => {
        setTypedText2(fullText2.slice(0, i + 1));
        i++;
        if (i === fullText2.length) {
          clearInterval(interval2);
          setTimeout(() => setShowParagraph(true), 300);
        }
      }, 100);
    };

    typeFirst();
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/images/videobg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black/60" />
</div>


      {/* Foreground */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center min-h-screen">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
        >
          Transform Your Business with
        </h1>

<h2
  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-150 ${
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
  }`}
>
  <span className="bg-gradient-to-r from-[#6C63FF] via-[#8C7CFF] to-[#A395FF] bg-clip-text text-transparent transition-all duration-500 ease-in-out">
    {typedText1} {typedText2}
  </span>
</h2>


        {/* Paragraph */}
        <p
          className={`text-base md:text-lg text-white/90 leading-relaxed transform transition-all duration-1000 ${
            showParagraph ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          Global technology and consulting excellence delivering
          <br />
          <span className="inline-block">
            comprehensive solutions to accelerate your digital
            <br />
            future and drive measurable business outcomes.
          </span>
        </p>

        {/* Icons */}
<div
  className={`mt-10 flex flex-wrap gap-6 transform transition-all duration-1000 delay-100 ${
    showParagraph ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
  }`}
>
{[
  { Icon: Brain, title: "AI & ML" },
  { Icon: Code, title: "Product Engineering" },
  { Icon: Cloud, title: "MLOps & DevOps" },
  { Icon: Zap, title: "Digital Transformation" },
  { Icon: Database, title: "Data Engineering" },
  { Icon: Users, title: "Staff Augmentation" },
  { Icon: Rocket, title: "Corporate Venturing" },
  { Icon: GraduationCap, title: "EdTech" },
  { Icon: Shield, title: "GRC" },
].map(({ Icon, title }, idx) => (
  <div key={idx} className="relative group flex flex-col items-center">
    <Icon className="h-8 w-8 text-white/80 hover:text-white transition-transform duration-300 group-hover:animate-bounce" />
    
<span className="absolute top-12 px-4 py-2 text-xs font-medium text-white whitespace-nowrap bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20">
  {title}

  {/* Pointer triangle */}
  <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rotate-45 z-[-1]" />
</span>

  </div>
))}

</div>


        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-white/70 text-sm">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
