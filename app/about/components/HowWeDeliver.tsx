"use client"
import { motion } from "framer-motion"

function WhoWeServe() {
  return (
    <motion.section
      id="how-we-deliver"
      className="py-32 px-6 md:px-12 bg-white relative"
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">How We Deliver Value</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Overview Card */}
          <motion.div
            className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-navy-900/5 rounded-bl-full"></div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-2xl font-bold text-navy-800 mb-8 relative z-10">
                To serve this mission, FinCon Research operates through two core divisions:
              </p>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2 }}
            />
          </motion.div>

          {/* First Division */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full"></div>

            <div className="mb-6">
              <div className="inline-block bg-blue-50 px-4 py-2 rounded-lg mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-800">The Capabilities Centre</h3>
            </div>

            <p className="text-navy-800 leading-relaxed mb-6">
              We support banks, asset managers, and financial institutions with deep market research, accurate valuation
              models, and robust investment analytics. Our services deliver the same quality as in-house teams but at a
              fraction of the cost. This helps clients make confident and data-backed decisions.
            </p>

            <motion.div
              className="h-1 w-full bg-blue-100 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* Second Division */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-teal-50 rounded-bl-full"></div>

            <div className="mb-6">
              <div className="inline-block bg-teal-50 px-4 py-2 rounded-lg mb-4">
                <span className="text-teal-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-800">SME Advisory Services</h3>
            </div>

            <p className="text-navy-800 leading-relaxed mb-6">
              For small and medium-sized businesses, we provide tailored financial consulting designed to deliver
              clarity without the cost of a full-time CFO. Our custom dashboards help business owners track key metrics,
              manage financials, and uncover growth opportunities with ease and precision.
            </p>

            <motion.div
              className="h-1 w-full bg-teal-100 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-teal-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Original content display for reference */}
        <motion.div
          className="hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.span
            className="text-xl md:text-2xl text-left text-navy-800 leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className=" text-2xl font-bold mb-8">
              To serve this mission, FinCon Research operates through two core divisions:
            </p>
            <p className="mb-8">1. The Capabilities Centre</p>
            <p className=" pt-4 mb-8">
              We support banks, asset managers, and financial institutions with deep market research, accurate valuation
              models, and robust investment analytics. Our services deliver the same quality as in-house teams but at a
              fraction of the cost. This helps clients make confident and data-backed decisions.
            </p>
            <p className=" mb-8">2. SME Advisory Services</p>
            <p className=" mb-8">
              For small and medium-sized businesses, we provide tailored financial consulting designed to deliver
              clarity without the cost of a full-time CFO. Our custom dashboards help business owners track key metrics,
              manage financials, and uncover growth opportunities with ease and precision.{" "}
            </p>
          </motion.span>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default WhoWeServe
