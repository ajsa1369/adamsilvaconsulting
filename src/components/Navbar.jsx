"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Bot, Megaphone, Globe, MessageSquare, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  const serviceCategories = [
    {
      title: 'Lead Generation & Sales',
      icon: <Bot className="w-5 h-5" />,
      items: [
        { name: 'AI Lead Generation', href: '/services/ai-lead-generation', desc: 'Intent signals & predictive scoring' },
        { name: 'Voice Agent Verification', href: '/services/voice-agent-verification', desc: 'AI-powered lead qualification' },
        { name: 'Precision Lead Management', href: '/services/precision-lead-management', desc: 'ML scoring & intelligent routing' },
        { name: 'Intent Graph Targeting', href: '/services/intent-graph-targeting', desc: 'Behavioral intent signals' },
      ]
    },
    {
      title: 'Marketing & Campaigns',
      icon: <Megaphone className="w-5 h-5" />,
      items: [
        { name: 'Intelligent Campaigns', href: '/services/intelligent-campaigns', desc: 'AI-optimized campaign management' },
        { name: 'SEO & PPC Superpowers', href: '/services/seo-ppc-superpowers', desc: 'AEO + GEO + traditional SEO' },
        { name: 'Content & Media Creation', href: '/services/content-media-creation', desc: 'AI-assisted content production' },
        { name: 'Omnichannel Nurturing', href: '/services/omnichannel-nurturing', desc: 'Multi-channel AI orchestration' },
      ]
    },
    {
      title: 'Technology & Analytics',
      icon: <Globe className="w-5 h-5" />,
      items: [
        { name: 'AI Websites & Landing Pages', href: '/services/ai-websites-landing-pages', desc: 'SPA + SSR for agents & humans' },
        { name: 'Real-Time Analytics', href: '/services/real-time-analytics', desc: 'AI citation & engagement tracking' },
        { name: 'Security & Compliance', href: '/services/security-compliance', desc: 'Enterprise-grade protection' },
        { name: 'Competitor Monitoring', href: '/services/competitor-monitoring', desc: 'AI-powered market intelligence' },
      ]
    },
    {
      title: 'Communication & Growth',
      icon: <MessageSquare className="w-5 h-5" />,
      items: [
        { name: 'Omnichannel Communication', href: '/services/omnichannel-communication', desc: 'Unified messaging across channels' },
        { name: 'Outreach & Partnerships', href: '/services/outreach-partnerships', desc: 'AI-assisted partnership development' },
      ]
    },
  ];

  const resources = [
    {
      heading: 'Authority Hub',
      subheading: 'Build topical authority that AI agents trust',
      link: '/authority-hub',
      featured: true
    },
    {
      heading: 'Research & Whitepapers',
      subheading: 'Deep dives into agentic commerce',
      link: '/research'
    },
    {
      heading: 'Case Studies',
      subheading: 'Real results from AI-powered marketing',
      link: '/case-studies'
    },
    {
      heading: 'Implementation Guides',
      subheading: 'Step-by-step protocol guides',
      link: '/authority-hub/guides'
    },
  ];

  let servicesTimeout, resourcesTimeout;
  
  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout);
    setIsServicesOpen(true);
    setIsResourcesOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimeout = setTimeout(() => setIsServicesOpen(false), 200);
  };

  const handleResourcesEnter = () => {
    clearTimeout(resourcesTimeout);
    setIsResourcesOpen(true);
    setIsServicesOpen(false);
  };

  const handleResourcesLeave = () => {
    resourcesTimeout = setTimeout(() => setIsResourcesOpen(false), 200);
  };

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Adam Silva Consulting - Global Infrastructure for Agentic Commerce"
                width={130}
                height={130}
                className="w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors">
              Home
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link 
                href="/services"
                className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white shadow-xl rounded-lg border border-gray-200 z-50">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                      <span className="text-sm font-semibold text-[#085DA0] uppercase tracking-wider">Agentic Commerce Services</span>
                      <Link href="/services" className="text-sm text-[#085DA0] hover:underline font-medium">View All →</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((category, idx) => (
                        <div key={idx}>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[#085DA0]">{category.icon}</span>
                            <span className="font-semibold text-gray-900 text-sm">{category.title}</span>
                          </div>
                          <div className="space-y-1">
                            {category.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                href={item.href}
                                className="block px-3 py-2 hover:bg-gray-50 rounded-md transition-colors group"
                              >
                                <div className="font-medium text-gray-800 group-hover:text-[#0f6cbb] text-sm">{item.name}</div>
                                <div className="text-xs text-gray-500">{item.desc}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 bg-gradient-to-r from-[#085DA0]/5 to-transparent rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">Agentic Commerce Protocols</div>
                          <div className="text-sm text-gray-600">UCP, ACP, AP2 implementation & optimization</div>
                        </div>
                        <Link href="/services#protocols" className="px-4 py-2 bg-[#085DA0] text-white rounded-md text-sm font-medium hover:bg-[#0f6cbb] transition-colors">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <button 
                className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors flex items-center gap-1"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <div className="p-2">
                    {resources.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className={`block px-4 py-3 hover:bg-gray-50 transition-colors group rounded-md ${item.featured ? 'bg-gradient-to-r from-[#085DA0]/10 to-transparent' : ''}`}
                      >
                        <div className="flex items-center gap-2">
                          {item.featured && <BookOpen className="w-4 h-4 text-[#085DA0]" />}
                          <span className={`font-semibold group-hover:text-[#0f6cbb] ${item.featured ? 'text-[#085DA0]' : 'text-gray-900'}`}>
                            {item.heading}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {item.subheading}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/insights" className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors">
              Insights
            </Link>

            <Link href="/about" className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors">
              About
            </Link>

            <Link href="/contact" className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#085DA0] text-white px-6 py-2 rounded-md hover:bg-[#0f6cbb] transition-all font-medium"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#0f6cbb] transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2 cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-4 border-l-2 border-[#085DA0]">
                  <Link
                    href="/services"
                    className="block py-2 text-[#085DA0] font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                  {serviceCategories.map((category, idx) => (
                    <div key={idx}>
                      <div className="font-semibold text-gray-800 text-sm mb-2 flex items-center gap-2">
                        <span className="text-[#085DA0]">{category.icon}</span>
                        {category.title}
                      </div>
                      {category.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          className="block py-1.5 pl-7"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="text-gray-700 text-sm">{item.name}</div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resources */}
            <div>
              <button
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                className="w-full flex items-center justify-between text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2 cursor-pointer"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#085DA0]">
                  {resources.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className={`font-semibold ${item.featured ? 'text-[#085DA0]' : 'text-gray-900'}`}>{item.heading}</div>
                      <div className="text-sm text-gray-600">{item.subheading}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/insights" 
              className="block text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>

            <Link 
              href="/about" 
              className="block text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className="block text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="block bg-[#085DA0] text-white px-6 py-3 rounded-md hover:bg-[#0f6cbb] transition-all font-medium text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
