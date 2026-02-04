import Link from 'next/link';
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

export const metadata = {
  title: 'Token Efficiency & SSR | Adam Silva Consulting',
  description: 'Why server-side rendering matters for AI crawlers. Learn how to minimize your "token cost" and maximize agent comprehension with proper architecture.',
};

export default function TokenEfficiencyPage() {
  const antiPatterns = [
    {
      title: 'Client-Only Rendering (CSR)',
      description: 'Forces agents to execute JS to view content, increasing crawl failure rates.',
    },
    {
      title: 'Infinite-Scroll Hydration',
      description: 'Hides critical products behind user events agents won\'t trigger.',
    },
    {
      title: 'Script Noise',
      description: 'Ad trackers & analytics inject thousands of wasted tokens into the DOM.',
    },
  ];

  const remedies = [
    {
      title: 'SSR / Streaming HTML',
      description: 'Deliver fully formed HTML snapshots immediately without hydration wait.',
    },
    {
      title: 'Heavy JSON-LD',
      description: 'Structure Products, Offers, FAQ, and Org data for instant, error-free parsing.',
    },
    {
      title: 'Precomputed Summaries',
      description: 'Feed concise text blocks optimized for LLM context windows.',
    },
    {
      title: 'Stable IDs',
      description: 'Ensure persistent referencing for agent memory across sessions.',
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
            Technical Architecture
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Token Efficiency: Make Pages Cheap to Parse</h1>
          <p className="text-xl text-gray-300">Why SSR matters for AI crawlers and how to minimize your "token cost" for better agent ingestion.</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Economics */}
          <div className="bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff] rounded-xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-[#085DA0] flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Agent Economics</h2>
                <p className="text-gray-600">
                  Agents operate on a <strong>"token budget"</strong> and latency constraints. They prioritize compact, semantic HTML over expensive JavaScript execution to minimize compute costs. Your site's token efficiency directly impacts whether agents choose to cite you or move to competitors.
                </p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#085DA0]">&lt;300ms</div>
              <div className="text-sm text-gray-600">Render-to-First-Fact</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#085DA0]">High</div>
              <div className="text-sm text-gray-600">Schema Coverage</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#085DA0]">Low</div>
              <div className="text-sm text-gray-600">Tokens/Fact</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#085DA0]">Zero</div>
              <div className="text-sm text-gray-600">Layout Shift</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Anti-Patterns */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Technical Anti-Patterns
              </h2>
              <div className="space-y-4">
                {antiPatterns.map((item, index) => (
                  <div key={index} className="bg-red-50 border border-red-100 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Remedies */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Architectural Remedies
              </h2>
              <div className="space-y-4">
                {remedies.map((item, index) => (
                  <div key={index} className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hydration Tax */}
          <div className="border border-gray-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Hydration Tax</h2>
            <p className="text-gray-600 mb-6">
              <strong>Definition:</strong> Computational cost and latency incurred when parsing and executing JS to turn static HTML interactive.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Delays Time-to-Interactive (TTI):</strong>
                  <span className="text-gray-600"> Agents have strict timeout budgets (&lt;500ms). Heavy hydration often causes abandonment or incomplete indexing.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Increases CPU Overhead:</strong>
                  <span className="text-gray-600"> Mobile crawlers run on constrained resources. Excessive JS execution wastes "token budget" and lowers crawl frequency.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Creates DOM Divergence:</strong>
                  <span className="text-gray-600"> Client-side JS modifications create "content drift," confusing agents that rely on the initial HTML snapshot.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-[#0a1628] text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">ASC Architecture Solution: SPA + SSR Hybrid</h2>
            <p className="text-gray-300 mb-6">
              Eliminate the tax by shifting rendering to the edge and hydrating only essentials.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Partial Hydration</h3>
                <p className="text-sm text-gray-300">Only interactive components load JS. Static text remains pure HTML.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Streaming SSR</h3>
                <p className="text-sm text-gray-300">Sends HTML chunks immediately; agents parse before full load.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Edge Rendering</h3>
                <p className="text-sm text-gray-300">Logic executes on CDN nodes, reducing global TTFB to &lt;50ms.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Deterministic Snapshots</h3>
                <p className="text-sm text-gray-300">Serves complete, final HTML requiring zero client-side execution.</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Get Token Efficiency Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}