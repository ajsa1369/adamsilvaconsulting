import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, BarChart3, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Case Studies | Adam Silva Consulting',
  description: 'Real results from implementing AI-powered marketing and agentic commerce strategies.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      industry: 'B2B SaaS',
      title: 'Enterprise Software Company Achieves 340% ROI on Agentic Commerce Implementation',
      challenge: 'Declining organic traffic and low AI citation rates despite strong traditional SEO',
      solution: 'Full AEO/GEO implementation with SSR architecture and comprehensive schema markup',
      results: [
        '340% ROI within 12 months',
        '156% increase in AI citations',
        '89% improvement in lead quality',
      ],
      metrics: { roi: '340%', citations: '+156%', leads: '+89%' },
    },
    {
      industry: 'Professional Services',
      title: 'Consulting Firm Builds Topical Authority in 6 Months',
      challenge: 'Needed to establish expertise in emerging AI consulting space against established competitors',
      solution: 'AI-powered content operations producing 150+ pieces across 5 topic clusters',
      results: [
        'Page 1 rankings for 47 target keywords',
        '12x increase in organic traffic',
        'Featured in 3 industry publications',
      ],
      metrics: { keywords: '47', traffic: '12x', publications: '3' },
    },
    {
      industry: 'E-Commerce',
      title: 'Retailer Prepares for Protocol-Native Commerce',
      challenge: 'Zero presence in AI shopping recommendations despite strong traditional e-commerce',
      solution: 'UCP and ACP protocol implementation with heavy product schema markup',
      results: [
        '23% of sales now AI-assisted',
        '4.2x improvement in product data quality scores',
        'First-mover advantage in agent commerce',
      ],
      metrics: { aiSales: '23%', dataQuality: '4.2x', position: 'First Mover' },
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Proven Results
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case<br />
              <span className="text-[#60a5fa]">Studies</span>
            </h1>
            <p className="text-xl text-gray-300">
              Real results from implementing AI-powered marketing and agentic commerce strategies. 
              See how our frameworks translate into measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-[#085DA0]/10 text-[#085DA0] text-sm font-semibold rounded-full mb-4">
                    {study.industry}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 pt-6 border-t border-gray-100">
                    {Object.entries(study.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-[#085DA0]">{value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how these frameworks can deliver results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#085DA0] rounded-lg font-semibold transition-all hover:bg-blue-50 text-lg"
          >
            Schedule Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
