'use client';
import React from 'react';
import { Target, Rocket, Shield } from 'lucide-react';

const About = () => {
  const keyPoints = [
    {
      icon: Target,
      heading: "Solve, Don't Just Sell",
      description:
        'Content structured around key business pain points: Resource Crunch, Visibility Crisis, Data Dilemma, and Engagement Gap. We solve problems, not just promote services.',
    },
    {
      icon: Rocket,
      heading: 'Build the Flywheel',
      description:
        'Architecture supports continuous feedback loops where performance data informs content creation, creating compound growth in authority and visibility.',
    },
    {
      icon: Shield,
      heading: 'Trust is Ultimate Asset',
      description:
        'Verifiable data and CSR initiatives provide auditable proof of trustworthiness, the most valuable signal in AI evaluation frameworks.',
    },
  ];

  const metrics = [
    { label: 'AI Engine Citations', value: 85 },
    { label: 'Featured Snippet Ownership', value: 72 },
    { label: 'Brand Authority Score', value: 91 },
    { label: 'Voice Search Responses', value: 68 },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Lead Generation Through{' '}
            <span className="text-[#085DA0]">AI Authority</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine proven lead generation tactics with cutting-edge AEO/GEO
            strategy. While others chase clicks, we build the authority that
            converts prospects into customers.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Part - Key Points */}
          <div className="space-y-8">
            {keyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#085DA0] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                      {point.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Part - Metrics */}
          <div className="bg-white rounded-3xl p-8 shadow-lg w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              The New Success Metrics
            </h2>

            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4"
                >
                  {/* Label */}
                  <span className="text-gray-600 font-normal text-base whitespace-nowrap">
                    {metric.label}
                  </span>

                  {/* Progress Bar and Value Container */}
                  <div className="flex items-center gap-3 flex-1 max-w-xs">
                    {/* Progress Bar Container */}
                    <div className="flex-1 ml-20 bg-gray-200 rounded-full h-1 overflow-hidden min-w-[120px]">
                      <div
                        className="bg-[#085DA0] h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>

                    {/* Value */}
                    <span className="text-[#085DA0] font-bold text-xl whitespace-nowrap">
                      {metric.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;