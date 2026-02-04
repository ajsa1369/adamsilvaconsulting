import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Calendar, Clock } from 'lucide-react';

export const metadata = {
  title: 'Research | Agentic Commerce Protocols',
  description: 'In-depth research and analysis on UCP, ACP, AP2, and the transition from SEO to AEO/GEO in the agent-centric web.',
};

const ResearchPage = () => {
  const papers = [
    {
      title: 'The Agentic Commerce Revolution: Enterprise Architecture for UCP, ACP, and AP2',
      excerpt: 'A comprehensive analysis of how AI agents are transforming commerce and why SPA + SSR + Heavy Schema is the only architecture fit for this era.',
      date: 'January 2026',
      readTime: '25 min read',
      tags: ['UCP', 'ACP', 'AP2', 'Architecture'],
      href: '/research/agentic-commerce-revolution',
    },
    {
      title: 'Universal Commerce Protocol (UCP): The New Operating System for Business',
      excerpt: 'Deep dive into Google\'s open standard for agent discovery and checkout, including capability negotiation, payment handlers, and the shift from persuasion to determinism.',
      date: 'January 2026',
      readTime: '20 min read',
      tags: ['UCP', 'Google', 'Protocol'],
      href: '/research/ucp-deep-dive',
    },
    {
      title: 'SPA + SSR: Why Token Efficiency Matters for AI Discoverability',
      excerpt: 'Technical analysis of how rendering architecture affects AI crawler token budgets and why legacy platforms fail the agent economics test.',
      date: 'January 2026',
      readTime: '15 min read',
      tags: ['SSR', 'Token Efficiency', 'Architecture'],
      href: '/research/spa-ssr-token-efficiency',
    },
    {
      title: 'From SEO to AEO/GEO: The Authority Paradigm Shift',
      excerpt: 'How to transition from optimizing for human clicks to optimizing for agent ingestion, citation, and capability coverage.',
      date: 'January 2026',
      readTime: '12 min read',
      tags: ['AEO', 'GEO', 'Strategy'],
      href: '/research/seo-to-aeo-geo',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Insights
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            In-depth analysis of agentic commerce protocols, architecture patterns,
            and strategies for the agent-centric web.
          </p>
        </div>
      </section>

      {/* Papers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {papers.map((paper, index) => (
              <Link
                key={index}
                href={paper.href}
                className="block bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{paper.title}</h2>
                <p className="text-slate-600 mb-4">{paper.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {paper.date}</span>
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {paper.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Protocol Landscape</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left">Dimension</th>
                  <th className="px-6 py-4 text-left">UCP (Google)</th>
                  <th className="px-6 py-4 text-left">ACP (OpenAI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Lead Org</td>
                  <td className="px-6 py-4">Google & Shopify Ecosystem</td>
                  <td className="px-6 py-4">OpenAI & Stripe</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Philosophy</td>
                  <td className="px-6 py-4">Decentralized, ecosystem-driven</td>
                  <td className="px-6 py-4">Centralized, opinionated</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Discovery</td>
                  <td className="px-6 py-4">/.well-known/ucp manifests</td>
                  <td className="px-6 py-4">Centralized merchant listing</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Payments</td>
                  <td className="px-6 py-4">Provider agnostic, AP2 native</td>
                  <td className="px-6 py-4">Stripe SPT integrated</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Use Case</td>
                  <td className="px-6 py-4">Google AI Mode, Gemini</td>
                  <td className="px-6 py-4">ChatGPT Instant Checkout</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-600 mt-8">
            <strong>AP2</strong> serves as the unifying trust layer across both protocols.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
