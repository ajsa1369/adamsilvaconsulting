import React from "react";
import { CheckCircle2 } from "lucide-react";

const MarketAutomationOperations = () => {
  const challenges = [
    "Static rules that don't adapt to changing customer behavior",
    "Limited personalization based on basic demographic data",
    "Reactive approach to campaign optimization",
    "Siloed channel management with inconsistent experiences",
  ];

  const solutions = [
    "AI-driven systems that learn and adapt continuously",
    "Hyper-personalization based on behavioral insights",
    "Predictive optimization that prevents problems",
    "Unified omnichannel orchestration with coherent experiences",
  ];

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        The Intelligence Imperative
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-3xl mb-12 leading-relaxed">
        Modern marketing demands go beyond automation—intelligent systems that learn, predict, and optimize continuously are now essential for competitive advantage.
      </p>

      {/* Card */}
      <div
        className="
          bg-white shadow-md rounded-2xl p-10 
          w-full max-w-4xl border border-gray-200
          flex flex-col md:flex-row gap-12
        "
      >
        {/* Left Column – The Challenge */}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-5">Traditional Automation Limitations</h3>

          <ul className="space-y-6">
            {challenges.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                {/* RED SOLID DOT */}
                <span className="w-3 h-3 rounded-full bg-red-500 mt-[6px]" />
                <span className="text-gray-800 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column – The Solution */}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-5">Intelligent Automation Evolution</h3>

          <ul className="space-y-6">
            {solutions.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                {/* GREEN OUTLINE CHECK CIRCLE — EXACT MATCH */}
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-[2px]" />
                <span className="text-gray-800 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketAutomationOperations;
