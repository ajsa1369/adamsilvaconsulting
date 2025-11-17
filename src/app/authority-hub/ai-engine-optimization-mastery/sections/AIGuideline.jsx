import { ArrowRight, CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AIGuideline = () => {
  const schema = {
    heading: 'Critical Schema Types for AEO:',
    points: [
      'AQPage Schema',
      'HowTo Schema',
      'Article Schema',
      'Speakable Schema',
    ],
  };
  const buttonColor = `bg-blue-700`;
  const borderColor = `border-blue-600`;
  const headingColor = `text-blue-800`;
  const textColor = `text-blue-600`;
  const BgColor = `bg-blue-100`;
  return (
    <section className="mt-20   max-w-3xl mx-auto flex flex-col items-center justify-center gap-10">
      <div className="bg-gray-50 p-5 rounded-md flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl md:text-4xl text-neutral-800 font-bold">
          Technical Implementation Guidelines
        </h2>
        <div className="flex flex-col gap-5 items-start">
          <h3 className="text-2xl  text-neutral-800 font-bold">
            Schema Markup Implementation
          </h3>
          <p className="text-lg text-neutral-700">
            Structured data serves as a roadmap for AI systems, helping them
            understand your content's context, relationships, and relevance.
            Implementing comprehensive schema markup increases your chances of
            being selected for featured snippets and AI responses by 30-40%.
          </p>
        </div>
        <div className="mt-3 w-full bg-white p-8 rounded-xl border border-gray-200">
          <h4 className="text-xl font-bold ">{schema.heading}</h4>
          <div className="flex w-full mt-5 flex-wrap items-start justify-center space-y-5">
            {schema.points.map((point, index) => {
              return (
                <div
                  key={index}
                  className="max-w-1/2 w-full   flex items-start justify-start gap-2"
                >
                  <CircleCheckBig color="green" className="w-5 h-5" />
                  <span className="text-sm text-neutral-600">{point}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`mt-5 p-10 rounded-xl flex items-center justify-center gap-10 border ${borderColor} ${BgColor}`}
      >
        <div>
          <h5 className={`${headingColor} text-xl md:text-2xl font-bold `}>
       Expert Implementation Support
          </h5>
          <p className={`my-3 text-sm ${textColor}`}>
          Our team of technical SEO specialists provides comprehensive implementation support, ensuring your content optimization meets the latest AI engine requirements and best practices
          </p>
          <Link href="/contact"
            className={` ${buttonColor} max-w-[230px] mt-4 text-white p-2 text-sm rounded-md flex items-center gap-3`}
          >
            Get Implementation Support <ArrowRight />{' '}
          </Link>
        </div>
        <Image
          src='/assets/authority-hub/ai-optimization/3.png'
          alt="image"
          width={350}
          height={350}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default AIGuideline;
