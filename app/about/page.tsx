"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import {  BarChart2, TrendingUp, Users } from "lucide-react"

export default function AboutUs() {
  const heroRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0])
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 0.9])
  const heroY = useTransform(heroScroll, [0, 0.5], [0, 100])

  const decorElements = [
    { icon: <BarChart2 className="h-full w-full hidden md:block" />, top: "23%", right: "2%", size: "80px", delay: 0.1 },
    { icon: <TrendingUp className="h-full w-full" />, bottom: "15%", left: "12%", size: "70px", delay: 0.2 },
    { icon: <Users className="h-full w-full" />, bottom: "25%", right: "15%", size: "65px", delay: 0.3 },
  ]

  return (
    <div className="min-h-screen  bg-gradient-to-b font-inter relative overflow-hidden">
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

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2 }}
          >
            <Image
              src="/AboutUsimage.jpg"
              alt="Finance background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <div className="container mx-auto max-w-7xl z-10 relative">
          <motion.div
            className="grid md:grid-cols-2  items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-black"
            >
              <motion.div
                className="inline-block mb-4 px-3 py-1 text-navy-900 rounded-full text-sm font-medium"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Financial Excellence
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                Who we are
              </motion.h1>
              <motion.div
                className="flex items-center space-x-2 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <div className="h-1 w-12 bg-blue-950 rounded-full"></div>
                <div className="h-1 w-24 bg-blue-950 rounded-full"></div>
              </motion.div>
            </motion.div>

            <motion.div
              className="  rounded-2xl p-8 bg-white/80 shadow-xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <AnimatePresence>
                
                  <motion.div
                    className="text-black/90 backdrop-blur-sm space-y-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="leading-relaxed">
                    Finance can be daunting—whether you&apos;re a large bank facing complex regulations or a small business owner juggling daily cash flow. These challenges, both intricate and fundamental, inspired the creation of FinCon Research.

                    </p>
                    <p className="leading-relaxed">
                    Founded on the belief that clear financial understanding should be universal, FinCon Research bridges the gap between the needs of large institutions and small enterprises. Our mission is simple yet impactful: to untangle the complexities of finance and empower businesses of all sizes to thrive.
                    </p>
                    <p className="leading-relaxed">
                    To serve this vision, FinCon Research established two core divisions.The <span className="font-bold">Capabilities Centre</span> The  caters to banks, asset managers, and financial institutions. We deliver deep market research, build precise valuation models, and offer comprehensive investment analytics—all at a fraction of the cost of hiring a full-time employee. These services equip clients with the clarity and tools needed to make sound, data-driven decisions.
                    </p>
                    <p className="leading-relaxed">
                    For small and medium businesses, our SME advisory services offer tailored financial consultancy. Custom dashboards help owners track metrics, manage financial data, and identify growth opportunities—all without the expense of a full-time CFO. This hands-on support helps SMEs gain control and confidently plan for the future.
                    </p>
                  </motion.div>
                
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          >
            <div className="text-black/80 text-sm mb-2">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center pt-1">
              <motion.div
                className="w-1.5 h-1.5 bg-black rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={valuesRef}
        className="py-32 px-6 md:px-12 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-3 py-1 bg-navy-900/10 text-navy-900 rounded-full text-sm font-medium"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Core Principles
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Our values</h2>
            <div className="h-1 w-24 bg-blue-950 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            
           

            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-navy-900/5 rounded-bl-full"></div>

              <motion.p
                className="text-xl md:text-2xl text-navy-800 leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                To provide exceptional financial advisory services through personalized attention and innovative
                solutions.
              </motion.p>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.2 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        className="py-32 px-6 md:px-12 bg-navy-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

        {/* Decorative elements */}
        

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-3 py-1 bg-white/20 text-black rounded-full text-sm font-medium"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              The Experts
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our team</h2>
            <div className="h-1 w-24 bg-blue-950 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image src="/AboutUsimage.jpg?height=1000&width=800" alt="Our team" fill className="object-cover" />
              <div className="absolute inset-0 "></div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-blue-950 shadow-xl"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.p
                className="text-xl md:text-2xl text-black leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                To be recognized as the most trusted partner in wealth management, setting new standards in financial
                services.
              </motion.p>

              <motion.div
                className="mt-8 pt-8 border-t border-blue-950"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-950 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-black font-medium">Expert Financial Team</div>
                    <div className="text-black/60 text-sm">Certified Financial Advisors</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        className="py-32 px-6 md:px-12 bg-gradient-to-b from-navy-900 to-navy-700 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-xl text-black/80 mb-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Let&apos;s discuss how we can help you achieve your financial goals.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="relative px-10 py-5 bg-gradient-to-r border border-blue-500 from-secondary to-secondary/80 text-navy-900 font-bold rounded-lg text-lg shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-white"
                  initial={{ x: "100%", opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10  group-hover:text-navy-900">Contact Us</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-3 gap-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1  rounded-full overflow-hidden"
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full  bg-blue-950"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

