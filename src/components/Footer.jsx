'use client';
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    consent: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.consent
    ) {
      alert('Please fill all fields and accept the consent checkbox');
      return;
    }

    setShowSuccess(true);
    setFormData({ firstName: '', lastName: '', email: '', consent: false });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <footer className="bg-white text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* First Section - Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={108}
              height={108}
              className="mb-4"
            />
            <p className="text-sm text-gray-700 leading-relaxed">
              Advanced lead generation through AI-optimized marketing
              strategies, AEO/GEO optimization, and intelligent automation
              systems.
            </p>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-black text-2xl font-semibold mb-4">
              Core Services
            </h3>
            <ul className="space-y-2 text-zinc-600">
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  AI Lead Generation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Voice Agent Verification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Omnichannel Nurturing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Precision Lead Management
                </a>
              </li>
            </ul>
          </div>

          {/* Marketing Services */}
          <div>
            <h3 className="text-black text-2xl font-semibold mb-4">
              Marketing Services
            </h3>
            <ul className="space-y-2 text-zinc-600">
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  SEO & PPC Superpowers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Content & Media Creation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Intelligent Campaigns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Intent Graph Targeting
                </a>
              </li>
            </ul>
          </div>

          {/* Technology Solutions */}
          <div>
            <h3 className="text-black text-2xl font-semibold mb-4">
              Technology Solutions
            </h3>
            <ul className="space-y-2 text-zinc-700">
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  AI Websites & Landing Pages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Real-time Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Security & Compliance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Competitor Monitoring
                </a>
              </li>
            </ul>
          </div>

          {/* Strategic Services */}
          <div>
            <h3 className="text-black text-2xl font-semibold mb-4">
              Strategic Services
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Omnichannel Communication
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-blue-400 transition-colors"
                >
                  Outreach & Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Section - Contact Info */}
        <div className="flex flex-col space-y-3 mb-8 text-gray-800">
          <a
            href="mailto:info@adamsilvaconsulting.com"
            className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors"
          >
            <Mail size={18} color="blue" />
            <span>info@adamsilvaconsulting.com</span>
          </a>
          <a
            href="tel:954-818-9248"
            className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors"
          >
            <Phone size={18} color="blue" />
            <span>954-818-9248</span>
          </a>
          <div className="flex items-center gap-3 text-sm">
            <MapPin size={18} color="blue" />
            <span>Virtual Consulting Worldwide</span>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        {/* Third Section - Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center text-black gap-4">
            <span className="text-sm font-semibold">Follow us:</span>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/adam-silva-consulting"
                target="black"
                className="bg-white text-gray-700 p-2 rounded hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/adamsilvaconsulting"
                className="bg-white text-gray-700 p-2 rounded hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/adamsilvaconsulting"
                className="bg-white text-gray-700 p-2 rounded hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/adamsilvaconsulting"
                className="bg-white text-gray-700 p-2 rounded hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com/@adamsilvaconsulting"
                className="bg-white text-gray-700 p-2 rounded hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          <p className="text-sm text-black">
            Get exclusive AI marketing insights delivered weekly
          </p>
        </div>

        {/* Fourth Section - Newsletter */}
        <div className="bg-blue-300 rounded-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <MessageSquare size={48} className="text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-800 text-center mb-6">
              Get AI marketing insights delivered to your inbox
            </p>

            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
                Thank you for subscribing! Check your inbox for confirmation.
              </div>
            )}

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-gray-900"
              />
              <label className="flex items-start gap-3 mb-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-gray-800">
                  I consent to receive marketing communications from Adam Silva
                  Consulting. You can unsubscribe at any time.{' '}
                  <a href="#" className="underline hover:text-gray-900">
                    Privacy Policy
                  </a>
                </span>
              </label>
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Fifth Section - Copyright and Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Adam Silva Consulting. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="sitemap"
              className="hover:text-blue-400 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
