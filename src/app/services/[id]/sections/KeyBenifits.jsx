import { Target } from 'lucide-react';
import React from 'react';

const KeyBenifits = ({ benefits }) => {
  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
        Key Features
      </h2>
      <p className="text-xl text-neutral-700 max-w-4xl text-center">
        Comprehensive capabilities designed to deliver measurable results
      </p>

      <div className="flex  w-full flex-wrap items-center justify-center p-5 gap-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-5 flex flex-col items-center justify-start h-[200px] gap-5 rounded-xl  max-w-[30%] w-full"
          >
            {/* Icon Wrapper */}
            <div className="p-4 rounded-full bg-blue-100 flex items-center  justify-center">
              <Target className="text-[#0F6CBB]" size={30} />
            </div>
            <h4 className="text-xl font-bold text-neutral-800 text-center">
              {benefit.heading}
            </h4>
            <p className="text-sm text-center ">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyBenifits;
