"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  ChevronDown,
  LineChart,
  PieChart,
  Wallet,
  Users,
  TrendingUp,
  BadgeDollarSign,
  Building2,
  Calculator,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const investmentServices: Service[] = [
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Market Analysis",
    description: "Comprehensive market research and trend analysis for informed investment decisions.",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Portfolio Management",
    description: "Strategic portfolio diversification and risk management services.",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Wealth Planning",
    description: "Personalized wealth management and investment strategies.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Investment Advisory",
    description: "Expert guidance on investment opportunities and market timing.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Performance Tracking",
    description: "Real-time monitoring and reporting of investment performance.",
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "Risk Assessment",
    description: "Detailed risk analysis and mitigation strategies for investments.",
  },
]

const cfoServices: Service[] = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Financial Strategy",
    description: "Strategic financial planning and execution for SMEs.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Budgeting & Forecasting",
    description: "Comprehensive budgeting and financial forecasting services.",
  },
]

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-xl p-6 relative group transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <motion.div
        className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-5">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
            className="p-3 bg-primary/10 rounded-xl text-primary inline-flex mb-4"
          >
            {service.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>

        <div className="mt-auto pt-4 md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-75">
          <Button
            variant="outline"
            className="group/btn w-full justify-between bg-white hover:bg-blue-950 hover:text-white transition-colors duration-300 border-gray-200"
          >
            <span>Know More</span>
            <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

const ServiceSection = ({ title, services }: { title: string; services: Service[] }) => {
  return (
    <div className="mb-20 text-left">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-16 flex flex-col items-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-1 bg-primary mb-4"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 text-center relative"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="h-1 bg-primary mt-4"
        />
      </motion.div>

      <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.05),transparent_70%)]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive financial solutions tailored to your needs</p>
        </motion.div>

        <ServiceSection title="Investment and Research Services" services={investmentServices} />

        <ServiceSection title="CFO Services (SME)" services={cfoServices} />
      </div>
    </div>
  )
}

