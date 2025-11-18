
import React from "react";

const stats = [
  {
    value: "340%",
    title: "Conversion Rate Improvement",
    desc: "Average increase in campaign conversion rates through AI optimization",
  },
  {
    value: "55%",
    title: "Customer Acquisition Cost Reduction",
    desc: "Decrease in cost per acquisition through intelligent targeting",
  },
  {
    value: "275%",
    title: "Campaign Efficiency Gain",
    desc: "Improvement in campaign ROI through automated optimization",
  },
  {
    value: "10,000+",
    title: "Personalization Scale",
    desc: "Individual customer experiences delivered simultaneously",
  },
  {
    value: "1000x",
    title: "Decision Speed Acceleration",
    desc: "Faster marketing decisions through AI automation",
  },
  {
    value: "70%",
    title: "Operational Cost Savings",
    desc: "Reduction in manual marketing operations overhead",
  },
];

export default function MarketAutomationImpact() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
        Quantified Business Impact
      </h2>

      <p className="text-gray-600 text-center max-w-2xl text-xl mb-12">
        Measurable outcomes achieved through intelligent marketing automation
        implementation
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-1">
              {item.value}
            </h3>

            <p className="text-gray-900 font-medium text-lg mb-1">
              {item.title}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
