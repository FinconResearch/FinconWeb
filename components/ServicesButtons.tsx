import { LineChart, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ServicesButtons() {
  return (
    <div className="container mx-auto mt-11 py-4 space-y-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-28 justify-center items-center">
        <a
          href="/Services/Investment_Services"
          className={cn(
            "relative group px-8 py-4 w-full md:w-auto",
            "overflow-hidden rounded-2xl",
            "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]",
            "active:scale-95"
          )}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          <span className="relative flex items-center justify-center gap-3 text-lg font-medium text-white">
            <LineChart className="w-5 h-5" />
            <span>Investment Services</span>
          </span>
        </a>

        <a
          href="/Services/CFO_Services"
          className={cn(
            "relative group px-8 py-4 w-full md:w-auto",
            "overflow-hidden rounded-2xl",
            "bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_2rem_-0.5rem_#6366f1]",
            "active:scale-95"
          )}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          <span className="relative flex items-center justify-center gap-3 text-lg font-medium text-white">
            <Building2 className="w-5 h-5" />
            <span>CFO Services</span>
          </span>
        </a>
      </div>
    </div>
  )
}