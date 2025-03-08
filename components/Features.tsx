"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, HandshakeIcon, Presentation, LineChart, BarChart3, Search } from 'lucide-react';
import MaxWidthWrapper from './MaxWidth';

const IconComponent = ({ name }: { name: string }) => {
  const icons = {
    Calculator: <Calculator className="w-6 h-6 text-electric-blue" />,
    HandshakeIcon: <HandshakeIcon className="w-6 h-6 text-electric-blue" />,
    PresentationChart: <Presentation className="w-6 h-6 text-electric-blue" />,
    LineChart: <LineChart className="w-6 h-6 text-electric-blue" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-electric-blue" />,
    Search: <Search className="w-6 h-6 text-electric-blue" />,
  };

  return icons[name as keyof typeof icons] || null;
};

const features = [
  {
    iconName: 'Calculator',
    title: 'Financial Modeling',
    description: 'We develop detailed financial models using MS Excel and other specialized tools for investment banks, PE funds, startups, and corporations. These models are tailored for various uses, including M&A transactions, fundraising, business planning, and budgeting. Our standard models include income statements, balance sheets, cash flow statements, assumptions, and schedules, with optional analyses such as key ratios and payback analyses.',
    benefits: ['Income statements & balance sheets']
  },
  {
    iconName: 'HandshakeIcon',
    title: 'M&A Deal Support',
    description: 'We offer end-to-end M&A and fundraising support, starting with a thorough business assessment to identify key value drivers and growth potential. We research and connect you with suitable investors, facilitate discussions, and assist in negotiating transaction terms and closing deals. For buy-side transactions, we conduct comprehensive financial due diligence.',
    benefits: ['Investor connection']
  },
  {
    iconName: 'PresentationChart',
    title: 'Pitch Presentations',
    description: 'Our pitch presentations are designed to showcase investment banks credentials and strategies for advising on M&A transactions. These presentations highlight experience, proposed transaction timelines, and the banks qualifications for handling similar deals.',
    benefits: ['Experience highlight']
  },
  {
    iconName: 'LineChart',
    title: 'Business Valuation',
    description: 'We build business valuation models using methodologies like DCF, Comparable Company Analysis, and Sum of The Parts (SOTP) valuation. Our process involves a detailed review of the business to project cash flows and apply valuation multiples based on industry comparables.',
    benefits: ['Cash flow projection']
  },
  {
    iconName: 'BarChart3',
    title: 'Equity Research',
    description: 'We provide comprehensive equity research reports, including coverage initiation and periodic updates. These reports are backed by robust financial models and include economic, industry, and competitor analyses to support investment decisions.',
    benefits: ['Financial modeling']
  },
  {
    iconName: 'Search',
    title: 'Industry Research',
    description: 'Our team conducts in-depth research across various industries, utilizing secondary resources to analyze trends, performance parameters, and growth drivers. We employ tools like Porter’s Five Forces and PEST Analysis to reveal industry dynamics and competitive landscapes.',
    benefits: ['Personnel insights']
  }
];

export function Features2() {
  return (
    <section className="py-24 relative">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-black/70">Comprehensive financial solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-electric-blue/10 hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-electric-blue/10 rounded-lg">
                  <IconComponent name={feature.iconName} />
                </div>
                <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
              </div>

              <p className="text-black/70 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-black/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </MaxWidthWrapper>
    </section>
  );
}