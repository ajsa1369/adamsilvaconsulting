import { Search, Target, Brain, Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CoreStrategies = ({ Strategies,color }) => {
   const { heading, description, strategies ,framework} = Strategies;

  // Icons for each strategy
  const strategyIcons = [
    <Search key={1} className={`w-8 h-8 text-${color}-700`} />,
    <Target key={2} className={`w-8 h-8 text-${color}-700`} />,
    <Brain key={3} className={`w-8 h-8 text-${color}-700`} />,
    <Zap key={4} className={`w-8 h-8 text-${color}-700`}/>,
  ];

  // Background colors for each icon wrapper
  const iconBg = [
   `bg-${color}-100`,
   `bg-${color}-100`,
   `bg-${color}-100`,
   `bg-${color}-100`,
  ];

  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-10 p-4 sm:p-6">
      
      {/* Heading and Description */}
      <div className="flex items-center flex-col gap-5 justify-center max-w-5xl mx-auto">
        <h3 className="text-neutral-800 text-center font-bold text-3xl md:text-4xl">
          {heading}
        </h3>
        <p className="text-xl text-neutral-600 text-center">{description}</p>
      </div>

      {/* GRID — Responsive Strategy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 max-w-5xl w-full mx-auto">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="flex shadow-lg hover:shadow-xl transition duration-300 flex-col rounded-xl p-6 gap-5 bg-white border border-gray-100"
          >
            {/* Strategy Title and Icon */}
            <div className="flex items-start justify-start gap-4">
              <div
                className={`p-4 h-fit rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg[index]}`}
              >
                {strategyIcons[index]}
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h5 className="text-2xl font-bold text-neutral-800">
                  {strategy.heading}
                </h5>
                <p className="text-neutral-600">{strategy.subheading}</p>
              </div>
            </div>
            
            {/* Strategy Points */}
            <ul className="space-y-3 pt-2 border-t border-gray-100">
              {strategy.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-neutral-700 text-base"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Framework Section - Responsive Flex Layout */}
      <div className="mt-5 max-w-5xl w-full bg-white shadow-xl rounded-xl p-6 md:p-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Block - w-full on mobile, w-1/2 on medium screens+ */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2">
          <h6 className="text-neutral-800 font-bold text-2xl md:text-3xl">{framework.heading}</h6>
          <p className='text-lg text-neutral-700 my-4'>{framework.description}</p>
          <ul className="space-y-3 mt-2">
            {framework.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-neutral-700 text-base"
              >
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Image Block - w-full on mobile, w-1/2 on medium screens+ */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={framework.imageUrl} 
            alt='AI Framework Visual'
            width={500}
            height={500}
            className='rounded-md shadow-lg w-full max-w-sm md:max-w-none h-auto' // Added max-width control for image
          />
        </div>
      </div>
    </section>
  );
};

export default CoreStrategies;
