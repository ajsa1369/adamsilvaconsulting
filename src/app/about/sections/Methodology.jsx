import { Bot, Code, Shield, FileCode, Zap, Target } from 'lucide-react';

export default function Methodology() {
  const expertise = [
    { icon: Bot, title: 'Protocol Engineering', desc: 'UCP, ACP, AP2 implementation from the ground up' },
    { icon: Code, title: 'SPA + SSR Architecture', desc: 'Token-efficient rendering with <300ms targets' },
    { icon: Shield, title: 'Cryptographic Trust', desc: 'Verifiable credentials and mandate systems' },
    { icon: FileCode, title: 'Heavy Schema Markup', desc: 'JSON-LD knowledge graphs for agents' },
    { icon: Zap, title: 'Edge Computing', desc: 'Global CDN rendering for minimal latency' },
    { icon: Target, title: 'AEO/GEO Strategy', desc: 'Agent citation and visibility optimization' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-[#085DA0]/10 text-[#085DA0] rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Built for the Agent-Centric Web
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Traditional agencies optimize for human behavior. We understand the web has changed. AI agents now discover, evaluate, and transact directly.
            </p>
            <p className="text-lg text-gray-600">
              Our stack—SPA + SSR + Heavy Schema—is the only architecture that satisfies UCP, ACP, and AP2 requirements. We've studied the protocols, built the implementations, and know where legacy platforms fail.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <item.icon className="w-8 h-8 text-[#085DA0] mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}