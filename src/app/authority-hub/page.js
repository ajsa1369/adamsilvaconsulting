import Link from 'next/link';
import { ArrowRight, FileText, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Authority Hub | Adam Silva Consulting - Agentic Commerce Research Center',
  description: 'Deep-dive research on UCP, ACP, AP2 protocols, SPA+SSR architecture, and the transition from SEO to AEO/GEO. Stay ahead in the agentic commerce revolution.',
};

export default function AuthorityHubPage() {
  const featuredResearch = {
    title: 'The Agentic Commerce Revolution',
    subtitle: 'Enterprise Architecture for UCP, ACP, and AP2',
    description: 'A comprehensive technical and strategic analysis of the three foundational protocols defining the agentic web. Learn why SPA + SSR + Heavy Schema is the only architecture that works.',
    link: '/research/agentic-commerce-revolution',
    stats: [
      { label: 'Pages', value: '22' },
      { label: 'Protocols', value: '3' },
      { label: 'Read Time', value: '45 min' },
    ],
  };

  const researchPapers = [
    {
      icon: FileText,
      category: 'Protocol Analysis',
      title: 'UCP vs ACP: A Protocol Comparison',
      description: 'Deep dive into the differences between Google\'s Universal Commerce Protocol and OpenAI\'s Agentic Commerce Protocol.',
      link: '/research/ucp-vs-acp',
      readTime: '15 min',
    },
    {
      icon: Lightbulb,
      category: 'Technical Architecture',
      title: 'Token Efficiency & SSR',
      description: 'Why server-side rendering matters for AI crawlers and how to minimize your "token cost" for better agent ingestion.',
      link: '/research/token-efficiency',
      readTime: '12 min',
    },
    {
      icon: TrendingUp,
      category: 'Strategy',
      title: 'From SEO to AEO/GEO',
      description: 'The fundamental shift from optimizing for human clicks to optimizing for agent ingestion and citation.',
      link: '/research/seo-to-aeo-geo',
      readTime: '18 min',
    },
    {
      icon: BookOpen,
      category: 'Implementation Guide',
      title: 'Heavy Schema Markup for Commerce',
      description: 'How to build JSON-LD knowledge graphs that agents can understand, negotiate with, and act upon.',
      link: '/research/schema-markup-guide',
      readTime: '20 min',
    },
  ];

  const topics = [
    { name: 'UCP Protocol', count: 8 },
    { name: 'ACP Protocol', count: 6 },
    { name: 'AP2 Mandates', count: 4 },
    { name: 'SPA + SSR', count: 5 },
    { name: 'Schema Markup', count: 7 },
    { name: 'Token Efficiency', count: 3 },
    { name: 'AEO/GEO', count: 6 },
    { name: 'AI Crawlers', count: 4 },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Authority Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Agentic Commerce<br />
              <span className="text-[#60a5fa]">Research Center</span>
            </h1>
            <p className="text-xl text-gray-300">
              Deep technical research on UCP, ACP, AP2 protocols and the architecture required to compete in the agent-centric web.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div>
                <span className="inline-block px-3 py-1 bg-[#085DA0] text-white text-xs font-semibold rounded-full mb-4">
                  FEATURED RESEARCH
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{featuredResearch.title}</h2>
                <p className="text-lg text-[#085DA0] font-medium mb-4">{featuredResearch.subtitle}</p>
                <p className="text-gray-600 mb-6">{featuredResearch.description}</p>
                <Link
                  href={featuredResearch.link}
                  className="inline-flex items-center gap-2 bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Read Full Report
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6">
                  {featuredResearch.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-[#085DA0]">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Library</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technical deep-dives and strategic analysis for the agentic commerce era.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchPapers.map((paper, index) => (
              <Link
                key={index}
                href={paper.link}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#085DA0] hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#085DA0]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#085DA0]/20 transition-colors">
                    <paper.icon className="w-6 h-6 text-[#085DA0]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-[#085DA0] uppercase tracking-wider">{paper.category}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 group-hover:text-[#085DA0] transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{paper.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-gray-500">{paper.readTime} read</span>
                      <span className="text-[#085DA0] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-[#085DA0] hover:text-[#0f6cbb] font-semibold transition-colors"
            >
              View All Research
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Topic</h2>
            <p className="text-lg text-gray-600">Browse research by subject area</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic, index) => (
              <Link
                key={index}
                href={`/research?topic=${encodeURIComponent(topic.name)}`}
                className="px-4 py-2 bg-gray-100 hover:bg-[#085DA0] hover:text-white text-gray-700 rounded-full transition-all flex items-center gap-2"
              >
                {topic.name}
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{topic.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Shift</h2>
          <p className="text-gray-300 mb-8">
            Get protocol updates, implementation guides, and strategic insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#085DA0]"
            />
            <button
              type="submit"
              className="bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}