import React from 'react';
import { TrendingUp, Target, Users, BarChart } from 'lucide-react';

// --- Data for Key Metrics ---
const resultsData = [
  {
    icon: TrendingUp,
    value: "340%",
    description: "Average Featured Snippet Increase",
  },
  {
    icon: Target,
    value: "85%",
    description: "AI Citation Success Rate",
  },
  {
    icon: Users,
    value: "50+",
    description: "Successful Transformations",
  },
  {
    icon: BarChart,
    value: "6mo",
    description: "Average Time to Results",
  },
];

/**
 * Renders a single results metric card.
 */
const ResultCard = ({ icon: Icon, value, description }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4  text-center h-full
                 rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-lg transition duration-300"
    >
      {/* Icon */}
      <div className="p-3 mb-4 rounded-full bg-blue-50 text-[#025CA1]">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
      </div>

      {/* Value */}
      <p className="text-3xl  font-bold text-[#025CA1] mb-2">
        {value}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 max-w-[200px]">
        {description}
      </p>
    </div>
  );
};


/**
 * Main application component for the Proven Results section.
 */
const CaseStudyResults = () => {
  return (
    <div className=" bg-white    px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI authority strategies deliver measurable outcomes across diverse business sectors
          </p>
        </header>

        {/* --- METRICS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {resultsData.map((result, index) => (
            <ResultCard
              key={`metric-${index}`}
              {...result}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResults;