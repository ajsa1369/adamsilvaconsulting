import React from 'react';
import {
  Search,
  Building2,
  Target,
  BarChart4,
  BookOpen,
  ArrowRight,
  Brain,
} from 'lucide-react';
import Link from 'next/link';

const StrategicFramework = () => {
  const phases = [
    {
      Icon: Search,
      title: 'Phase 1: AI Visibility Audit',
      description:
        'Comprehensive analysis of current AI engine visibility and competitive positioning',
    },
    {
      Icon: Building2,
      title: 'Phase 2: Foundation Building',
      description:
        'Technical architecture and topical authority development before advanced tactics',
    },
    {
      Icon: Target,
      title: 'Phase 3: Optimization Deployment',
      description:
        'Integrated AEO/GEO implementation with cross-functional team coordination',
    },
    {
      Icon: BarChart4,
      title: 'Phase 4: Performance Evolution',
      description:
        'Continuous measurement and KPI evolution for AI-driven success metrics',
    },
  ];

  const resources = [
    {
      Icon: BookOpen,
      title: 'Strategic Guides & Methodologies',
      description:
        'Step-by-step implementation guides for AEO, GEO, and topical authority building',
      buttonText: 'Browse Implementation Guides',
      link: '/authority-hub/guides',
    },
    {
      Icon: BarChart4,
      title: 'Case Studies & Results',
      description:
        'Real-world authority building implementations with quantified business outcomes',
      buttonText: 'View Authority Success Stories',
      link: '/case-studies',
    },
    {
      Icon: Brain,
      title: 'Original Research & Analysis',
      description:
        'Proprietary research on AI engine behavior and authority building effectiveness',
      buttonText: 'Access Research Reports',
      link: '/research',
    },
  ];

  const IconWrapper = ({ children }) => (
    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-md">
      {children}
    </div>
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Strategic Implementation Framework Header */}
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center">
          Strategic Implementation Framework
        </h2>
        <p className="text-lg md:text-xl max-w-4xl text-center text-neutral-600 mt-3">
          How organizations can systematically implement AI authority building strategies with measurable outcomes
        </p>
      </div>

      {/* Strategic Implementation Phases Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
        {phases.map((phase, index) => (
          <div key={index} className="flex flex-col items-center justify-start h-full">
            <IconWrapper>
              <phase.Icon className="w-8 h-8 text-[#025CA2]" />
            </IconWrapper>
            <h3 className="text-xl font-bold text-neutral-800 mt-6 mb-2">
              {phase.title}
            </h3>
            <p className="text-sm text-neutral-600 px-2 flex-grow">
              {phase.description}
            </p>
          </div>
        ))}
      </div>

      {/* Resource Library Section */}
      <div className="max-w-7xl mx-auto border border-neutral-200 rounded-2xl shadow-xl p-6 md:p-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center mb-10">
          Resource Library
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border border-neutral-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <IconWrapper>
                <resource.Icon className="w-8 h-8 text-[#025CA2]" />
              </IconWrapper>

              <h3 className="text-xl font-bold text-neutral-800 mt-6 mb-3">
                {resource.title}
              </h3>
              <p className="text-sm text-neutral-600 flex-grow mb-6">
                {resource.description}
              </p>
              <Link
                href={resource.link}
                className="flex items-center text-[#025CA2] font-semibold hover:-translate-y-1 hover:text-[#025CA2] transition duration-150 mt-auto"
              >
                {resource.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicFramework;