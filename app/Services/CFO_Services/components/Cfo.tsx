"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const InvestmentResearchSection = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-20 relative rounded-3xl overflow-hidden"
      >
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0  bg-gradient-to-r from-blue-950/70 to-blue-950/70 mix-blend-multipl" />
          <Image
            src="/AboutUsimage.jpg"
            alt="Investment Background"
            height={800}
            width={800}
            className="w-full h-full object-cover bg-white/10 rounded-3xl"
          />
        </div>
  
        <div className="relative z-20 py-20 px-6 md:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="h-1 bg-white mb-4"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  CFO Services
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="h-1 bg-white mb-6"
                />
                <p className="text-gray-200 mb-6">
                FinCon Research empowers entrepreneurs and professionals to achieve financial freedom through strategic CFO services. We offer Wealth Mapping, Dashboards, Investment Summaries, and Tax Planning to boost returns and reduce risk. Many business owners reinvest heavily and face high taxes, limiting personal growth. We help break this cycle with smart tax strategies, wealth structuring, and diversification guidance. Our mission is to turn paper wealth into real wealth, providing lasting financial clarity, flexibility, and growth beyond the business.
                </p>
  
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                </motion.div>
              </div>
            </motion.div>
  
            {/* Right Side*/}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Our Expertise</h3>
                  <h2 className="text-3xl font-bold text-white mb-4">Research Excellence</h2>
                  <div className="h-1 w-20 bg-white mb-6"></div>
                </div>
  
                <p className="text-gray-200">
                  Our investment and research services are built on a foundation of deep market knowledge, rigorous
                  analysis, and innovative thinking. We provide comprehensive insights that help our clients make informed
                  decisions in an ever-changing financial landscape.
                </p>
  
                <div className="space-y-4 mt-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-2 bg-white/20 rounded-lg text-white mt-1">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Data-Driven Insights</h4>
                      <p className="text-gray-200 text-sm">
                        Leveraging advanced analytics to uncover market opportunities and trends.
                      </p>
                    </div>
                  </motion.div>
  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-2 bg-white/20 rounded-lg text-white mt-1">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Customized Research</h4>
                      <p className="text-gray-200 text-sm">
                        Tailored research solutions designed to meet your specific investment objectives.
                      </p>
                    </div>
                  </motion.div>
  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-2 bg-white/20 rounded-lg text-white mt-1">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Global Market Coverage</h4>
                      <p className="text-gray-200 text-sm">
                        Comprehensive analysis across diverse markets and asset classes worldwide.
                      </p>
                    </div>
                  </motion.div>
  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-2 bg-white/20 rounded-lg text-white mt-1">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Strategic Advisory</h4>
                      <p className="text-gray-200 text-sm">
                        Expert guidance on investment strategies and portfolio optimization.
                      </p>
                    </div>
                  </motion.div>
                </div>
  
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="pt-4"
                >
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
  
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl z-10"
        />
      </motion.div>
    )
  }
  
  export default InvestmentResearchSection;