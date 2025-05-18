"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPost({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the blog post data based on the ID
  const post = {
    id: params.id,
    title: "The Future of Web Development",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
      <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
      <h2>The Rise of AI in Development</h2>
      <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
      <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
      <h2>The Importance of Performance</h2>
      <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
      <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    `,
    date: "May 12, 2025",
    author: "SIdak",
    category: "Technology",
    readTime: "5 min read",
    image: "/placeholder.svg?height=600&width=1200",
    authorImage: "/placeholder.svg?height=100&width=100",
    tags: ["Web Development", "Future Tech", "JavaScript", "React"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-blue-50 to-transparent opacity-70 -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-indigo-50 opacity-70 -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-50 opacity-70 -z-10" />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/blog" className="inline-flex mt-11 items-center text-blue-600 hover:text-blue-800 group">
            <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="border-b border-dashed text-blue-600  pb-0.5">Back to all articles</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-blue-800 leading-tight">{post.title}</h1>

          <div className="flex items-center mb-10 border-b border-blue-100 pb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-blue-200">
              <Image
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="font-medium text-blue-800 text-lg">{post.author}</div>
              <div className="flex items-center text-sm text-blue-500">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <Clock className="h-3 w-3 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
              >
                <Share2 className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[500px] md:h-[600px] mb-16 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-16 pt-8 border-t border-blue-100">
            <div className="flex flex-wrap items-center">
              <span className="mr-4 text-blue-700 flex items-center font-medium">
                <Tag className="h-4 w-4 mr-2" />
                Tags:
              </span>
              {post.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="mr-2 mb-2 bg-blue-100 text-blue-800 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
