import Link from 'next/link';
import { Search, TrendingUp, ArrowRight, CheckCircle, Target, BarChart3, Globe, Zap } from 'lucide-react';

export const metadata = {
  title: 'SEO & PPC Superpowers | Adam Silva Consulting',
  description: 'AI-enhanced search marketing that combines traditional SEO/PPC with AEO and GEO strategies for the age of AI-mediated discovery.',
};

export default function SEOPPCSuperpowersPage() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Traditional SEO',
      description: 'Technical optimization, content strategy, and link building that maintains your organic presence while AI transforms search.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'AI Engine Optimization (AEO)',
      description: 'Optimize for AI crawlers with structured data, semantic content, and agent-friendly architecture.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Generative Engine Optimization (GEO)',
      description: 'Ensure your business is cited when ChatGPT, Perplexity, and Google AI answer user queries.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'AI-Powered PPC',
      description: 'Machine learning bid management, automated ad creation, and predictive budget allocation.'
    }
  ];

  const metrics = [
    { label: 'Organic Traffic Growth', value: '+180%', period: 'avg. 12-month gain' },
    { label: 'AI Citation Rate', value: '45%', period: 'of relevant queries' },
    { label: 'Cost Per Click Reduction', value: '-35%', period: 'through AI optimization' },
    { label: 'ROAS Improvement', value: '2.8x', period: 'average client result' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Search Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SEO & PPC<br />
              <span className="text-[#60a5fa]">Superpowers</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Search is evolving. While we maintain your traditional SEO and PPC performance, we're simultaneously 
              building your presence in AI-mediated discovery through AEO and GEO strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/insights/aeo-vs-geo-understanding-the-new-search-landscape"
                className="px-8 py-3 border border-white/30 hover:bg-white/10 text-white rounded-lg font-semibold transition-all"
              >
                Learn About AEO/GEO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Search Landscape is Changing
            </h2>
            <p className="text-lg text-gray-600">
              Gartner predicts 50% organic traffic decline by 2028 as AI answers queries directly. 
              The question isn't if your SEO strategy needs to evolve—it's how fast you can adapt.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">!</span>
                Traditional SEO Alone
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Optimizes for Google's 10 blue links</li>
                <li>• Traffic declining as zero-click rises</li>
                <li>• Ignores AI-mediated discovery</li>
                <li>• Measures clicks, not citations</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-[#085DA0]">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
                SEO + AEO + GEO
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Maintains traditional search presence</li>
                <li>• Optimizes for AI crawler comprehension</li>
                <li>• Builds citation-worthy authority</li>
                <li>• Tracks AI mentions and recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Comprehensive Search Marketing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="text-[#085DA0] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Results
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="font-medium mb-1">{metric.label}</div>
                <div className="text-sm text-blue-200">{metric.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Audit', desc: 'Comprehensive analysis of SEO, AEO, and GEO readiness' },
              { step: '02', title: 'Strategy', desc: 'Integrated roadmap balancing traditional and AI optimization' },
              { step: '03', title: 'Execute', desc: 'Technical, content, and authority building initiatives' },
              { step: '04', title: 'Measure', desc: 'Track rankings, traffic, citations, and AI mentions' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#085DA0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#085DA0]">{phase.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Future-Proof Your Search Strategy
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a free audit of your current SEO, AEO, and GEO readiness.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all text-lg"
          >
            Request Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
