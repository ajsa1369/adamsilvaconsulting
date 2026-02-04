import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Technical Framework Excellence | Authority Hub',
  description: 'SPA + SSR architecture, schema markup, and protocol implementation guides.',
};

export default function TechnicalFrameworkPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/authority-hub" className="text-blue-300 hover:text-white flex items-center gap-2 mb-6"><ArrowLeft className="w-4 h-4" /> Authority Hub</Link>
          <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-4">Technical Guide</span>
          <h1 className="text-4xl font-bold mb-4">Technical Framework Excellence</h1>
          <p className="text-xl text-gray-300">SPA + SSR architecture for both human and AI audiences.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Dual-Audience Challenge</h2>
          <p className="text-gray-600 mb-6">Modern websites must serve two audiences: humans who expect fast, interactive experiences, and AI crawlers who need parseable, structured content. SPA + SSR architecture solves both.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Architecture Principles</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Server-Side Rendering for AI</h3>
          <p className="text-gray-600 mb-4">Critical content renders on the server, ensuring AI crawlers receive complete HTML without executing JavaScript. Schema markup, main content, and metadata are immediately available.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Client-Side Enhancement for Humans</h3>
          <p className="text-gray-600 mb-4">After initial load, the site hydrates into a full SPA for humans. Interactive features, smooth navigation, and rich experiences enhance engagement.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Protocol Readiness</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>UCP (Universal Commerce Protocol):</strong> Google's standard for AI commerce</li>
            <li><strong>ACP (Agentic Commerce Protocol):</strong> OpenAI's approach to agent transactions</li>
            <li><strong>AP2 (Agent Payment Protocol):</strong> Cryptographic payment verification</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Stack</h2>
          <p className="text-gray-600 mb-4">Next.js, Nuxt, or similar frameworks provide hybrid rendering out of the box. Configure for SSR-first with client enhancement, implement comprehensive schema markup, and maintain token-efficient payloads.</p>
        </div>
      </article>
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between">
          <Link href="/authority-hub/topical-authority-architecture" className="text-[#085DA0] flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Topical Authority</Link>
          <Link href="/authority-hub/ai-powered-content-operations" className="text-[#085DA0] flex items-center gap-2">Next: Content Operations <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </main>
  );
}
