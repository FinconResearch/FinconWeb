"use client"

import React from 'react';
import { motion } from 'framer-motion';
import SalaryShuffler  from './ui/Salary_shuffle'; // Ensure named import matches the export in Salary_shuffle.tsx

export default function Salary() {
  return (
    <section className='container'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <SalaryShuffler />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-semibold text-black mt-11"
        >
          Working with us saves you <span className="text-4xl text-electric-blue">40%</span>
        </motion.p>
      </motion.div>
    </section>
  );
}