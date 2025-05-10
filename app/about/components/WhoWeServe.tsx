import React from 'react'
import { motion } from 'framer-motion'


function WhoWeServe() {
  return (
     <motion.section
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Who We Serve</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
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

            <motion.span
              className="text-xl md:text-2xl text-left text-navy-800 leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >

              <p className=" text-2xl font-bold mb-8">At FinCon Research, we partner with forward-thinking entrepreneurs and business owners who are ready to take control of their finances and scale with strategy. Our services are ideal for:</p>


              <p className="mb-8">Small and Medium Enterprise (SME) Owners looking to improve profitability, optimize operations, and grow sustainably.</p>

              <p className=" pt-4 mb-8">Founders dependent on traditional accounting tools like Tally and basic bookkeeping, who need deeper financial clarity, automation, and strategic insights.</p>

              <p className=" mb-8">Business owners preparing for funding or IPO and seeking expert guidance on financial structuring, compliance, and investor readiness.</p>
              
              <p className=" mb-8">Family-run businesses aiming to professionalize their finances, plan for succession, and transition from legacy management to structured growth. </p>
              
              <p className=" mb-8">High-income professionals and consultants who earn well but need help converting cash flow into long-term, diversified wealth.</p>
              
              <p className=" mb-8">Entrepreneurs experiencing rapid growth who are unsure how to manage rising complexity across finances, taxation, and risk.</p>
              
              <p className=" mb-8">Owners with multiple ventures or verticals, who want consolidated financial dashboards, clear visibility, and streamlined reporting.</p>
              
              <p className=" mb-8">If you&apos;re looking to go beyond basic accounting and build a robust financial foundation for growth, FinCon Research is your strategic CFO partner—here to turn paper wealth into real wealth.</p>
            </motion.span>

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
  )
}

export default WhoWeServe
