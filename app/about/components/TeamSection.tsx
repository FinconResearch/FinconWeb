"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users } from "lucide-react"

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
              We are a team of builders. Entrepreneurial, driven, and grounded in real-world problem solving. While we may be early in our journey, we bring with us the energy of a startup and the mindset of long-term partners.

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
  )
}
