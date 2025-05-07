"use client"

import { useState, useEffect } from "react"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const salaryTexts = [
  "The average salary for a financial analyst in the United States is around $88,111 per year.",
  "The estimated total pay for a Financial Analyst is £50,646 per year in the London United Kingdom area, with an average salary of £44,370 per year.",
  "The estimated total pay for a Financial Analyst is A$105,000 per year in the Sydney Australia area, with an average salary of A$95,000 per year.",
]

export default function SalaryShuffler() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const changeText = () => {
    setIsVisible(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % salaryTexts.length)
      setIsVisible(true)
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeText()
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const enhanceText = (text: string) => {
    return text.replace(/(\$|£|A\$)(\d+,?\d+)/g, (match) => {
      return `<span class="text-3xl font-bold text-electric-blue">${match}</span>`
    })
  }

  const currentText = salaryTexts[currentIndex]
  const enhancedText = enhanceText(currentText)

  return (
    <div className={`${spaceGrotesk.className} relative overflow-hidden text-center pt-32 mx-72`}>
      <div className="h-[120px] md:h-[100px] flex items-center justify-center">
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 px-6 py-8 rounded-xl ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p
            className="text-lg text-black leading-relaxed tracking-wide text-center"
            dangerouslySetInnerHTML={{ __html: enhancedText }}
          />
        </div>
      </div>
    </div>
  )
}
