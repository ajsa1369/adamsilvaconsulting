import React from 'react';
import { Database, Shield, Mail, Phone, Eye } from 'lucide-react';

const PrivacyPolicyFooters = () => {
  const securityFeatures = [
    {
      Icon: Shield,
      title: 'Encryption',
      description:
        'All data is encrypted in transit and at rest using industry-standard protocols.',
    },
    {
      Icon: Database,
      title: 'Secure Storage',
      description:
        'Data is stored on secure, compliant cloud infrastructure with regular backups.',
    },
    {
      Icon: Eye,
      title: 'Access Control',
      description:
        'Strict access controls ensure only authorized personnel can access your data.',
    },
  ];

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* --- Data Security & Storage --- */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-bold text-neutral-800">
              Data Security & Storage
            </h3>
          </div>
          <p className="text-lg text-neutral-700 mb-8 max-w-4xl">
            We implement industry-standard security measures to protect your personal information:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-neutral-200 shadow-md text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center p-3 rounded-full bg-blue-100 mb-4">
                  <feature.Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-base text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Contact Us About Privacy --- */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Mail className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-bold text-neutral-800">
              Contact Us About Privacy
            </h3>
          </div>

          <div className="bg-blue-50 p-6 sm:p-8 rounded-xl border border-blue-200 shadow-lg">
            <p className="text-lg text-neutral-700 mb-6">
              If you have questions about this privacy policy or want to exercise your data rights, please contact us:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2 pb-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <h4 className="text-sm font-semibold text-neutral-700">Email</h4>
                  <p className="text-lg text-neutral-800 font-medium">info@adamsilvaconsulting.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <h4 className="text-sm font-semibold text-neutral-700">Phone</h4>
                  <p className="text-lg text-neutral-800 font-medium">954-818-9248</p>
                </div>
              </div>
            </div>

            {/* Response Time Commitment */}
            <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-inner">
              <h5 className="text-md font-bold text-neutral-800 mb-1">Response Time Commitment:</h5>
              <p className="text-base text-neutral-600">
                We will respond to all privacy-related inquiries within 72 hours and resolve data requests within 30 days as required by GDPR.
              </p>
            </div>
          </div>
        </div>

        {/* --- Policy Updates --- */}
        <div className='p-6 rounded-md bg-neutral-100 border border-neutral-50"'>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-neutral-800">
              Policy Updates
            </h3>
          </div>
          <div>
            <p className="text-lg text-neutral-700">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "Last modified" date. For significant changes, we will notify you via email if you have subscribed to our communications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicyFooters;