import { Brain, CheckCircle, Search, Target, Zap } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AICoreStrategies = () => {
  const strategies = [
    {
      heading: 'Intent-Driven Question Research',
      subheading:
        'Understanding specific questions your audience asks and natural language queries',
      points: [
        " Google's People Also Ask analysis",
        ,
        'Answer the Public research',
        'Site search analysis',
        'Customer support insights',
      ],
    },
    {
      heading: 'Answer-First Content Structure',
      subheading:
        'Providing immediate, complete answers at the beginning of your content',
      points: [
        'Direct answer (40-60 words)',
        'Elaboration section',
        'Supporting evidence',
        'Action steps',
      ],
    },
    {
      heading: 'Schema Markup Implementation',
      subheading: 'Structured data serving as a roadmap for AI systems',
      points: [
        'FAQPage Schema',
        'HowTo Schema',
        'Article Schema',
        'Speakable Schema',
      ],
    },
    {
      heading: 'Multi-Format Content Creation',
      subheading:
        'Extending beyond text to include multimedia elements AI systems can reference',
      points: [
        'Video content optimization',
        'Podcast episodes',
        'Interactive tools',
        'Cross-platform optimization',
      ],
    },
  ];
  const points = [
    'Intent-driven content architecture',
    'Multi-platform optimization',
    'Continuous performance monitoring',
  ];
  const strategyIcons = [
    <Search key={1} className="w-8 h-8 text-blue-700" />,
    <Target key={2} className="w-8 h-8 text-blue-700" />,
    <Brain key={3} className="w-8 h-8 text-blue-700" />,
    <Zap key={4} className="w-8 h-8 text-blue-700" />,
  ];

  // Background colors for each icon wrapper
  const iconBg = [`bg-blue-100`, `bg-blue-100`, `bg-blue-100`, `bg-blue-100`];

  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-10 p-4 sm:p-6">
      {/* Heading and Description */}
      <div className="flex items-center flex-col gap-5 justify-center max-w-5xl mx-auto">
        <h3 className="text-neutral-800 text-center font-bold text-3xl md:text-4xl">
          Core Strategies for Answer Engine Optimization (AEO)
        </h3>
        <p className="text-xl text-neutral-600 text-center">
          AEO focuses on making your content the definitive answer that search
          engines, voice assistants, and AI platforms deliver to users through
          featured snippets, knowledge panels, and AI-generated responses.
        </p>
      </div>

      {/* GRID — Responsive Strategy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 max-w-5xl w-full mx-auto">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="flex shadow-lg hover:shadow-xl transition duration-300 flex-col rounded-xl p-6 gap-5 bg-white border border-gray-100"
          >
            {/* Strategy Title and Icon */}
            <div className="flex items-start justify-start gap-4">
              <div
                className={`p-4 h-fit rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg[index]}`}
              >
                {strategyIcons[index]}
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h5 className="text-2xl font-bold text-neutral-800">
                  {strategy.heading}
                </h5>
                <p className="text-neutral-600">{strategy.subheading}</p>
              </div>
            </div>

            {/* Strategy Points */}
            <ul className="space-y-3 pt-2 border-t border-gray-100">
              {strategy.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-neutral-700 text-base"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Framework Section - Responsive Flex Layout */}
      <div className="mt-5 max-w-5xl w-full bg-white shadow-xl rounded-xl p-6 md:p-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Block - w-full on mobile, w-1/2 on medium screens+ */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2">
          <h6 className="text-neutral-800 font-bold text-2xl md:text-3xl">
            Strategic Implementation Framework
          </h6>
          <p className="text-lg text-neutral-700 my-4">
            Our proven methodology combines data-driven insights with strategic
            content optimization to maximize AI citation opportunities across
            all major platforms.
          </p>
          <ul className="space-y-3 mt-2">
            {points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-neutral-700 text-base"
              >
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Block - w-full on mobile, w-1/2 on medium screens+ */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/authority-hub/ai-optimization/2.png"
            alt="AI Framework Visual"
            width={500}
            height={500}
            className="rounded-md shadow-lg w-full max-w-sm md:max-w-none h-auto" // Added max-width control for image
          />
        </div>
      </div>
    </section>
  );
};

export default AICoreStrategies;
