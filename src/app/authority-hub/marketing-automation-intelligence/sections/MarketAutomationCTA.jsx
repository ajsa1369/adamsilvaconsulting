import { ArrowRight, Brain } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const MarketAutomationContentCTA = () => {
  return (
    <section
      className="
        w-full py-24 mt-20 
        flex flex-col items-center justify-center 
        px-4 gap-8
        bg-gradient-to-r from-[#8A2BE2] via-[#7B2CFF] to-[#5A30FF]
      "
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
        Transform Marketing Operations with Intelligence
      </h2>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-white text-center max-w-3xl leading-relaxed">
        Implement next-generation marketing automation that learns, predicts, and optimizes for unprecedented business results
      </p>

      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4">

        {/* Primary Button */}
        <Link href="/contact">
          <button
            className="
              bg-white cursor-pointer text-[#5A30FF] text-lg font-semibold 
              px-6 py-3 rounded-md 
              flex items-center gap-3
              hover:-translate-y-1 transition-all duration-200
              shadow-md
            "
          >
           Start Intelligence Implementation
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>

        {/* Secondary Button */}
        <Link href="/authority-hub">
          <button
            className="
              border-2 cursor-pointer border-white text-white text-lg font-semibold 
              px-6 py-3 rounded-md 
              flex items-center gap-3
              hover:-translate-y-1 transition-all duration-200
            "
          >
            Explore All Authority Frameworks
            <Brain className="w-5 h-5" />
          </button>
        </Link>

      </div>
    </section>
  );
};

export default MarketAutomationContentCTA;
