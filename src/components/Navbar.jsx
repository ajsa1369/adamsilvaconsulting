"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 ">
          {/* Logo */}
          <div className="">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={130}
                height={130}
                className=" w-auto"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center gap-1">
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

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
                        <div className="font-semibold text-gray-900 group-hover:underline">
                          {service.heading}
                        </div>
                        <div className="text-sm text-gray-600 mt-1 group-hover:underline">
                          {service.subheading}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              About
            </Link>

            <Link href="/authority-hub" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Authority Hub
            </Link>

            <Link href="/contact" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Get Started Button */}
          <div className="shrink-0">
            <Link
              href="/contact"
              className="bg-[#085DA0] text-white px-6 py-2 rounded-md hover:-translate-y-1 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}