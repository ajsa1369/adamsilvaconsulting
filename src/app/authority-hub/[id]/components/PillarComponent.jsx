import React from 'react';

const PillarComponent = ({ Pillars }) => {
  // Pre-defined colors for the 3 pillars
  const colors = [
    {
      name: 'navy',
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      heading: 'text-blue-800',
      border: 'border-blue-700',
    },
    {
      name: 'green',
      bg: 'bg-green-100',
      text: 'text-green-800',
      heading: 'text-green-800',
      border: 'border-green-700',
    },
    {
      name: 'purple',
      bg: 'bg-purple-100',
      text: 'text-purple-800',
      heading: 'text-purple-800',
      border: 'border-purple-700',
    },
  ];

  return (
    <section className="p-8 flex items-start justify-center flex-col gap-10 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-neutral-800">{Pillars.heading}</h3>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {Pillars.pillars.map((pillar, index) => {
          const color = colors[index % colors.length]; // cycle through colors

          return (
            <div
              key={index}
              className={`w-[31%] rounded-xl p-5 h-[400px] border ${color.bg} ${color.border}`}
            >
              <h4 className={`text-xl font-bold ${color.heading}`}>
                {pillar.heading}
              </h4>
              <p className={`mt-3 text-lg ${color.text}`}>
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PillarComponent;
