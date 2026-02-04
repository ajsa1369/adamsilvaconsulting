import Link from 'next/link';
import { Bot, Target, Zap, TrendingUp, CheckCircle, ArrowRight, Brain, Users, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'AI Lead Generation | Adam Silva Consulting',
  description: 'Transform your lead generation with AI-powered systems that identify, qualify, and engage high-intent prospects in the age of agentic commerce.',
};

export default function AILeadGenerationPage() {
  const capabilities = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Intent Signal Detection',
      description: 'AI systems monitor digital signals across platforms to identify prospects actively researching solutions in your space.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Predictive Lead Scoring',
      description: 'Machine learning models score leads based on behavior patterns, firmographics, and engagement signals for precision prioritization.'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Agent-Ready Data Enrichment',
      description: 'Automatically enrich lead profiles with structured data that AI agents can process for personalized outreach at scale.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Multi-Channel Capture',
      description: 'Unified lead capture across web, voice agents, chat interfaces, and AI-mediated interactions.'
    }
  ];

  const benefits = [
    '3-5x increase in qualified lead volume',
    '60% reduction in cost per qualified lead',
    'Real-time lead scoring and routing',
    'Automated follow-up within seconds',
    'Integration with major CRM platforms',
    'GDPR and CCPA compliant data handling'
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Lead Generation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered<br />
              <span className="text-[#60a5fa]">Lead Generation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              In the age of agentic commerce, leads don't fill out forms—they ask AI agents for recommendations. 
              Our systems ensure you're the answer AI delivers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 border border-white/30 hover:bg-white/10 text-white rounded-lg font-semibold transition-all"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Traditional Lead Gen is Dying
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Gartner predicts 50% of organic traffic will disappear by 2028 as AI agents answer queries directly. 
              When prospects ask ChatGPT "find me a marketing consultant," will your business be recommended?
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-red-500 mb-2">-50%</div>
                <div className="text-gray-600">Expected organic traffic decline by 2028</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-amber-500 mb-2">65%</div>
                <div className="text-gray-600">Of searches now end without a click</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-500 mb-2">4.2x</div>
                <div className="text-gray-600">ROI from AI-optimized lead gen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Lead Generation Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="text-[#085DA0] mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Results You Can Measure
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our AI lead generation systems deliver quantifiable improvements across your entire funnel.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <div className="font-semibold">AI Signal Monitoring</div>
                    <div className="text-blue-100 text-sm">Detect intent signals across digital channels</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <div className="font-semibold">Intelligent Scoring</div>
                    <div className="text-blue-100 text-sm">ML models prioritize highest-value prospects</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <div className="font-semibold">Automated Engagement</div>
                    <div className="text-blue-100 text-sm">Personalized outreach within seconds</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <div className="font-semibold">Continuous Optimization</div>
                    <div className="text-blue-100 text-sm">AI learns and improves conversion rates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a consultation to learn how AI-powered lead generation can deliver qualified prospects in the age of agentic commerce.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all text-lg"
          >
            Schedule Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
