"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/bootstrap.css"

type ContactFormModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [preferredContact, setPreferredContact] = useState<string>("email")
  const [selectedService, setSelectedService] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [phone, setPhone] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          from_name: fullName,
          email,
          phone,
          serviceType: selectedService,
          message,
          preferredContact,
          to: "contact@finconresearch.com",
        }),
      })
      const result = await response.json()
      setIsSubmitting(false)
      if (result.success) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          setSelectedService("")
          setPreferredContact("email")
          setFullName("")
          setEmail("")
          setPhone("")
          setMessage("")
          onClose()
        }, 2000)
      }
    } catch {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 mt-24 flex items-center justify-center z-[9999] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg p-0 overflow-visible"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div className="bg-blue-600  py-4 px-8 relative z-[500] rounded-t-xl">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-white hover:bg-blue-700 p-1 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                <p className="text-blue-100 mt-1">Fill out the form below and we&apos;ll contact you shortly</p>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 96px)" }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-gray-700 font-medium">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-gray-700 font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-gray-700 font-medium">
                        Phone Number
                      </label>
                      <PhoneInput
                        country={"us"}
                        enableSearch={true}
                        value={phone}
                        onChange={setPhone}
                        inputProps={{
                          name: "phone",
                          required: true,
                          className:
                            "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                        }}
                        containerClass="w-full"
                        inputClass="w-full"
                        inputStyle={{ paddingLeft: 56 }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-gray-700 font-medium">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="" disabled>
                        Select service type
                      </option>
                      <option value="Investment and Research Services">Investment and Research Services </option>
                      <option value="CFO Services">CFO Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-gray-700 font-medium">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your financial goals and any specific questions you have..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="block text-gray-700 font-medium">Preferred Contact Method</p>
                    <div className="space-y-2">
                      {["email", "phone", "either"].map((method) => (
                        <label key={method} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={preferredContact === method}
                            onChange={() => setPreferredContact(method)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 px-6 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
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
                      <>
                        Submit
                        <svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
