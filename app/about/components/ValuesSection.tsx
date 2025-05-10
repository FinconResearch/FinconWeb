"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      title: "Built on Trust",
      description:
        "We don't chase transactions; we build enduring partnerships. Trust is our currency, and we earn it every day.",
      icon: CheckCircle,
    },
    {
      title: "Driven by Integrity",
      description:
        "Doing the right thing isn't a choice; it's our core operating system. We hold ourselves to the highest ethical standards, always.",
      icon: CheckCircle,
    },
    {
      title: "Entrepreneurial at Heart",
      description:
        "We move fast, think bold, and take ownership like founders. Every challenge is an opportunity to create value.",
      icon: CheckCircle,
    },
    {
      title: "Growth, Together",
      description:
        "Our success is tied to yours. We align incentives, act as an extension of your team, and scale impact side by side.",
      icon: CheckCircle,
    },
  ]

  return (
    <motion.section
      className="py-24 px-6 md:px-12 relative bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-70 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full opacity-70 translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span>Core Principles</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our values</h2>

          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {/* Card decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full"></div>

              <div className="mb-4 text-blue-600">
                <value.icon className="h-10 w-10" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{value.title}</h3>

              <p className="text-gray-700 leading-relaxed relative z-10">{value.description}</p>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Additional decorative pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl opacity-5 pointer-events-none">
        <div className="w-full h-full border-[40px] border-blue-900 rounded-full"></div>
      </div>
    </motion.section>
  )
}
