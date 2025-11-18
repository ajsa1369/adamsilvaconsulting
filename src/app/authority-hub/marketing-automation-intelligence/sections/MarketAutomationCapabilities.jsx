import { CheckCircle } from "lucide-react";

export default function MarketAutomationCapabilities() {
  const cards = [
    {
      title: "Predictive Customer Analytics",
      desc: "AI-powered insights into customer behavior, preferences, and future actions",
      items: [
        "Customer lifetime value prediction with 94% accuracy",
        "Churn risk assessment and prevention strategies",
        "Purchase intent scoring and timing optimization",
        "Cross-sell and upsell opportunity identification",
      ],
    },
    {
      title: "Dynamic Content Optimization",
      desc: "Real-time content personalization based on individual customer profiles and behavior",
      items: [
        "Personalized email subject lines and content",
        "Dynamic website content adaptation",
        "Behavioral trigger-based messaging",
        "A/B testing automation with statistical significance",
      ],
    },
    {
      title: "Intelligent Journey Orchestration",
      desc: "Automated customer journey management with AI-driven path optimization",
      items: [
        "Multi-channel journey coordination",
        "Real-time journey path optimization",
        "Behavioral trigger automation",
        "Experience continuity across touchpoints",
      ],
    },
    {
      title: "Performance Intelligence Systems",
      desc: "Continuous learning and optimization engines for marketing performance enhancement",
      items: [
        "Real-time campaign performance monitoring",
        "Automated budget allocation optimization",
        "Attribution modeling and analysis",
        "Predictive performance forecasting",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
        Advanced Intelligence Capabilities
      </h2>

      <p className="text-gray-600 text-center max-w-3xl mt-4 text-xl mb-12">
        Comprehensive AI-powered capabilities that transform marketing operations into
        intelligent, predictive systems
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-8 shadow-sm bg-white"
          >
            <h3 className="text-gray-900 font-bold text-xl mb-1">
              {card.title}
            </h3>

            <p className="text-gray-600 text-lg my-5 leading-relaxed">
              {card.desc}
            </p>

            <ul className="space-y-3">
              {card.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
