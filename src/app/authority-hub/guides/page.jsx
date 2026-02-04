import Link from 'next/link';
import { BookOpen, Target, Code, Bot, Zap, Shield, ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'All Guides | Authority Hub | Adam Silva Consulting',
  description: 'Complete collection of guides and frameworks for AI-ready marketing operations.',
};

export default function GuidesPage() {
  const allGuides = [
    { icon: <Target className="w-6 h-6" />, title: 'AI Engine Optimization Mastery', link: '/authority-hub/ai-engine-optimization-mastery', tag: 'Foundation' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'Topical Authority Architecture', link: '/authority-hub/topical-authority-architecture', tag: 'Content' },
    { icon: <Code className="w-6 h-6" />, title: 'Technical Framework Excellence', link: '/authority-hub/technical-framework-excellence', tag: 'Technical' },
    { icon: <Bot className="w-6 h-6" />, title: 'AI-Powered Content Operations', link: '/authority-hub/ai-powered-content-operations', tag: 'Operations' },
    { icon: <Zap className="w-6 h-6" />, title: 'Marketing Automation Intelligence', link: '/authority-hub/marketing-automation-intelligence', tag: 'Automation' },
    { icon: <Shield className="w-6 h-6" />, title: 'CSR & Trust Engineering', link: '/authority-hub/csr-and-trust-engineering', tag: 'Trust' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/authority-hub" className="text-blue-300 hover:text-white flex items-center gap-2 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Authority Hub</Link>
          <h1 className="text-4xl font-bold mb-4">All Guides</h1>
          <p className="text-xl text-gray-300">Complete collection of strategic frameworks and implementation guides.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGuides.map((guide, i) => (
              <Link key={i} href={guide.link} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#085DA0] transition-all group">
                <span className="inline-block px-3 py-1 bg-[#085DA0]/10 text-[#085DA0] text-xs font-semibold rounded-full mb-3">{guide.tag}</span>
                <div className="text-[#085DA0] mb-3">{guide.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#085DA0]">{guide.title}</h3>
                <span className="text-[#085DA0] text-sm flex items-center gap-1">Read Guide <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
