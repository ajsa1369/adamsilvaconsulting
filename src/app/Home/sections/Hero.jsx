'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      value: '50%',
      description: 'Projected organic traffic decline as AI answers queries directly',
    },
    {
      value: '85%',
      description: 'Of marketers feel unprepared for AI-driven search evolution',
    },
    {
      value: '60%',
      description: 'Higher engagement from AI-optimized content vs traditional content',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white via-30% to-blue-200 to-70%" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold  font-black leading-tighter max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black">Lead Generation </span>
            <span className="text-blue-900 block">That AI Engines Trust</span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4">
              We generate high-quality leads through AI-optimized marketing strategies.
            </p>
            <p className="font-bold">
              Advanced SEO/AEO/GEO + Content Creation + Marketing Automation = 
            </p>
            <p>
              predictable lead generation in the AI-driven era.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
            >
              <span>Start Building Authority</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4  hover:bg-gray-50 text-blue-600 font-semibold text-lg rounded-lg shadow-lg border-2 border-blue-600 hover:shadow-blue-600/20 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
              <span>Explore Services</span>
            </Link>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl md:text-4xl font-black text-blue-600 mb-4">
                  {stat.value}
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;