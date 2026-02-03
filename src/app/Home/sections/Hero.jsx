import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export default function Hero() {
  const protocols = [
    { icon: Globe, name: 'UCP', desc: 'Discovery Layer', color: 'text-blue-400' },
    { icon: Zap, name: 'ACP', desc: 'Execution Layer', color: 'text-green-400' },
    { icon: Shield, name: 'AP2', desc: 'Trust Layer', color: 'text-purple-400' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a365d] to-[#0a1628] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #60a5fa 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Integrated Digital Intelligence
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Agent Web<br />
              <span className="text-[#60a5fa]">Is Here.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              AI agents now discover, negotiate, and execute transactions directly. Is your architecture protocol-ready?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Schedule Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/research/agentic-commerce-revolution"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Read the Research
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#60a5fa]">1200%</div>
                <div className="text-sm text-gray-400">AI Traffic Surge</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#60a5fa]">50%</div>
                <div className="text-sm text-gray-400">Organic Decline</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#60a5fa]">&lt;300ms</div>
                <div className="text-sm text-gray-400">Render Target</div>
              </div>
            </div>
          </div>

          {/* Right Column - Protocol Stack */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-lg font-semibold text-gray-300 mb-6 text-center">The Protocol Stack</h3>
              <div className="space-y-4">
                {protocols.map((protocol, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center ${protocol.color}`}>
                      <protocol.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{protocol.name}</div>
                      <div className="text-sm text-gray-400">{protocol.desc}</div>
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {index === 0 ? 'Google' : index === 1 ? 'OpenAI' : 'Google'}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-gray-400">SPA + SSR + Heavy Schema</p>
                <p className="text-xs text-gray-500 mt-1">The only architecture that works</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}