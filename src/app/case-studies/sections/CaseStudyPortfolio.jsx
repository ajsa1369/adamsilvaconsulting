

'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

// --- Data for the Case Studies Section ---
const caseStudies = [
  {
    title: 'SaaS Company Achieves 85% Featured Snippet Success Rate',
    industry: 'Software Technology',
    duration: '6 months',
    challenge: 'Low visibility in competitive AI/ML software market',
    solution: 'Comprehensive AEO strategy with topical authority clusters',
    results: [
      { key: 'Featured Snippets Won', value: '85%', improvement: '+340%' },
      { key: 'AI Engine Citations', value: '500+', improvement: '+2,400%' },
      { key: 'Organic Authority Score', value: '78', improvement: '+156%' },
    ],
  },
  {
    title: 'E-commerce Brand Builds Generative Engine Authority',
    industry: 'E-commerce/Retail',
    duration: '8 months',
    challenge: 'Being overshadowed by marketplace giants in AI search results',
    solution: 'Multi-platform GEO strategy with off-site authority building',
    results: [
      { key: 'Brand Mentions', value: '1,200+', improvement: '+800%' },
      { key: 'AI Citation Quality', value: '9.2/10', improvement: '+280%' },
      { key: 'Voice Search Visibility', value: '65%', improvement: '+520%' },
    ],
  },
  {
    title: 'B2B Consulting Firm Scales Content with AI',
    industry: 'Professional Services',
    duration: '4 months',
    challenge: 'Limited resources for content creation at scale',
    solution: 'AI-powered content automation with quality control systems',
    results: [
      { key: 'Content Output', value: '10x', improvement: '+900%' },
      { key: 'Engagement Rate', value: '68%', improvement: '+240%' },
      { key: 'Lead Quality Score', value: '8.7/10', improvement: '+180%' },
    ],
  },
];

// ---------- SLUG FUNCTION ----------
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// ---------- CASE STUDY CARD ----------
const CaseStudyCard = ({
  title,
  industry,
  duration,
  challenge,
  solution,
  results,
}) => {
  const slug = createSlug(title);
  const caseStudyLink = `/${slug}`;

  const handleReadMoreClick = () => {
    console.log(`Navigating to case study: ${caseStudyLink}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-start max-w-5xl w-full mx-auto justify-between p-8 rounded-xl border border-gray-200 shadow-md bg-white gap-10">
      
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2">
        <p className="text-sm font-semibold text-[#025CA1] mb-4">
          {industry} • {duration}
        </p>

        <h3 className="text-2xl md:text-3xl max-w-[90%] font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h3>

        <div className="flex flex-col space-y-4 mb-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-1">Challenge</h4>
            <p className="text-gray-600 text-sm">{challenge}</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-1">Solution</h4>
            <p className="text-gray-600 text-sm">{solution}</p>
          </div>
        </div>

        <button
          className="flex items-center text-[#025CA1] font-semibold text-sm mt-4 transition duration-150 hover:text-blue-800"
          onClick={handleReadMoreClick}
        >
          Read Full Case Study
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* RIGHT SIDE (KEY RESULTS) */}
      <div className="w-full md:w-1/2 mt-10">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Key Results</h4>

        <div className="space-y-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="flex justify-between items-start w-full "
            >
              {/* LABEL + VALUE BELOW */}
              <div>
                <span className="text-sm text-neutral-600 font-medium block">
                  {result.key}
                </span>
                <p className="text-xl font-bold  text-gray-900 leading-tight mt-1">
                  {result.value}
                </p>
              </div>

              {/* IMPROVEMENT ON RIGHT */}
              <div className="text-right">
                <p className="text-sm font-bold text-green-600 leading-none">
                  {result.improvement}
                </p>
                <span className="text-[11px] text-gray-500">improvement</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

// ---------- MAIN PAGE ----------
const CaseStudyPortfolio = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={`case-study-${index}`} {...study} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CaseStudyPortfolio;
