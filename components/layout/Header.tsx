"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
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
          {/* <span className="font-bold text-lg text-gray-900 dark:text-white">Brand</span> */}
        </Link>

        {/* Menu */}
        <div className="flex-1 flex justify-center">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="About Us" className="text-neutral-800">
              <div className="flex flex-col space-y-4 text-sm text-neutral-800">
                <HoveredLink href="/">Web Development</HoveredLink>
                <HoveredLink href="/">Interface Design</HoveredLink>
                <HoveredLink href="/">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Services" className="text-neutral-800">
              <div className="flex flex-col space-y-4 text-sm text-neutral-800">
                <HoveredLink href="/">Web Development</HoveredLink>
                <HoveredLink href="/">Interface Design</HoveredLink>
                <HoveredLink href="/">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Blogs" className="text-neutral-800">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href=""
                  src="/stock.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href=""
                  src="/stock.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href=""
                  src="/stock.webp"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href=""
                  src="/stock.webp"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Team" className="text-neutral-800">
              <div className="flex flex-col space-y-4 text-sm text-neutral-800">
                <HoveredLink href="/">Web Development</HoveredLink>
                <HoveredLink href="/">Interface Design</HoveredLink>
                <HoveredLink href="/">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/">Branding</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Careers" className="text-neutral-800">
              <div className="flex flex-col space-y-4 text-sm text-neutral-800">
                <HoveredLink href="/">Hobby</HoveredLink>
                <HoveredLink href="/">Individual</HoveredLink>
                <HoveredLink href="/">Team</HoveredLink>
                <HoveredLink href="/">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Book a Demo Button */}
        <button
          onClick={() => window.location.href = '/'}
          className="bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl px-4 py-3 text-base font-medium flex items-center space-x-2 transition-colors"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
