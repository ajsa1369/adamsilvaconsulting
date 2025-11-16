"use client"
import React from 'react';
import { Calendar, Download, BarChart } from 'lucide-react';

// --- Data for the Featured Research Card ---
const researchData = {
  title: "The State of AI Marketing 2025: Authority vs. Clicks",
  type: "Industry Report",
  tags: ["Featured Research", "Industry Report"],
  description: "Comprehensive analysis of the shift from traditional SEO to AI authority building, based on data from 500+ businesses.",
  date: "January 15, 2025",
  downloads: "1,200 downloads",
  pages: "42 Pages",
  metricDescription: "In-depth Analysis",
};

/**
 * Renders the main Featured Research Card.
 */
const ResearchCard = () => {
  return (
    <div className="flex flex-col lg:flex-row rounded-xl border border-gray-200 shadow-xl overflow-hidden bg-white max-w-5xl mx-auto">
      
      {/* --- Left Column: Content and Actions (70%) --- */}
      <div className="p-8 sm:p-10 lg:w-7/12 bg-blue-200">
        
        {/* Tags */}
        <div className="flex space-x-2 mb-3">
          {researchData.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-bold px-2 py-1 rounded-full text-[#025CA1] bg-blue-100 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {researchData.title}
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6">
          {researchData.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            <span>{researchData.date}</span>
          </div>
          <div className="flex items-center">
            <Download className="w-4 h-4 mr-2 text-gray-400" />
            <span>{researchData.downloads}</span>
          </div>
        </div>

        {/* Download Button */}
        <button
          className="flex items-center px-6 py-3 rounded-xl bg-[#025CA1] text-white text-lg font-semibold hover:bg-[#025CA1] transition duration-150 shadow-md"
          onClick={() => console.log('Downloading Research:', researchData.title)}
        >
          Download Research
          <Download className="w-5 h-5 ml-3" />
        </button>
      </div>

      {/* --- Right Column: Metric Visualization (30%) --- */}
      <div className="flex flex-col items-center justify-center p-8 lg:p-10 lg:w-5/12 text-center bg-[#F4F9FF] border-t lg:border-t-0 bg-blue-100 lg:border-l border-blue-200">
        
        {/* Icon Container */}
        <div className="p-5 mb-4 rounded-xl bg-blue-100 text-[#025CA1]">
          <BarChart className="w-12 h-12" strokeWidth={1.5} />
        </div>

        {/* Metric Value */}
        <p className="text-4xl sm:text-5xl font-extrabold text-[#025CA1] mb-2">
          {researchData.pages}
        </p>

        {/* Metric Description */}
        <p className="text-base font-medium text-gray-600">
          {researchData.metricDescription}
        </p>
      </div>
    </div>
  );
};


/**
 * Main application component.
 */
const Research = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">

        
        <ResearchCard />
      </div>
    </div>
  );
};

export default Research;