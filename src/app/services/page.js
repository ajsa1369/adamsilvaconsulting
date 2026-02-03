import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Globe, Shield, TrendingUp, Zap, Database, Lock, BarChart3, Layers, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Services | Agentic Commerce Architecture',
  description: 'Enterprise implementation of UCP, ACP, and AP2 protocols. SPA + SSR architecture, heavy schema markup, and AI authority building for the agent-centric web.',
};

const ServicesPage = () => {
  const services = [
    {
      icon: Layers,
      title: 'SPA + SSR Architecture',
      subtitle: 'Token-Efficient Infrastructure',
      description: 'Purpose-built web architecture optimized for AI agent ingestion with minimal hydration tax.',
      features: [
        'Edge streaming SSR with <300ms render-to-fact',
        'Partial hydration for optimal token efficiency',
        'Islands architecture for interactive components',
        'Deterministic HTML snapshots for agent parsing',
      ],
      color: 'blue',
    },
    {
      icon: Globe,
      title: 'UCP Implementation',
      subtitle: 'Universal Commerce Protocol',
      description: 'Full implementation of Google\'s open standard for agent discovery and checkout capabilities.',
      features: [
        '/.well-known/ucp manifest configuration',
        'Capability profile development',
        'REST, MCP, and A2A transport bindings',
        'Payment handler integration',
      ],
      color: 'green',
    },
    {
      icon: Zap,
      title: 'ACP Integration',
      subtitle: 'Agentic Commerce Protocol',
      description: 'OpenAI/Stripe protocol enabling instant checkout in ChatGPT and AI interfaces.',
      features: [
        'Product feed specification compliance',
        'Checkout API implementation',
        'Stripe SPT delegated payment setup',
        'Rich state management for agent memory',
      ],
      color: 'purple',
    },
    {
      icon: Shield,
      title: 'AP2 Mandate System',
      subtitle: 'Agent Payments Protocol',
      description: 'Cryptographic proof of consent with verifiable credentials for secure agent transactions.',
      features: [
        'Intent and Cart mandate implementation',
        'Verifiable Credentials (VC) integration',
        'Non-repudiable audit trail setup',
        'TEE and DID infrastructure',
      ],
      color: 'red',
    },
    {
      icon: Database,
      title: 'Heavy Schema Markup',
      subtitle: 'JSON-LD Knowledge Graphs',
      description: 'Dense structured data optimized for LLM ingestion and AI discoverability.',
      features: [
        'Product, Offer, Review schema graphs',
        'Organization and WebSite markup',
        'FAQPage, HowTo, Service schemas',
        'Custom @graph entity relationships',
      ],
      color: 'cyan',
    },
    {
      icon: TrendingUp,
      title: 'AEO/GEO Strategy',
      subtitle: 'Agent & Generative Engine Optimization',
      description: 'Transition from traditional SEO to AI-first discovery and citation optimization.',
      features: [
        'Agent citation monitoring and optimization',
        'AI Overview visibility strategy',
        'Content gap analysis for agent queries',
        'Authority flywheel implementation',
      ],
      color: 'orange',
    },
  ];

  const roadmap = [
    {
      phase: 'Phase 0',
      title: 'Readiness Audit',
      weeks: 'Weeks 1-2',
      items: ['SSR & Architecture Assessment', 'Data Feed Gap Analysis', 'Identity & Domain Verification', 'Payment Provider Review'],
    },
    {
      phase: 'Phase 1',
      title: 'Foundation',
      weeks: 'Weeks 3-6',
      items: ['SSR/Edge for Critical Routes', 'Heavy Schema Deployment', 'Publish UCP Manifest', 'Security Headers Implementation'],
    },
    {
      phase: 'Phase 2',
      title: 'Protocols',
      weeks: 'Weeks 7-10',
      items: ['UCP Capabilities Setup', 'ACP Checkout Adapter', 'Stripe SPT Integration', 'AP2 Mandate Service'],
    },
    {
      phase: 'Phase 3',
      title: 'Certification',
      weeks: 'Weeks 11-13',
      items: ['Merchant Center Verify', 'OpenAI Conformance Check', 'Endpoint Pen-Testing', 'Production Greenlight'],
    },
    {
      phase: 'Phase 4',
      title: 'Operations',
      weeks: 'Weeks 14+',
      items: ['Telemetry & Citation Ops', 'Mandate Audit Pipeline', 'Token Budget Optimization', 'Schema Management'],
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-600 border-blue-200',
    green: 'bg-green-500/10 text-green-600 border-green-200',
    purple: 'bg-purple-500/10 text-purple-600 border-purple-200',
    red: 'bg-red-500/10 text-red-600 border-red-200',
    cyan: 'bg-cyan-500/10 text-cyan-600 border-cyan-200',
    orange: 'bg-orange-500/10 text-orange-600 border-orange-200',
  };

  const iconColorClasses = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
    red: 'text-red-500',
    cyan: 'text-cyan-500',
    orange: 'text-orange-500',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agentic Commerce Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Enterprise architecture for UCP, ACP, and AP2. We build the infrastructure
            that makes your business discoverable and executable by AI agents.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`border rounded-xl p-8 hover:shadow-lg transition-shadow ${colorClasses[service.color]}`}
              >
                <service.icon className={`w-12 h-12 mb-4 ${iconColorClasses[service.color]}`} />
                <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-sm font-medium text-slate-500 mb-4">{service.subtitle}</p>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              12-16 Weeks to Agentic Readiness
            </h2>
            <p className="text-xl text-slate-600">
              A proven implementation roadmap for protocol compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {roadmap.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-sm font-bold text-blue-600 mb-1">{phase.phase}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-xs text-slate-500 mb-4">{phase.weeks}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build for the Agentic Web?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Schedule a protocol assessment to evaluate your current architecture.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Schedule Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
