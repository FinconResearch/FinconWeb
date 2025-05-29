'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TypewriterText } from '@/components/ui/TypewriterText';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidth';
import Link from 'next/link';

export default function Hero() {
  return (
    <MaxWidthWrapper maxWidth='2xl'>
      <section id="home" className="relative">
        <div className="mx-auto relative lg:h-screen">
          <div className="flex lg:gap-24 lg:flex-row items-center justify-between lg:h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 px-4 md:px-8 py-12 lg:py-0"
            >
              <div className="space-y-6 mt-11 max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-12 bg-electric-blue" />
                  <span className="text-electric-blue text-sm font-medium tracking-wider uppercase">
                    Financial Intelligence
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight text-black">
                  We are a cutting-edge financial research firm that{' '}
                  <span className="text-electric-blue whitespace-nowrap">
                    
                    {/* <br className='sm:block md:hidden'/> */}
                    
                    <div className='inline-block h-full min-w-32'>
                      <TypewriterText />
                    </div>
                  </span>
                  <br />
                  business intelligence solutions that enhance revenues/profits.
                </h1>

                <p className="text-lg text-neutral-dark/80 max-w-2xl leading-relaxed">
                  Transforming financial insights into actionable strategies for sustainable growth and success.
                </p>

                <div className="flex items-center gap-6 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="glow-button flex flex-row  bg-electric-blue text-white px-8 py-4 rounded-full text-xl font-semibold  items-center shadow-lg shadow-electric-blue/20 hover:shadow-electric-blue/30 transition-all duration-300"
                  >
                    <Link href="/about" className='flex gap-2 flex-row'>Know more 
                    <ArrowRight className='h-7'/>
                    </Link>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full hidden lg:block lg:w-1/2 h-[45%] relative"
            >
              <Image
                src="/stock.webp"
                alt="AI Voice Agent Illustration"
                width={1920}
                height={1080}
                className="w-full h-full  object-cover object-center rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}