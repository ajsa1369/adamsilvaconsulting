import Link from 'next/link';
import { BarChart3, Activity, TrendingUp, ArrowRight, Eye, Gauge } from 'lucide-react';

export const metadata = {
  title: 'Real-Time Analytics | Adam Silva Consulting',
  description: 'AI-powered analytics dashboards that track traditional metrics alongside AI citation rates and agent engagement.',
};

export default function RealTimeAnalyticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">Analytics</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Real-Time<br /><span className="text-[#60a5fa]">Analytics</span></h1>
            <p className="text-xl text-gray-300 mb-8">CTR was built for humans. In the agent era, you need to track AI citations, recommendation rates, and agent-mediated conversions alongside traditional metrics.</p>
            <Link href="/contact" className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Metrics for the Agent Web</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Eye className="w-8 h-8" />, title: 'AI Citation Tracking', desc: 'Monitor when and how AI agents mention your brand' },
              { icon: <Activity className="w-8 h-8" />, title: 'Agent Engagement', desc: 'Track AI crawler behavior on your site' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Traditional Metrics', desc: 'Traffic, conversions, and ROI dashboards' },
              { icon: <Gauge className="w-8 h-8" />, title: 'Real-Time Alerts', desc: 'Instant notifications on metric anomalies' },
              { icon: <BarChart3 className="w-8 h-8" />, title: 'Attribution Modeling', desc: 'Multi-touch attribution including AI touchpoints' },
              { icon: <Activity className="w-8 h-8" />, title: 'Predictive Insights', desc: 'AI-powered forecasting and recommendations' },
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
          <h2 className="text-3xl font-bold mb-6">Measure What Matters Now</h2>
          <p className="text-xl text-blue-100 mb-8">Analytics built for both human and AI-mediated customer journeys.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#085DA0] rounded-lg font-semibold">Schedule Consultation <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
