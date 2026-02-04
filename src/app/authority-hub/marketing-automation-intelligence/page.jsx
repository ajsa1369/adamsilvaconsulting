import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Marketing Automation Intelligence | Authority Hub',
  description: 'Intelligent automation frameworks for lead generation, nurturing, and conversion.',
};

export default function MarketingAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/authority-hub" className="text-blue-300 hover:text-white flex items-center gap-2 mb-6"><ArrowLeft className="w-4 h-4" /> Authority Hub</Link>
          <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-4">Automation Guide</span>
          <h1 className="text-4xl font-bold mb-4">Marketing Automation Intelligence</h1>
          <p className="text-xl text-gray-300">AI-powered automation that learns and improves continuously.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Beyond Rules-Based Automation</h2>
          <p className="text-gray-600 mb-6">Traditional marketing automation follows static rules. AI-powered automation learns from outcomes, adapting timing, messaging, and channels based on what actually works.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intelligent Automation Capabilities</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Predictive Lead Scoring</h3>
          <p className="text-gray-600 mb-4">ML models score leads based on behavior patterns, firmographics, and engagement signals—continuously improving as conversion data accumulates.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Dynamic Journey Orchestration</h3>
          <p className="text-gray-600 mb-4">Instead of fixed sequences, AI determines the optimal next touchpoint for each prospect based on their unique behavior and similar successful paths.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Optimal Timing</h3>
          <p className="text-gray-600 mb-4">AI identifies when each prospect is most likely to engage, scheduling communications for maximum impact.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Framework</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li>Audit existing automation and identify learning opportunities</li>
            <li>Implement tracking to capture outcome data</li>
            <li>Deploy ML models for scoring and optimization</li>
            <li>Create feedback loops that improve models</li>
            <li>Monitor and iterate based on results</li>
          </ol>
        </div>
      </article>
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between">
          <Link href="/authority-hub/ai-powered-content-operations" className="text-[#085DA0] flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Content Operations</Link>
          <Link href="/authority-hub/csr-and-trust-engineering" className="text-[#085DA0] flex items-center gap-2">Next: Trust Engineering <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </main>
  );
}
