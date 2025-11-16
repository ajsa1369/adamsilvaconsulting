"use client"
import React, { useState } from 'react';
import { BookOpen, Download, X, ChevronRight, ChevronLeft, User, Mail, Globe, DollarSign, AlertCircle, Check } from 'lucide-react';

// --- Data for Featured Implementation Guides ---
const guideResources = [
  {
    category: "Technical SEO",
    impact: { text: "High Impact", color: "text-[#E67C3A]", bgColor: "bg-[#FFF5E8]", borderColor: "border-[#FBE5C7]" },
    heading: "AEO Implementation Framework",
    tagline: "Complete methodology for Answer Engine Optimization implementation, from content audit to performance measurement.",
    difficulty: { text: "Advanced", color: "text-[#DC4B4B]", bgColor: "bg-[#FBE4E4]", borderColor: "border-[#F8D2D2]" },
    duration: "6-8 weeks",
    sections: "8 chapters",
  },
  {
    category: "AI Optimization",
    impact: { text: "Critical Impact", color: "text-[#DC4B4B]", bgColor: "bg-[#FBE4E4]", borderColor: "border-[#F8D2D2]" },
    heading: "GEO Optimization Playbook",
    tagline: "Strategic guide for Generative Engine Optimization, optimizing content for AI-powered search engines and language models.",
    difficulty: { text: "Advanced", color: "text-[#DC4B4B]", bgColor: "bg-[#FBE4E4]", borderColor: "border-[#F8D2D2]" },
    duration: "4-6 weeks",
    sections: "6 chapters",
  },
  {
    category: "Content Strategy",
    impact: { text: "High Impact", color: "text-[#E67C3A]", bgColor: "bg-[#FFF5E8]", borderColor: "border-[#FBE5C7]" },
    heading: "Topical Authority Building Blueprint",
    tagline: "Systematic approach to establishing domain expertise and authority recognition across AI systems.",
    difficulty: { text: "Intermediate", color: "text-[#4285F4]", bgColor: "bg-[#F4F9FF]", borderColor: "border-[#D0E0FF]" },
    duration: "8-12 weeks",
    sections: "10 chapters",
  },
];

const implementationGuides = [
  "AEO Implementation Framework",
  "GEO Optimization Playbook",
  "Topical Authority Building Blueprint",
  "AI Content Operations Setup",
  "E-E-A-T Optimization Methodology",
  "Zero-Click Strategy Development",
  "AI Citation Optimization Guide",
  "Integrated Service Ecosystem Development"
];

/**
 * Helper component for rendering colored tags (Impact/Difficulty).
 */
const Tag = ({ text, color, bgColor, borderColor }) => (
  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${bgColor} ${color} ${borderColor}`}>
    {text}
  </span>
);

/**
 * Modal Component for Personalized Guide Download
 */
const DownloadModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    selectedGuides: [],
    budget: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGuideToggle = (guide) => {
    setFormData(prev => ({
      ...prev,
      selectedGuides: prev.selectedGuides.includes(guide)
        ? prev.selectedGuides.filter(g => g !== guide)
        : [...prev.selectedGuides, guide]
    }));
  };

  const handleContinue = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleGenerate = () => {
    // Simulate generation that fails
    setTimeout(() => {
      setShowError(true);
    }, 500);
  };

  const handleCloseError = () => {
    setShowError(false);
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      website: '',
      selectedGuides: [],
      budget: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {!showError ? (
          <>
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-[#025CA1]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Download Personalized Guide</h2>
                  <p className="text-sm text-gray-600">Get your custom AI authority building strategy</p>
                </div>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-4 w-full max-w-md">
                <div className="flex items-center space-x-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step === 1 ? 'bg-[#025CA1] text-white' : 'bg-[#025CA1] text-white'
                  }`}>
                    {step > 1 ? <Check className="w-4 h-4" /> : '1'}
                  </div>
                  <span className={`text-sm font-medium ${step === 1 ? 'text-[#025CA1]' : 'text-[#025CA1]'}`}>
                    Contact Information
                  </span>
                </div>
                <div className={`flex-1 h-0.5 ${step === 2 ? 'bg-[#025CA1]' : 'bg-gray-200'}`}></div>
                <div className="flex items-center space-x-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step === 2 ? 'bg-[#025CA1] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                  <span className={`text-sm font-medium ${step === 2 ? 'text-[#025CA1]' : 'text-gray-400'}`}>
                    Business Needs
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {step === 1 ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Information</h3>
                    <p className="text-sm text-gray-600">
                      Please provide your contact details to receive your personalized AI authority strategy guide.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 mr-2" />
                        Full Name <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 mr-2" />
                        Business Email <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Globe className="w-4 h-4 mr-2" />
                        Company Website <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="https://yourcompany.com or yourcompany.com"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        We'll analyze your website to provide personalized recommendations
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Business Needs Assessment</h3>
                    <p className="text-sm text-gray-600">
                      Select the implementation guides most relevant to your current business priorities.
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-900 mb-3 block">
                      Select Implementation Guides <span className="text-gray-500 font-normal">*(Choose all that apply)</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {implementationGuides.map((guide, index) => (
                        <button
                          key={index}
                          onClick={() => handleGuideToggle(guide)}
                          className={`px-4 py-3 rounded-lg border-2 text-left text-sm font-medium transition-all ${
                            formData.selectedGuides.includes(guide)
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                              formData.selectedGuides.includes(guide)
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-300'
                            }`}>
                              {formData.selectedGuides.includes(guide) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            {guide}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-900 mb-2">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Advertising Budget <span className="text-gray-500 font-normal ml-1">(Optional)</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select your budget range</option>
                      <option value="<10k">Less than $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      This helps us tailor recommendations to your investment level
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
              {step === 1 ? (
                <>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 text-gray-700 font-medium hover:text-gray-900 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleContinue}
                    className="px-6 py-2.5 hover:bg-[#025CA1] text-white font-semibold rounded-lg bg-[#025CA1] transition flex items-center"
                  >
                    Continue
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleBack}
                    className="px-6 py-2.5 text-gray-700 font-medium hover:text-gray-900 transition flex items-center"
                  >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="px-6 py-2.5 hover:bg-[#025CA1] text-white font-semibold rounded-lg bg-[#025CA1] transition flex items-center"
                  >
                    Generate Guide
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Something Went Wrong</h3>
            <p className="text-gray-600 mb-6">Failed to send a request to the Edge Function</p>
            <p className="text-sm text-gray-500 mb-8">
              Please try again or contact our support team if the problem persists.
            </p>
            <button
              onClick={handleCloseError}
              className="w-full sm:w-auto px-8 py-3 hover:bg-[#025CA1] text-white font-semibold rounded-lg bg-[#025CA1] transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Renders an individual resource card for the GUIDE section.
 */
const GuideCard = ({ category, impact, heading, tagline, difficulty, duration, sections, onButtonClick }) => {
  return (
    <div className="flex flex-col p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      
      {/* Category & Impact */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-[#025CA1]">{category}</span>
        <Tag {...impact} />
      </div>

      {/* Heading (Title) */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 leading-snug">
        {heading}
      </h3>

      {/* Tagline (Description) */}
      <p className="text-gray-600 mb-6 text-sm flex-grow">
        {tagline}
      </p>

      {/* Metadata */}
      <div className="space-y-3 mb-8 text-sm text-gray-700">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Difficulty:</span>
          <Tag {...difficulty} />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold">Duration:</span>
          <span className="text-gray-600">{duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold">Sections:</span>
          <span className="text-gray-600">{sections}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-auto">
        <button
          className="flex items-center justify-center w-full sm:w-1/2 px-4 py-3 rounded-xl border border-blue-500 cursor-pointer   text-[#025CA1] bg-blue-50 hover:bg-blue-100 transition duration-150 shadow-sm"
          onClick={() => onButtonClick(heading)}
        >
          <BookOpen className="w-5 h-5 mr-2" />
          Preview Report
        </button>
        <button
          className="flex items-center justify-center w-full sm:w-1/2 px-4 py-3 rounded-xl bg-[#025CA1] text-white cursor-pointer font-semibold hover:bg-[#025CA1] transition duration-150 shadow-md"
          onClick={() => onButtonClick(heading)}
        >
          <Download className="w-5 h-5 mr-2" />
          Download PDF
        </button>
      </div>
    </div>
  );
};

/**
 * Main application component for the Featured Implementation Guides section.
 */
const FeaturedGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (guideName) => {
    console.log('Opening modal for:', guideName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* --- FEATURED IMPLEMENTATION GUIDES SECTION --- */}
        <section>
          <header className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Featured Implementation Guides
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive methodologies for systematic AI authority building and optimization
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {guideResources.map((guide, index) => (
              <GuideCard
                key={`guide-${index}`}
                {...guide}
                onButtonClick={handleButtonClick}
              />
            ))}
          </div>
        </section>

      </div>

      {/* Modal */}
      <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default FeaturedGuide;