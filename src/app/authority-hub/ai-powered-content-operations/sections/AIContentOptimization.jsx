import React from "react";
import { FileText } from "lucide-react";

export default function AIContentOptimization() {
  const items = [
    {
      title: "Blog Articles & Thought Leadership",
      desc: "Topical authority building with AI-enhanced depth and expertise demonstration",
    },
    {
      title: "Social Media Content",
      desc: "Platform-specific optimization with AI-driven engagement prediction",
    },
    {
      title: "Technical Documentation",
      desc: "Accuracy verification with AI-powered fact-checking and consistency",
    },
    {
      title: "Marketing Collateral",
      desc: "Conversion optimization through AI-driven persuasion techniques",
    },
    {
      title: "Video Scripts & Audio Content",
      desc: "Multi-modal content creation with voice and tone adaptation",
    },
    {
      title: "Email Campaigns",
      desc: "Personalization at scale with AI-driven behavioral targeting",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 bg-white font-inter">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-neutral-800 text-center">
        Content Type Optimization Matrix
      </h2>
      <p className="text-neutral-600 text-center mt-3 max-w-3xl text-lg">
        Specialized AI optimization approaches for different content types and distribution
        channels
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl w-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex items-start gap-4"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-700" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-800">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
