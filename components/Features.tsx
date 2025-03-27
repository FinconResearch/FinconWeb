"use client"

import React from 'react';

import MaxWidthWrapper from './MaxWidth';
import AnimatedCards from './ServicesButtons';


export function Features2() {
  return (
    <section className="py-24 relative">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-black/70">Comprehensive financial solutions tailored to your needs</p>
        </div>

        <div className='text-black'>
          <AnimatedCards />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}