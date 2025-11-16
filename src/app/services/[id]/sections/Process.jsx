import React from 'react';

const Process = ({ process }) => {
  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
        How It Works
      </h2>

      <div className="flex  w-full flex-wrap items-center justify-center p-5 gap-10">
        {process.map((method, index) => (
          <div
            key={index}
            className=" flex flex-col items-center justify-start h-[200px] gap-5 rounded-xl  max-w-[22%] w-full"
          >
            {/* Icon Wrapper */}
            <div className="w-12 h-12 p-5  rounded-full bg-[#0F6CBB] flex items-center  justify-center">
              <span className='text-bold text-lg text-white'>{method.label}</span> 
            </div>
            <h4 className="text-lg font-bold text-neutral-800 text-center">
              {method.heading}
            </h4>
            <p className="text-lg text-center ">{method.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
