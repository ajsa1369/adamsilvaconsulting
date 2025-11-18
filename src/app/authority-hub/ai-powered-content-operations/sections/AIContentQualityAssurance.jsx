import React from "react";
import { CheckCircle } from "lucide-react";

export default function AIContentQualityAssurance() {
  const sections = [
    {
      title: "Automated Quality Gates",
      desc: "AI-powered initial quality assessment covering grammar, style, brand voice consistency, and factual accuracy",
      items: [
        "Grammar and syntax validation",
        "Brand voice alignment scoring",
        "Factual accuracy verification",
        "Plagiarism detection",
      ],
    },
    {
      title: "Human Editorial Review",
      desc: "Strategic human oversight for creative direction, strategic alignment, and nuanced quality assessment",
      items: [
        "Strategic messaging alignment",
        "Creative quality assessment",
        "Audience resonance evaluation",
        "Brand positioning validation",
      ],
    },
    {
      title: "Performance Validation",
      desc: "Post-publication performance monitoring with AI-driven optimization recommendations",
      items: [
        "Engagement metrics analysis",
        "SEO performance tracking",
        "Conversion rate monitoring",
        "Audience feedback analysis",
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 font-inter bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-neutral-800 text-center">
        Multi-Layer Quality Assurance Framework
      </h2>
      <p className="text-neutral-600 text-center mt-3 max-w-3xl text-lg leading-relaxed">
        Comprehensive quality control system ensuring consistently high content standards at scale
      </p>

      <div className="flex flex-col gap-10 mt-16 max-w-6xl w-full">
        {sections.map((section, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-300 rounded-xl p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* LEFT SIDE: Title + Description */}
              <div>
                <h3 className="text-lg font-bold text-neutral-800">
                  {section.title}
                </h3>
                <p className="text-neutral-600 text-md mt-2 leading-relaxed">
                  {section.desc}
                </p>
              </div>

              {/* RIGHT SIDE: 4 items in exact 2×2 layout */}
              <div className="flex flex-col gap-4">
                {section.items.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {section.items.slice(2).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
