import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'AI-Powered Content Operations | Authority Hub',
  description: 'Systems and workflows for scaling content production with AI assistance.',
};

export default function ContentOperationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/authority-hub" className="text-blue-300 hover:text-white flex items-center gap-2 mb-6"><ArrowLeft className="w-4 h-4" /> Authority Hub</Link>
          <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-4">Operations Guide</span>
          <h1 className="text-4xl font-bold mb-4">AI-Powered Content Operations</h1>
          <p className="text-xl text-gray-300">Scaling content production without sacrificing quality.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Scale Challenge</h2>
          <p className="text-gray-600 mb-6">Building topical authority requires comprehensive coverage—potentially hundreds of pieces per topic cluster. Human-only operations cannot scale to meet this demand while maintaining quality.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Human-AI Collaboration Model</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">AI Handles</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Research synthesis and data gathering</li>
            <li>First draft generation from outlines</li>
            <li>Content variation and repurposing</li>
            <li>SEO optimization and schema generation</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Humans Handle</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Strategic direction and topic selection</li>
            <li>Expert review and fact-checking</li>
            <li>Brand voice and quality control</li>
            <li>Original insights and thought leadership</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Workflow Design</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li>Human strategist defines topic and angle</li>
            <li>AI researches and creates detailed outline</li>
            <li>AI generates first draft from outline</li>
            <li>Human editor refines, adds expertise</li>
            <li>AI optimizes for SEO and adds schema</li>
            <li>Human approves and publishes</li>
          </ol>
        </div>
      </article>
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between">
          <Link href="/authority-hub/technical-framework-excellence" className="text-[#085DA0] flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Technical Framework</Link>
          <Link href="/authority-hub/marketing-automation-intelligence" className="text-[#085DA0] flex items-center gap-2">Next: Marketing Automation <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </main>
  );
}
