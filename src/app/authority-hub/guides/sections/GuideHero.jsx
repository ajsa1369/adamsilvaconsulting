import React from 'react';
import { ArrowRight, ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';



export const GuideHero = () => {
  const ctaPrimary = {
    label: 'Preview Report',
    link: '/',
  };
  const ctaSecondary = {
    label: 'Request Custom Implementation',
    link: '/contact',
  };

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-10 px-4 sm:px-8 bg-white font-sans">
      {/* Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 shadow-sm">
          <BookOpen className="w-4 h-4" />
          Strategic Implementation Resources
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl  font-bold text-gray-900 max-w-5xl leading-tight mb-6">
        Strategic Implementation Guides & Methodologies
      </h1>

      {/* Subheading/Description */}
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl leading-relaxed mb-10">
        Comprehensive step-by-step implementation guides for AEO, GEO, and
        topical authority building. Professional methodologies, proven
        frameworks, and actionable strategies for AI marketing transformation.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full ">
        {/* Primary CTA (Filled Blue Button) */}
        <button className="w-full sm:w-auto px-8 py-3 bg-[#025CA1] hover:bg-[#025CA1] text-white rounded-xl font-semibold transition duration-200 flex items-center justify-center gap-2 shadow-lg ">
          <Link href={ctaPrimary.link} className="text-lg">
            {ctaPrimary.label}
          </Link>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Secondary CTA (Outlined Button) */}
        <button className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-[#025CA1] text-[#025CA1] hover:bg-blue-50 hover:text-[#025CA1] rounded-xl font-semibold transition duration-200 flex items-center text-sm justify-center gap-2 shadow-md">
          <Link href={ctaSecondary.link} className="text-lg">
            {ctaSecondary.label}
          </Link>
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};


