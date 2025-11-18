import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CSRTrustHero = () => {
  return (
    <section className="
      w-full min-h-screen 
      flex flex-col items-center justify-center 
      px-4 sm:px-10 text-white 
      bg-gradient-to-b 
      from-[#1A0B42] via-[#131A4A] to-[#0D193F]
    ">
      
      {/* Back Link */}
      <Link
        href="/authority-hub"
        className="text-blue-200 text-md flex items-center gap-2 mb-6 hover:text-gray-200 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="cursor-pointer hover:underline">
          Back to Authority Hub
        </span>
      </Link>

      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          <span className="text-white">AI-Powered </span>
          <span className="text-orange-400">Content Operations</span>
        </h1>
      </div>

      {/* Subheading */}
      <h2 className="text-xl md:text-2xl text-blue-100 mb-6 text-center max-w-3xl">
        Scaling Content Production with Brand Consistency and Topical Authority
      </h2>

      {/* Description */}
      <p className="max-w-3xl text-center text-blue-200 mb-10 text-md leading-relaxed">
        Master the strategic frameworks for implementing AI-powered content operations 
        that deliver exponential production capacity while maintaining unwavering brand voice 
        consistency and building defensible topical authority.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="
          bg-orange-500 hover:bg-orange-600 
          text-white font-semibold 
          px-6 py-3 rounded-lg 
          transition flex items-center gap-2
        ">
          Implement Content Operations →
        </button>

        <button className="
          border border-white/60 text-white 
          hover:bg-white/10 
          px-6 py-3 rounded-lg 
          font-semibold transition flex items-center gap-2
        ">
          Explore Content Services ✦
        </button>
      </div>

    </section>
  );
};

export default CSRTrustHero;
