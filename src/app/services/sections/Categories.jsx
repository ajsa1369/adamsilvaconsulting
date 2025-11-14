import { ChartColumn, Target, Zap } from 'lucide-react';
import React from 'react';

const Categories = () => {
  const categories = [
    {
      title: 'Foundation Services',
      description:
        'Technical infrastructure and content creation capabilities that form the bedrock of AI authority.',
      points: [
        'Technical SEO Architecture',
        'AI Content Creation',
        'Topical Authority Development',
      ],
      Icon: Target,
    },
    {
      title: 'Optimization Services',
      description:
        'Advanced strategies specifically designed for AI engine visibility and citation.',
      points: [
        'Answer Engine Optimization',
        'Generative Engine Optimization',
        'AI Marketing Automation',
      ],
      Icon: Zap,
    },
    {
      title: 'Intelligence Services',
      description:
        'Data-driven insights and performance optimization for continuous improvement.',
      points: [
        'Real-time Analytics',
        'Performance Intelligence',
        'Predictive Modeling',
      ],
      Icon: ChartColumn,
    },
  ];

  return (
    <section className="mt-20 w-full flex items-center justify-center flex-col gap-10 px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
      <h1 className="text-neutral-800 font-bold text-3xl md:text-5xl text-center">
        Our Service Categories
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col p-8 bg-white border border-neutral-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon container with gradient background effect */}
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-lg mb-6 shadow-md"
              style={{
                background: 'linear-gradient(135deg, #e0f2fe 0%, #bfdbfe 100%)' // Subtle light blue gradient
              }}
            >
              <category.Icon className="w-8 h-8 text-blue-700" />
            </div>

            {/* Title and Description */}
            <h2 className="text-2xl font-bold text-neutral-800 mb-3">
              {category.title}
            </h2>
            <p className="text-neutral-600 text-base mb-6">
              {category.description}
            </p>

            {/* Focus Points List */}
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">Key Focus Areas:</h3>
            <ul className="space-y-2 text-neutral-700 text-sm">
              {category.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span> 
                  {point.trim()}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;