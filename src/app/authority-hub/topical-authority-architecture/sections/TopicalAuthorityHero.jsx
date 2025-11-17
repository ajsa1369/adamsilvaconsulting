import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const TopicalAuthorityHero = () => {
  const stats = [
    {
      value: '85%',
      label1: 'Algorithm Resilience',
      label2: 'Higher stability during Google updates',
    },
    {
      value: '300%',
      label1: 'Traffic Growth',
      label2: 'Average increase with strong topical authority',
    },
    {
      value: '50%',
      label1: 'Ranking Improvement',
      label2: 'Faster ranking for new content',
    },
    {
      value: '40%',
      label1: 'User Engagement',
      label2: 'Increase in time on site',
    },
  ];
  return (
    <section className="w-full min-h-screen  flex flex-col items-center justify-center gap-8  sm:p-10 text-white bg-gradient-to-br from-[#063e30] via-[#0F3E3D]  to-[#123E4F]">
      {/* Back Link - Using MockLink for standalone compatibility */}
      <Link
        href="/authority-hub"
        className="text-green-200  text-md flex items-center justify-center gap-2  hover:text-gray-200 transition duration-200"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="cursor-pointer hover:underline">
          Back to Authority Hub
        </span>
      </Link>

      <div className="text-center mb-4">
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight mb-2 leading-tight">
          Topical Authority{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Architecture
          </span>
        </h1>
        <h2 className="text-2xl text-green-100">
          The Complete Guide to Building Content Ecosystems That Dominate Search Rankings
        </h2>
      </div>

      {/* Description */}
      <p className="max-w-4xl text-center text-md text-green-200   px-4 ">
        Master the systematic approach to building topic clusters and content ecosystems that create defensible competitive moats through comprehensive expertise demonstration and strategic content architecture.
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

export default TopicalAuthorityHero;
