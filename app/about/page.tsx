"use client"

import HeroSection from "./components/HeroSection"
import ValuesSection from "./components/ValuesSection"
import TeamSection from "./components/TeamSection"
import ContactSection from "./components/ContactSection"
import { motion } from "framer-motion"
import { BarChart2, TrendingUp, Users } from "lucide-react"

export default function AboutUs() {
  const decorElements = [
    { icon: <BarChart2 className="h-full w-full hidden md:block" />, top: "23%", right: "2%", size: "80px", delay: 0.1 },
    { icon: <TrendingUp className="h-full w-full" />, bottom: "15%", left: "12%", size: "70px", delay: 0.2 },
    { icon: <Users className="h-full w-full" />, bottom: "25%", right: "15%", size: "65px", delay: 0.3 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b font-inter relative overflow-hidden">
      {/* Decorative Background Elements */}
      {decorElements.map((elem, index) => (
        <motion.div
          key={index}
          className="absolute z-0 text-navy-900/5"
          style={{
            top: elem.top,
            left: elem.left,
            right: elem.right,
            bottom: elem.bottom,
            width: elem.size,
            height: elem.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 10, 0] }}
          transition={{
            delay: elem.delay,
            duration: 0.8,
            rotate: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          {elem.icon}
        </motion.div>
      ))}

      {/* Sections */}
      <HeroSection />
      <ValuesSection />
      <TeamSection />
      <ContactSection />
    </div>
  )
}

