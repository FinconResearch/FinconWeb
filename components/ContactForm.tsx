"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Shield } from "lucide-react"
import Link from "next/link"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  investmentRange: z.string().min(1, "Please select an investment range"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(1, "Message is required"),
  preferredContact: z.enum(["email", "phone", "either"]),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    investmentRange: "",
    serviceType: "",
    message: "",
    preferredContact: "email",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Validate form
      formSchema.parse(formData)

      // Show submitting state
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success state
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          investmentRange: "",
          serviceType: "",
          message: "",
          preferredContact: "email",
        })
        setIsSuccess(false)
      }, 2000)

      toast({
        title: "Consultation request received",
        description: "Our financial advisors will contact you within 24 hours.",
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof FormData, string>> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof FormData] = err.message
          }
        })
        setErrors(fieldErrors)
      }
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
    submitting: {
      scale: [1, 1.03, 1],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 1,
      },
    },
    success: {
      backgroundColor: "#10b981",
      color: "#ffffff",
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="container max-w-7xl py-16 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:ml-24 lg:grid-cols-2 gap-12">
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h1
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Schedule Your Financial Consultation
            </motion.h1>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum, magna a tincidunt dignissim, risus odio viverra eros, a.
            </motion.p>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Confidential & Secure</h3>
                <p className="text-gray-600">Your information is protected with bank-level security.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Flexible Scheduling</h3>
                <p className="text-gray-600">Choose a consultation time that works for your schedule.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-gradient-to-r bg-blue-700 p-6">
            <h2 className="text-xl font-semibold text-white">Request a Consultation</h2>
            <p className="text-blue-100 text-sm mt-1">Fill out the form below and we&apos;ll contact you shortly</p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-6 space-y-6"
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="fullName" className="text-gray-700">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className={`border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500 ${errors.fullName ? "border-red-500" : ""}`}
              />
              {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500 ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 123 456 7890"
                  className={`border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500 ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
              </div>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="serviceType" className="text-gray-700">
                Service Interest
              </Label>
              <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange("serviceType", value)}>
                <SelectTrigger
                  id="serviceType"
                  className={`border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500 ${errors.serviceType ? "border-red-500" : ""}`}
                >
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retirement">Investment and Research Services</SelectItem>
                  <SelectItem value="investment">CFO Services</SelectItem>
                </SelectContent>
              </Select>
              {errors.serviceType && <p className="text-sm text-red-600">{errors.serviceType}</p>}
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="message" className="text-gray-700">
                Additional Information
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your financial goals and any specific questions you have..."
                className={`min-h-24 text-black border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
            </motion.div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <Label className="text-gray-700">Preferred Contact Method</Label>
              <RadioGroup
                value={formData.preferredContact}
                onValueChange={(value) => handleSelectChange("preferredContact", value)}
                className="flex flex-col  text-black space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="contact-email" />
                  <Label htmlFor="contact-email" className="font-normal">
                    Email
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="contact-phone" />
                  <Label htmlFor="contact-phone" className="font-normal">
                    Phone
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="either" id="contact-either" />
                  <Label htmlFor="contact-either" className="font-normal">
                    Either
                  </Label>
                </div>
              </RadioGroup>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-700 text-white hover:bg-blue-900 h-11 px-6 py-3"
                variants={buttonVariants}
                initial="idle"
                animate={isSubmitting ? "submitting" : isSuccess ? "success" : "idle"}
                whileHover="hover"
                whileTap="tap"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">Processing your request...</span>
                ) : isSuccess ? (
                  <span className="flex items-center">Request Submitted</span>
                ) : (
                  <span className="flex items-center font-medium">
                    Request Consultation <ArrowRight className="ml-2 size-4" />
                  </span>
                )}
              </motion.button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy" className="text-blue-700 hover:underline">
                  privacy policy
                </Link>{" "}
                and consent to being contacted regarding financial services.
              </p>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}
