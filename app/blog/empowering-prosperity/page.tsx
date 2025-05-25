"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag, } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactSection from "@/app/about/components/ContactSection"
import { Footer } from "@/components/layout/Footer"

export default function BlogPost({ params }: { params?: { id: string } }) {
  const post = {
    id: params?.id || "sample-post",
    title: "Empowering Prosperity: The Surge of Women HNWIs in India",
    date: "May 12, 2025",
    author: "Sidak",
    category: "Wealth & Society",
    readTime: "5 min read",
    authorImage: "/placeholder.svg?height=100&width=100",
    tags: ["Women HNWIs", "India Wealth", "Entrepreneurship", "Financial Inclusion"],
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
          <Link href="/blog" className="inline-flex items-center pt-11 text-blue-600 hover:text-blue-800 group">
            <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="border-b border-dashed border-blue-100 pb-0.5">Back to all articles</span>
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
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              {/* Opening paragraph */}
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>
                  India&#39;s economic fabric is undergoing a significant transformation as women increasingly become key
                  contributors to wealth creation.
                </strong>{" "}
                This evolution is more than just a passing trend—it&#39;s a fundamental reshaping of the financial
                landscape, creating new avenues for wealth advisory firms such as <strong>Client Associates</strong>.
              </p>

              {/* Key Statistics */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Statistics</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Recent statistics reflect this shift clearly.</strong> By January 2025, women accounted for over{" "}
                <strong>40% of UDYAM-registered MSMEs</strong>, underlining their growing entrepreneurial drive.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                A recent survey of over 3,000 female entrepreneurs revealed key insights:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>
                  <strong>70%</strong> initiated their businesses due to personal motivation and ambition, not financial
                  need
                </li>
                <li>
                  <strong>66%</strong> cited professional growth, independence, and ambition as main incentives
                </li>
                <li>
                  Women applying for credit has <strong>tripled between 2019 and 2024</strong>
                </li>
              </ul>

              {/* Self-Empowerment Theory */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Self-Empowerment Hypothesis</h2>

              <p className="text-lg leading-relaxed text-gray-700">
                Several interconnected factors are fueling this rise. The <strong>Self-Empowerment Hypothesis</strong>,
                initially formulated in Western academic circles, posits that when women gain access to education,
                financial independence, and information, their entrepreneurial capabilities naturally expand.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                In India, this theory holds true as female labour participation surged from{" "}
                <strong>23.3% in 2017-18 to 41.7% in 2023-24</strong>. Moreover, the growing visibility of successful
                women entrepreneurs in the media has created strong role models, inspiring others to follow suit.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                <strong>
                  Women also exhibit a disciplined and strategic approach to investing, often surpassing their male
                  counterparts in patience and financial planning.
                </strong>
              </p>

              {/* HNWIs Section */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Rise of Women HNWIs</h2>

              <p className="text-lg leading-relaxed text-gray-700">
                <strong>
                  Of particular note is the emergence of women among India&#39;s High Net Worth Individuals (HNWIs).
                </strong>{" "}
                Knight Frank&#39;s Wealth Report 2025 reports that the number of Indian HNWIs—defined as individuals with
                over USD 10 million in assets—increased by <strong>6% in 2024 to 85,698</strong> and is expected to
                reach <strong>93,735 by 2025</strong>.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Women are not just participating in this wealth wave; they are leading it.</strong> As of
                January 2025, Forbes Real-Time Billionaires listed several Indian women among the country&#39;s richest,
                heading businesses across sectors such as:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Pharmaceuticals</li>
                <li>Retail</li>
                <li>Steel</li>
                <li>Technology</li>
              </ul>

              {/* Investment Preferences */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Investment Preferences</h2>

              <p className="text-lg leading-relaxed text-gray-700">
                Their influence extends beyond ownership, encompassing active financial engagement. A survey of affluent
                Indian women investors found that <strong>95%</strong> are interested in diversified portfolios.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Most preferred asset classes include:</strong>
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>
                  <strong>Listed equities (61.9%)</strong>
                </li>
                <li>
                  <strong>Gold (54.3%)</strong>
                </li>
                <li>
                  <strong>Real estate (41%)</strong>
                </li>
                <li>
                  <strong>Alternative investments (35%)</strong>
                </li>
                <li>
                  <strong>Fixed income instruments (35%)</strong>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700">
                Notably, alternative investments are as popular as fixed income instruments, both at{" "}
                <strong>35%</strong>, indicating a sophisticated approach to managing wealth.
              </p>

              {/* Challenges */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Challenges Remain</h2>

              <p className="text-lg leading-relaxed text-gray-700">
                Despite notable advancements, women still make up a smaller share of HNWIs compared to men. Social and
                institutional barriers continue to affect women&#39;s financial autonomy and progression.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                To effectively serve this rising demographic, the wealth management industry must proactively address
                these barriers and tailor strategies to women&#39;s unique needs.
              </p>

              {/* Future Outlook */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Future Outlook</h2>

              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Looking forward, the outlook is bright.</strong> India&#39;s Ultra High Net Worth (UHNW) population
                is projected to grow from <strong>13,263 in 2023 to 19,908 by 2028</strong>, with an estimated CAGR of{" "}
                <strong>10%</strong>.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">This growth is driven by:</p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Robust economic performance</li>
                <li>Entrepreneurial enthusiasm</li>
                <li>Heightened financial literacy—especially among women</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700">
                This evolution presents significant opportunities for firms like Client Associates. Women investors
                often exhibit distinct financial goals and risk appetites, along with a strong interest in learning and
                engaging in diversified investment opportunities.
              </p>

              {/* Conclusion */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>

              <p className="text-lg leading-relaxed text-gray-700">
                The increasing presence of women in India&#39;s wealth narrative signals more than financial gain—it marks a
                transformative shift in the country&#39;s economic power dynamics. As more women take charge of their
                financial futures, they are not only enhancing personal prosperity but also playing a pivotal role in
                India&#39;s economic ascent.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                This trend is poised to continue, positioning women as a formidable force in the realm of wealth
                creation and financial stewardship.
              </p>
            </div>
          </div>

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

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-blue-800">Enjoyed this article?</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                Share Article
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
