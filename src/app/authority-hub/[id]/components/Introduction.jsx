

import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import React from 'react';



const Introduction = ({ introduction, color }) => {
  // Use bracket notation for dynamic Tailwind classes for safety and consistency
  // Note: For production Tailwind environments, these colors need to be safelisted.
  const lightColor = `bg-${color}-100`;
  const borderColor = `border-${color}-400`;
  const headingColor = `text-${color}-800`;
  const textColor = `text-${color}-800`;
  const BgColor = `bg-${color}-50`;

  return (
    <section id='introduction' className="mt-20 mx-auto max-w-4xl flex items-start justify-center flex-col gap-5 p-4 sm:p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 ">
        {introduction.heading}
      </h2>
      <p className="text-neutral-700 text-lg ">{introduction.description}</p>


      <div className={`p-6 rounded-lg w-full  border ${borderColor}  ${BgColor}`}>
        <h4 className={`text-xl md:text-2xl font-bold ${headingColor}`}>
          {introduction.subheading}
        </h4>
        <p className={`mt-4 text-xl ${textColor}`}>
          {introduction.description2}
        </p>
      </div>

      {/* Responsive Image and Text Block */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-start md:items-center gap-8 w-full">
        {/* Image - now uses w-full on mobile, w-1/2 on medium screens+ */}
        <Image
          src={introduction.imageUrl}
          width={400}
          alt="image"
          height={400}
          className="w-full md:w-1/2 rounded-md h-auto"
        />

        {/* Text/List Block - now uses w-full on mobile, w-1/2 on medium screens+ */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5">
          <h4 className="text-xl md:text-2xl font-bold ">
            {introduction.landscape.heading}
          </h4>
          <p className="text-lg text-neutral-700">
            {introduction.landscape.description}
          </p>
          <ul className="space-y-3">
            {introduction.landscape.points.map((point, index) => (
              <li key={index} className="flex gap-2 items-start justify-start">
                {/* Aligned icon and text */}
                <CircleCheckBig
                  color="green"
                  className="w-5 h-5 text-green-500 flex-shrink-0 mt-1"
                />
                <span className="text-neutral-600 text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
