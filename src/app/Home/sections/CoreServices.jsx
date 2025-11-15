'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

const CoreServicesCTA = () => {
  const services = [
    {
      title: 'AI-Powered Content & Lead Generation',
      description:
        'Automated content creation, visual assets, and video production that converts visitors into qualified leads through strategic marketing funnels.',
      metrics: [
        { value: '80%', label: 'Faster Content Creation', sublabel: 'vs Traditional Methods' },
        { value: '60%', label: 'Higher Engagement', sublabel: 'AI-Optimized Content' },
        { value: '5x', label: 'More Qualified Leads', sublabel: 'Through Automation' },
      ],
    },
    {
      title: 'AEO/GEO Optimization & Marketing Automation',
      description:
        'Advanced strategies for Answer Engine and Generative Engine optimization combined with intelligent marketing automation for maximum lead conversion.',
      metrics: [
        { value: '300%', label: 'More AI Citations', sublabel: 'Brand Authority' },
        { value: '45%', label: 'Higher ROI', sublabel: 'Automated Campaigns' },
        { value: '24/7', label: 'Lead Generation', sublabel: 'AI-Powered Systems' },
      ],
    },
  ];

  return (
    <>
      {/* Core Services Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl  font-bold text-gray-700 mb-6">
              Our Core{' '}
              <span className="text-[#085DA0]">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive lead generation services that leverage AI optimization to drive measurable results for your business.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                {/* Title */}
                <h3 className="text-2xl  font-bold text-black mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl  font-bold text-[#085DA0] mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        {metric.label}
                      </div>
                      <div className="text-xs text-gray-600">
                        {metric.sublabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreServicesCTA;