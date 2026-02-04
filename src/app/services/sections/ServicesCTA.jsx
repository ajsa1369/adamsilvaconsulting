import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-[#0a1628] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Become Protocol-Native?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The protocols are live. Google UCP and OpenAI ACP are processing transactions now. Don't let legacy architecture render you invisible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Schedule Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/research/agentic-commerce-revolution"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Read the Research
          </Link>
        </div>
      </div>
    </section>
  );
}