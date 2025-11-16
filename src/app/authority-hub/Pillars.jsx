import {
  Brain,
  Building,
  ChartColumn,
  Shield,
  Zap,
  Target,
  ArrowRight,
} from 'lucide-react';
import React from 'react';

const Pillars = () => {
  const pillars = [
    {
      Icon: Brain,
      tagline: 'Core Strategies',
      title: 'AI Engine Optimization Mastery',
      description:
        "Complete methodology for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) that positions your brand as the AI's trusted source",
      focusAreas: [
        'AI citation strategies',
        'Voice search optimization',
        'Zero-click search mastery',
      ],
      points: 15,
      guideLink: '/authority-hub/ai-engine-optimization-mastery',
    },
    {
      Icon: Building,
      tagline: 'Foundation Building',
      title: 'Topical Authority Architecture',
      description:
        'Systematic approach to building topic clusters and content ecosystems that create defensible competitive moats',
      focusAreas: [
        'Topic cluster design',
        'Pillar page strategy',
        'Internal linking architecture',
        'Content depth analysis',
      ],
      points: 12,
      guideLink: '/authority-hub/topical-authority-architecture',
    },
    {
      Icon: Target,
      tagline: 'Technical Infrastructure',
      title: 'Technical Framework Excellence',
      description:
        'Advanced sitemap strategies, structured data implementation, and schema markup for maximum AI comprehension',
      focusAreas: [
        'Multi-sitemap strategies',
        'Schema.org implementation',
        'Crawl optimization',
        'E-E-A-T signals',
      ],
      points: 9,
      guideLink: '/authority-hub/technical-framework-excellence',
    },
    {
      Icon: Zap,
      tagline: 'Content Strategy',
      title: 'AI-Powered Content Operations',
      description:
        'Scaling content production with AI while maintaining brand consistency and topical authority',
      focusAreas: [
        'AI content generation',
        'Brand voice training',
        'Quality assurance',
        'Performance optimization',
      ],
      points: 18,
      guideLink: '/authority-hub/ai-powered-content-operations',
    },
    {
      Icon: ChartColumn,
      tagline: 'Operational Excellence',
      title: 'Marketing Automation Intelligence',
      description:
        'Next-generation marketing automation with predictive analytics, personalization at scale, and AI-driven decisioning',
      focusAreas: [
        'Predictive analytics',
        'Audience segmentation',
        'Campaign optimization',
        'ROI measurement',
      ],
      points: 14,
      guideLink: '/authority-hub/marketing-automation-intelligence',
    },
    {
      Icon: Shield,
      tagline: 'Trust Building',
      title: 'CSR & Trust Engineering',
      description:
        'AI-enhanced Corporate Social Responsibility strategies that build verifiable trustworthiness and brand authority',
      focusAreas: [
        'Transparency systems',
        'Impact measurement',
        'Ethical AI practices',
        'Sustainability tracking',
      ],
      points: 8,
      guideLink: '/authority-hub/csr-trust-engineering',
    },
  ];

  return (
    <section className="mt-20 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-5 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center">
          Comprehensive Knowledge Pillars
        </h2>
        <p className="text-xl max-w-4xl text-center text-neutral-600">
          Deep-dive content ecosystems that establish demonstrable expertise
          across all critical domains of AI-powered authority building
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="flex flex-col p-6 border border-neutral-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {/* Icon and Tagline */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 p-2 bg-blue-100 rounded-xl">
                <pillar.Icon className="w-6 h-6 text-[#025CA2]" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#025CA2]">
                  {pillar.tagline}
                </span>
                     <h3 className="text-xl font-bold text-neutral-700 mt-1">
              {pillar.title}
            </h3>
              </div>
            </div>

            {/* Title and Description */}
       
            <p className="text-neutral-600 mb-6">{pillar.description}</p>

            {/* Focus Areas */}
            <div className="mt-auto">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-700 mb-3">
                Key Focus Areas:
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                {pillar.focusAreas.map((area, areaIndex) => (
                  <li key={areaIndex} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {area.trim()}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer / Read Guide */}
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-sm text-neutral-500">
                <span className="font-bold text-neutral-700">{pillar.points}</span> strategic resources
              </span>
              <a
                href={pillar.guideLink}
                className="flex items-center text-[#025CA2] font-semibold hover:text-blue-700 transition duration-150"
              >
                Read Guide <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;