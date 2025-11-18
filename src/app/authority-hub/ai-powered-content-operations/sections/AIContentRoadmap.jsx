import React from "react";
import { Check } from "lucide-react";

export default function AIContentRoadmap() {
  const phases = [
    {
      number: 1,
      label: "Foundation",
      title: "Content Audit & Strategy Design",
      desc:
        "Comprehensive analysis of existing content assets, identification of gaps, and development of AI-powered content strategy aligned with business objectives.",
      timeline: "2–4 weeks",
      points: [
        "Content inventory analysis",
        "Gap identification report",
        "AI content strategy blueprint",
        "Implementation roadmap",
      ],
    },
    {
      number: 2,
      label: "Architecture",
      title: "System Design & AI Training",
      desc:
        "Development of content production systems, AI model training for brand voice, and establishment of quality assurance protocols.",
      timeline: "4–6 weeks",
      points: [
        "Content production workflows",
        "AI model customization",
        "Quality control systems",
        "Brand voice algorithms",
      ],
    },
    {
      number: 3,
      label: "Deployment",
      title: "Pilot Implementation & Optimization",
      desc:
        "Controlled rollout of AI content operations with continuous monitoring, adjustment, and performance optimization.",
      timeline: "6–8 weeks",
      points: [
        "Pilot content campaigns",
        "Performance analytics",
        "Optimization reports",
        "Scaling recommendations",
      ],
    },
    {
      number: 4,
      label: "Scale",
      title: "Full Production & Continuous Evolution",
      desc:
        "Complete deployment of AI content operations with ongoing optimization, performance monitoring, and strategic evolution.",
      timeline: "Ongoing",
      points: [
        "Full-scale content production",
        "Performance dashboards",
        "Continuous optimization",
        "Strategic evolution plans",
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 font-inter bg-gray-50">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-neutral-800 text-center">
        Strategic Implementation Roadmap
      </h2>
      <p className="text-neutral-600 text-center mt-3 max-w-3xl text-lg">
        Phased approach to implementing AI-powered content operations with measurable
        milestones and risk mitigation
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 max-w-6xl w-full">
        {phases.map((phase, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
          >
            {/* Top Section */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-lg">
                  {phase.number}
                </div>
              </div>

              <div>
                <p className="text-sm text-purple-700 font-medium">{phase.label}</p>
                <h3 className="text-xl font-bold text-neutral-900">
                  {phase.title}
                </h3>
                <p className="text-neutral-600 mt-2 text-sm">{phase.desc}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 my-5"></div>

            {/* Timeline */}
            <div className="flex justify-between text-sm text-neutral-500">
              <span>Timeline:</span>
              <span className="text-purple-600 font-medium">{phase.timeline}</span>
            </div>

            {/* Key Deliverables */}
            <div className="mt-4">
              <p className="text-sm font-semibold text-neutral-700 mb-2">
                Key Deliverables:
              </p>
              <ul className="space-y-2 text-neutral-700 text-sm">
                {phase.points.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}