'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, Target, Zap, BarChart, Users, Shield } from 'lucide-react';
import {
  Search,
  FileText,
  MessageSquare,
  Crosshair,
  Globe,
  Handshake,
  Phone,
  Activity,
} from 'lucide-react';

const ServiceEcosystem = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categoryColors = {
    Foundation: '#10b981',
    Content: '#3b82f6',
    Communication: '#8b5cf6',
    Campaign: '#f59e0b',
    Analytics: '#ef4444',
    Targeting: '#ec4899',
    'Lead Management': '#06b6d4',
    Security: '#84cc16',
    'Web Development': '#f97316',
    Partnerships: '#a855f7',
    Voice: '#14b8a6',
    'Lead Generation': '#f43f5e',
    Nurturing: '#eab308',
    'Competitive Intelligence': '#6366f1',
  };

  const services = [
    {
      category: 'Foundation',
      icon: Search,
      heading: 'SEO & PPC Superpowers',
      subheading:
        'Dominate search and paid advertising with AI-powered optimization',
      url: '/services/seo-ppc-superpowers',
    },
    {
      category: 'Content',
      icon: FileText,
      heading: 'Content & Media Creation',
      subheading: 'Generate compelling content at scale with AI automation',
      url: '/services/content-media-creation',
    },
    {
      category: 'Communication',
      icon: MessageSquare,
      heading: 'Automated Omnichannel Communication',
      subheading:
        'Engage customers seamlessly across all channels with AI personalization',
      url: '/services/omnichannel-communication',
    },
    {
      category: 'Campaign',
      icon: Target,
      heading: 'Intelligent Campaign Management',
      subheading:
        'Orchestrate complex marketing funnels with real-time optimization',
      url: '/services/intelligent-campaigns',
    },
    {
      category: 'Analytics',
      icon: BarChart,
      heading: 'Real-time Analytics & Reporting',
      subheading:
        'Monitor performance with live dashboards and predictive insights',
      url: '/services/analytics-reporting',
    },
    {
      category: 'Targeting',
      icon: Crosshair,
      heading: 'Intent Graph Identity Targeting',
      subheading:
        'Identify "who is searching" by linking behavior to identities',
      url: '/services/intent-graph-targeting',
    },
    {
      category: 'Lead Management',
      icon: Users,
      heading: 'Precision Lead Management & Targeting',
      subheading:
        'Qualify leads, build personas, and schedule engagement with AI',
      url: '/services/precision-lead-management',
    },
    {
      category: 'Security',
      icon: Shield,
      heading: 'Security & Compliance',
      subheading:
        'Operate confidently with AI-powered data protection and regulatory adherence',
      url: '/services/security-compliance',
    },
    {
      category: 'Web Development',
      icon: Globe,
      heading: 'AI-Driven Website & Landing Pages',
      subheading:
        'Instantly generate high-converting digital assets with automated optimization',
      url: '/services/ai-websites-landing-pages',
    },
    {
      category: 'Partnerships',
      icon: Handshake,
      heading: 'Outreach & Partnerships',
      subheading:
        'Connect with influencers and partners through AI-driven relationship management',
      url: '/services/outreach-partnerships',
    },
    {
      category: 'Voice',
      icon: Phone,
      heading: 'Voice Agent Lead Verification',
      subheading:
        'Automated voice calls for lead verification, enrichment, and qualification',
      url: '/services/voice-agent-verification',
    },
    {
      category: 'Lead Generation',
      icon: Zap,
      heading: 'AI Lead Generation & Qualification',
      subheading:
        'Advanced AI systems for lead discovery, scoring, and automated qualification',
      url: '/services/ai-lead-generation',
    },
    {
      category: 'Nurturing',
      icon: Activity,
      heading: 'Omnichannel Lead Nurturing',
      subheading:
        'Multi-channel automated follow-up sequences with AI personalization',
      url: '/services/omnichannel-nurturing',
    },
    {
      category: 'Competitive Intelligence',
      icon: Eye,
      heading: 'Competitor Domain & Keyword Monitoring',
      subheading:
        'Detect competitor strategies for strategic advantage and market response',
      url: '/services/competitor-monitoring',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Interactive Service{' '}
            <span className="text-[#085DA0]">Ecosystem</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover how our AI-powered services work together as an integrated
            strategic flywheel. Hover over any service to see its connections
            and relationships.
          </p>
        </div>

        {/* Circular Layout */}
        <div
          className="relative w-full max-w-5xl mx-auto"
          style={{ minHeight: '800px' }}
        >
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-35 h-35 bg-[#085DA0] rounded-full flex items-center justify-center shadow-2xl shadow-blue">
              <span className="text-white font-bold text-lg text-center leading-tight">
                AI
                <br />
                Authority
                <br />
                Flywheel
              </span>
            </div>
          </div>

          {/* Connection Lines */}
          {hoveredCard !== null && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
              <line
                x1="50%"
                y1="50%"
                x2={`${
                  50 + 40 * Math.cos(((hoveredCard * (360 / services.length) - 90) * Math.PI) / 180)
                }%`}
                y2={`${
                  50 + 40 * Math.sin(((hoveredCard * (360 / services.length) - 90) * Math.PI) / 180)
                }%`}
                stroke={categoryColors[services[hoveredCard].category]}
                strokeWidth="3"
                className="animate-pulse"
              />
            </svg>
          )}

          {/* Service Cards */}
          {services.map((service, index) => {
            const angle = ((index * (360 / services.length) - 90) * Math.PI) / 180;
            const radius = 350;
            const x = 50 + (radius / 10) * Math.cos(angle);
            const y = 50 + (radius / 10) * Math.sin(angle);
            const Icon = service.icon;
            const isHovered = hoveredCard === index;

            return (
              <Link
                href={service.url}
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  zIndex: isHovered ? 50 : 1,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`w-54 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                    isHovered ? 'scale-110 shadow-2xl' : ''
                  }`}
                  style={{
                    background: isHovered
                      ? categoryColors[service.category]
                      : 'linear-gradient(135deg, white 0%, white 60%, #d1d5db 100%)',
                  }}
                >
                  {/* Category Tag */}
                  <div
                    className="flex bg-neutral-700 text-white items-center gap-2 px-3 py-1 rounded-md w-fit mb-4"
 
                  >
                    <Icon className="w-2 h-2" />
                    <span className="text-xs ">
                      {service.category}
                    </span>
                  </div>

                  {/* Heading and Subheading */}
                  <h3
                    className={`text-md font-bold mb-2 transition-all duration-300 ${
                      isHovered ? 'text-white' : 'text-black'
                    }`}
                  >
                    {service.heading}
                  </h3>
                  <p
                    className={`text-xs transition-all duration-300 ${
                      isHovered ? 'text-white' : 'text-gray-600'
                    }`}
                  >
                    {service.subheading}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-700 font-semibold">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceEcosystem;