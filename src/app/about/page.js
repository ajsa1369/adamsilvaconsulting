import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Lightbulb, Users, Award, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About | Integrated Digital Intelligence',
  description: 'Adam Silva Consulting delivers Agentic Commerce architecture. We understand the intersection of SPA+SSR engineering, protocol-native architecture (UCP/ACP/AP2), and AI authority building.',
};

const AboutPage = () => {
  const expertise = [
    'Universal Commerce Protocol (UCP) Implementation',
    'Agentic Commerce Protocol (ACP) Integration',
    'Agent Payments Protocol (AP2) Mandate Systems',
    'SPA + SSR Token-Efficient Architecture',
    'Heavy Schema Markup & JSON-LD Knowledge Graphs',
    'Agent Engine Optimization (AEO)',
    'Generative Engine Optimization (GEO)',
    'E-E-A-T as a System Architecture',
  ];

  const principles = [
    {
      icon: Target,
      title: 'Protocol-Native Design',
      description: 'We architect from protocol requirements up, not website requirements down. UCP, ACP, and AP2 compliance drives every technical decision.',
    },
    {
      icon: Lightbulb,
      title: 'Machine-First Thinking',
      description: 'AI agents are the new buyers. We optimize for agent ingestion, token efficiency, and capability coverage before human UX concerns.',
    },
    {
      icon: Users,
      title: 'Human-in-the-Loop',
      description: 'Automation with credentialed oversight. We marry AI efficiency with expert validation for authority and trust building.',
    },
    {
      icon: Award,
      title: 'Constraint Engineering',
      description: 'Success in the deterministic economy means engineering constraint environments where your business becomes the default winner.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrated Digital Intelligence
            </h1>
            <p className="text-xl text-slate-300">
              We architect businesses for the agent-centric web. When AI agents discover, negotiate,
              and execute transactions, your infrastructure must speak their language.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                The Paradigm Shift
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  The human-centric web is ending. Traffic is moving from destination websites to
                  AI-mediated answers. Agents now discover, negotiate, and execute purchases directly.
                </p>
                <p>
                  Traditional platforms hit a ceiling. They lack root-level control over protocol
                  manifests, transport flexibility, token efficiency, schema depth, and cryptographic
                  infrastructure.
                </p>
                <p>
                  <strong className="text-slate-900">Adam Silva Consulting</strong> is uniquely positioned
                  because we understand the intersection of modern engineering, protocol-native architecture,
                  and AI authority as a system—not a checkbox.
                </p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Core Expertise</h3>
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Approach</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Four principles guide how we architect for the agentic commerce era.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <principle.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{principle.title}</h3>
                <p className="text-slate-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The New Winners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The New Winners</h2>
            <p className="text-lg text-slate-600 mb-8">
              Winners in the agentic era won't be the most charismatic brands or those with
              the largest ad budgets. They'll be businesses that are:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                { label: 'Most Compatible', desc: 'Supporting multiple protocols and extensions' },
                { label: 'Most Verifiable', desc: 'Publishing clear, cryptographic guarantees' },
                { label: 'Most Reliable', desc: 'Maintaining accurate, real-time data' },
                { label: 'Easiest to Complete', desc: 'Minimizing friction and escalation' },
                { label: 'Most Negotiable', desc: 'Exposing flexible pricing and capabilities' },
                { label: 'Most Machine-Readable', desc: 'Dense schema, structured data, clear APIs' },
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4">
                  <div className="font-semibold text-slate-900">{item.label}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let's Build Your Agentic Infrastructure
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            The deterministic economy is here. Position your business for agent-mediated commerce.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
