import Link from 'next/link';

export const metadata = {
  title: 'Sitemap | Adam Silva Consulting',
  description: 'Complete site navigation for Adam Silva Consulting - AI-powered marketing and agentic commerce.',
};

export default function SitemapPage() {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Services', href: '/services' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Lead Generation', href: '/services/ai-lead-generation' },
        { name: 'Voice Agent Verification', href: '/services/voice-agent-verification' },
        { name: 'Omnichannel Nurturing', href: '/services/omnichannel-nurturing' },
        { name: 'Precision Lead Management', href: '/services/precision-lead-management' },
        { name: 'SEO & PPC Superpowers', href: '/services/seo-ppc-superpowers' },
        { name: 'Content & Media Creation', href: '/services/content-media-creation' },
        { name: 'Intelligent Campaigns', href: '/services/intelligent-campaigns' },
        { name: 'Intent Graph Targeting', href: '/services/intent-graph-targeting' },
        { name: 'AI Websites & Landing Pages', href: '/services/ai-websites-landing-pages' },
        { name: 'Real-Time Analytics', href: '/services/real-time-analytics' },
        { name: 'Security & Compliance', href: '/services/security-compliance' },
        { name: 'Competitor Monitoring', href: '/services/competitor-monitoring' },
        { name: 'Omnichannel Communication', href: '/services/omnichannel-communication' },
        { name: 'Outreach & Partnerships', href: '/services/outreach-partnerships' },
      ],
    },
    {
      title: 'Insights',
      links: [
        { name: 'All Insights', href: '/insights' },
        { name: 'Marketing Pain Points 2025', href: '/insights/marketing-pain-points-2025-resource-crunch-to-ai-solution' },
        { name: 'AI Content Operations', href: '/insights/ai-content-operations-scaling-quality-with-automation' },
        { name: 'AEO vs GEO', href: '/insights/aeo-vs-geo-understanding-the-new-search-landscape' },
        { name: 'Integrated Service Ecosystem', href: '/insights/the-integrated-service-ecosystem-strategic-flywheel-analysis' },
        { name: 'Zero-Click Searches', href: '/insights/zero-click-searches-the-new-reality-of-information-discovery' },
        { name: 'Building Topical Authority', href: '/insights/building-topical-authority' },
        { name: 'AI Authority Imperative', href: '/insights/the-ai-authority-imperative-gartner-50-percent-traffic-decline-prediction' },
        { name: 'E-E-A-T in the Age of AI', href: '/insights/e-e-a-t-in-the-age-of-generative-ai-building-unshakeable-authority' },
      ],
    },
    {
      title: 'Authority Hub',
      links: [
        { name: 'Authority Hub Home', href: '/authority-hub' },
        { name: 'All Guides', href: '/authority-hub/guides' },
        { name: 'AI Engine Optimization Mastery', href: '/authority-hub/ai-engine-optimization-mastery' },
        { name: 'Topical Authority Architecture', href: '/authority-hub/topical-authority-architecture' },
        { name: 'Technical Framework Excellence', href: '/authority-hub/technical-framework-excellence' },
        { name: 'AI-Powered Content Operations', href: '/authority-hub/ai-powered-content-operations' },
        { name: 'Marketing Automation Intelligence', href: '/authority-hub/marketing-automation-intelligence' },
        { name: 'CSR & Trust Engineering', href: '/authority-hub/csr-and-trust-engineering' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research', href: '/research' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl text-gray-300">Complete navigation for Adam Silva Consulting</p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={link.href}
                        className="text-[#085DA0] hover:text-[#0f6cbb] hover:underline transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
