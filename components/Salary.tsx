"use client"

import React from 'react';
import { motion } from 'framer-motion';
import SalaryShuffler from './ui/Salary_shuffle';

export default function Salary() {
  return (
    <section className="container">
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
          className="text-2xl font-semibold text-black mt-4 text-center"
        >
          Working with us saves you <span className="text-4xl text-emerald-600">40%</span>
          <span className="block text-center text-lg">
            (not taking into consideration time, money and effort used on hiring the right talent)
            <span className="text-4xl text-blue-600 block text-center">
              without making compromises on the quality of output.
            </span>
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}