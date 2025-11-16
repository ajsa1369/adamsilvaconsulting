import React from 'react';
import {
  Brain,
  Rocket,
  Target,
  TrendingUp,
} from 'lucide-react';

// Custom ProgressBar component to display stats visually
const ProgressBar = ({ percentage, colorClass, label }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-3">
      <div
        className={`h-3 rounded-full ${colorClass} transition-all duration-1000 ease-out`}
        style={{ width: `${percentage}%` }}
        aria-label={label}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

const Paradigm = () => {
  return (
    <section className="bg-gray-50 py-16  flex items-center justify-center flex-col">
      {/* Introduction */}
      <div className="flex flex-col items-center justify-center gap-6 max-w-4xl text-center">
        <h3 className="text-center font-bold text-3xl md:text-4xl text-gray-800">
          Navigating the New Advertising Paradigm
        </h3>
        <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
          The digital advertising landscape is undergoing its most profound
          transformation in over a decade. AI-powered platforms are
          fundamentally altering how users interact with information online,
          creating an existential threat for businesses reliant on traditional
          organic search.
        </p>
      </div>

      {/* Main Content: Left (Strategy) & Right (Stats) */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12  gap-5 px-8 w-full mx-auto">

        {/* Left Container: The Paradigm Shift & Strategic Pillars */}
        <div className="flex flex-col w-full md:w-3/5 lg:w-[50%] p-2 sm:p-0">
          <div className="space-y-6">
            <h4 className="text-neutral-700 text-3xl font-bold">
              The Paradigm Shift
            </h4>
            <p className="text-lg text-neutral-500">
              Gartner projects that organic search traffic will decline by as
              much as 50% as users turn to AI chatbots and virtual assistants
              for information. This creates an urgent need for a new strategic
              approach.
            </p>
            <p className="text-lg text-neutral-500">
              Adam Silva Consulting addresses this challenge with an integrated
              ecosystem designed to build and project brand authority. Our
              approach begins with AI-powered content creation and extends to
              the strategic pillars of Answer Engine Optimization (AEO),
              Generative Engine Optimization (GEO), and foundational Topical
              Authority development.
            </p>
          </div>

          {/* Key Strategic Insight Box */}
          <div className="flex flex-col items-start justify-start mt-8 p-6 rounded-2xl  shadow-lg">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Brain className="w-6 h-6 text-[#106EBE] flex-shrink-0" />
              <h5 className="text-xl font-bold text-neutral-700">
                Key Strategic Insight
              </h5>
            </div>
            <p className="text-lg italic text-neutral-600   py-1">
              "The strategic objective for digital visibility has irrevocably
              shifted from ranking for keywords to being cited for authority.
              Achieving success demands a holistic strategy that seamlessly
              integrates content creation, technical architecture, and
              multi-platform brand presence."
            </p>
          </div>

          {/* Value Propositions / Pillars */}
          <div className="mt-10 flex flex-col items-start justify-start gap-8">
            {[
              {
                Icon: Target,
                title: 'Authority Over Traffic',
                description: 'Building demonstrable expertise that AI engines recognize and cite as authoritative sources',
              },
              {
                Icon: Rocket,
                title: 'Defensible Competitive Moats',
                description: "Creating sophisticated content architecture that's difficult for competitors to replicate",
              },
              {
                Icon: TrendingUp,
                title: 'Compound Authority Growth',
                description: 'Systematic approach to building topical authority that creates long-term data assets',
              },
            ].map(({ Icon, title, description }) => (
              <div key={title} className="flex items-start gap-6">
                {/* Icon Container with fixed BG styling */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#CCE7FF] rounded-lg shadow-xl">
                  <Icon className="w-6 h-6 text-[#106EBE]" />
                </div>
                {/* Text Content */}
                <div>
                  <h5 className="text-2xl font-semibold text-neutral-700 mt-0">
                    {title}
                  </h5>
                  <p className="text-lg text-neutral-500 mt-1">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Container: Market Reality Stats with Gradient BG */}
        <div
          className="w-full md:w-2/5 lg:w-[50%] p-6 md:p-8 rounded-xl  flex flex-col gap-6"
          style={{ backgroundImage: 'linear-gradient(to bottom right, #E8F4FF, #ffffff)' }} // Blue-300 to White gradient
        >
          <h5 className="text-2xl text-neutral-800 font-bold mb-4">The Market Reality</h5>

          {/* Stat 1: Projected Organic Traffic Decline (Red) */}
          <div className="p-3 bg-white rounded-lg shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h6 className="text-md text-neutral-700 font-semibold">
                Projected Organic Traffic Decline (Gartner)
              </h6>
              <h6 className="font-bold text-2xl text-red-600">50%</h6>
            </div>
            <ProgressBar percentage={50} colorClass="bg-red-600" label="50% traffic decline" />
          </div>

          {/* Stat 2: Businesses Seeing Traffic Drops (Amber) */}
          <div className="p-3 bg-white rounded-lg shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h6 className="text-md text-neutral-700 font-semibold">
                Businesses Seeing Traffic Drops
              </h6>
              <h6 className="font-bold text-2xl text-amber-600">25-40%</h6> {/* Using 40% for visual */}
            </div>
            <ProgressBar percentage={40} colorClass="bg-amber-600" label="40% businesses seeing drops" />
          </div>

          {/* Stat 3: Zero-Click Search Queries (Blue) */}
          <div className="p-3 bg-white rounded-lg shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h6 className="text-md text-neutral-700 font-semibold">
                Zero-Click Search Queries
              </h6>
              <h6 className="font-bold text-2xl text-blue-600">65%</h6>
            </div>
            <ProgressBar percentage={65} colorClass="bg-blue-600" label="65% zero-click queries" />
          </div>

          {/* Call to Action Box */}
          <div className="mt-4 p-3 bg-[#106EBE] rounded-xl shadow-xl flex items-center justify-center">
            <h6 className="text-xl text-white font-bold text-center">
              The time for transformation is now, not later.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paradigm;