import React from 'react';
import { TrendingUp, BarChart, Users } from 'lucide-react';

// --- Data for Research Focus Areas ---
const focusAreas = [
  {
    icon: TrendingUp,
    title: "AI Engine Behavior",
    description: "Understanding how different AI platforms select, evaluate, and cite sources",
    studies: "8 active studies",
  },
  {
    icon: BarChart,
    title: "Content Optimization",
    description: "Best practices for structuring content that AI engines can parse and utilize",
    studies: "12 active studies",
  },
  {
    icon: Users,
    title: "Authority Metrics",
    description: "Developing new measurement frameworks for digital authority in the AI era",
    studies: "6 active studies",
  },
];

/**
 * Renders a single Research Focus Area card.
 */
const FocusAreaCard = ({ icon: Icon, title, description, studies }) => {
  return (
    <div
      className="flex flex-col items-center p-6 sm:p-8 text-center h-full
                 rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-lg transition duration-300"
    >
      {/* Icon */}
      <div className="p-4 mb-6 rounded-xl bg-blue-50 text-blue-600">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-xl  font-bold text-gray-900 mb-3 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 text-sm flex-grow max-w-[300px]">
        {description}
      </p>

      {/* Active Studies Count */}
      <p className="font-semibold text-sm text-gray-500 mt-auto">
        {studies}
      </p>
    </div>
  );
};


/**
 * Main application component for the Research Focus Areas section.
 */
const ResearchAreas = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Research Focus Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our research initiatives drive understanding of AI marketing transformation
          </p>
        </header>

        {/* --- FOCUS AREAS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusAreas.map((area, index) => (
            <FocusAreaCard
              key={`focus-area-${index}`}
              {...area}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchAreas;