import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Become Protocol-Native?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Schedule a consultation to assess your current architecture and map your path to UCP, ACP, and AP2 compliance.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-8 py-4 rounded-lg font-semibold transition-all"
        >
          Schedule Assessment
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}