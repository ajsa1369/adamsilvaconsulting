import Link from 'next/link';
import { Server, Globe, Zap, Shield, FileCode, Target, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const services = [
    {
      id: 'spa-ssr',
      icon: Server,
      title: 'SPA + SSR Architecture',
      description: 'Token-efficient rendering with partial hydration and streaming HTML. Achieve <300ms render-to-fact speed.',
      features: ['Partial hydration', 'Edge rendering', 'Deterministic snapshots', 'Zero layout shift'],
    },
    {
      id: 'ucp',
      icon: Globe,
      title: 'UCP Implementation',
      description: 'Universal Commerce Protocol for Google AI Mode, Gemini, and ecosystem agents. Full discovery layer.',
      features: ['/.well-known/ucp manifest', 'Capability profiles', 'Multi-transport (REST/MCP/A2A)', 'Dynamic negotiation'],
    },
    {
      id: 'acp',
      icon: Zap,
      title: 'ACP Integration',
      description: 'Agentic Commerce Protocol for ChatGPT Instant Checkout. Stripe SPT token flows.',
      features: ['Shared Payment Tokens', 'Merchant control preserved', 'Real-time inventory sync', 'Tax & fulfillment routing'],
    },
    {
      id: 'ap2',
      icon: Shield,
      title: 'AP2 Mandate System',
      description: 'Cryptographic proof of consent with verifiable credentials. Non-repudiable audit trails.',
      features: ['Cart/Intent/Payment mandates', 'ECDSA signatures', 'TEE integration', 'DID support'],
    },
    {
      id: 'schema',
      icon: FileCode,
      title: 'Heavy Schema Markup',
      description: 'JSON-LD knowledge graphs that agents understand, negotiate with, and act upon.',
      features: ['@graph entity networks', 'Product + Offer nesting', 'Author credentialing', 'Return/shipping policies'],
    },
    {
      id: 'aeo-geo',
      icon: Target,
      title: 'AEO/GEO Strategy',
      description: 'Answer Engine & Generative Engine Optimization. Citation optimization for AI surfaces.',
      features: ['Agent citation tracking', 'Capability coverage metrics', 'Machine-first content', 'Precomputed summaries'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#085DA0] hover:shadow-lg transition-all scroll-mt-24"
            >
              <div className="w-14 h-14 bg-[#085DA0]/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-[#085DA0]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#085DA0] rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}