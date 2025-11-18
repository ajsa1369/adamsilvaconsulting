import { CircleCheckBig,Brain, Target } from "lucide-react";

export default function MarketOperationsAdvantages() {
  const cards = [
    {
      title: "Competitive Intelligence",
      desc: "Gain market advantage through superior customer understanding and predictive capabilities",
      items: [
        "Market trend anticipation",
        "Competitive positioning insights",
        "Customer behavior prediction",
        "Strategic opportunity identification",
      ],
    },
    {
      title: "Operational Excellence",
      desc: "Achieve unparalleled efficiency through AI-driven automation and optimization",
      items: [
        "Resource optimization",
        "Process automation",
        "Quality consistency",
        "Scalable operations",
      ],
    },
    {
      title: "Customer Experience Leadership",
      desc: "Deliver personalized experiences at scale that exceed customer expectations",
      items: [
        "Hyper-personalization",
        "Real-time responsiveness",
        "Omnichannel consistency",
        "Proactive engagement",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
        Competitive Strategic Advantages
      </h2>

      {/* Subheading */}
      <p className="text-gray-600 text-center max-w-3xl text-xl mt-4  mb-12">
        Three fundamental advantages that create sustainable competitive differentiation
        through intelligent automation
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-8 shadow-sm bg-white max-w-sm mx-auto"
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-[#E6EEFF] rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8"  color="blue"/>
            </div>

            {/* Title */}
            <h3 className="text-gray-900 font-bold text-xl mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              {card.desc}
            </p>

            {/* Items */}
            <ul className="space-y-3">
              {card.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <Target className="text-[#6086FF] w-4 h-4 mt-0.5" />
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
