"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  expandedDescription: string;
  imageUrl: string;
}

const ServiceSection = ({
  title,
  services,
}: {
  title: string;
  services: Service[];
}) => {
  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    Array(services.length).fill(false)
  );

  const toggleCard = (index: number) => {
    setExpandedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div id="our-offering" className="mb-20 text-left">
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

      <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
            isExpanded={expandedStates[index]}
            toggleCard={() => toggleCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;