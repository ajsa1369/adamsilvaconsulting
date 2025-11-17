import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TopicalAuthorityIntroduction = () => {
  const points = [
    'Enhanced Algorithm Resilience: Websites with strong topical authority demonstrate greater stability during Google\'s algorithm updates',
    'AI Content Differentiation: Search engines rely more heavily on established authority signals to distinguish valuable content',
    'Semantic Search Optimization: Comprehensive topic coverage benefits visibility for semantically related queries',
  ];
  return (
    <section
      id="introduction"
      className="mt-20 mx-auto max-w-4xl flex items-start justify-center flex-col gap-5 p-4 sm:p-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 ">
        Understanding Topical Authority in the AI Era
      </h2>
      <p className="text-neutral-700 text-lg ">
        Topical authority represents a fundamental shift in how search engines evaluate and rank content. Rather than analyzing individual pages in isolation, Google's sophisticated AI systems now assess websites based on their comprehensive coverage of entire topic areas.
      </p>

      <div className="p-6 rounded-lg w-full border border-green-200 bg-green-50/70">
    
    <h4 className="text-xl md:text-2xl font-bold text-green-900">
        The AI-Driven Transformation of Search
    </h4>
    
    <p className="mt-4 text-lg text-green-900">
        The integration of natural language processing (NLP) and machine learning into Google's core ranking systems has fundamentally altered the search landscape. These AI models no longer rely on simple keyword matching but instead analyze deeper semantic relationships between concepts.
    </p>
    
    <p className="mt-2 text-lg text-green-900">
        Google's BERT update in 2019 marked a critical turning point, enabling the search engine to understand context and intent with unprecedented accuracy. This advancement means that search engines can now recognize when a website provides authoritative, comprehensive coverage of a topic.
    </p>
</div>

      {/* Responsive Image and Text Block */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-start md:items-center gap-8 w-full">
        {/* Image - now uses w-full on mobile, w-1/2 on medium screens+ */}
        <Image
          src="/assets/authority-hub/topical-authority-architecture/1.png"
          width={400}
          alt="image"
          height={400}
          className="w-full md:w-1/2 rounded-md h-auto"
        />

        {/* Text/List Block - now uses w-full on mobile, w-1/2 on medium screens+ */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5">
    
    <h4 className="text-3xl font-bold text-gray-900">
        Why Topical Authority Matters More Than Ever
    </h4>
    
    <ul className="space-y-4 pt-1"> 
        {points.map((point, index) => {
            // Split the string at the first colon
            const parts = point.split(':');
            const subheading = parts[0];
            const description = parts.slice(1).join(':').trim();

            return (
                <li key={index} className="flex gap-2 items-start justify-start">
                    
                    {/* Icon: Correct checkmark icon, positioned at the top of the heading */}
                    <CircleCheckBig
                        color="green"
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-2" 
                    />
                    
                    {/* Text: Structured with Bold Subheading on first line and lighter text description below */}
                    <span className="flex flex-col text-base text-gray-900">
                        
                        {/* Subheading: Bold and dark text */}
                        <span className="font-bold">{subheading}</span> 
                        
                        {/* Description: Lighter text color and normal weight */}
                        <span className="text-gray-600 font-normal">
                            {description}
                        </span>
                    </span>
                </li>
            );
        })}
    </ul>
</div>
      </div>
    </section>
  );
};

export default TopicalAuthorityIntroduction;
