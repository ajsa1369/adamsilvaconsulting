"use client"
import React from 'react';
import { Download } from 'lucide-react';

// --- Data for the Research Library ---
const libraryItems = [
  {
    tag: "Technical Guide",
    date: "January 2025",
    title: "Answer Engine Optimization: Methodology & Results",
    description: "Detailed methodology for achieving featured snippet success, with case studies and implementation frameworks.",
    pages: "28 pages",
    downloads: "850 downloads",
    tagColor: "text-[#025CA1]",
    tagBg: "bg-blue-100",
  },
  {
    tag: "Research Study",
    date: "January 2025",
    title: "AI Content Quality vs. Scale: The Resolution",
    description: "Research on maintaining editorial quality while scaling content production using AI automation technologies.",
    pages: "35 pages",
    downloads: "720 downloads",
    tagColor: "text-indigo-700",
    tagBg: "bg-indigo-100",
  },
  {
    tag: "Data Analysis",
    date: "December 2024",
    title: "Generative Engine Citation Patterns Analysis",
    description: "Analysis of how ChatGPT, Claude, and other AI engines select and cite sources, with optimization strategies.",
    pages: "24 pages",
    downloads: "960 downloads",
    tagColor: "text-cyan-700",
    tagBg: "bg-cyan-100",
  },
];

/**
 * Renders an individual research item card.
 */
const LibraryItemCard = ({ tag, date, title, description, pages, downloads, tagColor, tagBg }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-gray-200 shadow-md bg-white hover:shadow-lg transition duration-300">
      
      {/* Left Section: Content and Metadata */}
      <div className="flex flex-col flex-grow pr-4">
        
        {/* Tag and Date */}
        <div className="flex items-center space-x-3 mb-2 text-sm">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagBg} ${tagColor}`}>
            {tag}
          </span>
          <span className="text-gray-500">{date}</span>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm max-w-2xl">
          {description}
        </p>

        {/* Pages and Downloads */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
          <span>{pages}</span>
          <span className="text-gray-400">•</span>
          <span>{downloads}</span>
        </div>
      </div>

      {/* Right Section: Download Button */}
      <div className="mt-4 sm:mt-0 flex-shrink-0">
        <button
          className="flex items-center px-6 py-3 rounded-lg bg-[#025CA1] text-white text-base font-semibold hover:bg-[#025CA1] transition duration-150 shadow-md"
          onClick={() => console.log('Downloading:', title)}
        >
          Download
          <Download className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};


/**
 * Main application component for the Research Library section.
 */
const ResearchLibrary = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Research Library
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
            Stay ahead with our latest data, studies, and implementation guides.
          </p>
        </header>

        {/* --- LIBRARY ITEMS --- */}
        <div className="flex max-w-4xl mx-auto flex-col space-y-6">
          {libraryItems.map((item, index) => (
            <LibraryItemCard
              key={`library-item-${index}`}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchLibrary;