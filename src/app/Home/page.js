'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Shield, Zap, Globe, Code, TrendingUp, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const protocols = [
    {
      name: 'UCP',
      title: 'Universal Commerce Protocol',
      org: 'Google',
      description: 'Discovery layer enabling agents to find products and negotiate capabilities.',
      color: 'bg-blue-500',
    },
    {
      name: 'ACP',
      title: 'Agentic Commerce Protocol',
      org: 'OpenAI & Stripe',
      description: 'Execution layer powering instant checkout in AI interfaces.',
      color: 'bg-green-500',
    },
    {
      name: 'AP2',
      title: 'Agent Payments Protocol',
      org: 'Google',
      description: 'Trust layer with cryptographic mandates for secure agent transactions.',
      color: 'bg-purple-500',
    },
  ];

  const stats = [
    { value: '50%', label: 'Organic Traffic Decline', sublabel: 'Projected as AI answers queries directly' },
    { value: '1200%', label: 'AI Traffic Surge', sublabel: 'Traffic from generative AI sources in 2025-26' },
    { value: '85%', label: 'Marketers Unprepared', sublabel: 'Feel tech stack unfit for AI search evolution' },
  ];

  const services = [
    {
      icon: Code,
      title: 'SPA + SSR Architecture',
      description: 'Token-efficient, machine-readable infrastructure built for agent ingestion.',
    },
    {
      icon: Globe,
      title: 'Protocol Implementation',
      description: 'Full UCP, ACP, and AP2 integration with root-level manifest control.',
    },
    {
      icon: Shield,
      title: 'Heavy Schema Markup',
      description: 'Dense JSON-LD knowledge graphs for optimal AI discoverability.',
    },
    {
      icon: TrendingUp,
      title: 'AEO/GEO Strategy',
      description: 'Transition from SEO to Agent Engine Optimization for the agentic web.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Bot className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">The Agentic Commerce Revolution</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Human-Centric Web Is Ending.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                The Agent-Centric Web Is Here.
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              AI agents now discover, negotiate, and execute transactions. Only <strong>SPA + SSR + Heavy Schema</strong>,
              implemented with UCP, ACP, and AP2, is built for this era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-slate-700">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Three-Layer Agentic Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three foundational protocols now define how AI agents interact with commerce.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {protocols.map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex items-center px-3 py-1 ${protocol.color} text-white text-sm font-bold rounded mb-4`}>
                  {protocol.name}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{protocol.title}</h3>
                <p className="text-sm text-blue-600 mb-3">{protocol.org}</p>
                <p className="text-slate-600">{protocol.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integrated Digital Intelligence
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We architect your business for the agent-centric web with protocol-native infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 transition-colors"
              >
                <service.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why ASC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Legacy Platforms Fail in the Agentic Era
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Shopify, Wix, WordPress—these platforms impose architectural constraints that block
                protocol compliance and agent discovery.
              </p>
              <ul className="space-y-4">
                {[
                  'No root-level access for /.well-known/ manifests',
                  'Heavy JS bundles create "Hydration Tax" agents penalize',
                  'Token inefficiency wastes AI crawler context windows',
                  'No support for TEE/DID cryptographic infrastructure',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">The ASC Solution</h3>
              <ul className="space-y-4">
                {[
                  { label: 'SPA + SSR Hybrid', desc: '<300ms render-to-fact speed' },
                  { label: 'Full Protocol Stack', desc: 'UCP, ACP, AP2 native integration' },
                  { label: 'Heavy Schema', desc: 'Dense JSON-LD knowledge graphs' },
                  { label: 'Root Control', desc: 'Own-origin deployment, programmable edge' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">{item.label}</span>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Agentic Web Isn't Coming—It's Here
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Secure your authority in the AI era. Don't let legacy architecture render you invisible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Schedule Your Protocol Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
