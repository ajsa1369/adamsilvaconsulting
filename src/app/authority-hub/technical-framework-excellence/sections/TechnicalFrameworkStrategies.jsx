import { Target, BarChart2, Search, Code, Check } from 'lucide-react'; // Updated imports for Target (schema) and BarChart2 (vitals)
import React from 'react';

const TechnicalFrameworkStrategies = () => {
    // Content data is maintained from the previous update but ensures icon mapping is correct.
    const frameworks = [
        {
            icon: Code, // < /> icon (using Code for structured markup) - Remains Code
            heading: 'AI-Optimized Technical Foundations',
            subheading: 'Semantic HTML structure and content context specifically designed for AI engine comprehension',
            points: [
                'Semantic markup implementation',
                'AI-friendly content formatting',
                'Contextual relationship signals',
                'Schema.org integration',
            ],
        },
        {
            icon: Target, // CORRECTED: Target icon for Advanced Schema Implementation (matches image_45f9e7.png)
            heading: 'Advanced Schema Implementation',
            subheading: 'Comprehensive structured data strategies using JSON-LD for enhanced visibility and AI understanding',
            points: [
                'JSON-LD best practices',
                'Article and Product schema',
                'E-commerce optimization',
                'Schema validation framework',
            ],
        },
        {
            icon: BarChart2, // CORRECTED: BarChart2 icon for Core Web Vitals Mastery (matches image_45fd0d.png)
            heading: 'Core Web Vitals Mastery',
            subheading: 'Advanced performance optimization focusing on real-world user experience metrics',
            points: [
                'LCP optimization strategies',
                'INP responsiveness improvement',
                'CLS prevention techniques',
                'Performance monitoring systems',
            ],
        },
        {
            icon: Search, // Magnifying glass icon (using Search for crawling/query strategies) - Remains Search
            heading: 'Intelligent Crawling Strategies',
            subheading: 'Strategic crawl budget optimization and advanced sitemap management for large-scale websites',
            points: [
                'Crawl budget optimization',
                'Dynamic XML sitemaps',
                'Robots.txt configuration',
                'Javascript SEO implementation',
            ],
        },
    ];

    // Styling constants derived from the image
    const primaryTextColor = 'text-neutral-800';
    const secondaryTextColor = 'text-neutral-600';
    const cardBg = 'bg-white border border-gray-100 shadow-md';
    const iconColor = 'text-neutral-800'; // Blue for all main icons
    const checkColor = 'text-green-600'; // Green for the checklist icons

    return (
        <section className="mt-16 py-10 flex flex-col items-center justify-center gap-10 p-4 sm:p-6 bg-gray-50"> 
            
            {/* Heading and Description */}
            <div className="flex items-center flex-col gap-3 justify-center max-w-5xl mx-auto">
                <h3 className={`text-center font-bold text-3xl md:text-4xl ${primaryTextColor}`}>
                    Advanced Technical Implementation Frameworks
                </h3>
                <p className={`text-lg ${secondaryTextColor} text-center max-w-3xl`}>
                    Comprehensive technical strategies that combine traditional optimization excellence with cutting-edge AI-powered implementation methodologies.
                </p>
            </div>

            {/* GRID — Responsive Strategy Cards (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 max-w-5xl w-full mx-auto">
                {frameworks.map((framework, index) => {
                    const IconComponent = framework.icon;
                    return (
                        <div
                            key={index}
                            className={`flex flex-col rounded-xl p-6 gap-5 ${cardBg}`}
                        >
                            {/* Card Title and Icon */}
                            <div className="flex items-start justify-start gap-3">
                                {/* Icon Wrapper: Uses gray background for the wrapper as seen in images */}
                                <div
                                    className={`p-3 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100 ${iconColor}`}
                                >
                                    <IconComponent className="w-6 h-6" /> 
                                </div>
                                <div className="flex flex-col items-start justify-start gap-1">
                                    <h5 className={`text-xl font-semibold ${primaryTextColor}`}>
                                        {framework.heading}
                                    </h5>
                                    <p className={`text-sm ${secondaryTextColor}`}>
                                        {framework.subheading}
                                    </p>
                                </div>
                            </div>

                            {/* Strategy Points: Grid is set to single column for all points */}
                            <div className="grid grid-cols-1 gap-y-2 pt-4">
                                {framework.points.map((point, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-start gap-2 ${secondaryTextColor} text-sm`}
                                    >
                                        {/* Using Check icon to match the image styling (small green checkmark) */}
                                        <Check className={`w-4 h-4 ${checkColor} flex-shrink-0 mt-1`} />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechnicalFrameworkStrategies;