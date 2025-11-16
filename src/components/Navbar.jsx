"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    {
      heading: 'Technical SEO Architecture',
      subheading: 'Strategic sitemaps & structured data',
      link: '/services'
    },
    {
      heading: 'AI Content Creation',
      subheading: 'Scalable content production',
      link: '/services'
    },
    {
      heading: 'Answer Engine Optimization',
      subheading: 'Win direct answer placements',
      link: '/services'
    },
    {
      heading: 'Generative Engine Optimization',
      subheading: 'AI engine citation strategy',
      link: '/services'
    }
  ];

  // Handle dropdown with delay to prevent quick disappearance
  let closeTimeout;
  
  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms delay before closing
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo"
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/services"
                className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors flex items-center gap-1 cursor-pointer"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </Link>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
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

            <Link href="/about" className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors">
              About
            </Link>

            <Link href="/authority-hub" className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors">
              Authority Hub
            </Link>

            <Link href="/contact" className="text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors">
              Contact
            </Link>
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#085DA0] text-white px-6 py-2 rounded-md hover:bg-[#0f6cbb] transition-all font-medium"
            >
              Get Started
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

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2 cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/services"
                    className="block py-2 text-gray-700 font-semibold hover:text-[#0f6cbb] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900 hover:text-[#0f6cbb]">
                        {service.heading}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {service.subheading}
                      </div>
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
              href="/authority-hub" 
              className="block text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Authority Hub
            </Link>

            <Link 
              href="/contact" 
              className="block text-gray-700 font-medium hover:text-[#0f6cbb] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Get Started Button */}
            <Link
              href="/contact"
              className="block bg-[#085DA0] text-white px-6 py-3 rounded-md hover:bg-[#0f6cbb] transition-all font-medium text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}