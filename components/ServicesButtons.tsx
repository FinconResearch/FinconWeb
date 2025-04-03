import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
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
  const [expanded, setExpanded] = useState(false)

  const detailedContent = {
    "Market Analysis": "Detailed insights into market trends, helping you make informed decisions.",
    "Portfolio Management": "Customized strategies to diversify and manage your portfolio effectively.",
    "Wealth Planning": "Tailored plans to grow and secure your wealth for the future.",
    "Investment Advisory": "Expert advice on investment opportunities and market timing.",
    "Performance Tracking": "Real-time tracking and analysis of your investment performance.",
    "Risk Assessment": "Comprehensive risk evaluation to safeguard your investments.",
    "Financial Strategy": "Strategic financial planning to drive business growth.",
    "Budgeting & Forecasting": "Accurate budgeting and forecasting to manage finances effectively.",
  }

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
              <Button
                variant="outline"
                className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show Less" : "Learn More"}
                <ChevronRight
                  className={cn(
                    "ml-2 w-4 h-4 transition-transform duration-300",
                    expanded ? "rotate-90" : "rotate-0",
                  )}
                />
              </Button>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-600"
                  >
                    {detailedContent[service.title as keyof typeof detailedContent] || "Additional details about this service."}
                  </motion.div>
                )}
              </AnimatePresence>
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