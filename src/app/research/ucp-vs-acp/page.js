import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'UCP vs ACP Protocol Comparison | Adam Silva Consulting',
  description: 'Deep dive comparison of Google\'s Universal Commerce Protocol (UCP) and OpenAI\'s Agentic Commerce Protocol (ACP). Understand the differences and when to use each.',
};

export default function UCPvsACPPage() {
  const comparisonData = [
    {
      dimension: 'Lead Organization',
      ucp: 'Google & Shopify Ecosystem',
      acp: 'OpenAI & Stripe',
    },
    {
      dimension: 'Philosophy',
      ucp: 'Decentralized, ecosystem-driven. Optimized for interoperability.',
      acp: 'Centralized & opinionated. Optimized for speed-to-market.',
    },
    {
      dimension: 'Discovery',
      ucp: 'Capability profiles at /.well-known/ucp',
      acp: 'Centralized merchant listing via OpenAI approval',
    },
    {
      dimension: 'Payments',
      ucp: 'Provider agnostic. Supports multiple handlers & AP2 natively.',
      acp: 'Tightly integrated with Stripe (SPT)',
    },
    {
      dimension: 'Use Case',
      ucp: 'Google AI Mode, Gemini, Business Agent',
      acp: 'ChatGPT Instant Checkout',
    },
    {
      dimension: 'Architecture',
      ucp: 'Full-stack capabilities (Discovery + Execution)',
      acp: 'Execution layer focused. Simple implementation.',
    },
  ];

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
            Protocol Analysis
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Protocol Landscape: UCP vs ACP</h1>
          <p className="text-xl text-gray-300">Understanding the differences between Google's and OpenAI's approaches to agentic commerce.</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Two Paths to the Same Destination</h2>
            <p className="text-gray-600 mb-8">
              Both UCP (Universal Commerce Protocol) and ACP (Agentic Commerce Protocol) aim to enable AI agents to execute commerce transactions on behalf of users. However, they take fundamentally different approaches to achieving this goal.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-12">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dimension</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#085DA0]">UCP (Google)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-green-600">ACP (OpenAI)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.dimension}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.ucp}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.acp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Unifying Trust Layer: AP2</h2>
            <div className="bg-[#f0f9ff] border border-[#085DA0]/20 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#085DA0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cross-Protocol Standard</h3>
                  <p className="text-gray-600">
                    Regardless of the discovery or execution protocol, AP2 (Agent Payments Protocol) provides the <strong>cryptographic proof of consent</strong> and non-repudiation required across both ecosystems. This is the unifying trust layer.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategic Recommendation</h2>
            <p className="text-gray-600 mb-6">
              Don't build bespoke integrations. Implement the <strong>Enterprise Pattern</strong> to support Google's ecosystem via UCP, ChatGPT via ACP, and future-proof trust with AP2—all from a single architectural core.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#085DA0] mb-2">1</div>
                <div className="font-semibold text-gray-900">Unified Discovery</div>
                <div className="text-sm text-gray-600 mt-2">UCP Multi-Channel - Expose capabilities once</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#085DA0] mb-2">2</div>
                <div className="font-semibold text-gray-900">Adaptive Execution</div>
                <div className="text-sm text-gray-600 mt-2">ACP + UCP - Channel-specific bindings</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#085DA0] mb-2">3</div>
                <div className="font-semibold text-gray-900">Universal Trust</div>
                <div className="text-sm text-gray-600 mt-2">AP2 Mandates - Cryptographic proof across all</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#0a1628] text-white rounded-xl p-8 mt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Ready to implement both protocols?</h3>
                <p className="text-gray-300">Our Enterprise Pattern supports UCP, ACP, and AP2 from a single codebase.</p>
              </div>
              <Link href="/contact" className="bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 whitespace-nowrap">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}