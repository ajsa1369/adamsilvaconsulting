import React from 'react';

const AITableOfContent = () => {
  const content = [
    {
      label: 'Introduction to AI Engine Optimization',
      url: '#introduction',
    },
    {
      label: 'The Shift from Traditional SEO to AI Optimization',
      url: '#shift-from-seo',
    },
    {
      label: 'Core Strategies for Answer Engine Optimization (AEO)',
      url: '#aeo-strategies',
    },
    {
      label: 'Generative Engine Optimization (GEO) Best Practices',
      url: '#geo-best-practices',
    },
    {
      label: 'Technical Implementation Guidelines',
      url: '#technical-guidelines',
    },
    {
      label: 'Case Studies and Results',
      url: '#case-studies',
    },
    {
      label: 'Future Trends and Predictions',
      url: '#future-trends',
    },
    {
      label: 'Getting Started: Your AI Optimization Action Plan',
      url: '#action-plan',
    },
  ];
  return (
    <section className="mt-10 flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl  text-neutral-800 font-bold">
        Table of Contents
      </h2>

      <div className="bg-white border shadow-xl border-gray-200 max-w-4xl rounded-md grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
        {content.map((point, index) => (
          <div
            key={index}
            className="
              p-3 rounded-md flex items-center gap-4 transition-all duration-200 
              border border-gray-200 h-20   hover:bg-blue-100
            " 
          >
            <span
              className=" 
                px-3 py-1  rounded-md text-sm font-semibold  
                bg-blue-100 text-blue-600
              "
            >
              {index + 1}
            </span>

            <a
              href={point.url}
              className="text-neutral-700 hover:underline text-md"
            >
              {point.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AITableOfContent;
