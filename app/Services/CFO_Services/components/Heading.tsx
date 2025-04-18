import React from 'react';
import { motion } from 'framer-motion';

const Heading: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        CFO Services
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Comprehensive financial solutions tailored to your needs
      </p>
    </motion.div>
  );
};

export default Heading;
