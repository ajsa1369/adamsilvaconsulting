import Link from 'next/link';
import { BookOpen, Target, Code, Bot, Zap, Shield, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Authority Hub | Adam Silva Consulting',
  description: 'Comprehensive guides, frameworks, and resources for building AI-ready marketing operations and agentic commerce capabilities.',
};

export default function AuthorityHubPage() {
  const guides = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'AI Engine Optimization Mastery',
      description: 'Complete guide to making your content comprehensible and valuable to AI systems.',
      link: '/authority-hub/ai-engine-optimization-mastery',
      tag: 'Foundation',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Topical Authority Architecture',
      description: 'Framework for building comprehensive topic coverage that earns AI citations.',
      link: '/authority-hub/topical-authority-architecture',
      tag: 'Content Strategy',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Technical Framework Excellence',
      description: 'SPA + SSR architecture, schema markup, and protocol implementation guides.',
      link: '/authority-hub/technical-framework-excellence',
      tag: 'Technical',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI-Powered Content Operations',
      description: 'Systems and workflows for scaling content production with AI assistance.',
      link: '/authority-hub/ai-powered-content-operations',
      tag: 'Operations',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Marketing Automation Intelligence',
      description: 'Intelligent automation frameworks for lead generation, nurturing, and conversion.',
      link: '/authority-hub/marketing-automation-intelligence',
      tag: 'Automation',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'CSR & Trust Engineering',
      description: 'Building and maintaining trust signals for both humans and AI systems.',
      link: '/authority-hub/csr-and-trust-engineering',
      tag: 'Trust',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Knowledge Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Authority<br />
              <span className="text-[#60a5fa]">Hub</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive frameworks, guides, and resources for building AI-ready marketing operations. 
              Our accumulated expertise in agentic commerce, distilled into actionable knowledge.
            </p>
            <Link
              href="/authority-hub/guides"
              className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              Browse All Guides <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Strategic Frameworks & Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href={guide.link}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#085DA0] transition-all group"
              >
                <span className="inline-block px-3 py-1 bg-[#085DA0]/10 text-[#085DA0] text-xs font-semibold rounded-full mb-4">
                  {guide.tag}
                </span>
                <div className="text-[#085DA0] mb-4">{guide.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#085DA0] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <span className="text-[#085DA0] font-medium flex items-center gap-2">
                  Explore Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Authority Hub */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Knowledge That Compounds
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The Authority Hub represents our commitment to building genuine expertise in the market we serve. 
              These aren't marketing brochures—they're comprehensive frameworks developed through real client work 
              and continuous research.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-[#085DA0] mb-2">Practical</div>
                <p className="text-gray-600 text-sm">Real frameworks from real implementations, not theoretical concepts.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-[#085DA0] mb-2">Current</div>
                <p className="text-gray-600 text-sm">Continuously updated as protocols evolve and AI capabilities advance.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-[#085DA0] mb-2">Complete</div>
                <p className="text-gray-600 text-sm">End-to-end coverage from strategy through implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/case-studies"
              className="bg-gradient-to-br from-[#085DA0] to-[#0a4a80] text-white rounded-xl p-8 hover:shadow-lg transition-all group"
            >
              <h3 className="text-2xl font-bold mb-3">Case Studies</h3>
              <p className="text-blue-100 mb-4">See how these frameworks deliver results in real implementations.</p>
              <span className="font-medium flex items-center gap-2">
                View Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/research"
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-8 hover:shadow-lg transition-all group"
            >
              <h3 className="text-2xl font-bold mb-3">Research</h3>
              <p className="text-gray-300 mb-4">Original research on agentic commerce, protocol adoption, and market trends.</p>
              <span className="font-medium flex items-center gap-2">
                Explore Research <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply These Frameworks?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team implements these strategies for clients every day. Let's discuss how they apply to your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#085DA0] rounded-lg font-semibold transition-all hover:bg-blue-50 text-lg"
          >
            Schedule Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
