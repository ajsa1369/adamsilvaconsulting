import Link from 'next/link';
import { Eye, TrendingUp, Bell, ArrowRight, Search, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Competitor Monitoring | Adam Silva Consulting',
  description: 'AI-powered competitive intelligence that tracks competitor positioning, messaging, and AI citation rates.',
};

export default function CompetitorMonitoringPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">Intelligence</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Competitor<br /><span className="text-[#60a5fa]">Monitoring</span></h1>
            <p className="text-xl text-gray-300 mb-8">Know exactly when competitors change positioning, launch campaigns, or get cited by AI agents—before your customers notice.</p>
            <Link href="/contact" className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Competitive Intelligence Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Eye className="w-8 h-8" />, title: 'Website Monitoring', desc: 'Track competitor site changes and messaging' },
              { icon: <Search className="w-8 h-8" />, title: 'AI Citation Tracking', desc: 'Monitor who AI agents recommend' },
              { icon: <Bell className="w-8 h-8" />, title: 'Real-Time Alerts', desc: 'Instant notifications on key changes' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Share of Voice', desc: 'Track competitive positioning over time' },
              { icon: <BarChart3 className="w-8 h-8" />, title: 'Content Analysis', desc: 'Analyze competitor content strategies' },
              { icon: <Eye className="w-8 h-8" />, title: 'Ad Intelligence', desc: 'Monitor competitor advertising activity' },
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
          <h2 className="text-3xl font-bold mb-6">Stay Ahead of the Competition</h2>
          <p className="text-xl text-blue-100 mb-8">Intelligence that keeps you one step ahead in the market.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#085DA0] rounded-lg font-semibold">Schedule Consultation <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
