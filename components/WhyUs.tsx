"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Award, Shield, Globe } from 'lucide-react'

const WhyUs = () => {
  const whyUsRef = useRef<HTMLElement>(null)
  const whyUsInView = useInView(whyUsRef, { once: true })

  return (
    <section ref={whyUsRef} className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() * 0.3 + 0.8],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
              <span >💡</span> <span className="text-blue-800 mr-3">Why Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Outsourcing to our specialized financial KPO isn’t just a cost-saving move—it’s a strategic decision that compounds efficiency and sharpens your edge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={whyUsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Deep Domain Expertise</h3>
                    <p className="text-gray-700">
                      Our analysts are fluent in the language of finance—whether it’s LBO modeling, comps benchmarking, sector deep dives, or CIM support.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Institutional-Grade Quality</h3>
                    <p className="text-gray-700">
                      We follow best practices adopted by leading banks and funds, ensuring every deck and model meets global standards.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-gray-800"></div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">White-Label Execution</h3>
                    <p className="text-gray-700">
                      We work behind the scenes, seamlessly integrating into your workflows under your brand.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={whyUsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Global Coverage</h3>
                    <p className="text-gray-700">
                      From North America to Europe to APAC, our team supports multi-time zone operations without compromising speed or quality.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-blue-900"></div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-800" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Secure & Compliant</h3>
                    <p className="text-gray-700">
                      We follow strict data security, confidentiality, and compliance protocols trusted by top-tier financial institutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default WhyUs
