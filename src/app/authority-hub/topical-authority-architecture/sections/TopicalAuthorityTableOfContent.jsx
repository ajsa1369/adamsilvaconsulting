import React from 'react';

const TopicalAuthorityTableOfContent = () => {
  const content = [
    {
      label: 'Understanding Topical Authority in the AI Era',
      url: '#understanding-topical-authority',
    },
    {
      label: 'Content Cluster Architecture: Building Your Knowledge Foundation',
      url: '#content-cluster-architecture',
    },
    {
      label: 'Pillar Page Strategy: Creating Authoritative Content Hubs',
      url: '#pillar-page-strategy',
    },
    {
      label: 'Internal Linking for Authority: Creating Powerful Content Networks',
      url: '#internal-linking',
    },
    {
      label: 'Content Depth and Expertise Signals: Demonstrating E-E-A-T',
      url: '#content-depth-expertise',
    },
    {
      label: 'Measuring Topical Authority: Metrics and Analytics',
      url: '#measuring-authority',
    },
  ];
  return (
    <section className="mt-10 flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl  text-neutral-800 font-bold">
        Table of Contents
      </h2>

      <div className="bg-white border shadow-xl border-green-200 max-w-4xl rounded-md grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
        {content.map((point, index) => (
          <div
            key={index}
            className="
              p-3 rounded-md flex items-center gap-4 transition-all duration-200 
              border border-gray-200 h-20   hover:bg-green-100
            " 
          >
            <span
              className=" 
                px-3 py-1  rounded-md text-sm font-semibold  
                bg-green-100 text-green-500
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

export default TopicalAuthorityTableOfContent;
