import React from 'react';
import Link from 'next/link';
import { Tag, Calendar, Clock, ArrowRight, AlertTriangle } from 'lucide-react';

export default function FeaturedAnalysis() {
  return (
    <div className="bg-gradient-to-br overflow-hidden rounded-xl border border-red-500 from-red-50 max-w-6xl mx-auto via-orange-50 to-pink-50 mt-20">
      <div className="w-full mx-auto">
        
        {/* Main Flex Layout: Stacks vertically on mobile, 2/3 and 1/3 layout on desktop */}
        <div className="flex flex-col md:flex-row w-full gap-8 items-center md:items-stretch">
          
          {/* Left Content (2/3 Width) */}
          <div className="w-full md:w-1/2 bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12  transition-all hover:shadow-red-300/50">
            {/* Tag and Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-blue-700 text-sm font-semibold">
                <Tag size={16} />
                <span>Strategic Analysis</span>
              </div>
              <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-bold shadow-md">
                Critical Impact
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl  font-bold text-gray-900 mb-4 leading-snug">
              The AI Authority Imperative: Gartner's 50% Traffic Decline Prediction
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Gartner's projection of 50% organic traffic decline marks the definitive end of click-based optimization. This comprehensive analysis explores why the strategic objective has irrevocably shifted from ranking for keywords to being cited for authority, and provides a systematic framework for businesses to navigate this transformation before it's too late.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-500 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>September 18, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>16 min read</span>
              </div>
            </div>

            {/* CTA Button - Now with Link */}
            <Link 
              href="/insights/the-ai-authority-imperative-gartners-50-traffic-decline-prediction"
              className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all items-center gap-2 group shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Read Critical Analysis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Alert Box (1/3 Width) */}
          <div className="w-full md:w-1/3  flex flex-col items-center justify-center rounded-3xl p-8 text-center  ">
            {/* Alert Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-50 mb-6">
              <AlertTriangle size={64} className="text-red-600 animate-pulse" strokeWidth={2.5} />
            </div>

            {/* Alert Text */}
            <h2 className="text-md font-bold text-red-800 ">
              URGENT: Market Disruption
            </h2>
            <p className="text-red-600 text-sm font-medium">
              Essential Strategic Reading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
