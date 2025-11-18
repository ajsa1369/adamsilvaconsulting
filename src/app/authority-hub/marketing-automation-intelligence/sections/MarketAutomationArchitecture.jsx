import { Check, CircleCheckBig, Database, ListChecks } from "lucide-react";

const ArchitectureCard = ({
  number,
  title,
  description,
  coreComponents,
  outcomes,
}) => {
  return (
    <div className="bg-white border  border-gray-200 rounded-xl shadow-lg px-8 py-6 w-full max-w-7xl mx-auto">

      {/* === 3 COLUMN EXACT LAYOUT === */}
      <div className="grid grid-cols-12 gap-10 items-start ">

        {/* LEFT COLUMN */}
        <div className="col-span-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
              {number}
            </div>
            <h3 className="text-xl font-bold text-gray-800 leading-none">
              {title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* MIDDLE COLUMN – CORE COMPONENTS */}
        <div className="col-span-4">
          <h4 className="font-semibold text-gray-700 text-sm mb-2">
            Core Components:
          </h4>
          <ul className="space-y-2">
            {coreComponents.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-700 text-sm"
              >
                <Database className="w-3 h-3 text-blue-600 mt-[2px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN – BUSINESS OUTCOMES */}
        <div className="col-span-4">
          <h4 className="font-semibold text-gray-700 text-sm mb-2">
            Business Outcomes:
          </h4>
          <ul className="space-y-2">
            {outcomes.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-700 text-sm"
              >
                <CircleCheckBig className="w-3 h-3 text-green-500 mt-[2px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default function MarketAutomationArchitecture() {
  return (
    <section className="w-full py-12 bg-gray-50 flex flex-col items-center px-4">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
        Intelligent Automation Architecture
      </h2>

      <p className="text-gray-600 text-center max-w-2xl text-xl mb-10">
        Four-layer architecture that transforms data into intelligent actions across all marketing operations
      </p>

      <div className="flex flex-col gap-6 w-full">

        {/* ================== LAYER 1 ================== */}
        <ArchitectureCard
          number="1"
          title="Data Intelligence Layer"
          description="Foundation of unified customer data, behavioral tracking, and predictive modeling for intelligent decision-making"
          coreComponents={[
            "Customer Data Platform (CDP)",
            "Behavioral tracking systems",
            "Predictive modeling engines",
            "Data quality management",
          ]}
          outcomes={[
            "360-degree customer view",
            "Predictive insights",
            "Data-driven decisions",
            "Quality assurance",
          ]}
        />

        {/* ================== LAYER 2 ================== */}
        <ArchitectureCard
          number="2"
          title="Decision Intelligence Layer"
          description="AI-powered decision engines that determine optimal actions based on customer behavior, preferences, and business objectives"
          coreComponents={[
            "Machine learning algorithms",
            "Business rules engines",
            "Optimization frameworks",
            "Decision trees",
          ]}
          outcomes={[
            "Automated decision making",
            "Optimized customer experiences",
            "Reduced manual overhead",
            "Consistent strategy execution",
          ]}
        />

        {/* ================== LAYER 3 ================== */}
        <ArchitectureCard
          number="3"
          title="Execution Intelligence Layer"
          description="Automated execution systems that deliver personalized experiences across all customer touchpoints in real-time"
          coreComponents={[
            "Campaign automation tools",
            "Personalization engines",
            "Multi-channel orchestration",
            "Real-time triggers",
          ]}
          outcomes={[
            "Personalized experiences",
            "Multi-channel consistency",
            "Real-time responsiveness",
            "Scalable execution",
          ]}
        />

        {/* ================== LAYER 4 ================== */}
        <ArchitectureCard
          number="4"
          title="Performance Intelligence Layer"
          description="Continuous monitoring and optimization systems that learn from every interaction to improve future performance"
          coreComponents={[
            "Performance analytics",
            "Attribution modeling",
            "Optimization algorithms",
            "Learning systems",
          ]}
          outcomes={[
            "Continuous improvement",
            "Attribution accuracy",
            "Performance optimization",
            "Strategic insights",
          ]}
        />

      </div>
    </section>
  );
}
