"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactSection from "@/app/about/components/ContactSection"
import { Footer } from "@/components/layout/Footer"

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = {
    id: params.id,
    title: "Global Financial Services M&A and Capital Markets: A FinconResearch Overview",
    content: `
          <h1 class="text-[#365F91] text-3xl font-semibold">Q1 2025 Financial Services: Trends in M&A and Capital Markets</h1>
      <p><span>In the first quarter of 2025, the global financial services sector faced a landscape defined by economic uncertainty, volatile markets, and evolving geopolitical risks.</span> Despite these challenges, the industry demonstrated remarkable adaptability and strategic agility, continuing to attract investor interest and drive deal-making activity. This blog provides an overview of the major trends in M&A and capital markets, drawing insights from Q1’25 performance to inform the road ahead.</p>

      <h2 class="text-[#365F91] text-2xl font-semibold mt-6">Market Landscape: Resilience Amidst Volatility</h2>
      
      <p>Q1’25 saw turbulence across global markets, exacerbated by inflation concerns, cautious central bank policies, and ongoing geopolitical tensions. The U.S. faced fears of a recession, while emerging markets benefited from a weaker dollar and risk-tolerant investors. Equity markets saw uneven performance with U.S. stocks trailing international peers, while commodities like oil and gold surged in response to global uncertainties. Meanwhile, China’s economy showed unexpected strength.</p>

      <h2 class="text-[#365F91] text-2xl font-semibold mt-6">Sectoral Performance: A Mixed Bag</h2>
      
      <p><span>Different financial sub-sectors exhibited varied performance trends in Q1’25:</span></p>
      <p><span>- <strong>Banking:</strong> Slowed due to rising rates and regulatory pressures.</span></p>
      <p><span>- <strong>Asset management:</strong> Saw a decline amid fears of a recession and global trade issues.</span></p>
      <p><span>- <strong>Insurance:</strong> Fared better, supported by premium growth and high interest rates.</span></p>
      <p><span>- <strong>FinTech:</strong> Struggled with reduced VC funding and regulatory scrutiny.</span></p>

      <h2 class="text-[#365F91] text-2xl font-semibold mt-6">M&A: Strategic but Selective</h2>
      <p>Despite macroeconomic headwinds, global financial services M&A activity remained robust. Strategic buyers prioritized regional consolidation, particularly in Europe and Asia-Pacific. Private equity remained cautious, favoring bolt-on deals with strong fundamentals. Regulatory scrutiny extended deal timelines, making well-capitalized companies with efficient M&A strategies stand out.</p>

      <h2 class="text-[#365F91] text-2xl font-semibold mt-6">Capital Markets Activity: Momentum and Caution</h2>
      <p>The Debt Capital Markets (DCM) remained active with a focus on refinancing and repricing. Equity Capital Markets (ECM) saw strong activity early in the quarter, driven by optimism around rate cuts and easing inflation. However, activity slowed due to market volatility and global tariff concerns. FinTech led the ECM space, particularly in AI and digital innovation.</p>

      <h2 class="text-[#365F91] text-2xl font-semibold mt-6">ESG: Driving Sustainable Investment</h2>
      <p>Environmental, Social, and Governance (ESG) factors continued to influence investment decisions. Regulators globally are pushing scenario analysis to assess climate-related financial risks. Banks are embracing sustainable digital finance, aligning portfolios with net-zero goals through initiatives like the Net-Zero Banking Alliance.</p>

      <h2 class="text-[#365F91] text-2xl font-semibold mt-6">2025 Outlook: Adaptation and Strategic Rebuilding</h2>
      <p><span>Looking ahead, several themes are expected to shape the M&A and capital markets in 2025:</span></p>
      <p><span>1. Growth in digital payments driven by scalability and low regulation.</span></p>
      <p><span>2. Renewed emphasis on ESG investments.</span></p>
      <p><span>3. FinTech ecosystems expanding across emerging markets.</span></p>
      <p><span>4. Strategic restructuring and compliance-focused operations.</span></p>
      <p><span>5. Accelerated digital transformation and AI adoption.</span></p>
      <p><span>6. Selective private equity investments in tech-driven sectors.</span></p>

      <p><span>At <strong>FinconResearch</strong>, we continue to monitor these dynamic shifts to provide you with actionable insights into financial services trends. Stay connected for our ongoing coverage and analysis.</span></p>

    `,
    date: "May 12, 2025",
    author: "Sidak",
    category: "Technology",
    readTime: "5 min read",

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
      <ContactSection/>
      <Footer/>
    </div>
  )
}
