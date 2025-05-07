"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { motion } from "framer-motion"

export function useInView(ref: React.RefObject<Element | null>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold },
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [ref, threshold])

  return isInView
}

import { ReactNode } from "react";

function AnimatedChartCard({ children, index, title }: { children: ReactNode; index: number; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, 0.2)

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants}>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  )
}

export function Graphs() {
  // Data for the area chart
  const costOverTimeData = useMemo(() => [
    { month: "Month 1", inHouse: 50000, withYou: 30000 },
    { month: "Month 2", inHouse: 65000, withYou: 32500 },
    { month: "Month 3", inHouse: 80000, withYou: 35000 },
    { month: "Month 4", inHouse: 95000, withYou: 37500 },
    { month: "Month 5", inHouse: 110000, withYou: 40000 },
    { month: "Month 6", inHouse: 120000, withYou: 42500 },
  ], [])

  const [areaChartData, setAreaChartData] = useState<{ month: string; inHouse: number; withYou: number }[]>([])
  const areaChartRef = useRef<HTMLDivElement>(null)
  const isAreaChartInView = useInView(areaChartRef, 0.5)

  useEffect(() => {
    if (isAreaChartInView) {
      const timer = setTimeout(() => {
        setAreaChartData(costOverTimeData)
      }, 300)
      return () => clearTimeout(timer)
    }
    return () => {}
  }, [isAreaChartInView, costOverTimeData])

  return (
    <div className="grid gap-6">
      {/* Cost Over Time Chart */}
      <AnimatedChartCard index={0} title="Cost Comparison Over Time">
        <div className="h-[400px] w-full" ref={areaChartRef}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaChartData} margin={{ top: 20, right: 30, left: 50, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${value / 1000}k`} domain={[0, "dataMax"]} />
              <Tooltip wrapperClassName="rounded" formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
              <Legend />
              <Area
                type="monotone"
                dataKey="inHouse"
                name="Cost if In-House"
                fill="#e5e5e5"
                fillOpacity={0.8}
                stroke="#d4d4d4"
                animationDuration={2000}
                animationBegin={300}
              />
              <Area
                type="monotone"
                dataKey="withYou"
                name="Cost with You"
                fill="#dbeafe"
                fillOpacity={0.8}
                stroke="#3b82f6"
                animationDuration={2000}
                animationBegin={600}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>  
      </AnimatedChartCard>
    </div>
  )
}
