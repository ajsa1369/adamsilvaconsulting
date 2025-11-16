"use client"
import React from 'react';
import { ArrowRight, Globe, Infinity } from 'lucide-react';
import Link from 'next/link';

// --- Data for Key Metrics ---
const metricsData = [
  {
    value: "6",
    label: "Strategic Pillars",
  },
  {
    value: "76+",
    label: "Implementation Resources",
  },
  {
    value: "100%",
    label: "Production-Ready",
  },
  {
    value: <Infinity className="w-6 h-6 mx-auto" strokeWidth={3} />, // Using Lucide Infinity icon
    label: "Competitive Advantage",
  },
];

/**
 * Renders an individual metric box.
 */
const MetricBox = ({ value, label }) => {
  return (
    <div
      className="
        p-4 rounded-2xl 
        bg-white/10 
        backdrop-blur-md 
        border border-white/20 
        shadow-lg 
        flex flex-col items-center justify-center 
        text-center h-full
      "
    >
      <div className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
        {value}
      </div>

      <p className="text-sm sm:text-base text-white/80 leading-tight">
        {label}
      </p>
    </div>
  );
};


/**
 * Main application component for the Authority CTA section.
 */
const AuthorityCTA = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#025CA2] py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto text-center">

        {/* --- HEADER CONTENT --- */}
        <h1 className="text-3xl sm:text-4xl  font-extrabold text-white mb-6 leading-tight">
          Transform Knowledge Into Strategic Authority
        </h1>

        {/* Primary Description */}
        <p className="text-lg sm:text-xl text-blue-100 text-opacity-90 max-w-4xl mx-auto mb-10">
          The transition to an AI-dominated information landscape is happening now. Organizations that thrive will be those that move decisively to build genuine, verifiable authority.
        </p>

        {/* Secondary Description */}
        <p className="text-base sm:text-lg text-blue-200 text-opacity-90 max-w-3xl mx-auto mb-12">
          Work with Adam Silva Consulting to implement these proven frameworks for your specific business context. Our integrated approach ensures tactical execution aligns with strategic objectives.
        </p>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
          
          {/* Primary Button */}
           <Link href="/contact">
          <button
            className="flex items-center justify-center px-8   py-4 rounded-xl bg-white text-[#025CA2] font-semibold hover:-translate-y-1 cursor-pointer text-sm hover:bg-gray-100 transition duration-200 shadow-xl"
          
          >
           
            
            Schedule Strategic Consultation
            <ArrowRight className="w-5 h-5 ml-3" />
          </button>
            </Link>

          {/* Secondary Button */}
          <Link href="/services">
          <button
            className="flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border-2 border-white text-white font-semibold hover:-translate-y-1 text-sm cursor-pointer hover:bg-white hover:text-blue-600 transition duration-200"
            
          >
            Explore Integrated Solutions
            <Globe className="w-5 h-5 ml-3" />
          </button>
          </Link>
        </div>

        {/* --- METRICS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {metricsData.map((metric, index) => (
            <MetricBox
              key={index}
              {...metric}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorityCTA;