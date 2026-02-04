import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'CSR & Trust Engineering | Authority Hub',
  description: 'Building and maintaining trust signals for both humans and AI systems.',
};

export default function TrustEngineeringPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/authority-hub" className="text-blue-300 hover:text-white flex items-center gap-2 mb-6"><ArrowLeft className="w-4 h-4" /> Authority Hub</Link>
          <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-4">Trust Guide</span>
          <h1 className="text-4xl font-bold mb-4">CSR & Trust Engineering</h1>
          <p className="text-xl text-gray-300">Building trust signals that resonate with humans and AI alike.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Trust in the AI Era</h2>
          <p className="text-gray-600 mb-6">AI systems evaluate trustworthiness before citing sources. Building genuine trust signals benefits both human conversion and AI recommendations.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Trust Signal Categories</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Technical Trust</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>HTTPS and security certificates</li>
            <li>Privacy policy and data handling transparency</li>
            <li>Accessibility compliance</li>
            <li>Performance and reliability</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Content Trust</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Clear authorship and credentials</li>
            <li>Source citations and references</li>
            <li>Accuracy and fact-checking processes</li>
            <li>Regular updates and maintenance</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Social Trust</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Reviews and testimonials</li>
            <li>Industry recognition and awards</li>
            <li>Media coverage and backlinks</li>
            <li>Community engagement</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Corporate Social Responsibility</h2>
          <p className="text-gray-600 mb-4">Genuine CSR initiatives build trust through demonstrated values. Environmental commitments, community involvement, and ethical practices signal reliability to both humans and AI evaluating your brand.</p>
        </div>
      </article>
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between">
          <Link href="/authority-hub/marketing-automation-intelligence" className="text-[#085DA0] flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Marketing Automation</Link>
          <Link href="/authority-hub" className="text-[#085DA0] flex items-center gap-2">Back to Authority Hub <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </main>
  );
}
