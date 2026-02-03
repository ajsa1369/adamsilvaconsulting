import Link from 'next/link';
import { ArrowRight, Server, Globe, Zap, Shield, FileCode, Target } from 'lucide-react';

export default function ServiceEcosystem() {
  const services = [
    {
      icon: Server,
      title: 'SPA + SSR Architecture',
      description: 'Token-efficient rendering with partial hydration. <300ms render-to-fact speed for AI crawler priority.',
      link: '/services#spa-ssr',
    },
    {
      icon: Globe,
      title: 'UCP Implementation',
      description: 'Universal Commerce Protocol setup with /.well-known/ucp manifests, capabilities, and multi-transport support.',
      link: '/services#ucp',
    },
    {
      icon: Zap,
      title: 'ACP Integration',
      description: 'Agentic Commerce Protocol for ChatGPT Instant Checkout. Stripe SPT token flows.',
      link: '/services#acp',
    },
    {
      icon: Shield,
      title: 'AP2 Mandate System',
      description: 'Cryptographic proof of consent with verifiable credentials. Cart, Intent, and Payment mandates.',
      link: '/services#ap2',
    },
    {
      icon: FileCode,
      title: 'Heavy Schema Markup',
      description: 'JSON-LD knowledge graphs with @graph arrays, nested entities, and agent-actionable structures.',
      link: '/services#schema',
    },
    {
      icon: Target,
      title: 'AEO/GEO Strategy',
      description: 'Answer Engine & Generative Engine Optimization. Citation optimization for AI surfaces.',
      link: '/services#aeo-geo',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#085DA0]/10 text-[#085DA0] rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Agentic Commerce Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end implementation of the protocol stack. From architecture to certification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#085DA0] hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-[#085DA0]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#085DA0] transition-colors">
                <service.icon className="w-7 h-7 text-[#085DA0] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#085DA0] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-[#085DA0] font-medium text-sm group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-8 py-4 rounded-lg font-semibold transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}