import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function StrategicIntelligenceHero() {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
          <span className="text-white">Strategic </span>
          <span className="text-amber-400">Intelligence</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white text-center mb-8 max-w-4xl font-semibold">
          Essential Analysis for the AI Transformation Era
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-white text-center max-w-4xl leading-relaxed mb-16 opacity-95">
          In-depth strategic analysis, market intelligence, and implementation frameworks for business leaders navigating
          the shift from traditional SEO to AI-powered authority building. Essential reading for decision-makers who refuse
          to be caught unprepared by the generative AI revolution.
        </p>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[180px] text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">28+</div>
            <div className="text-white/90 text-sm">Strategic Reports</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[180px] text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">Weekly</div>
            <div className="text-white/90 text-sm">Intelligence Updates</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[180px] text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">C-Suite</div>
            <div className="text-white/90 text-sm">Decision Ready</div>
          </div>
        </div>
      </div>


    </div>
  );
}