import Link from 'next/link';
import { Network, Target, Brain, ArrowRight, Eye, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Intent Graph Targeting | Adam Silva Consulting',
  description: 'Map and target prospects based on behavioral intent signals across the digital ecosystem.',
};

export default function IntentGraphTargetingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">Advanced Targeting</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Intent Graph<br /><span className="text-[#60a5fa]">Targeting</span></h1>
            <p className="text-xl text-gray-300 mb-8">Move beyond demographics. Our intent graph technology identifies prospects actively researching solutions like yours across thousands of digital signals.</p>
            <Link href="/contact" className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Intent Signal Sources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Eye className="w-8 h-8" />, title: 'Content Consumption', desc: 'Track engagement with relevant content' },
              { icon: <Network className="w-8 h-8" />, title: 'Search Behavior', desc: 'Monitor search patterns and queries' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Tech Stack Changes', desc: 'Detect new technology evaluations' },
              { icon: <Target className="w-8 h-8" />, title: 'Competitor Research', desc: 'Identify active competitive evaluations' },
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
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Target Intent, Not Just Demographics</h2>
          <p className="text-xl text-blue-100 mb-8">Reach prospects when they are actively in-market for your solution.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#085DA0] rounded-lg font-semibold">Schedule Consultation <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
