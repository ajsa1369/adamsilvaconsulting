import Link from 'next/link';
import { ArrowLeft, ArrowRight, Users, Bot, FileText, Code, Search, Shield } from 'lucide-react';

export const metadata = {
  title: 'From SEO to AEO/GEO | Adam Silva Consulting',
  description: 'The fundamental shift from optimizing for human clicks to optimizing for agent ingestion. Understand Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).',
};

export default function SEOtoAEOGEOPage() {
  const legacySEO = [
    { icon: FileText, label: 'Narrative Pages', desc: 'Long-form content designed for human reading flow and engagement metrics.' },
    { icon: Code, label: 'JS-Heavy UX', desc: 'Client-side interactivity that creates token bloat and parsing friction.' },
    { icon: Search, label: 'Keyword Semantics', desc: 'Reliance on string matching and meta tags for visibility.' },
  ];

  const agenticAEO = [
    { icon: FileText, label: 'Machine-First Facts', desc: 'Data-dense, semantic structures optimized for LLM ingestion.' },
    { icon: Code, label: 'Structured Capabilities', desc: 'Functional primitives (Discovery, Cart, Checkout) exposed via API.' },
    { icon: Shield, label: 'Verifiable Proofs', desc: 'Cryptographic mandates & clean payloads to minimize "token cost".' },
  ];

  const oldMetrics = ['Website Sessions', 'Click-Through Rate', 'Cart Conversions', 'Bounce Rate'];
  const newMetrics = ['Agent Citations', 'Capability Coverage', 'Mandate Purchases', 'Agent Conversion'];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/research" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
          <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
            Strategy
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">From Human-Centric SEO to Agent-Centric AEO/GEO</h1>
          <p className="text-xl text-gray-300">The fundamental shift from optimizing for human clicks to optimizing for agent ingestion and citation.</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Shift */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              <strong>Design Goal:</strong> Make your business explicitly legible and actionable to agents.
            </p>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Legacy SEO */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Legacy SEO</h2>
                  <p className="text-sm text-gray-500">Optimized for Human Browsing</p>
                </div>
              </div>
              <div className="space-y-4">
                {legacySEO.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.label}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Legacy Artifacts</p>
                <code className="text-sm text-gray-600">sitemap.xml, meta tags, pixels, cookies, analytics.js</code>
              </div>
            </div>

            {/* Agentic AEO/GEO */}
            <div className="bg-[#f0f9ff] rounded-xl p-6 border border-[#085DA0]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#085DA0] rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Agentic AEO/GEO</h2>
                  <p className="text-sm text-[#085DA0]">Optimized for Machine Execution</p>
                </div>
              </div>
              <div className="space-y-4">
                {agenticAEO.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[#085DA0] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.label}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#085DA0]/10 rounded-lg">
                <p className="text-xs text-[#085DA0] uppercase font-semibold mb-2">Required Agent Artifacts</p>
                <code className="text-sm text-gray-700">/.well-known/ucp, product.jsonld, payment-handler.json, AP2 mandates</code>
              </div>
            </div>
          </div>

          {/* New Metrics */}
          <div className="bg-gray-900 text-white rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">The New Success Metrics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Old Metrics (Fading)</h3>
                <div className="space-y-2">
                  {oldMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-500 line-through">
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#60a5fa] uppercase mb-4">New Metrics (Rising)</h3>
                <div className="space-y-2">
                  {newMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2 text-white font-medium">
                      <span className="w-2 h-2 bg-[#60a5fa] rounded-full"></span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Implication */}
          <div className="border-l-4 border-[#085DA0] pl-6 py-4 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Strategic Implication</h2>
            <p className="text-lg text-gray-600">
              You must <strong>stop optimizing for human clicks</strong> and <strong>start optimizing for agent ingestion</strong>. The protocols are live. The shift is happening now.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#085DA0] to-[#0f6cbb] text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Make the Shift?</h2>
            <p className="text-gray-200 mb-6 max-w-xl mx-auto">
              Our AEO/GEO strategy service transforms your architecture for the agent-centric web.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#085DA0] px-6 py-3 rounded-lg font-semibold transition-all hover:bg-gray-100">
              Schedule Strategy Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}