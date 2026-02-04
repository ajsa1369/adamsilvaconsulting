import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Topical Authority Architecture | Authority Hub',
  description: 'Framework for building comprehensive topic coverage that earns AI citations.',
};

export default function TopicalAuthorityPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/authority-hub" className="text-blue-300 hover:text-white flex items-center gap-2 mb-6"><ArrowLeft className="w-4 h-4" /> Authority Hub</Link>
          <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-4">Content Strategy</span>
          <h1 className="text-4xl font-bold mb-4">Topical Authority Architecture</h1>
          <p className="text-xl text-gray-300">Building comprehensive topic coverage that earns AI citations.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Authority Building Framework</h2>
          <p className="text-gray-600 mb-6">Topical authority is demonstrable expertise across a subject domain. AI agents evaluate sources before citing them, and comprehensive coverage signals genuine expertise.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Topic Cluster Strategy</h2>
          <p className="text-gray-600 mb-4">Build content clusters around pillar topics. Each cluster includes a comprehensive pillar page surrounded by detailed supporting articles that link back to the pillar and to each other.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pillar Content</h3>
          <p className="text-gray-600 mb-4">Comprehensive 3000-5000 word pieces that cover a topic thoroughly. These become the hubs that connect all related content.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Supporting Content</h3>
          <p className="text-gray-600 mb-4">Detailed articles covering specific aspects, questions, or subtopics. Each piece adds depth while linking back to the pillar.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Steps</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li>Identify 3-5 core topics where you have genuine expertise</li>
            <li>Map all subtopics, questions, and related concepts</li>
            <li>Create pillar content for each core topic</li>
            <li>Build out supporting content systematically</li>
            <li>Implement comprehensive internal linking</li>
            <li>Maintain freshness through regular updates</li>
          </ol>
        </div>
      </article>
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between">
          <Link href="/authority-hub/ai-engine-optimization-mastery" className="text-[#085DA0] flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> AEO Mastery</Link>
          <Link href="/authority-hub/technical-framework-excellence" className="text-[#085DA0] flex items-center gap-2">Next: Technical Framework <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </main>
  );
}
