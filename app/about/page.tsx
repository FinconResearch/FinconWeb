"use client"

import HeroSection from "./components/WhoWeAre"
import ValuesSection from "./components/ValuesSection"
import TeamSection from "./components/TeamSection"
import ContactSection from "./components/ContactSection"
import { motion } from "framer-motion"
import { TrendingUp, Users } from "lucide-react"

import { Footer } from "@/components/layout/Footer"
import HowWeDeliver from "./components/HowWeDeliver"

export default function AboutUs() {
  const decorElements = [
    { icon: <TrendingUp className="md:h-full md:block md:w-full hidden" />, top: undefined, bottom: "15%", left: "15%", size: "70px", delay: 0.2 },
    { icon: <Users className="h-full w-full" />, top: undefined, bottom: "25%", right: "15%", size: "65px", delay: 0.3 },
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
      <HowWeDeliver/>
      <ValuesSection />
      <TeamSection />
      <ContactSection />
      <Footer/>
    </div>
  )
}

