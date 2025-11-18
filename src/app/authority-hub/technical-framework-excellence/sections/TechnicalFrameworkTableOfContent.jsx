import React from 'react';

const TechnicalFrameworkTableOfContent = () => {
    // Content updated to match the image provided
    const content = [
        {
            label: 'Technical SEO Foundations for AI Optimization',
            url: '#technical-seo-foundations',
        },
        {
            label: 'Advanced Structured Data and Schema Implementation',
            url: '#structured-data',
        },
        {
            label: 'Core Web Vitals and Performance Optimization',
            url: '#core-web-vitals',
        },
        {
            label: 'Advanced Crawling and Indexing Strategies',
            url: '#crawling-indexing',
        },
        {
            label: 'Technical E-E-A-T Signal Implementation',
            url: '#e-e-a-t',
        },
        {
            label: 'Mobile-First and Accessibility Excellence',
            url: '#mobile-accessibility',
        },
        {
            label: 'Technical Monitoring and Maintenance Framework',
            url: '#monitoring-maintenance',
        },
    ];

    return (
        <section className="mt-10 py-16 flex flex-col items-center justify-center bg-gray-50"> {/* Added a light gray background to match */}
            <h2 className="text-3xl text-neutral-800 font-semibold mb-10"> {/* Adjusted font weight and margin */}
                Table of Contents
            </h2>

            {/* Main container for the cards */}
            <div className="bg-white border border-gray-200 shadow-md max-w-4xl w-full mx-auto rounded-xl grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 p-8"> {/* Adjusted padding, rounded corners, shadow, and gap */}
                {content.map((point, index) => (
                    <div
                        key={index}
                        className="
                            p-4 rounded-lg flex items-center gap-4 transition-all duration-200
                            border border-gray-200 h-auto min-h-[60px]
                            hover:bg-gray-50
                        "
                    >
                        {/* Number Indicator */}
                        <span
                            className="
                                px-3 py-1 rounded-md text-sm font-semibold
                                bg-gray-100 text-gray-600
                                flex-shrink-0
                            "
                        >
                            {index + 1}
                        </span>

                        {/* Content Label */}
                        <a
                            href={point.url}
                            className="text-neutral-700 hover:text-blue-600 text-base leading-snug" // Adjusted text size and hover color
                        >
                            {point.label}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalFrameworkTableOfContent;