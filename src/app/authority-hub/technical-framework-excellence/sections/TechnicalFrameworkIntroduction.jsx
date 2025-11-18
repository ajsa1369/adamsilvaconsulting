import React from 'react';

// Import all necessary icons from lucide-react
import { CircleCheckBig, Shield, Monitor, Settings } from 'lucide-react'; 
import Image from 'next/image';

const TechnicalFrameworkFoundations = () => {
    // Content updated to match the "Technical SEO Foundations for AI Optimization" image
    const contentSection = {
        mainHeading: 'Technical SEO Foundations for AI Optimization',
        mainParagraph: 'In 2025, technical SEO has evolved beyond traditional optimization to encompass AI-powered search engines, advanced performance metrics, and sophisticated technical frameworks that combine traditional techniques with cutting-edge strategies for AI-driven platforms.',
        
        // Understanding AI-Powered Search Engines box
        aiBox: {
            heading: 'Understanding AI-Powered Search Engines',
            paragraph: 'AI search engines like ChatGPT, Google Bard, and Perplexity process content differently than traditional search algorithms. They require explicit semantic signals and well-structured content to understand context and relationships.',
            requirements: [
                'Semantic HTML structure',
                'Content context and relationships',
                'AI-optimized content formatting',
                'Structured data implementation',
            ],
        },

        // Modern Technical SEO Framework section
        framework: {
            heading: 'Modern Technical SEO Framework',
            paragraph: 'Our comprehensive framework covers seven critical areas that ensure optimal performance across both traditional search engines and emerging AI-driven platforms.',
            imageSrc: '/assets/authority-hub/technical-framework-excellence/1.png', 
            pillars: [
                {
                    icon: Shield, // Shield icon for AI-Optimized Foundations
                    title: 'AI-Optimized Foundations',
                    description: 'Semantic markup and content structure for AI comprehension.',
                },
                {
                    icon: Monitor, // Monitor icon for Performance Excellence
                    title: 'Performance Excellence',
                    description: 'Core Web Vitals optimization and advanced caching strategies.',
                },
                {
                    icon: Settings, // Settings icon for Intelligent Automation
                    title: 'Intelligent Automation',
                    description: 'Automated monitoring and maintenance systems.',
                },
            ],
        },
    };

    // Styling variables
    const primaryTextColor = 'text-neutral-800';
    const secondaryTextColor = 'text-neutral-600';
    const boxBorderColor = 'border-blue-100';
    const boxBgColor = 'bg-blue-50'; // Very light blue for the inner box
    const pillarIconColor = 'text-indigo-500'; // Light blue/indigo color for the pillar icons

    return (
        <section
            id="technical-foundations"
            className="mt-16 mx-auto max-w-6xl flex flex-col gap-8 p-4 sm:p-6"
        >
            {/* Main Heading and Introduction Paragraph */}
            <div className="text-center mx-auto max-w-3xl">
                <h2 className={`text-3xl md:text-4xl font-semibold ${primaryTextColor} mb-4`}>
                    {contentSection.mainHeading}
                </h2>
                <p className={`text-lg ${secondaryTextColor}`}>
                    {contentSection.mainParagraph}
                </p>
            </div>

            {/* Understanding AI-Powered Search Engines Box (Light Blue Box) */}
            <div className={`p-8 rounded-xl w-full border ${boxBorderColor} ${boxBgColor} shadow-sm mx-auto max-w-4xl`}>
                
                <h3 className={`text-xl font-semibold ${primaryTextColor} mb-4`}>
                    {contentSection.aiBox.heading}
                </h3>
                
                <p className={`text-base ${secondaryTextColor} mb-6`}>
                    {contentSection.aiBox.paragraph}
                </p>

                <h4 className={`text-base font-semibold ${primaryTextColor} mb-3`}>
                    Key Technical Requirements for AI Optimization:
                </h4>
                
                {/* Requirements List - Two Columns (using CircleCheckBig) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {contentSection.aiBox.requirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {/* Icon: Using CircleCheckBig with a green-teal color */}
                            <CircleCheckBig 
                                className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" 
                            />
                            <span className={`text-base ${secondaryTextColor}`}>
                                {req}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modern Technical SEO Framework (Image and Text Block) */}
            <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-10 w-full mx-auto max-w-4xl">
                
                {/* Image Block (Left side) */}
                <div className="w-full md:w-5/12 flex justify-start">
                    {/* Using <img> tag with the provided local path */}
                    <Image
                        src={contentSection.framework.imageSrc}
                        alt="Website Technical Architecture Diagram"
                        width={400}
                        height={300}
                        className="w-full rounded-md shadow-lg"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Text/List Block (Right side) */}
                <div className="w-full md:w-7/12 flex flex-col items-start gap-5">
                    
                    <h3 className={`text-2xl font-bold ${primaryTextColor}`}>
                        {contentSection.framework.heading}
                    </h3>
                    
                    <p className={`text-base ${secondaryTextColor} mb-2`}>
                        {contentSection.framework.paragraph}
                    </p>
                    
                    {/* Pillars List - Now using imported icons */}
                    <ul className="space-y-4 pt-1 w-full"> 
                        {contentSection.framework.pillars.map((pillar, index) => {
                            const IconComponent = pillar.icon;
                            return (
                                <li key={index} className="flex gap-4 items-center border-b border-gray-100 pb-3 last:border-b-0">
                                    
                                    {/* Icon: Dynamic component, larger size (w-6 h-6) with indigo color */}
                                    <IconComponent className={`w-4 h-4 ${pillarIconColor} flex-shrink-0 mt-0.5`} />
                                    
                                    {/* Text: Structured with Bold Title and description below */}
                                    <span className="flex flex-col text-base w-full">
                                        
                                        {/* Title: Dark, extra bold text (font-extrabold) and large (text-xl) */}
                                        <span className={`font-bold text-xl ${primaryTextColor} mb-1`}>{pillar.title}</span> 
                                        
                                        {/* Description: Lighter text color and small size */}
                                        <span className={`text-sm ${secondaryTextColor}`}>
                                            {pillar.description}
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

export default TechnicalFrameworkFoundations;