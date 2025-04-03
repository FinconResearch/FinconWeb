"use client"

import React from 'react';

import MaxWidthWrapper from './MaxWidth';
import ServicesButtons from './ServicesButtons';

export function HeroServices() {
  return (
    <section className="pb-11  sm:pb-24 relative mt-44 sm:mt-0">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-5xl  font-bold text-black mb-4">Our Services</h2>
          <p className="text-black/70">Comprehensive financial solutions tailored to your needs</p>
        </div>

        <div className='text-black'>
          <ServicesButtons />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}