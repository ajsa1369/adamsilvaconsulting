import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AIIntroduction = () => {
  const points = [
    'ChatGPT: 82.7% market share, 2.5B daily prompts',
    'Perplexity AI: 8.2% market share, research-focused',
    'Microsoft Copilot: 4.5% market share',
    'Google Gemini: 2.2% market share',
  ];
  return (
    <section
      id="introduction"
      className="mt-20 mx-auto max-w-4xl flex items-start justify-center flex-col gap-5 p-4 sm:p-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 ">
        Introduction to AI Optimization
      </h2>
      <p className="text-neutral-700 text-lg ">
        AI Engine Optimization represents the next evolution of search engine
        optimization, focusing on optimizing content for artificial
        intelligence-powered search platforms like ChatGPT, Claude, Perplexity
        AI, Google AI Overviews, and Microsoft Copilot.
      </p>

      <div className="p-6 rounded-lg w-full  border border-blue-200 bg-blue-50">
        <h4 className="text-xl md:text-2xl font-bold text-blue-900">
          What is AI Engine Optimization?
        </h4>
        <p className="mt-4 text-lg text-blue-900">
          Unlike traditional SEO that targets keyword rankings on search engine
          results pages (SERPs), AI engine optimization ensures your content
          becomes the trusted source that AI systems cite, recommend, and
          reference when answering user queries.
        </p>
      </div>

      {/* Responsive Image and Text Block */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-start md:items-center gap-8 w-full">
        {/* Image - now uses w-full on mobile, w-1/2 on medium screens+ */}
        <Image
          src="/assets/authority-hub/ai-optimization/1.png"
          width={400}
          alt="image"
          height={400}
          className="w-full md:w-1/2 rounded-md h-auto"
        />

        {/* Text/List Block - now uses w-full on mobile, w-1/2 on medium screens+ */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5">
          <h4 className="text-xl md:text-2xl font-bold ">
            The Current AI Search Landscape
          </h4>
          <p className="text-lg text-neutral-700">
            As of September 2025, the AI search ecosystem is dominated by
            several key players, each with distinct characteristics and user
            bases.
          </p>
          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex gap-2 items-start justify-start">
                {/* Aligned icon and text */}
                <CircleCheckBig
                  color="green"
                  className="w-5 h-5 text-green-500 flex-shrink-0 mt-1"
                />
                <span className="text-neutral-600 text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AIIntroduction;
