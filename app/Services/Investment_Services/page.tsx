"use client";

import ServiceSection from "./components/ServiceSection";
import InvestmentResearchSection from "./components/InvestmentResearchSection";
import investmentServices from "./data/investmentServices";
import Heading from "./components/Heading";
import InfiniteScroll from "../ui/InfiniteScroll";
import { Footer } from "@/components/layout/Footer";
import Salary from "./components/Salary";


export default function ServicesSection() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-0" />

      <div className="containe mt-20 mx-auto px-0 relative z-10">
        <Heading />
        <InvestmentResearchSection />
        <InfiniteScroll/>
        <ServiceSection title="Our Offering" services={investmentServices} />
        <Salary/>
        <Footer/>
      </div>
    </div>
  );
}

