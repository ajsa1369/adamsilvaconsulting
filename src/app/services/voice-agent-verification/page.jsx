import Link from 'next/link';
import { Phone, Shield, CheckCircle, ArrowRight, Bot, Fingerprint, Lock, Activity } from 'lucide-react';

export const metadata = {
  title: 'Voice Agent Verification | Adam Silva Consulting',
  description: 'AI-powered voice verification systems that authenticate leads, validate intent, and ensure quality conversations at scale.',
};

export default function VoiceAgentVerificationPage() {
  const features = [
    { icon: <Bot className="w-8 h-8" />, title: 'Conversational AI Agents', description: 'Natural-sounding voice agents that verify lead information, confirm interest, and qualify prospects before human handoff.' },
    { icon: <Fingerprint className="w-8 h-8" />, title: 'Identity Verification', description: 'Multi-factor authentication including voice biometrics, knowledge-based verification, and real-time data validation.' },
    { icon: <Shield className="w-8 h-8" />, title: 'Fraud Detection', description: 'AI-powered fraud screening identifies suspicious patterns, synthetic voices, and bad actors before they reach your team.' },
    { icon: <Activity className="w-8 h-8" />, title: 'Intent Confirmation', description: 'Verify genuine purchase intent through conversational assessment, eliminating tire-kickers and unqualified leads.' }
  ];
  const useCases = [
    { title: 'Lead Verification', description: 'Automatically call and verify lead contact information, confirm interest level, and update CRM records in real-time.' },
    { title: 'Appointment Confirmation', description: 'AI agents confirm appointments, collect pre-meeting information, and handle rescheduling autonomously.' },
    { title: 'Quote Follow-Up', description: 'Intelligent follow-up calls that gauge interest, answer basic questions, and route hot leads to sales.' },
    { title: 'Customer Verification', description: 'Secure identity verification for high-value transactions, account changes, and compliance requirements.' }
  ];
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">Voice Technology</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Voice Agent<br /><span className="text-[#60a5fa]">Verification</span></h1>
            <p className="text-xl text-gray-300 mb-8">AI voice agents that verify, qualify, and authenticate leads 24/7. Reduce fraud, improve lead quality, and scale your verification process without adding headcount.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/services" className="px-8 py-3 border border-white/30 hover:bg-white/10 text-white rounded-lg font-semibold transition-all">All Services</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-[#085DA0] mb-2">98%</div><div className="text-gray-600">Verification accuracy</div></div>
            <div><div className="text-4xl font-bold text-[#085DA0] mb-2">24/7</div><div className="text-gray-600">Always-on availability</div></div>
            <div><div className="text-4xl font-bold text-[#085DA0] mb-2">60%</div><div className="text-gray-600">Cost reduction vs. manual</div></div>
            <div><div className="text-4xl font-bold text-[#085DA0] mb-2">&lt;2min</div><div className="text-gray-600">Average verification time</div></div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Advanced Voice Verification Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="text-[#085DA0] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Voice Verification Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-[#085DA0]/10 rounded-lg flex items-center justify-center mb-4"><Phone className="w-5 h-5 text-[#085DA0]" /></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Seamless Integration</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /><span>Salesforce, HubSpot, Zoho CRM integration</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /><span>Twilio, RingCentral, and major telephony platforms</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /><span>Real-time webhook notifications</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /><span>Custom API for enterprise deployments</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /><span>HIPAA, SOC2, and GDPR compliant</span></li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <Lock className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-blue-100 mb-6">Built from the ground up with security and compliance in mind.</p>
              <Link href="/services/security-compliance" className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">Learn about our security <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Verify Leads at Scale</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all text-lg">Request a Demo <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
