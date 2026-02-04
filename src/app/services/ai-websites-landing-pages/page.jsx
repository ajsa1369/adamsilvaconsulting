import Link from 'next/link';
import { Globe, Code, Zap, ArrowRight, Smartphone, Server } from 'lucide-react';

export const metadata = {
  title: 'AI Websites & Landing Pages | Adam Silva Consulting',
  description: 'SPA + SSR architecture optimized for both human conversion and AI agent comprehension.',
};

export default function AIWebsitesLandingPagesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">Web Development</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Optimized<br /><span className="text-[#60a5fa]">Websites</span></h1>
            <p className="text-xl text-gray-300 mb-8">Your website must serve two audiences now: humans who convert and AI agents who recommend. Our SPA + SSR architecture delivers for both.</p>
            <Link href="/contact" className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Architecture for the Agent Era</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Server className="w-8 h-8" />, title: 'SSR for AI Crawlers', desc: 'Server-rendered HTML that agents can parse instantly' },
              { icon: <Zap className="w-8 h-8" />, title: 'SPA for Humans', desc: 'Fast, interactive experiences after initial load' },
              { icon: <Code className="w-8 h-8" />, title: 'Heavy Schema Markup', desc: 'JSON-LD knowledge graphs throughout' },
              { icon: <Globe className="w-8 h-8" />, title: 'Protocol Ready', desc: 'UCP, ACP, and AP2 compatible architecture' },
              { icon: <Smartphone className="w-8 h-8" />, title: 'Mobile Optimized', desc: 'Perfect performance on all devices' },
              { icon: <Zap className="w-8 h-8" />, title: 'Token Efficient', desc: 'Minimal JS payload for AI crawlers' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-[#085DA0] mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Built for Humans and Agents</h2>
          <p className="text-xl text-blue-100 mb-8">Websites that convert visitors AND get recommended by AI.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#085DA0] rounded-lg font-semibold">Schedule Consultation <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
