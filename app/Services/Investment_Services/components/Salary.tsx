"use client"

import {  useRef } from "react"
import { motion, useScroll, useTransform, useInView, useSpring} from "framer-motion"

export default function Salary() {
  // Refs for scroll animations
  const sectionRef = useRef(null)
  const usRef = useRef(null)
  const ukRef = useRef(null)
  const auRef = useRef(null)
  const savingsRef = useRef(null)
  const qualityRef = useRef(null)

  const isUSInView = useInView(usRef, { once: true, amount: 0.5 })
  const isUKInView = useInView(ukRef, { once: true, amount: 0.5 })
  const isAUInView = useInView(auRef, { once: true, amount: 0.5 })
  const isSavingsInView = useInView(savingsRef, { once: true, amount: 0.5 })
  const isQualityInView = useInView(qualityRef, { once: true, amount: 0.5 })

 

  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const smoothOpacity = useSpring(opacity, { damping: 15, stiffness: 100 })

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: smoothOpacity }}>
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-100 opacity-30 blur-3xl"
          style={{ y: y2 }}
        />
      </motion.div>

      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Cost Comparison
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how partnering with us can significantly reduce your operational costs while maintaining quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-12">
            {/* US Salary */}
            <motion.div
              ref={usRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isUSInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
              <div className="pl-6">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">$</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">United States</h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
                  <p className="text-gray-600 mb-3">Average Annual Salary</p>
                  <div className="flex items-baseline">
                    <span className="text-blue-600 text-2xl font-bold mr-1">$</span>
                    <span className="text-4xl font-extrabold text-blue-600">88,000</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* UK Salary */}
            <motion.div
              ref={ukRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isUKInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
              <div className="pl-6">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">£</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">United Kingdom</h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
                  <p className="text-gray-600 mb-3">Average Annual Salary</p>
                  <div className="flex items-baseline">
                    <span className="text-blue-600 text-2xl font-bold mr-1">£</span>
                    <span className="text-4xl font-extrabold text-blue-600">50,600</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Australia Salary */}
            <motion.div
              ref={auRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isAUInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
              <div className="pl-6">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">A$</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Australia</h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
                  <p className="text-gray-600 mb-3">Average Annual Salary</p>
                  <div className="flex items-baseline">
                    <span className="text-blue-600 text-2xl font-bold mr-1">A$</span>
                    <span className="text-4xl font-extrabold text-blue-600">105,000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            {/* Savings */}
            <motion.div
              ref={savingsRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isSavingsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-emerald-200 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-emerald-200 opacity-30" />
                <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-emerald-200 opacity-20" />

                <h3 className="text-2xl font-bold text-gray-800 mb-6 relative">Partner with us and save</h3>

                <div className="flex items-center justify-center mb-6 relative">
                  <div className="relative">
                    <span className="text-7xl font-black text-emerald-600">40</span>
                    <span className="text-5xl font-black text-emerald-600">%</span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isSavingsInView ? { width: "100%" } : {}}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="absolute -bottom-2 left-0 h-3 bg-emerald-200 rounded-full"
                      style={{ zIndex: -1 }}
                    />
                  </div>
                </div>

                <p className="text-gray-700 text-lg relative">
                  Even before factoring in the time, effort, and expenses involved in hiring and onboarding the right
                  talent.
                </p>
              </div>
            </motion.div>

            {/* Quality Statement */}
            <motion.div
              ref={qualityRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isQualityInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-blue-200 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-blue-200 opacity-30" />

                <h3 className="text-2xl font-bold text-gray-800 mb-4 relative">Quality Without Compromise</h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isQualityInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-gray-700 text-lg relative"
                >
                  <span className="font-bold text-blue-600 text-xl">We deliver the same (or better) quality</span> of
                  work without the overhead, so you get exceptional value without compromise.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
