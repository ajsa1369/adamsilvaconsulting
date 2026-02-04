import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'SPA + SSR Architecture', href: '/services#spa-ssr' },
    { name: 'UCP Implementation', href: '/services#ucp' },
    { name: 'ACP Integration', href: '/services#acp' },
    { name: 'AP2 Mandate System', href: '/services#ap2' },
    { name: 'Heavy Schema Markup', href: '/services#schema' },
    { name: 'AEO/GEO Strategy', href: '/services#aeo-geo' },
  ];

  const research = [
    { name: 'The Agentic Commerce Revolution', href: '/research/agentic-commerce-revolution' },
    { name: 'Protocol Deep Dive: UCP vs ACP', href: '/research/ucp-vs-acp' },
    { name: 'Token Efficiency & SSR', href: '/research/token-efficiency' },
    { name: 'From SEO to AEO/GEO', href: '/research/seo-to-aeo-geo' },
  ];

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Ready for the Agentic Web?</h3>
              <p className="text-gray-400 mt-2">The protocols are live. Don't let legacy architecture render you invisible.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              Enterprise architecture for the agentic commerce era. We implement UCP, ACP, and AP2 protocols on SPA + SSR + Heavy Schema stacks.
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
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="font-semibold text-white mb-4">Research</h4>
            <ul className="space-y-2">
              {research.map((item) => (
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
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}