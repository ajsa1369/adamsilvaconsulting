import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AIEngineHero = () => {
  const stats = [
    {
      value: '82.7%',
      label1: 'ChatGPT Market Share',
      label2: 'Leading AI search platform',
    },
    {
      value: '400M+',
      label1: 'Weekly Users',
      label2: 'People using ChatGPT weekly',
    },
    {
      value: '65%',
      label1: 'Zero-Click Searches',
      label2: 'Searches resulting in no clicks',
    },
    {
      value: ' $80B',
      label1: 'Voice Commerce Growth',
      label2: 'Projected annual value by 2026',
    },
  ];
  return (
    <section className="w-full min-h-screen  flex flex-col items-center justify-center gap-8  sm:p-10 text-white bg-gradient-to-br from-[#22286A] via-[#192E6E]  to-[#3F1A6C]">
      {/* Back Link - Using MockLink for standalone compatibility */}
      <Link
        href="/authority-hub"
        className="text-blue-200  text-md flex items-center justify-center gap-2  hover:text-gray-200 transition duration-200"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="cursor-pointer hover:underline">
          Back to Authority Hub
        </span>
      </Link>

      <div className="text-center mb-4">
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight mb-2 leading-tight">
          AI Engine Optimization{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Mastery
          </span>
        </h1>
        <h2 className="text-2xl text-blue-100">
          The Complete 2025 Guide to AEO, GEO, and Beyond
        </h2>
      </div>

      {/* Description */}
      <p className="max-w-4xl text-center text-md text-blue-200   px-4 ">
        Master AI Engine Optimization with comprehensive strategies for Answer
        Engine Optimization (AEO), Generative Engine Optimization (GEO),
        technical implementation, and future-proof methodologies that position
        your brand as the AI's trusted source.
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
            <h3 className="text-2xl font-bold mb-1 text-white">{stat.value}</h3>
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

export default AIEngineHero;
