"use client"

import { motion } from "framer-motion"


export default function TeamSection() {
  return (
    <motion.section
      className="py-32 px-6 md:px-12 bg-navy-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

      <div className="relative z-10">
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

        <div className="grid md:grid-cols-1 gap-12 items-center"> {/* Changed to single column */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-blue-600 shadow-xl mx-auto max-w-4xl"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="text-xl md:text-2xl text-center text-black leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
                <p className="text-3xl font-bold mb-8">Our Team</p>
                <p className="mb-8"> We are a team of builders. Entrepreneurial, driven, and grounded in real-world problem solving. While we may be early in our journey, we bring with us the energy of a startup and the mindset of long-term partners.</p>
                
                <p className="text-3xl font-bold pt-4 mb-8">OUR LEADERSHIP</p>
                <p className="mb-1">Our founding team brings experience across investment banking, private equity, and consulting. With exposure to global markets and top institutions, we have seen first-hand how high-impact teams operate and we are building that DNA into everything we do.</p><br/>

                <p className="mb-8">We are not chasing scale for the sake of it. We are here to do focused, thoughtful work that creates tangible value for our clients and partners.</p>
                                                                     

                <p className="text-3xl font-bold pt-4 mb-8">OUR ASSOCIATES & ANALYSTS</p>
                <p className="mb-8">Our analysts and associates are sharp, curious, and execution-focused. Handpicked from top institutions, they are trained in the fundamentals of finance, legal frameworks, and project delivery. We invest in developing talent that is not just technically sound but also client-ready from day one.</p>

                <p className="text-3xl font-bold pt-4 mb-8">OUR ADVISORS</p>
                <p className="mb-1">To punch above our weight, we actively engage with industry experts, practitioners, and mentors who guide our thinking and help us stay aligned with the pace of global change.</p><br/>
                <span className="">Together, we are building more than a team. We are laying the foundation for a world-class capability center that delivers with integrity, insight, and ownership.</span> 
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
