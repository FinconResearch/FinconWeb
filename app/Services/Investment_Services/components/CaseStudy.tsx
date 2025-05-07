"use client"

import React from 'react';
import { motion } from 'framer-motion';

import { TrendingUp } from 'lucide-react';
import MaxWidthWrapper from '../../../../components/MaxWidth';
import { Graphs } from './Graphs'; // Import the Graphs component

const comparisonData = [
  { Month: 'Jan', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$20,000' },
  { Month: 'Feb', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$40,000' },
  { Month: 'Mar', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$60,000' },
  { Month: 'Apr', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$80,000' },
  { Month: 'May', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$100,000' },
  { Month: 'Jun', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$120,000' }
];

export function CaseStudy() {
  return (
    <section className="py-24 relative">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">
            Financial Growth, <span className="text-electric-blue">Impact</span>
          </h2>
          <p className="text-black/70 max-w-3xl mx-auto">
            See how our financial strategies transformed business outcomes
          </p>
        </motion.div>

        {/* Graphs Section */}
        <div className="mb-16">
          <Graphs />
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-electric-blue/10 overflow-hidden mb-16"
        >
          <div className="grid grid-cols-5 gap-4 p-6 font-bold text-lg border-b border-electric-blue/10">
            <div className="text-[#00008B]">Month</div>
            <div className="text-[#00008B]">Cost if in-house</div>
            <div className="text-[#00008B]">Cost with you</div>
            <div className="text-[#00008B]">Monthly Savings</div>
            <div className="text-[#00008B]">Cumulative Savings</div>
          </div>
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-5 gap-4 p-6 border-b border-electric-blue/10 last:border-0"
            >
              <div className="font-medium text-black">{row.Month}</div>
              <div className="text-black/70">{row.house}</div>
              <div className="text-electric-blue">{row.you}</div>
              <div className="flex items-center gap-2 text-electric-blue">
                <TrendingUp className="h-5 w-5" />
                {row.Monthly}
              </div>
              <div className="text-electric-blue flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {row.Cumulative}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center items-center">
          <span className="text-xl font-bold text-center text-black">
            *Data shown above is only for representation purposes and is not a true representation of actual cost.
          </span>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}