import React from "react";
// Importing all necessary Lucide icons including the new choices
import { Settings, Users, CircuitBoard, LineChart } from "lucide-react"; 

export default function AIContentStrategies() {
  const cards = [
    // Card 1: Strategic Content Architecture (Uses Lucide Settings)
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "Strategic Content Architecture",
      desc:
        "Design scalable content frameworks that support exponential growth while maintaining quality and brand consistency",
      points: [
        "Content taxonomy design",
        "Scalable workflow systems",
        "Quality assurance frameworks",
        "Brand voice governance",
      ],
    },
    // Card 2: AI‑Human Collaboration Models (Uses Lucide Users)
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "AI‑Human Collaboration Models",
      desc:
        "Optimize the symbiotic relationship between artificial intelligence and human creativity for maximum content effectiveness",
      points: [
        "Human‑AI workflow design",
        "Creative oversight systems",
        "Quality control processes",
        "Skill development programs",
      ],
    },
    // Card 3: Brand Voice Training & Consistency (Using CircuitBoard for Plug-in Bot)
    {
      // Using CircuitBoard as a suitable Lucide icon for the "Plug-in Bot"
      icon: <CircuitBoard className="w-8 h-8 text-purple-600" />,
      title: "Brand Voice Training & Consistency",
      desc:
        "Develop AI systems that understand and replicate your unique brand voice across all content touchpoints",
      points: [
        "Voice modeling algorithms",
        "Consistency measurement",
        "Tone adaptation systems",
        "Brand guideline automation",
      ],
    },
    // Card 4: Performance Optimization Loops (Using LineChart for Growth Graph)
    {
      // Using LineChart as a suitable Lucide icon for the "Growth Graph"
      icon: <LineChart className="w-8 h-8 text-purple-600" />,
      title: "Performance Optimization Loops",
      desc:
        "Create continuous improvement cycles that enhance content performance through data‑driven AI learning",
      points: [
        "Performance analytics",
        "Optimization algorithms",
        "A/B testing automation",
        "ROI measurement systems",
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 font-inter bg-gray-50">
      
      {/* Title and Description */}
      <h2 className="text-4xl font-bold text-neutral-800 text-center">
        Content Operations Excellence Framework
      </h2>
      <p className="text-neutral-600 text-center mt-4 max-w-3xl">
        Four foundational pillars that enable sustainable, scalable content operations with
        maintained quality and brand consistency
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-6xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            // Card container style matching the image: white background, rounded, subtle border/shadow
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              {/* Icon Container: light lavender background (purple-100), rounded-xl, matching the image */}
              <div className="p-4 bg-purple-100 rounded-xl flex items-center justify-center">
                {card.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-neutral-800">{card.title}</h3>
                <p className="text-neutral-600 mt-1">{card.desc}</p>
              </div>
            </div>

            {/* Points List: Reverting to standard list-disc for visible markers */}
            <ul className="mt-6 space-y-2 text-neutral-700 text-sm list-disc list-inside">
              {card.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}