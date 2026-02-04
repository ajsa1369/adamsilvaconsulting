"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileResearchOpen, setIsMobileResearchOpen] = useState(false);

  const services = [
    {
      heading: 'SPA + SSR Architecture',
      subheading: 'Token-efficient, agent-first rendering',
      link: '/services#spa-ssr'
    },
    {
      heading: 'UCP Implementation',
      subheading: 'Universal Commerce Protocol setup',
      link: '/services#ucp'
    },
    {
      heading: 'ACP Integration',
      subheading: 'Agentic Commerce Protocol & ChatGPT checkout',
      link: '/services#acp'
    },
    {
      heading: 'AP2 Mandate System',
      subheading: 'Cryptographic trust & verifiable credentials',
      link: '/services#ap2'
    },
    {
      heading: 'Heavy Schema Markup',
      subheading: 'JSON-LD knowledge graphs for agents',
      link: '/services#schema'
    },
    {
      heading: 'AEO/GEO Strategy',
      subheading: 'Agent & Generative Engine Optimization',
      link: '/services#aeo-geo'
    }
  ];

  const research = [
    {
      heading: 'The Agentic Commerce Revolution',
      subheading: 'Enterprise architecture for UCP, ACP, AP2',
      link: '/research/agentic-commerce-revolution'
    },
    {
      heading: 'Protocol Deep Dive: UCP vs ACP',
      subheading: 'Comparing Google and OpenAI approaches',
      link: '/research/ucp-vs-acp'
    },
    {
      heading: 'Token Efficiency & SSR',
      subheading: 'Why architecture matters for AI crawlers',
      link: '/research/token-efficiency'
    },
    {
      heading: 'From SEO to AEO/GEO',
      subheading: 'The shift to agent-centric optimization',
      link: '/research/seo-to-aeo-geo'
    }
  ];

  let servicesTimeout, researchTimeout;
  
  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout);
    setIsServicesOpen(true);
    setIsResearchOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimeout = setTimeout(() => setIsServicesOpen(false), 200);
  };

  const handleResearchEnter = () => {
    clearTimeout(researchTimeout);
    setIsResearchOpen(true);
    setIsServicesOpen(false);
  };

  const handleResearchLeave = () => {
    researchTimeout = setTimeout(() => setIsResearchOpen(false), 200);
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
                alt="Adam Silva Consulting"
                width={130}
                height={130}
                className="w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <div className="p-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-[#085DA0] uppercase tracking-wider">Agentic Commerce Services</span>
                    </div>
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors group rounded-md"
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-[#0f6cbb]">
                          {service.heading}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {service.subheading}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Research Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleResearchEnter}
              onMouseLeave={handleResearchLeave}
            >
              <Link 
                href="/research"
                className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors flex items-center gap-1"
              >
                Research
                <ChevronDown className={`w-4 h-4 transition-transform ${isResearchOpen ? 'rotate-180' : ''}`} />
              </Link>

              {isResearchOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <div className="p-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-[#085DA0] uppercase tracking-wider">Research & Insights</span>
                    </div>
                    {research.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors group rounded-md"
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-[#0f6cbb]">
                          {item.heading}
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
        <div className="lg:hidden bg-white border-t border-gray-200">
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
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#085DA0]">
                  <Link
                    href="/services"
                    className="block py-2 text-[#085DA0] font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900">{service.heading}</div>
                      <div className="text-sm text-gray-600">{service.subheading}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Research */}
            <div>
              <button
                onClick={() => setIsMobileResearchOpen(!isMobileResearchOpen)}
                className="w-full flex items-center justify-between text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2 cursor-pointer"
              >
                <span>Research</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileResearchOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileResearchOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#085DA0]">
                  <Link
                    href="/research"
                    className="block py-2 text-[#085DA0] font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Research →
                  </Link>
                  {research.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900">{item.heading}</div>
                      <div className="text-sm text-gray-600">{item.subheading}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

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