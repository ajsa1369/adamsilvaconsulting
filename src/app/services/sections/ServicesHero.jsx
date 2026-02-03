import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-[#0a1628] via-[#1a365d] to-[#0a1628] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
            Agentic Commerce Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Protocol-Native<br />
            <span className="text-[#60a5fa]">Architecture</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            End-to-end implementation of UCP, ACP, and AP2 on SPA + SSR + Heavy Schema stacks. From readiness audit to full certification.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Schedule Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}