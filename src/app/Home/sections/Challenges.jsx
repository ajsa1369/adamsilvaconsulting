
'use client';
import React from 'react';
import { Users, TrendingUp, Target, Rocket } from 'lucide-react';

const Challenges = () => {
  const challenges = [
    {
      icon: Users,
      title: 'Resource Crunch',
      challenge: 'Limited budgets, staff shortages, and 85% of marketers feeling unprepared for AI integration.',
      solution: 'AI automation acts as force multiplier, enabling lean teams to achieve unprecedented scale.',
    },
    {
      icon: TrendingUp,
      title: 'Visibility Crisis',
      challenge: 'Organic traffic drops of 25-40% as AI engines answer queries directly, bypassing websites.',
      solution: 'AEO/GEO strategies shift focus from clicks to citations, building sustainable visibility.',
    },
    {
      icon: Target,
      title: 'Data Dilemma',
      challenge: 'Companies analyze less than 40% of collected data while struggling to prove marketing ROI.',
      solution: 'AI analytics transforms raw data into strategic intelligence with clear attribution.',
    },
    {
      icon: Rocket,
      title: 'Engagement Gap',
      challenge: 'Consumers demand hyper-personalization while customer acquisition costs increase 5-25x.',
      solution: 'Next-best-action AI delivers individual experiences at scale, improving lifetime value.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl  font-bold text-black mb-6">
            Solving Critical{' '}
            <span className="text-[#085DA0]">Business Challenges</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our integrated AI strategy directly addresses the most pressing pain points facing modern marketing leaders in 2025.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[#085DA0] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-6">
                  {item.title}
                </h3>

                {/* Challenge */}
                <div className="mb-6">
                  <p className="text-xs font-semibold  text-blue-500 uppercase tracking-wider mb-2">
                    The Challenge
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    Our Solution
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Challenges;