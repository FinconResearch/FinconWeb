"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { motion } from "framer-motion"

// Custom hook to detect when an element is in viewport
export function useInView(ref: React.RefObject<Element | null>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const currentRef = ref.current; // Copy ref.current to a variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold },
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef) // Use the copied variable here
    }
  }, [ref, threshold])

  return isInView
}

// Animated chart container component
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
  // Data for the horizontal bar chart
  const efficiencyData = useMemo(() => [
    {
      name: "Time per Company Profile (hrs)",
      withoutFirm: 800,
      withFirm: 200,
      improvement: "66% faster",
    },
    {
      name: "Avg Time per Model Update (hrs)",
      withoutFirm: 400,
      withFirm: 100,
      improvement: "62.5% faster",
    },
    {
      name: "Analysts Required for Task",
      withoutFirm: 500,
      withFirm: 200,
      improvement: "60% reduction",
    },
    {
      name: "Cost per Research Project",
      withoutFirm: 200,
      withFirm: 850,
      improvement: "$850",
    },
  ], [])

  // Data for the area chart
  const costOverTimeData = useMemo(() => [
    { month: "Month 1", inHouse: 50000, withYou: 30000 },
    { month: "Month 2", inHouse: 65000, withYou: 32500 },
    { month: "Month 3", inHouse: 80000, withYou: 35000 },
    { month: "Month 4", inHouse: 95000, withYou: 37500 },
    { month: "Month 5", inHouse: 110000, withYou: 40000 },
    { month: "Month 6", inHouse: 120000, withYou: 42500 },
  ], [])

  // Animation states for chart data
  const [barChartData, setBarChartData] = useState<{ name: string; withoutFirm: number; withFirm: number; improvement: string }[]>([])
  const [areaChartData, setAreaChartData] = useState<{ month: string; inHouse: number; withYou: number }[]>([])
  const barChartRef = useRef<HTMLDivElement>(null)
  const areaChartRef = useRef<HTMLDivElement>(null)
  const isBarChartInView = useInView(barChartRef, 0.5)
  const isAreaChartInView = useInView(areaChartRef, 0.5)

  // Animate chart data when in view
  useEffect(() => {
    if (isBarChartInView) {
      const timer = setTimeout(() => {
        setBarChartData(efficiencyData)
      }, 300)
      return () => clearTimeout(timer)
    }
    return () => {}
  }, [isBarChartInView, efficiencyData])

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
    <div className="grid gap-6 md:grid-cols-2">
      {/* Efficiency Metrics Chart */}
      <AnimatedChartCard index={0} title="Efficiency Metrics">
        <div className="h-[400px]" ref={barChartRef}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData} layout="vertical" margin={{ top: 20, right: 50, left: 70, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, "dataMax"]} />
              <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value, name) => {
                  return [value, name === "withoutFirm" ? "Without Your Firm" : "With Your Firm"]
                }}
                labelFormatter={(label) => label}
              />
              <Legend />
              <Bar
                dataKey="withoutFirm"
                name="Without Your Firm"
                fill="#e5e5e5"
                radius={[0, 4, 4, 0]}
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar
                dataKey="withFirm"
                name="With Your Firm"
                fill="#3b82f6"
                radius={[0, 4, 4, 0]}
                animationDuration={1500}
                animationBegin={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
      </AnimatedChartCard>

      {/* Cost Over Time Chart */}
      <AnimatedChartCard index={1} title="Cost Comparison Over Time">
        <div className="h-[400px]" ref={areaChartRef}>
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
