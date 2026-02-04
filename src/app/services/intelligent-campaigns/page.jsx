import Link from 'next/link';
import { Zap, Brain, Target, ArrowRight, BarChart3, Settings } from 'lucide-react';

export const metadata = {
  title: 'Intelligent Campaigns | Adam Silva Consulting',
  description: 'AI-powered campaign management that optimizes targeting, messaging, and budget allocation in real-time.',
};

export default function IntelligentCampaignsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">Campaign Management</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Intelligent<br /><span className="text-[#60a5fa]">Campaigns</span></h1>
            <p className="text-xl text-gray-300 mb-8">AI-powered campaign orchestration that learns from every interaction, optimizing targeting, creative, and spend allocation continuously.</p>
            <Link href="/contact" className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Campaign Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Brain className="w-8 h-8" />, title: 'Predictive Targeting', desc: 'ML identifies highest-value audience segments' },
              { icon: <Zap className="w-8 h-8" />, title: 'Dynamic Creative', desc: 'Auto-generated ad variations tested at scale' },
              { icon: <BarChart3 className="w-8 h-8" />, title: 'Smart Budgeting', desc: 'Real-time budget allocation across channels' },
              { icon: <Target className="w-8 h-8" />, title: 'Attribution AI', desc: 'Multi-touch attribution with predictive modeling' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="text-[#085DA0] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-[#085DA0] mb-2">40%</div><div className="text-gray-600">Lower CPA</div></div>
            <div><div className="text-4xl font-bold text-[#085DA0] mb-2">3.2x</div><div className="text-gray-600">ROAS Improvement</div></div>
            <div><div className="text-4xl font-bold text-[#085DA0] mb-2">60%</div><div className="text-gray-600">Less Manual Work</div></div>
            <div><div className="text-4xl font-bold text-[#085DA0] mb-2">24/7</div><div className="text-gray-600">Optimization</div></div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Campaigns That Learn</h2>
          <p className="text-xl text-blue-100 mb-8">Every campaign improves automatically based on performance data.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#085DA0] rounded-lg font-semibold">Schedule Consultation <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
