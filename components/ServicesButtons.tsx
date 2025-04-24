import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  LineChart,
  PieChart,
  Wallet,
  Users,
  TrendingUp,
  BadgeDollarSign,
  Building2,
  Calculator,
  Plus,
  Minus,
  ChevronRight,
} from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const investmentServices: Service[] = [
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "FULL TIME ANALYST",
    description: "Our full-time analysts work as part of extended client team. In an FTE engagement, our analysts work exclusively for the client on a full-time basis and give continuous support, helping clients to control and prioritize projects better.",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "INFORMATION MEMOS (CIMs)",
    description: "We prepare highly impactful Confidential Information Memorandums (CIMs) to help businesses and investment banks effectively present investment opportunities to potential investors and suitors..",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "FINANCIAL MODELING",
    description: "We prepare detailed financial models in both, MS Excel and Modano®, for investment banks, PE funds, Startups and Corporations. These financial models are of various type, depending on their end use.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "M&A DEAL SUPPORT",
    description: "We provide end-to-end M&A and fund-raising support to startups, corporations and investment banks. Our transaction support process starts with a detailed assessment of the client business, including key value drivers, growth potential and financial details.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "PITCH BOOKS",
    description: "We prepare highly impactful pitch presentations, with several graphs, charts, tables, and other visually appealing infographics. Our pitch books are used by investment banks while making pitch presentations to potential clients for advising them on M&A transactions.",
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "BUSINESS VALUATION",
    description: "We prepare intricate business valuation models using a combination of the commonly used valuation methodologies.  These include DCF Valuation, Comparable Company Valuation (both listed and transaction comparables), and Sum of The Parts (SOTP) Valuation.",
  },
  
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "EQUITY RESEARCH",
    description: "We provide full Equity Research reports including coverage initiation reports and periodic updates. Our reports are research intensive with in-depth analysis aiding portfolio managers in the investment process.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "INDUSTRY RESEARCH",
    description: "We have a group of experienced industry analysts, who carry out in-depth research on a broad spectrum of industries, including some industries that are not very widely covered. We primarily rely on secondary resources for our industry research.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "BUSINESS RESEARCH",
    description: "We offer customized research on companies and businesses operating all over the globe. Research includes finding key personnel, revenue, no. of employees, competitors and contact details of the key members.",
  },
]

const cfoServices: Service[] = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "EQUITY RESEARCH",
    description: "We provide full Equity Research reports including coverage initiation reports and periodic updates. Our reports are research intensive with in-depth analysis aiding portfolio managers in the investment process.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "INDUSTRY RESEARCH",
    description: "We have a group of experienced industry analysts, who carry out in-depth research on a broad spectrum of industries, including some industries that are not very widely covered. We primarily rely on secondary resources for our industry research.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "BUSINESS RESEARCH",
    description: "We offer customized research on companies and businesses operating all over the globe. Research includes finding key personnel, revenue, no. of employees, competitors and contact details of the key members.",
  },
  
]

const ServiceItem = ({
  service,
  index,
  isActive,
  onClick,
}: {
  service: Service
  index: number
  isActive: boolean
  onClick: () => void
}) => {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className={cn("border-b border-gray-200 last:border-b-0", isActive ? "bg-blue-50" : "")}
    >
      <div
        onClick={onClick}
        className={cn(
          "flex items-center py-4 px-6 cursor-pointer transition-all duration-300",
          isActive ? "bg-blue-50" : "hover:bg-gray-50",
        )}
      >
        <div
          className={cn(
            "p-3 rounded-full mr-4 transition-colors duration-300",
            isActive ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600",
          )}
        >
          {service.icon}
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
        </div>
        <div className="ml-4">
          {isActive ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-gray-400" />}
        </div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0">
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="/Services/Investment_Services"
                className="group border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md inline-flex items-center"
              >
                Know More
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ServiceDropdown = ({ services }: { services: Service[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-4">
      {services.map((service, index) => (
        <ServiceItem
          key={service.title}
          service={service}
          index={index}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}

export default function ServicesButtons() {
  const [activeDropdown, setActiveDropdown] = useState<"investment" | "cfo" | null>(null)

  const toggleDropdown = (category: "investment" | "cfo") => {
    setActiveDropdown(activeDropdown === category ? null : category)
  }

  return (
    <div className="container mx-auto mt-11 py-4 space-y-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-28 justify-center items-center">
        <button
          onClick={() => toggleDropdown("investment")}
          className={cn(
            "relative group px-8 py-4 w-full md:w-auto",
            "overflow-hidden rounded-2xl",
            "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]",
            "active:scale-95",
            activeDropdown === "investment" && "ring-4 ring-blue-300"
          )}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          <span className="relative flex items-center justify-center gap-3 text-lg font-medium text-white">
            <LineChart className="w-5 h-5" />
            <span>Investment Services</span>
          </span>
        </button>

        <button
          onClick={() => toggleDropdown("cfo")}
          className={cn(
            "relative group px-8 py-4 w-full md:w-auto",
            "overflow-hidden rounded-2xl",
            "bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_2rem_-0.5rem_#6366f1]",
            "active:scale-95",
            activeDropdown === "cfo" && "ring-4 ring-indigo-300"
          )}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          <span className="relative flex items-center justify-center gap-3 text-lg font-medium text-white">
            <Building2 className="w-5 h-5" />
            <span>CFO Services</span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {activeDropdown === "investment" && (
          <motion.div
            key="investmentDropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceDropdown services={investmentServices} />
          </motion.div>
        )}
        {activeDropdown === "cfo" && (
          <motion.div
            key="cfoDropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceDropdown services={cfoServices} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}