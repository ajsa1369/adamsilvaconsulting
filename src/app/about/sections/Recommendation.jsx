import { BookOpen, ChartColumn, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const Recommendation = () => {
  const recommendations = [
    {
      Icon: ChartColumn,
      title: 'Conduct an AI Visibility Audit',
      p1: "Use tools like ChatGPT, Perplexity, and Google's AI Overviews to ask conversational questions about your industry, products, and competitors.",
      p2: 'Document where your brand is cited, sentiment of citations, and competitor frequency to establish a critical baseline for measuring progress.',
    },
    {
      Icon: BookOpen,
      title: 'Prioritize Foundational Investment',
      p1: 'While AEO and GEO tactics are compelling, sustainable success requires proper foundations first.',
      p2: 'Invest in building true Topical Authority and sound technical architecture before pursuing advanced visibility campaigns.',
    },
    {
      Icon: Users,
      title: 'Demand Integrated Teams',
      p1: 'Success requires unprecedented collaboration across traditionally siloed marketing functions.',
      p2: 'Select consultancies with demonstrably integrated SEO, content, digital PR, and technical teams working in seamless coordination.',
    },
    {
      Icon: TrendingUp,
      title: 'Evolve Measurement KPIs',
      p1: 'Move beyond singular reliance on organic traffic and click-through rates to metrics that matter in an AI-driven world.',
      p2: 'Focus on share of voice in AI responses, brand citation volume and sentiment, featured snippet ownership, and brand-entity recognition.',
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center mt-20 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center gap-4 flex-col max-w-5xl">
        <h5 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center">
          Strategic Recommendations for Leadership
        </h5>
        <p className="text-lg md:text-xl text-neutral-700 max-w-4xl text-center leading-relaxed">
          For decision-makers evaluating partners to navigate the AI-driven
          landscape
        </p>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        {recommendations.map(({ Icon, title, p1, p2 }, index) => (
          <div
            key={index}
            className="w-full md:w-[45%]  bg-white h-[250px] justify-start rounded-lg shadow-md p-6 flex flex-col items-start"
          >
            <div className="flex items-center justify-center gap-5">
              <Icon className="w-8 h-8 text-[#0F6CBB] mb-4" />
              <h6 className="text-xl font-semibold text-neutral-800 mb-3">
                {title}
              </h6>
            </div>

            <p className="text-neutral-700 mb-4">{p1}</p>
            <p className="text-neutral-700">{p2}</p>
          </div>
        ))}
      </div>
       <div className="mt-16 w-full max-w-7xl mx-auto rounded-2xl bg-[#0F6CBB] p-10 flex flex-col items-center justify-center gap-10 shadow-2xl">
        <h5 className="text-3xl  font-extrabold text-white text-center">
         The Transformation Timeline
        </h5>
        <p className='text-blue-300 max-w-3xl text-lg text-center'>The transition to an AI-dominated information landscape is not a distant trend—it is the current reality. Organizations that thrive will be those that move decisively to build genuine, verifiable authority.</p>
        <p className='text-lg font-bold text-gray-800'>A firm with this comprehensive service portfolio is positioned not just to help clients adapt, but to empower them to lead.</p>
      </div>
    </section>
  );
};

export default Recommendation;
