"use client"
import { motion } from "framer-motion"

function WhoWeServe() {
  const clientTypes = [
    {
      title: "Small and Medium Enterprise (SME) Owners",
      description: "looking to improve profitability, optimize operations, and grow sustainably.",
    },
    {
      title: "Founders dependent on traditional accounting tools",
      description:
        "like Tally and basic bookkeeping, who need deeper financial clarity, automation, and strategic insights.",
    },
    {
      title: "Business owners preparing for funding or IPO",
      description: "seeking expert guidance on financial structuring, compliance, and investor readiness.",
    },
    {
      title: "Family-run businesses",
      description:
        "aiming to professionalize their finances, plan for succession, and transition from legacy management to structured growth.",
    },
    {
      title: "High-income professionals and consultants",
      description: "who earn well but need help converting cash flow into long-term, diversified wealth.",
    },
    {
      title: "Entrepreneurs experiencing rapid growth",
      description: "who are unsure how to manage rising complexity across finances, taxation, and risk.",
    },
    {
      title: "Owners with multiple ventures or verticals",
      description: "who want consolidated financial dashboards, clear visibility, and streamlined reporting.",
    },
  ]

  return (
    <motion.section
      className="py-20 px-6 md:px-12 max-w-full relative bg-white"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Who We Serve</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-100 to-transparent rounded-tr-full opacity-50"></div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                At <span className="text-blue-600">FinCon Research</span>, we partner with forward-thinking
                entrepreneurs and business owners who are ready to take control of their finances and scale with
                strategy. Our services are ideal for:
              </motion.p>

              <div className="grid gap-6 md:gap-8">
                {clientTypes.map((client, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 hover:shadow-lg transition-all duration-300"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">{client.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{client.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-lg md:text-xl font-medium leading-relaxed text-center">
                  If you&#39;re looking to go beyond basic accounting and build a robust financial foundation for growth,
                  <span className="font-bold"> FinCon Research</span> is your strategic CFO partner—here to turn
                  <span className="font-bold"> paper wealth into real wealth</span>.
                </p>
              </motion.div>
            </motion.div>

            {/* Move the bar here, after the padded content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 1.2 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default WhoWeServe
