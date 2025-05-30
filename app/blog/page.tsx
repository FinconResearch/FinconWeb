"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactSection from "../about/components/ContactSection"
import { Footer } from "@/components/layout/Footer"

export default function BlogPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "Empowering Prosperity: The Surge of Women HNWIs in India",
      date: "May 12, 2025",
      category: "FinancialEmpowerment",
      readTime: "5 min read",
      image: "/AboutUsimage.jpg",
      slug: "/blog/empowering-prosperity",
    },
    {
      id: 2,
      title: "Global Financial Services M&A and Capital Markets: A FinconResearch Overview",
      date: "May 5, 2025",
      category: "FinancialServices",
      readTime: "8 min read",
      image: "/AboutUsimage.jpg",
      slug: "blog/global-financial",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="min-h-screen mt-11 bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-blue-50 to-transparent opacity-70 -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-indigo-50 opacity-70 -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-50 opacity-70 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative"
      >
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-3 px-4 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-medium"
          >
            INSIGHTS & PERSPECTIVES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-blue-800 tracking-tight"
          >
            Blog & Insights
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl text-blue-600 max-w-2xl mx-auto"
          >
            Thoughts, ideas, and insights on the latest trends in the industry
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:p-4 md:p-8 lg:px-32 gap-10"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(post.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 relative"
              whileHover={{ y: -10 }}
            >
              <Link href={post.slug ?? "#"} className="block relative overflow-hidden h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700"
                  style={{
                    transform: hoveredCard === post.id ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-blue-50 px-3 py-1 rounded-full text-sm font-medium text-blue-700 shadow-md">
                  {post.category}
                </div>
              </Link>
              <div className="p-7">
                <div className="flex items-center text-sm text-blue-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-blue-500 bg-blue-50 px-3 py-1 rounded-full">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800 group-hover:text-blue-700 transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="group"
                  >
                    <Link
                      href={post.slug ?? "#"}
                      className="inline-flex items-center mb-8 text-blue-800 font-medium group-hover:text-blue-700 transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <ContactSection />
      <Footer />
    </div>
  )
}
