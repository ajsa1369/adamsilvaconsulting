import React from "react";
import { CheckCircle, CircleDot, Dot, GitBranch } from "lucide-react";

const phases = [
  {
    number: "1",
    title: "Current State Analysis & Vision Setting",
    category: "Assessment & Strategy",
    duration: "3–4 weeks",
    description:
      "Comprehensive evaluation of existing marketing automation capabilities and development of AI-enhanced strategic roadmap.",
    keyActivities: [
      "Marketing automation audit",
      "Data infrastructure assessment",
      "AI readiness evaluation",
      "Strategic roadmap development",
    ],
    deliverables: [
      "Current state assessment",
      "Gap analysis report",
      "AI enhancement strategy",
      "Implementation roadmap",
    ],
  },
  {
    number: "2",
    title: "Data Infrastructure & AI Model Development",
    category: "Foundation Building",
    duration: "6–8 weeks",
    description:
      "Establishment of robust data foundation and development of custom AI models for predictive analytics and automation.",
    keyActivities: [
      "Data platform integration",
      "AI model training",
      "Automation workflow design",
      "Testing frameworks",
    ],
    deliverables: [
      "Unified data platform",
      "Trained AI models",
      "Automation blueprints",
      "Quality assurance protocols",
    ],
  },
  {
    number: "3",
    title: "Controlled Deployment & Optimization",
    category: "Pilot Implementation",
    duration: "4–6 weeks",
    description:
      "Careful rollout of AI-enhanced automation systems with continuous monitoring and performance optimization.",
    keyActivities: [
      "Pilot campaign execution",
      "Performance monitoring",
      "Model refinement",
      "User training",
    ],
    deliverables: [
      "Pilot campaign results",
      "Performance analytics",
      "Optimized models",
      "Training materials",
    ],
  },
  {
    number: "4",
    title: "Full Deployment & Continuous Learning",
    category: "Scale & Evolution",
    duration: "Ongoing",
    description:
      "Complete implementation of marketing automation intelligence with ongoing optimization and strategic evolution.",
    keyActivities: [
      "Full-scale deployment",
      "Continuous optimization",
      "Strategic evolution",
      "Advanced feature integration",
    ],
    deliverables: [
      "Complete automation system",
      "Performance dashboards",
      "Optimization strategy",
      "Advanced capabilities",
    ],
  },
];

const PhaseCard = ({ data }) => {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 w-full">
      {/* Top Row */}
      <div className="flex items-center gap-4 mb-3">
        {/* Number Circle */}
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold">
          {data.number}
        </div>

        <div>
          <p className="text-sm text-blue-700 font-medium">{data.category}</p>
          <h2 className="text-lg font-bold text-gray-900">
            {data.title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {data.description}
      </p>

      <hr className="my-4" />

      {/* Duration */}
      <div className="flex justify-between items-center mb-3">
        <p className="font-semibold text-gray-800">Duration:</p>
        <p className="text-blue-700 text-sm">{data.duration}</p>
      </div>

      {/* Key Activities */}
      <div className="mb-4">
        <p className="font-semibold text-sm text-gray-800 mb-1">Key Activities:</p>

        <ul className="space-y-1 mt-2">
          {data.keyActivities.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <GitBranch className="text-blue-600 w-3 h-3 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Deliverables */}
      <div>
        <p className="font-semibold text-sm text-gray-800 mb-1">Deliverables:</p>

        <ul className="space-y-1 mt-2">
          {data.deliverables.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <CheckCircle className="text-green-500 w-3 h-3 " />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MarketAutomationMethodology = () => {
  return (
    <section className="w-full py-16 bg-gray-50 flex flex-col items-center px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
        Strategic Implementation Methodology
      </h1>

      <p className="text-gray-600 text-center mt-2 max-w-3xl mb-12 text-xl">
        Phased approach to implementing marketing automation intelligence with
        measurable progress and risk mitigation
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {phases.map((item, index) => (
          <PhaseCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default MarketAutomationMethodology;
