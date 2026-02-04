import { CheckCircle } from 'lucide-react';

export default function Categories() {
  const phases = [
    {
      phase: '0',
      name: 'Readiness Audit',
      weeks: 'Weeks 1-2',
      items: ['Current architecture assessment', 'Protocol gap analysis', 'Token efficiency audit', 'Schema depth review'],
    },
    {
      phase: '1',
      name: 'Foundation',
      weeks: 'Weeks 3-6',
      items: ['SPA+SSR migration', 'Heavy schema implementation', 'UCP manifest creation', 'Core Web Vitals optimization'],
    },
    {
      phase: '2',
      name: 'Protocol Integration',
      weeks: 'Weeks 7-10',
      items: ['UCP capability profiles', 'ACP checkout integration', 'AP2 mandate system', 'Multi-transport setup'],
    },
    {
      phase: '3',
      name: 'Certification',
      weeks: 'Weeks 11-13',
      items: ['Google Merchant Center', 'OpenAI conformance testing', 'Agent simulation testing', 'Performance validation'],
    },
    {
      phase: '4',
      name: 'Operations',
      weeks: 'Weeks 14+',
      items: ['Telemetry & monitoring', 'Mandate audit dashboards', 'Continuous optimization', 'Protocol updates'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#085DA0]/10 text-[#085DA0] rounded-full text-sm font-medium mb-4">
            Implementation Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            12-16 Weeks to Protocol Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Structured phases from assessment through certification and ongoing operations.
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-48 flex-shrink-0">
                <span className="inline-block px-3 py-1 bg-[#085DA0] text-white text-sm font-bold rounded-full mb-2">
                  Phase {phase.phase}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{phase.name}</h3>
                <p className="text-sm text-[#085DA0] font-medium">{phase.weeks}</p>
              </div>
              <div className="flex-1">
                <div className="grid sm:grid-cols-2 gap-3">
                  {phase.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}