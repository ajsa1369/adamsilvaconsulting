import Link from 'next/link';
import { Shield, Lock, CheckCircle, ArrowRight, Eye, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Security & Compliance | Adam Silva Consulting',
  description: 'Enterprise-grade security, data protection, and regulatory compliance for AI-powered marketing systems.',
};

export default function SecurityCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">Security</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security &<br /><span className="text-[#60a5fa]">Compliance</span></h1>
            <p className="text-xl text-gray-300 mb-8">AI-powered marketing requires enterprise-grade security. We implement protocols like AP2 with cryptographic verification alongside GDPR, CCPA, and industry-specific compliance.</p>
            <Link href="/contact" className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Shield className="w-8 h-8" />, title: 'SOC 2 Type II', desc: 'Annual audits for security controls' },
              { icon: <Lock className="w-8 h-8" />, title: 'GDPR Compliant', desc: 'Full EU data protection compliance' },
              { icon: <FileCheck className="w-8 h-8" />, title: 'CCPA Ready', desc: 'California privacy law compliance' },
              { icon: <Shield className="w-8 h-8" />, title: 'HIPAA Options', desc: 'Healthcare data protection available' },
              { icon: <Eye className="w-8 h-8" />, title: 'AP2 Mandates', desc: 'Cryptographic payment verification' },
              { icon: <Lock className="w-8 h-8" />, title: 'Data Encryption', desc: 'AES-256 at rest, TLS 1.3 in transit' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-[#085DA0] mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Security Built In, Not Bolted On</h2>
          <p className="text-xl text-blue-100 mb-8">Enterprise security from day one for peace of mind.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#085DA0] rounded-lg font-semibold">Schedule Consultation <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
