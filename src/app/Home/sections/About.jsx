import Link from 'next/link';
import { ArrowRight, Bot, FileCode, Shield, Sparkles } from 'lucide-react';

export default function About() {
  const capabilities = [
    {
      icon: Bot,
      title: 'Protocol-Native Architecture',
      description: 'We implement UCP, ACP, and AP2 from the ground up—not as afterthoughts bolted onto legacy platforms.',
    },
    {
      icon: FileCode,
      title: 'SPA + SSR Engineering',
      description: 'Token-efficient rendering with <300ms render-to-fact speed. AI agents pick you first.',
    },
    {
      icon: Shield,
      title: 'Cryptographic Trust',
      description: 'AP2 mandate systems with verifiable credentials. Audit trails that resolve disputes.',
    },
    {
      icon: Sparkles,
      title: 'Heavy Schema Markup',
      description: 'JSON-LD knowledge graphs that agents understand, negotiate with, and act upon.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <span className="inline-block px-4 py-1 bg-[#085DA0]/10 text-[#085DA0] rounded-full text-sm font-medium mb-6">
              Why Adam Silva Consulting
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built for the<br />
              <span className="text-[#085DA0]">Agent-Centric Web</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Traditional platforms hit a ceiling. They lack root-level control, transport flexibility, token efficiency, schema depth, and cryptographic infrastructure.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We architect bespoke stacks that satisfy the technical requirements of UCP, ACP, and AP2—because that's what agents demand.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#085DA0] hover:text-[#0f6cbb] font-semibold transition-colors"
            >
              Learn About Our Approach
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#085DA0]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#085DA0]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}