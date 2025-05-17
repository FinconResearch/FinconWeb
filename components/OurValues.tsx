"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Clock, DollarSign, TrendingUp, Zap, Target, ChevronLeft, ChevronRight } from "lucide-react"

export default function OurValues() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const scrollRight = () => {
    if (activeIndex < 4) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const valueProps = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Accelerated Deal Execution",
      description:
        "Free up your internal team to focus on high-impact activities like deal sourcing, negotiations, and relationship management, while we manage the execution grind.",
      metric: "+30%",
      metricLabel: "Faster Deal Cycle Time",
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Productivity That Compounds",
      description:
        "Leverage our tech-enabled workflows and domain expertise to reduce research turnaround time and increase your team’s output.",
      metric: "+60%",
      metricLabel: "Increase In Analyst Productivity",
      color: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      borderColor: "border-violet-200",
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Access to Tier-1 Talent Without Overheads",
      description:
        "Tap into a dedicated team of investment research professionals with top-tier training—without the burden of hiring, onboarding, or retaining full-time staff.",
      metric: "50-70%",
      metricLabel: "Cost savings",
      color: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Scalable Research On-Demand",
      description:
        "Scale your research capacity up or down as your pipeline shifts—whether it’s for ad-hoc pitch decks, deep dives, or ongoing coverage.",
      metric: "2X",
      metricLabel: "Faster Team Ramp-up Time",
      color: "from-sky-500 to-blue-500",
      bgGradient: "from-sky-50 to-blue-50",
      borderColor: "border-sky-200",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Accuracy That Inspires Confidence",
      description:
        "Our rigorous QA process, financial modeling best practices, and experienced staff ensure every output is decision-ready.",
      metric: "98%",
      metricLabel: "Accuracy Across Deliverables",
      color: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-white" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm">
              Our Value Proposition
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"
            >
              Our Value Proposition
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We don&apos;t just deliver research—we amplify decision-making.
          </motion.p>
        </motion.div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={scrollLeft}
            className={`p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all ${activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}`}
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-2"
          >
            {valueProps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? "bg-gradient-to-r from-violet-500 to-indigo-500 scale-125" : "bg-gray-300"}`}
              />
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={scrollRight}
            className={`p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all ${activeIndex === 4 ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}`}
            disabled={activeIndex === 4}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>
        </div>

        {/* Cards container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {valueProps.map((prop, index) => (
              <AnimatePresence key={index}>
                <motion.div
                  className={`flex-shrink-0 w-full h-[500px] rounded-3xl overflow-hidden border ${prop.borderColor} shadow-xl`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: [0, 10, 0],
                    rotateX: [0, 5, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    rotateY: { repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", duration: 5, ease: "easeInOut" },
                    rotateX: { repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", duration: 7, ease: "easeInOut" },
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className={`h-full bg-gradient-to-br ${prop.bgGradient} p-8 flex flex-col`}>
                    {/* Card header with floating elements */}
                    <div className="relative mb-8">
                      <motion.div
                        className={`absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br ${prop.color} opacity-10`}
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 180, 270, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />

                      <motion.div
                        className={`p-5 rounded-2xl bg-white shadow-lg inline-block`}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
                          rotate: { repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" },
                        }}
                      >
                        <div className={`bg-gradient-to-br ${prop.color} text-white p-3 rounded-xl`}>{prop.icon}</div>
                      </motion.div>
                    </div>

                    {/* Card content */}
                    <motion.h3
                      className="text-3xl font-bold mb-4 text-gray-900"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      {prop.title}
                    </motion.h3>

                    <motion.p
                      className="text-lg text-gray-600 mb-8 flex-grow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      {prop.description}
                    </motion.p>

                    {/* Metric display */}
                    <motion.div
                      className="mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex items-end">
                        <motion.div
                          className={`text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${prop.color}`}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        >
                          {prop.metric}
                        </motion.div>
                        <div className="ml-4 text-gray-500 font-medium">{prop.metricLabel}</div>
                      </div>

                      <motion.div
                        className={`h-2 w-full mt-4 rounded-full bg-gray-200 overflow-hidden`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                      >
                        <motion.div
                          className={`h-full bg-gradient-to-r ${prop.color}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "80%" }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
