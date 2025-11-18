import React from "react";
import { CheckCircle2 } from "lucide-react";

const AIContentOperations = () => {
  const challenges = [
    "Traditional content production cannot scale to meet AI-era demands",
    "Brand voice consistency deteriorates with increased volume",
    "Quality control becomes impossible at enterprise scale",
    "Resource constraints limit topical authority development",
  ];

  const solutions = [
    "AI-powered content operations with human creative oversight",
    "Automated brand voice training and consistency enforcement",
    "Scalable quality assurance with multi-layer validation",
    "Strategic content architecture for topical authority building",
  ];

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        The Content Operations Imperative
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-3xl mb-12 leading-relaxed">
        In the AI-driven business landscape, content is no longer just 
        marketing—it's the foundation of digital authority and competitive 
        differentiation.
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
          <h3 className="font-bold text-lg mb-5">The Challenge</h3>

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
          <h3 className="font-bold text-lg mb-5">The Solution</h3>

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

export default AIContentOperations;
