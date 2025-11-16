import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';

const StrategicIntellegence = () => {
  const strategies = [
    {
      tagline: 'Strategic Analysis',
      impact: 'High Impact',
      title: 'The AI Authority Imperative: Why Traditional SEO is Dead',
      description:
        "Gartner's projection of 50% organic traffic decline marks the end of click-based optimization. Learn how to shift from ranking for keywords to being cited for authority.",
      date: 'Sep 18, 2025',
      time: '12 min read',
      link: '/insights/the-ai-authority-imperative-why-traditional-seo-is-dead',
    },
    {
      tagline: 'Market Intelligence',
      impact: 'Critical Impact',
      title: 'Zero-Click Searches: The New Reality of Information Discovery',
      description:
        'With 65% of searches now resulting in zero clicks, understand how AI engines answer queries directly and how to position your brand as the preferred source.',
      date: 'Sep 15, 2025',
      time: '10 min read',
      link: '/insights/zero-click-searches-the-new-reality-of-information-discovery',
    },
    {
      tagline: 'Technical Deep Dive ',
      impact: 'Medium Impact',
      title: 'E-E-A-T in the Age of Generative AI: Building Unshakeable Authority',
      description:
        "Google's E-E-A-T framework has evolved for AI evaluation. Discover how Experience, Expertise, Authoritativeness, and Trustworthiness translate to AI citation success.",
      date: 'Sep 12, 2025',
      time: '15 min read',
      link: '/insights/e-e-a-t-in-the-age-of-generative-ai-building-unshakeable-authority',
    },
    {
      tagline: 'Methodology ',
      impact: 'High Impact',
      title: 'The Integrated Service Ecosystem: How AI Services Compound Authority',
      description:
        'Analysis of how technical frameworks, content creation, topical authority, and CSR initiatives create a self-reinforcing strategic flywheel.',
      date: 'Sep 10, 2025',
      time: '18 min read',
      link: '/insights/the-integrated-service-ecosystem-how-ai-services-compound-authority',
    },
  ];

  // Function to get the correct Tailwind classes for the impact badge
  const getImpactClasses = (impact) => {
    switch (impact) {
      case 'Critical Impact':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'High Impact':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Medium Impact':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="mt-20 py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-5 mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-800 text-center">
          Latest Strategic Intelligence
        </h2>
        <p className="text-lg md:text-xl max-w-4xl text-center text-neutral-600">
          Essential reading for leadership navigating the AI transformation.
          Strategic analysis, market intelligence, and implementation frameworks.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {strategies.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-6 border border-neutral-200 rounded-2xl shadow-md bg-white transition hover:shadow-2xl"
          >
            {/* Tagline and Impact Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-[#025CA2]">
                {item.tagline}
              </span>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${getImpactClasses(item.impact)}`}
              >
                {item.impact}
              </span>
            </div>

            {/* Title and Description */}
            <h3 className="text-xl font-bold text-neutral-800 mb-4 hover:text-[#025CA2] transition-colors">
              <a href={item.link}>{item.title}</a>
            </h3>
            <p className="text-neutral-600 mb-6 text-base">{item.description}</p>

            {/* Footer: Date, Time, and Read Guide Button */}
            <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-neutral-500">
                <span className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1 text-[#025CA2]" />
                  {item.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-[#025CA2]" />
                  {item.time}
                </span>
              </div>
              <a
                href={item.link}
                className="flex items-center text-[#025CA2] font-semibold hover:text-blue-700 transition duration-150 py-2 px-3 rounded-lg bg-blue-50 hover:bg-blue-100"
              >
                Read Strategic Analysis <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Link href="/insights" className="flex max-w-[300px] items-center mx-auto bg-[#025CA2] hover:-traslate-y-1 cursor-pointer text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.02]">
          View All Strategic Insights <ArrowRight className="w-5 h-5 ml-3" />
        </Link>
      </div>
    </section>
  );
};

export default StrategicIntellegence;