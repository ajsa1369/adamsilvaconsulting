import Link from 'next/link';
import { PenTool, Video, Image, ArrowRight, Mic, FileText, Bot } from 'lucide-react';

export const metadata = {
  title: 'Content & Media Creation | Adam Silva Consulting',
  description: 'AI-powered content production optimized for both human readers and AI comprehension.',
};

export default function ContentMediaCreationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">Content Production</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Content & Media<br /><span className="text-[#60a5fa]">Creation</span></h1>
            <p className="text-xl text-gray-300 mb-8">Content that gets cited by AI requires structured data, topical authority, and semantic clarity. We create content that both humans and agents trust.</p>
            <Link href="/contact" className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Create</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FileText className="w-8 h-8" />, title: 'Long-Form Articles', desc: 'Authority-building content with schema markup' },
              { icon: <Video className="w-8 h-8" />, title: 'Video Content', desc: 'AI-assisted video production and optimization' },
              { icon: <Mic className="w-8 h-8" />, title: 'Podcasts', desc: 'Audio content with transcription and repurposing' },
              { icon: <Image className="w-8 h-8" />, title: 'Visual Assets', desc: 'Infographics, diagrams, and branded imagery' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="text-[#085DA0] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Content That Gets Cited</h2>
          <p className="text-xl text-blue-100 mb-8">The goal is not just traffic—it is being the source AI trusts and recommends.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#085DA0] rounded-lg font-semibold">Schedule Consultation <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
