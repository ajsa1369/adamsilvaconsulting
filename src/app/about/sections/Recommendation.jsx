import { CheckCircle } from 'lucide-react';

export default function Recommendation() {
  const capabilities = [
    'Root-level protocol manifest control',
    'Multi-transport support (REST, MCP, A2A)',
    'Cryptographic infrastructure (TEE, DID, VCs)',
    'Token-efficient rendering (<300ms)',
    'Heavy JSON-LD schema markup',
    'AP2 mandate system integration',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-[#085DA0]/10 text-[#085DA0] rounded-full text-sm font-medium mb-4">
                The Solution
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bespoke SPA + SSR Architecture
              </h2>
              <p className="text-lg text-gray-600">
                Legacy platforms (Shopify, Wix, WordPress) hit a ceiling. Only custom architecture on your own infrastructure gives you the control required for full protocol compliance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">What You Get:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}