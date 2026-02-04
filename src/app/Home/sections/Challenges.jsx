import { AlertTriangle, XCircle } from 'lucide-react';

export default function Challenges() {
  const antiPatterns = [
    {
      platform: 'Shopify',
      issues: ['No root-level /.well-known access', 'Partial UCP (Plus tier only)', 'No TEE/DID support'],
    },
    {
      platform: 'WordPress',
      issues: ['Plugin-dependent (fragile)', 'REST only transport', 'Heavy hydration tax'],
    },
    {
      platform: 'Wix / Squarespace',
      issues: ['Zero protocol support', 'No endpoint control', 'Obscured origins block VCs'],
    },
  ];

  return (
    <section className="py-20 bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            Legacy Platforms Fail
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Traditional Platforms Can't Compete
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Shared hosting, multi-tenant platforms, and app proxies cannot give you the root-level control that UCP, ACP, and AP2 require.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {antiPatterns.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" />
                {item.platform}
              </h3>
              <ul className="space-y-3">
                {item.issues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-red-400 mt-1">✕</span>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#085DA0]/20 to-[#0f6cbb]/20 rounded-xl p-8 border border-[#085DA0]/30">
            <p className="text-lg text-gray-300 mb-2">
              <strong className="text-white">The Solution:</strong> Bespoke SPA + SSR on your own infrastructure
            </p>
            <p className="text-sm text-gray-400">
              Direct control over /.well-known routes, custom API design, zero constraints on protocol implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}