"use client"

import React from 'react';
import { motion } from 'framer-motion';


export default function Salary() {
  return (
    <section className="container mt-24 mb-24 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-black font-medium mt-4 text-center"
        >
          <span className='text-lg'>The average annual salary of an analyst is approximately{' '}
             <span className='font-bold text-3xl'>$88,000</span> {' '}
             
             in the U.S., {' '}
             
             <span className='font-bold text-3xl'>£50,600</span> {' '}
             
             in the U.K., and {' '}
             
             <span className='font-bold text-3xl'>A$105,000</span>{' '}
             
              in Australia. In contrast, partnering with us can reduce your costs by at least {' '}
              
              <span className='font-bold text-5xl text-emerald-600'>40%</span> {' '}
              
              even before factoring in the time, effort, and expenses involved in hiring and onboarding the right talent.{' '}
              
              <span className='font-bold text-4xl text-blue-600'> We deliver the same (or better) quality</span>{' '}
              
               of work without the overhead, so you get exceptional value without compromise.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}