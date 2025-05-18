"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  BarChart3,
  Clock,
  DollarSign,
  PieChart,
  Users,
  CheckCircle,
  TrendingUp,
  Zap,
  Target,
} from "lucide-react"

export default function OurValues() {
  const valuePropsRef = useRef(null)
  const valuePropsInView = useInView(valuePropsRef, { once: true, amount: 0.2 })

  return (
    <section id="value-props" ref={valuePropsRef} className="py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={valuePropsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-black md:text-5xl font-bold mb-4">
          Our <span className="text-blue-600">Value</span> Proposition
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto">
          We don’t just deliver research—we amplify decision-making.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        <motion.div
          className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={valuePropsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -10 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>

          <div className="relative">
            <div className="bg-blue-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-2xl text-black font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
              Accelerated Deal Execution
            </h3>

            <p className="text-gray-700 mb-8 h-24">
              Free up your internal team to focus on high-impact activities like deal sourcing, negotiations, and relationship management, while we manage the execution grind.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">Faster Deal Cycle Time</span>
              </div>

              <motion.div
                className="text-3xl font-bold text-blue-600"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={valuePropsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                +30%
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={valuePropsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -10 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>

          <div className="relative">
            <div className="bg-blue-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-blue-700" />
            </div>

            <h3 className="text-2xl text-black font-bold mb-4 group-hover:text-blue-700 transition-colors duration-300">
              Productivity That Compounds
            </h3>

            <p className="text-gray-700 mb-8 h-24">
              Leverage our tech-enabled workflows and domain expertise to reduce research turnaround time and increase your team’s output.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PieChart className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">Increase In Analyst Productivity</span>
              </div>

              <motion.div
                className="text-3xl font-bold text-blue-700"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={valuePropsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                +60%
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={valuePropsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -10 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>

          <div className="relative">
            <div className="bg-blue-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-blue-800" />
            </div>

            <h3 className="text-2xl text-black font-bold mb-4 group-hover:text-blue-800 transition-colors duration-300">
              Access to Tier-1 Talent Without Overheads
            </h3>

            <p className="text-gray-700 mb-8 h-24">
              Tap into a dedicated team of investment research professionals with top-tier training—without the burden of hiring, onboarding, or retaining full-time staff.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">Cost savings</span>
              </div>

              <motion.div
                className="text-3xl font-bold text-blue-800"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={valuePropsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                50-70%
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={valuePropsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -10 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-gray-800"></div>
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-gray-100 rounded-full opacity-70"></div>

          <div className="relative">
            <div className="bg-gray-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-gray-800" />
            </div>

            <h3 className="text-2xl text-black font-bold mb-4 group-hover:text-blue-500 transition-colors duration-300">
              Scalable Research On-Demand
            </h3>

            <p className="text-gray-700 mb-8 h-24">
              Scale your research capacity up or down as your pipeline shifts—whether it’s for ad-hoc pitch decks, deep dives, or ongoing coverage.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">Faster Team Ramp-up Time</span>
              </div>

              <motion.div
                className="text-3xl font-bold text-blue-500"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={valuePropsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                2X
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={valuePropsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ y: -10 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>

          <div className="relative">
            <div className="bg-blue-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-2xl text-black font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
              Accuracy That Inspires Confidence
            </h3>

            <p className="text-gray-700 mb-8 h-24">
              Our rigorous QA process, financial modeling best practices, and experienced staff ensure every output is decision-ready.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">Accuracy Across Deliverables</span>
              </div>

              <motion.div
                className="text-3xl font-bold text-blue-600"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={valuePropsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                98%
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}