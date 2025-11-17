import React from 'react';

const AIPillars = () => {
  const pillars = [
    {
      heading: '1. Search Engine Optimization (SEO)',
      description:
        'Traditional optimization for search engines like Google, Bing, and DuckDuckGo. This remains the foundation, focusing on technical performance, content quality, and authority building.',
    },
    {
      heading: '2. Answer Engine Optimization (AEO)',
      description:
        "Optimization for platforms that provide direct answers to user queries, including Google's featured snippets, voice assistants, and AI-powered search results.",
    },
    {
      heading: '3. Generative Engine Optimization (GEO)',
      description:
        'Optimization for AI systems that generate new content based on training data and real-time information retrieval, including ChatGPT, Claude, and Perplexity.',
    },
  ];
  const colors = [
    {
      name: 'navy',
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      heading: 'text-blue-800',
      border: 'border-blue-300',
    },
    {
      name: 'green',
      bg: 'bg-green-50',
      text: 'text-green-800',
      heading: 'text-green-800',
      border: 'border-green-300',
    },
    {
      name: 'purple',
      bg: 'bg-purple-50',
      text: 'text-purple-800',
      heading: 'text-purple-800',
      border: 'border-purple-300',
    },
  ];

  return (
    <section className="p-8 flex items-start justify-center flex-col gap-10 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-neutral-800">
        The Three Pillars of AI Engine Optimization
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {pillars.map((pillar, index) => {
          const color = colors[index % colors.length]; // cycle through colors

          return (
            <div
              key={index}
              className={`w-[31%] rounded-xl p-5 h-[350px] border ${color.bg} ${color.border}`}
            >
              <h4 className={`text-xl font-bold ${color.heading}`}>
                {pillar.heading}
              </h4>
              <p className={`mt-3 text-md ${color.text}`}>
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AIPillars;
