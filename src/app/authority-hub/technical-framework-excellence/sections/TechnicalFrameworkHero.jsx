import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const TechnicalFrameworkHero = () => {
  const stats = [
        {
            value: '<2.5s',
            label1: 'LCP Target',
            label2: 'Largest Contentful Paint optimization',
        },
        {
            value: '<200ms',
            label1: 'INP Target',
            label2: 'Interaction to Next Paint responsiveness',
        },
        {
            value: '<0.1',
            label1: 'CLS Target',
            label2: 'Cumulative Layout Shift stability',
        },
        {
            value: '85%',
            label1: 'Performance Boost',
            label2: 'Average site speed improvement',
        },
    ];
  return (
    <section className="w-full min-h-screen  flex flex-col items-center justify-center gap-8  sm:p-10 text-white bg-gradient-to-br from-[#0D1222] via-[#0D1222]  to-[#131316]">
      {/* Back Link - Using MockLink for standalone compatibility */}
      <Link
        href="/authority-hub"
        className="text-gray-300 hover:text-white  text-md flex items-center justify-center gap-2 transition duration-200"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="cursor-pointer hover:underline">
          Back to Authority Hub
        </span>
      </Link>

      <div className="text-center mb-4">
        <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight mb-2 leading-tight">
          Technical Framework{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Excellence
          </span>
        </h1>
        <h2 className="text-2xl text-gray-100">
          Advanced SEO for the AI-Powered Era
        </h2>
      </div>

      {/* Description */}
      <p className="max-w-4xl text-center text-md text-gray-300   px-4 ">
        Master advanced technical SEO frameworks that combine traditional optimization with cutting-edge strategies for AI-driven platforms, comprehensive performance optimization, and sophisticated technical implementation.
      </p>

      {/* Stats Container - Responsive Grid/Flex for Stats */}
      <div className="flex flex-wrap items-stretch justify-center mt-10 mb-20 gap-6 sm:gap-8 max-w-6xl w-full">
        {stats?.map((stat, index) => (
          // Stat Card with Glassmorphism Effect
          <div
            key={index}
            className="
              text-center p-4  rounded-2xl
              bg-white/10 backdrop-blur-lg
              border border-white/30 
              shadow-2xl shadow-black/30
              transition-all duration-300
              w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]
              flex flex-col justify-center items-center
              hover:scale-[1.03] hover:border-white/50
            "
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-1 text-white">{stat.value}</h3>
            <p className="font-semibold text-white/90 mb-1 leading-tight">
              {stat.label1}
            </p>
            <p className="text-sm text-white/70">{stat.label2}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalFrameworkHero;
