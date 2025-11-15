'use client';
import React, { useState } from 'react';
import { Layers, FileText, Network, Eye, Target, Zap, BarChart, Users, Shield, Rocket } from 'lucide-react';

const ServiceEcosystem = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categoryColors = {
    Foundation: '#10b981', // green
    Content: '#3b82f6', // blue
    Architecture: '#8b5cf6', // purple
    Visibility: '#f59e0b', // amber
    'Lead Gen': '#ef4444', // red
  };

  const services = [
    {
      category: 'Foundation',
      icon: Layers,
      heading: 'Brand Foundation',
      subheading: 'Strategic positioning and core messaging',
    },
    {
      category: 'Content',
      icon: FileText,
      heading: 'Content Strategy',
      subheading: 'AI-optimized content creation',
    },
    {
      category: 'Architecture',
      icon: Network,
      heading: 'Technical SEO',
      subheading: 'Site structure and performance',
    },
    {
      category: 'Visibility',
      icon: Eye,
      heading: 'AEO Optimization',
      subheading: 'AI Engine visibility enhancement',
    },
    {
      category: 'Lead Gen',
      icon: Target,
      heading: 'Lead Capture',
      subheading: 'Conversion-focused systems',
    },
    {
      category: 'Content',
      icon: Zap,
      heading: 'Content Automation',
      subheading: 'Scalable content production',
    },
    {
      category: 'Visibility',
      icon: BarChart,
      heading: 'Analytics & Insights',
      subheading: 'Data-driven decision making',
    },
    {
      category: 'Architecture',
      icon: Users,
      heading: 'User Experience',
      subheading: 'Optimized customer journeys',
    },
    {
      category: 'Foundation',
      icon: Shield,
      heading: 'Trust Building',
      subheading: 'Authority and credibility signals',
    },
    {
      category: 'Lead Gen',
      icon: Rocket,
      heading: 'Growth Acceleration',
      subheading: 'Compound growth strategies',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Interactive Service{' '}
            <span className="text-blue-800">Ecosystem</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover how our AI-powered services work together as an integrated strategic flywheel. 
            Hover over any service to see its connections and relationships.
          </p>
        </div>

        {/* Circular Layout */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ minHeight: '800px' }}>
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-black text-xl text-center leading-tight">
                AI<br />Authority<br />Flywheel
              </span>
            </div>
          </div>

          {/* Connection Lines */}
          {hoveredCard !== null && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
              <line
                x1="50%"
                y1="50%"
                x2={`${50 + 40 * Math.cos((hoveredCard * 36 - 90) * Math.PI / 180)}%`}
                y2={`${50 + 40 * Math.sin((hoveredCard * 36 - 90) * Math.PI / 180)}%`}
                stroke={categoryColors[services[hoveredCard].category]}
                strokeWidth="3"
                className="animate-pulse"
              />
            </svg>
          )}

          {/* Service Cards */}
          {services.map((service, index) => {
            const angle = (index * 36 - 90) * Math.PI / 180; // 360/10 = 36 degrees between cards
            const radius = 350; // Distance from center
            const x = 50 + (radius / 10) * Math.cos(angle); // Percentage positioning
            const y = 50 + (radius / 10) * Math.sin(angle);
            const Icon = service.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
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
                  className={`w-64 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                    isHovered ? 'scale-110 shadow-2xl' : ''
                  }`}
                  style={{
                    background: isHovered
                      ? categoryColors[service.category]
                      : 'linear-gradient(135deg, white 0%, white 60%, #d1d5db 100%)',
                  }}
                >
                  {/* Category Tag */}
                  <div className="flex items-center gap-2 bg-gray-700 text-white px-3 py-1 rounded-md w-fit mb-4">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-semibold">{service.category}</span>
                  </div>

                  {/* Heading and Subheading */}
                  <h3
                    className={`text-xl font-bold mb-2 transition-all duration-300 ${
                      isHovered ? 'text-white underline' : 'text-black'
                    }`}
                  >
                    {service.heading}
                  </h3>
                  <p
                    className={`text-sm transition-all duration-300 ${
                      isHovered ? 'text-white underline' : 'text-gray-600'
                    }`}
                  >
                    {service.subheading}
                  </p>
                </div>
              </div>
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