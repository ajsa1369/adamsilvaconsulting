import { AlertTriangle } from 'lucide-react';

export default function PainPoints() {
  const problems = [
    {
      stat: '50%',
      label: 'Organic Traffic Decline',
      desc: 'Gartner projects traditional search traffic will halve as AI answers queries directly.',
    },
    {
      stat: '1200%',
      label: 'AI Traffic Surge',
      desc: 'Traffic from generative AI sources has surged in 2025-2026. The shift is happening now.',
    },
    {
      stat: '85%',
      label: 'Unprepared Marketers',
      desc: 'Most teams aren\'t ready for AI search evolution. Protocol literacy is rare.',
    },
  ];

  return (
    <section className="py-20 bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            The Market Reality
          </span>
          <h2 className="text-3xl font-bold mb-4">Why This Matters Now</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The human-centric web is ending. Companies that don't adapt will become invisible to the agents that now mediate commerce.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
              <div className="text-5xl font-bold text-[#60a5fa] mb-2">{item.stat}</div>
              <div className="text-lg font-semibold text-white mb-2">{item.label}</div>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}