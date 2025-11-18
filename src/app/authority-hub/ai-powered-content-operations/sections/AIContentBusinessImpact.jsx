import React from "react";

export default function AIContentBusinessImpact() {
  const metrics = [
    {
      value: "500%",
      title: "Content Volume Increase",
      desc: "Average increase in content production capacity",
    },
    {
      value: "94%",
      title: "Quality Consistency Score",
      desc: "Brand voice consistency across all AI-generated content",
    },
    {
      value: "60%",
      title: "Production Cost Reduction",
      desc: "Decrease in per-piece content production costs",
    },
    {
      value: "75%",
      title: "Time-to-Publish Improvement",
      desc: "Reduction in content creation to publication timeline",
    },
    {
      value: "45%",
      title: "Engagement Rate Increase",
      desc: "Improvement in content engagement metrics",
    },
    {
      value: "80%",
      title: "SEO Performance Boost",
      desc: "Increase in organic search visibility and rankings",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 bg-white font-inter">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-neutral-800 text-center">
        Quantified Business Impact
      </h2>
      <p className="text-neutral-600 text-center mt-3 max-w-3xl text-lg">
        Measurable outcomes achieved through strategic AI content operations
        implementation
      </p>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 max-w-6xl w-full">
        {metrics.map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-white to-purple-100 rounded-xl border border-purple-100 px-10 py-3 shadow-sm hover:shadow-md transition text-center"
          >
            <p className="text-3xl font-semibold text-purple-700">{item.value}</p>

            <p className="text-lg font-semibold text-neutral-800 mt-3">
              {item.title}
            </p>

            <p className="text-neutral-500 text-xs mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
