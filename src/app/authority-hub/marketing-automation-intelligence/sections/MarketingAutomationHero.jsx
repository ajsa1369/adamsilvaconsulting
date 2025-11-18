import { ArrowLeft, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const MarketingAutomationHero = () => {
  return (
    <section
      className="
        w-full min-h-screen 
        flex flex-col items-center 
        px-4 sm:px-10 pt-10 pb-20 
        text-white
        bg-gradient-to-b
        from-[#1A1F63] via-[#1A1B57] to-[#321A66]
      "
    >
      {/* Back Link - CENTERED */}
      <Link
        href="/authority-hub"
        className="
          text-blue-200 text-sm md:text-base 
          flex items-center gap-2 mb-10
          hover:text-white transition
        "
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hover:underline cursor-pointer">
          Back to Authority Hub
        </span>
      </Link>

      {/* Main Heading */}
      <h1
        className="
          text-4xl md:text-6xl 
          font-bold
          text-center tracking-tight mb-4
        "
      >
        <span className="font-bold text-white">Marketing Automation </span>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
          Intelligence
        </span>
      </h1>

      {/* Subheading */}
      <h2
        className="
          text-lg md:text-2xl 
          text-blue-100 
          text-center 
          max-w-4xl 
          font-medium
          mb-6
        "
      >
        Next-Generation AI-Driven Marketing Operations and Predictive Analytics
      </h2>

      {/* Description */}
      <p
        className="
          text-blue-200 
          text-center text-md 
          leading-relaxed 
          max-w-3xl 
          mb-10
          font-normal
        "
      >
        Transform marketing operations with intelligent automation that
        leverages predictive analytics, personalization at scale, and AI-driven
        decision-making for unprecedented operational excellence and customer
        engagement.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-5 mt-4">
        {/* Primary Button */}
        <Link
          href="/contact"
          className="
            bg-gradient-to-r from-[#F47A2A] to-[#F85C3A]
            hover:opacity-90 
            text-white font-medium 
            px-8 py-3 rounded-md 
            transition flex items-center gap-2 text-md
          "
        >
          Implement Automation Intelligence
          <span className="text-lg">→</span>
        </Link>

        {/* Secondary Button */}
        <Link
          href="/services"
          className="
            border border-white/60 
            text-white font-medium 
            px-8 py-3 rounded-md 
            transition flex items-center gap-2 
            text-md hover:bg-white/10
          "
        >
          Explore Campaign Intelligence
          <BarChart2 className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default MarketingAutomationHero;
