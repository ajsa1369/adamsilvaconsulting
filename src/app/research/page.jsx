import Link from 'next/link';
import { ArrowRight, FileText, Download, Calendar, Clock } from 'lucide-react';

export const metadata = {
  title: 'Research | Adam Silva Consulting',
  description: 'Original research on agentic commerce, AI-mediated discovery, and the future of digital marketing.',
};

export default function ResearchPage() {
  const researchPapers = [
    {
      title: 'The Agentic Commerce Revolution: Enterprise Architecture for UCP, ACP, and AP2',
      description: 'Comprehensive analysis of emerging commerce protocols and implementation strategies for enterprise adoption.',
      date: '2026-01',
      readTime: '45 min',
      type: 'Whitepaper',
      link: '/research/agentic-commerce-revolution',
    },
    {
      title: 'Protocol Deep Dive: UCP vs ACP',
      description: "Technical comparison of Google's Universal Commerce Protocol and OpenAI's Agentic Commerce Protocol.",
      date: '2025-12',
      readTime: '30 min',
      type: 'Technical Analysis',
      link: '/research/ucp-vs-acp',
    },
    {
      title: 'Token Efficiency and SSR: Why Architecture Matters for AI Crawlers',
      description: 'Research on how website architecture impacts AI crawler behavior and content comprehension.',
      date: '2025-11',
      readTime: '25 min',
      type: 'Research Report',
      link: '/research/token-efficiency',
    },
    {
      title: 'From SEO to AEO/GEO: The Strategic Shift',
      description: 'Market analysis of the transition from traditional search optimization to AI-centric strategies.',
      date: '2025-10',
      readTime: '35 min',
      type: 'Market Analysis',
      link: '/research/seo-to-aeo-geo',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Original Research
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research &<br />
              <span className="text-[#60a5fa]">Analysis</span>
            </h1>
            <p className="text-xl text-gray-300">
              Original research on agentic commerce protocols, AI-mediated discovery, and the evolving 
              landscape of digital marketing. Data-driven insights for strategic decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Research</h2>
          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all group">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-[#085DA0]/10 text-[#085DA0] text-sm font-semibold rounded-full">
                    {paper.type}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" /> {paper.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" /> {paper.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#085DA0] transition-colors">
                  {paper.title}
                </h3>
                <p className="text-gray-600 mb-6">{paper.description}</p>
                <Link 
                  href={paper.link}
                  className="inline-flex items-center gap-2 text-[#085DA0] font-semibold group-hover:gap-3 transition-all"
                >
                  Read Research <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Research Methodology</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our research combines primary data collection, market analysis, technical testing, and 
              client implementation insights. Every claim is grounded in evidence from real-world application.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-[#085DA0] mb-2">Primary</div>
                <p className="text-gray-600 text-sm">Original data from client implementations and controlled testing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-[#085DA0] mb-2">Secondary</div>
                <p className="text-gray-600 text-sm">Synthesis of industry reports, academic research, and market data</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-[#085DA0] mb-2">Validated</div>
                <p className="text-gray-600 text-sm">All findings verified through multiple sources and expert review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Apply Research Insights to Your Business</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team translates research into actionable strategies for clients every day.
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
