"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ChevronRight, Menu as MenuIcon, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function NavbarDemo() {
  return (
    <div className="relative w-full items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (item: string) => {
    setActiveAccordion(activeAccordion === item ? null : item);
  };

  return (
    <div
      className={cn("absolute top-10 inset-x-0 max-w-[1500px] mx-auto z-50", className)}
    >
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-1.svg"
            width={220}
            height={120}
            alt="Company Logo"
            className="rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="About Us" className="text-neutral-800">
              <div className="flex flex-col space-y-4 text-sm text-neutral-800">
                <HoveredLink href="/about">Who we are</HoveredLink>
                <HoveredLink href="/about">Our Values</HoveredLink>
                <HoveredLink href="/about">Our Team</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Services" className="text-neutral-800">
              <div className="flex flex-col space-y-4 text-sm text-neutral-800">
                <HoveredLink href="/Services/Investment_Services">Investment Services</HoveredLink>
                <HoveredLink href="/Services/CFO_Services">CFO Series</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Blogs" className="text-neutral-800">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="HI"
                  href="http://localhost:3000/"
                  src="/AboutusImage.jpg"
                  description="hello"
                />
                <ProductItem
                  title="HI"
                  href="http://localhost:3000/"
                  src="/AboutusImage.jpg"
                  description="HELLO"
                />
                <ProductItem
                  title="HI"
                  href="http://localhost:3000/"
                  src="/AboutusImage.jpg"
                  description="HELLO"
                />
                <ProductItem
                  title="HI"
                  href="http://localhost:3000/"
                  src="/AboutusImage.jpg"
                  description="HELLO"
                />
              </div>
            </MenuItem>
            <MenuItem href="/contact" setActive={setActive} active={active} item="Contact" className="text-neutral-800">
            </MenuItem>
          </Menu>
        </div>

        {/* Book a Demo Button */}
        <button
          onClick={() => (window.location.href = "/book-demo")}
          className="hidden md:flex bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl px-4 py-3 text-base font-medium items-center space-x-2 transition-colors"
        >
          <span>CONTACT US</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b">
                  <div className="h-10 w-32 relative">
                    <Image
                      src="/logo-1.svg"
                      width={128}
                      height={40}
                      alt="Company Logo"
                      className="object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 py-4 px-5 space-y-1">
                  {/* About Us */}
                  <div className="mb-3">
                    <button
                      onClick={() => toggleAccordion("About Us")}
                      className="flex items-center justify-between w-full py-3 text-left font-medium text-lg"
                    >
                      <span>About Us</span>
                      <motion.div
                        animate={{ rotate: activeAccordion === "About Us" ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeAccordion === "About Us" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-3 border-l-2 border-blue-500 ml-2 my-2">
                            <Link
                              href="/about"
                              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Who we are
                            </Link>
                            <Link
                              href="/about"
                              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Our Values
                            </Link>
                            <Link
                              href="/about"
                              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Our Team
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Services */}
                  <div className="mb-3">
                    <button
                      onClick={() => toggleAccordion("Services")}
                      className="flex items-center justify-between w-full py-3 text-left font-medium text-lg"
                    >
                      <span>Services</span>
                      <motion.div
                        animate={{ rotate: activeAccordion === "Services" ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeAccordion === "Services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-3 border-l-2 border-blue-500 ml-2 my-2">
                            <Link
                              href="/Services"
                              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Investment Services
                            </Link>
                            <Link
                              href="/Services"
                              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              CFO Series
                            </Link>
                            <Link
                              href="/Services"
                              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Qualitative Research
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Blogs */}
                  <div className="mb-3">
                    <button
                      onClick={() => toggleAccordion("Blogs")}
                      className="flex items-center justify-between w-full py-3 text-left font-medium text-lg"
                    >
                      <span>Blogs</span>
                      <motion.div
                        animate={{ rotate: activeAccordion === "Blogs" ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeAccordion === "Blogs" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <Link
                                  href="/"
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="w-16 h-16 relative overflow-hidden rounded-md bg-gray-100">
                                    <Image
                                      src="/placeholder.svg?height=64&width=64"
                                      fill
                                      alt="Blog post"
                                      className="object-cover"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-medium">Blog Title {i}</h4>
                                    <p className="text-sm text-gray-500">Short description here</p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Contact */}
                  <Link
                    href="/contact"
                    className="flex items-center w-full py-3 text-left font-medium text-lg hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                {/* Footer with Contact Button */}
                <div className="p-5 border-t mt-auto">
                  <button
                    onClick={() => (window.location.href = "/contact")}
                    className="bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl px-4 py-3.5 text-base font-medium w-full flex items-center justify-center space-x-2 transition-colors shadow-md"
                  >
                    <span>CONTACT US</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

