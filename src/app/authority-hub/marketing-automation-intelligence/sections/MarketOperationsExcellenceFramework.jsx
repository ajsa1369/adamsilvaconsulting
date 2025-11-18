import React from "react";
// Importing Lucide icons that are the closest visual and semantic matches to the image
import { AreaChart, UsersRound, GitFork, Cog } from "lucide-react"; 

export default function MarketOperationsExcellenceFramework() {
  const cards = [
    // Card 1: Predictive Analytics & Forecasting
    {
      // Icon matching the graph-like appearance with AI/prediction
      icon: <AreaChart className="w-8 h-8 text-blue-600" />,
      title: "Predictive Analytics & Forecasting",
      desc:
        "Leverage machine learning algorithms to predict customer behavior, campaign performance, and market trends for strategic advantage",
      points: [
        "Customer lifetime value prediction",
        "Churn probability scoring",
        "Campaign performance forecasting",
        "Market trend analysis",
      ],
    },
    // Card 2: AI-Driven Audience Segmentation
    {
      // Icon matching the person with connection/data points
      icon: <UsersRound className="w-8 h-8 text-blue-600" />,
      title: "AI-Driven Audience Segmentation",
      desc:
        "Dynamic, behavior-based audience segmentation that evolves in real-time based on customer interactions and preferences",
      points: [
        "Real-time behavioral clustering",
        "Psychographic profiling",
        "Intent-based segmentation",
        "Cross-channel journey mapping",
      ],
    },
    // Card 3: Intelligent Campaign Orchestration
    {
      // Icon matching the connected flow/network symbol
      icon: <GitFork className="w-8 h-8 text-blue-600" />,
      title: "Intelligent Campaign Orchestration",
      desc:
        "Automated campaign management that optimizes messaging, timing, and channel selection for maximum engagement and conversion",
      points: [
        "Multi-channel coordination",
        "Dynamic content optimization",
        "Timing optimization algorithms",
        "Cross-campaign learning",
      ],
    },
    // Card 4: Performance Optimization Engines
    {
      // Icon matching the gear/settings symbol for engines/optimization
      icon: <Cog className="w-8 h-8 text-blue-600" />,
      title: "Performance Optimization Engines",
      desc:
        "Continuous learning systems that automatically improve campaign performance through real-time data analysis and adjustment",
      points: [
        "A/B testing automation",
        "Budget allocation optimization",
        "Creative performance analysis",
        "ROI maximization algorithms",
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 font-inter bg-white">
      
      {/* Main Title and Description */}
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-4xl font-bold text-neutral-800">
          Core Intelligence Frameworks
        </h2>
        <p className="text-neutral-600 mt-4 text-lg">
          Four foundational intelligence systems that transform traditional marketing
          automation into predictive, adaptive operations
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            // Card container style matching the image: white background, rounded, subtle border/shadow
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              {/* Icon Container: light blue background (blue-100), rounded-xl, matching the image */}
              <div className="p-4 bg-blue-100 rounded-xl flex items-center justify-center">
                {card.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-neutral-800">{card.title}</h3>
                <p className="text-neutral-600 mt-1">{card.desc}</p>
              </div>
            </div>

            {/* Points List: Custom list styling to exactly match the small blue dots in the image */}
            <ul className="mt-6 space-y-2 text-neutral-700 text-sm list-none pl-0">
              {card.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  {/* Custom list marker style (small blue circle/dot) */}
                  <span className="w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}