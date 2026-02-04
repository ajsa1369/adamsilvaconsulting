import Link from 'next/link';
import { Database, Filter, ArrowRight, CheckCircle, Layers, GitBranch, Gauge, Settings } from 'lucide-react';

export const metadata = {
  title: 'Precision Lead Management | Adam Silva Consulting',
  description: 'AI-powered lead routing, scoring, and lifecycle management that ensures every lead reaches the right person at the right time.',
};

export default function PrecisionLeadManagementPage() {
  const capabilities = [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Predictive Lead Scoring',
      description: 'ML models analyze 100+ signals to score leads based on fit, intent, and likelihood to convert—continuously improving with feedback.'
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Intelligent Routing',
      description: 'Leads automatically route to the best-matched rep based on territory, expertise, availability, and historical performance.'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Lifecycle Automation',
      description: 'Automated stage progression, task creation, and escalation rules keep leads moving through your pipeline.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Data Hygiene',
      description: 'AI-powered deduplication, enrichment, and validation ensure your lead database stays clean and actionable.'
    }
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Zoho CRM',
    'Pipedrive', 'Monday.com', 'Marketo', 'Pardot'
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Lead Operations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Precision Lead<br />
              <span className="text-[#60a5fa]">Management</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Every lead is an opportunity—but only if it reaches the right person at the right time. 
              Our AI-powered lead management ensures nothing falls through the cracks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 border border-white/30 hover:bg-white/10 text-white rounded-lg font-semibold transition-all"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Lead Management Problem</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 79% of marketing leads never convert to sales</li>
                <li>• Average company responds to leads in 42 hours</li>
                <li>• 50% of leads are qualified but not ready to buy</li>
                <li>• Sales reps spend 65% of time on non-selling activities</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The AI-Powered Solution</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Instant lead scoring and prioritization</li>
                <li>• Sub-5-minute response through automation</li>
                <li>• Intelligent nurturing for not-ready leads</li>
                <li>• Automated admin tasks free up selling time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Lead Management Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="text-[#085DA0] mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Works With Your Stack
          </h2>
          <p className="text-xl text-blue-100 text-center mb-12 max-w-2xl mx-auto">
            Native integrations with leading CRM and marketing automation platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg font-medium">
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Results Our Clients See
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-[#085DA0] mb-2">40%</div>
              <div className="text-gray-600">Increase in conversion rate</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-[#085DA0] mb-2">5x</div>
              <div className="text-gray-600">Faster lead response time</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-[#085DA0] mb-2">60%</div>
              <div className="text-gray-600">Less time on admin tasks</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-[#085DA0] mb-2">25%</div>
              <div className="text-gray-600">Higher win rates</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stop Losing Leads to Poor Management
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how precision lead management can transform your sales pipeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all text-lg"
          >
            Get a Pipeline Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
