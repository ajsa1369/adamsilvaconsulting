import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CoreServicesCTA() {
  const phases = [
    { phase: '0', name: 'Readiness Audit', weeks: '1-2', items: ['Architecture assessment', 'Protocol gap analysis', 'Token efficiency audit'] },
    { phase: '1', name: 'Foundation', weeks: '3-6', items: ['SPA+SSR migration', 'Schema implementation', 'UCP manifest'] },
    { phase: '2', name: 'Protocols', weeks: '7-10', items: ['UCP integration', 'ACP checkout', 'AP2 mandates'] },
    { phase: '3', name: 'Certification', weeks: '11-13', items: ['Merchant Center', 'OpenAI conformance', 'Testing'] },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#085DA0]/10 text-[#085DA0] rounded-full text-sm font-medium mb-4">
            Implementation Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            12-16 Weeks to Protocol Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From readiness audit to full UCP + ACP + AP2 certification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-[#085DA0] text-white text-xs font-bold rounded-full">
                Phase {phase.phase}
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{phase.name}</h3>
                <p className="text-sm text-[#085DA0] font-medium mb-4">Weeks {phase.weeks}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Start Your Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}