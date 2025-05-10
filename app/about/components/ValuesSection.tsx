"use client";

import { motion } from "framer-motion";

export default function ValuesSection() {
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
          <motion.div
            className="inline-block mb-4 px-3 py-1 bg-navy-900/10 text-navy-900 rounded-full text-sm font-medium"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span>Core Principles</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our values
          </h2>

          <div className="h-1 w-24 bg-blue-950 mx-auto rounded-full"></div>
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
              transition={{ delay: 0.6 }}>
              <p className="text-3xl font-bold mb-8">Built on Trust</p>
              <p className="mb-8">
                We don&apos;t chase transactions; we build enduring
                partnerships. Trust is our currency, and we earn it every day.
              </p>

              <p className="text-3xl font-bold pt-4 mb-8">Driven by Integrity</p>
              <p className="mb-8">
                Doing the right thing isn&apos;t a choice; it&apos;s our core
                operating system. We hold ourselves to the highest ethical
                standards, always.
              </p>

              <p className="text-3xl font-bold pt-4 mb-8">
                Entrepreneurial at Heart
              </p>
              <p className="mb-8">
                We move fast, think bold, and take ownership like founders.
                Every challenge is an opportunity to create value.
              </p>

              <p className="text-3xl font-bold pt-4 mb-8">Growth, Together</p>
              <p>
                Our success is tied to yours. We align incentives, act as an
                extension of your team, and scale impact side by side.
              </p>
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
  );
}
