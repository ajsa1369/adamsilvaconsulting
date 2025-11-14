import React from 'react';
import { Database, Eye } from 'lucide-react';

const PrivacyPolicyContent = () => {
  const informationCollected = [
    {
      title: 'Personal Information',
      points: [
        'Name (first and last)',
        'Email address',
        'Phone number (optional)',
        'Company name (optional)',
        'Postal address (for newsletter compliance)',
        'Project details and service interests',
      ],
      description:
        'When you contact us or subscribe to our newsletter, we may collect:',
    },
    {
      title: 'Technical Information',
      points: [
        'IP address (for security and compliance)',
        'Browser type and version',
        'Device information',
        'Usage patterns and website analytics',
      ],
      description: 'We automatically collect certain technical information:',
    },
  ];

  const informationUsage = [
    {
      title: 'Service Delivery',
      points: [
        'Respond to your inquiries',
        'Provide consultation services',
        'Send project updates and communications',
        'Customize our services to your needs',
      ],
    },
    {
      title: 'Marketing Communications',
      points: [
        'Send newsletter content (with consent)',
        'Share AI marketing insights and trends',
        'Inform about new services or offerings',
        'Provide educational content and resources',
      ],
    },
  ];

  const IconHeader = ({ Icon, title }) => (
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-8 h-8 text-blue-600" />
      <h3 className="text-3xl font-bold text-neutral-800">{title}</h3>
    </div>
  );

  const InfoBlock = ({ title, description, points }) => (
    <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-md h-full">
      <h4 className="text-xl font-bold text-neutral-800 mb-3">{title}</h4>
      {description && (
        <p className="text-base text-neutral-600 mb-4">{description}</p>
      )}
      <ul className="list-none space-y-2 text-neutral-700">
        {points.map((point, index) => (
          <li key={index} className="flex items-start text-base">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl  mx-auto bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* --- Information We Collect --- */}
        <div className="mb-16">
          <IconHeader Icon={Database} title="Information We Collect" />

          <div className="grid grid-cols-1  gap-8">
            {informationCollected.map((item, index) => (
              <InfoBlock
                key={index}
                title={item.title}
                description={item.description}
                points={item.points}
              />
            ))}
          </div>
        </div>

        {/* --- How We Use Your Information --- */}
        <div className="mb-16">
          <IconHeader Icon={Eye} title="How We Use Your Information" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {informationUsage.map((item, index) => (
              <InfoBlock key={index} title={item.title} points={item.points} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
