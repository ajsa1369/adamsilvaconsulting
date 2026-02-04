import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const leadGenServices = [
    { name: 'AI Lead Generation', href: '/services/ai-lead-generation' },
    { name: 'Voice Agent Verification', href: '/services/voice-agent-verification' },
    { name: 'Precision Lead Management', href: '/services/precision-lead-management' },
    { name: 'Intent Graph Targeting', href: '/services/intent-graph-targeting' },
  ];

  const marketingServices = [
    { name: 'Intelligent Campaigns', href: '/services/intelligent-campaigns' },
    { name: 'SEO & PPC Superpowers', href: '/services/seo-ppc-superpowers' },
    { name: 'Content & Media Creation', href: '/services/content-media-creation' },
    { name: 'Omnichannel Nurturing', href: '/services/omnichannel-nurturing' },
  ];

  const techServices = [
    { name: 'AI Websites & Landing Pages', href: '/services/ai-websites-landing-pages' },
    { name: 'Real-Time Analytics', href: '/services/real-time-analytics' },
    { name: 'Security & Compliance', href: '/services/security-compliance' },
    { name: 'Competitor Monitoring', href: '/services/competitor-monitoring' },
    { name: 'Omnichannel Communication', href: '/services/omnichannel-communication' },
    { name: 'Outreach & Partnerships', href: '/services/outreach-partnerships' },
  ];

  const resources = [
    { name: 'Authority Hub', href: '/authority-hub' },
    { name: 'Implementation Guides', href: '/authority-hub/guides' },
    { name: 'Research & Whitepapers', href: '/research' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights Blog', href: '/insights' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'All Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Ready for AI-Powered Marketing?</h3>
              <p className="text-gray-400 mt-2">From lead generation to authority building—transform your marketing with AI.</p>
            </div>
            <Link
              href="/contact"
              className="bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2 whitespace-nowrap"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/assets/logo-white.png"
                alt="Adam Silva Consulting"
                width={150}
                height={50}
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-sm font-semibold text-[#0f6cbb] mb-2">Integrated Digital Intelligence</p>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              AI-powered marketing services for the agentic commerce era. Lead generation, authority building, and intelligent automation.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@adamsilvaconsulting.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@adamsilvaconsulting.com
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                Port Saint Lucie, Florida
              </div>
              <a
                href="https://linkedin.com/in/adamsilvaconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Lead Gen & Sales */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Lead Generation</h4>
            <ul className="space-y-2">
              {leadGenServices.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Marketing</h4>
            <ul className="space-y-2">
              {marketingServices.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <h4 className="font-semibold text-white mb-3 text-sm">More Services</h4>
              <ul className="space-y-2">
                {techServices.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Adam Silva Consulting. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
