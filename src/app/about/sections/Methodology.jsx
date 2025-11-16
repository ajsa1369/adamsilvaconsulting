import {
  Award,
  BookOpen,
  Brain,
  ChartColumn,
  Globe,
  ShieldIcon,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import React from 'react';

const Methodology = () => {
  const ecosystemServices = [
    {
      Icon: BookOpen,
      title: '1. Foundation',
      description:
        'Advanced technical frameworks with strategic sitemaps and schema markup create the blueprint for AI comprehension.',
    },
    {
      Icon: Zap,
      title: '2. Raw Material',
      description:
        'AI-powered content creation produces high-volume, quality, on-brand content at scale with learning capabilities.',
    },
    {
      Icon: Target,
      title: '3. Architecture',
      description:
        'Topical Authority Strategy organizes content into structured, interconnected topic clusters demonstrating deep expertise.',
    },
    {
      Icon: Globe,
      title: '4. Visibility',
      description:
        'AEO and GEO strategies deploy authoritative architecture for direct answer placements and AI citations.',
    },
    {
      Icon: ChartColumn,
      title: '5. Optimization',
      description:
        'AI-driven automation tests and optimizes performance, feeding insights back into content creation.',
    },
    {
      Icon: ShieldIcon,
      title: '6. Trust',
      description:
        'AI-enhanced CSR provides verifiable data on positive impact, building ultimate brand trustworthiness.',
    },
  ];
  const qualities = [
    {
      Icon: Brain,
      title: 'Strategic Intelligence',
      description:
        'Deep understanding of E-E-A-T frameworks, search evolution, and AI model training patterns that inform every strategic decision.',
    },
    {
      Icon: Users,
      title: 'Cross-Functional Integration',
      description:
        'Seamless coordination of SEO, content, digital PR, and technical teams required for successful GEO implementation.',
    },
    {
      Icon: Award,
      title: 'Measurable Authority',
      description:
        'Focus on verifiable metrics: AI citation volume, featured snippet ownership, and brand entity recognition across platforms.',
    },
  ];
  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8 py-10 bg-white">
      {/* Header Section */}
      <div className="flex items-center justify-center gap-4 flex-col">
        <h5 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center">
          The Adam Silva Methodology
        </h5>
        <p className="text-lg text-neutral-600 max-w-4xl text-center leading-relaxed">
          A comprehensive, integrated service ecosystem designed to build and
          project brand authority in the age of generative AI.
        </p>
        <p className="text-lg text-neutral-600 mt-2 max-w-4xl text-center leading-relaxed">
          Adam Silva Consulting's approach recognizes that tactical execution
          must align with strategic objectives, creating a system far more
          powerful than the sum of its parts.
        </p>
      </div>

      {/* Integrated Service Ecosystem Section */}
      <div className="mt-12 flex flex-col gap-5 bg-gray-50 border border-neutral-200 py-10 px-4 sm:px-8 shadow-xl rounded-2xl max-w-7xl mx-auto">
        <h5 className="font-bold text-3xl text-neutral-800 text-center">
          The Integrated Service Ecosystem
        </h5>
        <p className="text-lg max-w-4xl mx-auto text-center text-neutral-600">
          A continuous, self-reinforcing cycle where each service strengthens
          the others, creating a strategic flywheel for authority building.
        </p>

        {/* Ecosystem Grid - Responsive Flex Wrap */}
        <div className="mt-2   flex flex-wrap gap-8 justify-center">
          {ecosystemServices.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-full sm:w-[45%] lg:w-[30%] p-6 border border-neutral-200 rounded-2xl shadow-md bg-white transition hover:shadow-lg"
            >
              <div className="flex items-start justify-start gap-4 mb-3">
                {/* Icon with BG-BLUE-600 */}
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-md flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#106EBE]" />
                </div>
                <h6 className="font-bold text-xl text-neutral-800 mt-1">
                  {title}
                </h6>
              </div>

              <p className="text-left text-base text-neutral-700 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Qualities Section */}
      <div className="mt-12 flex items-stretch justify-center flex-wrap gap-8 max-w-7xl mx-auto">
        {qualities.map(({ Icon, title, description }, index) => (
          <div
            key={index}
            // Responsive width: Full on mobile, half on tablet, third on desktop
            className="flex flex-col gap-4 items-center w-full md:w-[48%] lg:w-[30%] p-6 border border-neutral-200 shadow-xl rounded-2xl bg-white transition hover:shadow-2xl text-center"
          >
            {/* Icon with BG-BLUE-600 */}
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-md  mb-2">
              <Icon className="w-8 h-8 text-[#106EBE]" />
            </div>

            <h6 className="font-bold text-xl text-neutral-800">
              {title}
            </h6>

            <p className="text-center text-base text-neutral-700 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;