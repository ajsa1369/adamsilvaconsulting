import React from 'react';
import { FileText } from 'lucide-react';

const GDPRRights = () => {
  const rights = [
    'Right to access your data',
    'Right to correct inaccurate information',
    'Right to delete your data',
    'Right to data portability',
    'Right to object to processing',
    'Right to withdraw consent',
  ];

  const legalBasis = [
    'Consent (for newsletter subscriptions)',
    'Legitimate interest (for business inquiries)',
    'Contract performance (for client services)',
    'Legal compliance (for record keeping)',
  ];

  return (
    <section className="py-5 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-blue-600" />
          <h3 className="text-3xl font-bold text-neutral-800">
            GDPR Compliance & Your Rights
          </h3>
        </div>

        <div className="bg-blue-50 p-6 sm:p-8 rounded-xl border border-blue-200 shadow-lg">
          <p className="text-lg text-neutral-700 mb-8">
            As a consulting firm serving global clients, we are committed to **GDPR compliance** and respect your data rights:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
            
            {/* Your Rights */}
            <div>
              <h4 className="font-bold text-neutral-800 mb-3 text-lg  pb-2">
                Your Rights Include:
              </h4>
              <ul className="list-none space-y-2 text-neutral-700">
                {rights.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Basis */}
            <div>
              <h4 className="font-bold text-neutral-800 mb-3 text-lg  pb-2">
                Legal Basis for Processing:
              </h4>
              <ul className="list-none space-y-2 text-neutral-700">
                {legalBasis.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDPRRights;