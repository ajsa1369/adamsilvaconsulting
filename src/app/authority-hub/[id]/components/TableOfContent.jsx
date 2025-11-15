import React from 'react';

const TableOfContent = ({ content, color }) => {
  const borderColor = `border-${color}-600`;
  const indexBgColor = `bg-${color}-200`;
  const indexTextColor = `text-${color}-700`;
  const hoverBgColor = `hover:bg-${color}-100`;

  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl md:text-4xl text-neutral-800 font-bold">
        Table of Contents
      </h2>

      <div className="bg-white border border-gray-200 max-w-4xl rounded-md grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
        {content.map((point, index) => (
          <div
            key={index}
            className={`
              p-3 rounded-md flex items-center gap-4 transition-all duration-200 
              border border-gray-200 h-[80px] hover:${borderColor} ${hoverBgColor}
            `}
          >
            <span
              className={`
                px-3 py-1  rounded-md text-sm font-semibold 
                ${indexBgColor} ${indexTextColor}
              `}
            >
              {index + 1}
            </span>

            <a
              href={point.url}
              className="text-neutral-700 hover:underline text-md"
            >
              {point.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TableOfContent;
