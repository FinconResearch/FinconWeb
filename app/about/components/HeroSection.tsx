"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function HeroSection() {
  const heroRef = useRef(null)

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0])
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 0.9])
  const heroY = useTransform(heroScroll, [0, 0.5], [0, 100])

  return (
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
          className="grid md:grid-cols-2 items-center"
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
            className="rounded-2xl p-8 bg-white/80 shadow-xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="text-black/90 backdrop-blur-sm space-y-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="leading-relaxed">
              We are not just a service provider. We are a financial partner committed to the long term. Whether it is streamlining investment workflows or empowering entrepreneurs, FinCon Research is here to make finance work for everyone. Whether you&apos;re a large bank navigating complex regulations or a small business owner managing daily cash flow, financial challenges can be both intricate and fundamental. These realities inspired the creation of FinCon Research.
              </p>
              <p className="leading-relaxed">
              Founded on the belief that financial clarity should be accessible to all, FinCon Research bridges the gap between the needs of large institutions and growing enterprises. Our mission is simple and powerful. We aim to untangle the complexities of finance and empower businesses of all sizes to thrive.
              </p>
              
            </motion.div>
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
  )
}
