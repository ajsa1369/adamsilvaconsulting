import { Users, Bot, ArrowRight } from 'lucide-react';

export default function Paradigm() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#085DA0]/10 text-[#085DA0] rounded-full text-sm font-medium mb-4">
            The Paradigm Shift
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            From Human-Centric to Agent-Centric
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Old Model */}
          <div className="bg-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-gray-500" />
              <h3 className="text-xl font-semibold text-gray-700">Legacy SEO</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• Optimized for human browsing</li>
              <li>• Click-through rates & sessions</li>
              <li>• Keyword stuffing & meta tags</li>
              <li>• JS-heavy interactive experiences</li>
            </ul>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-[#085DA0] rounded-full flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* New Model */}
          <div className="bg-[#085DA0] rounded-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-[#60a5fa]" />
              <h3 className="text-xl font-semibold">Agentic AEO/GEO</h3>
            </div>
            <ul className="space-y-3 text-gray-200">
              <li>• Optimized for machine execution</li>
              <li>• Agent citations & mandate conversions</li>
              <li>• Heavy schema & protocol manifests</li>
              <li>• Token-efficient SSR rendering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}