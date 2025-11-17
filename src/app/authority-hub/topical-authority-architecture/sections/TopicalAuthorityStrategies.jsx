import { CheckCircle, Search, Target, Zap, LayoutGrid, BarChart3, Scissors, Link } from 'lucide-react'; 
import React from 'react';

// NOTE: next/image is not available in this environment. Using standard <img> tag.

const TopicalAuthorityStrategies = () => {
    // ----------------------------------------------------
    // Content for the top "Content Cluster Architecture" grid
    // ----------------------------------------------------
    const strategies = [
        {
            heading: 'Hub and Spoke Model',
            subheading:
                'Central pillar page serves as the hub, connected to multiple supporting articles that explore specific subtopics',
            points: [
                'Clear topic organization',
                'Strategic link equity distribution',
                'Scalable content development',
                'Enhanced user experience',
            ],
        },
        {
            heading: 'Topic Hierarchy Definition',
            subheading:
                'Systematic identification of broad topic areas that align with business objectives and audience needs',
            points: [
                'Strategic content planning',
                'Competitive gap analysis',
                'Resource allocation optimization',
                'Authority measurement framework',
            ],
        },
        {
            heading: 'Content Gap Analysis',
            subheading:
                'Analysis of existing content to identify gaps where additional cluster content could strengthen authority',
            points: [
                'Opportunity identification',
                'Competitor analysis',
                'Content prioritization',
                'Strategic planning',
            ],
        },
        {
            heading: 'Logical Linking Strategy',
            subheading:
                'Strategic internal linking structure that demonstrates comprehensive topic coverage and expertise',
            points: [
                'Authority signal distribution',
                'User journey optimization',
                'Crawl efficiency improvement',
                'Topic relationship clarity',
            ],
        },
    ];

    // Icons mapped to the strategies (based on user's manual mapping)
    const strategyIcons = [
        <LayoutGrid key={1} className="w-6 h-6 text-green-600" />, // Hub and Spoke
        <BarChart3 key={2} className="w-6 h-6 text-green-600" />, // Topic Hierarchy
        <Search key={3} className="w-6 h-6 text-green-600" />,     // Content Gap
        <Link key={4} className="w-6 h-6 text-green-600" />,      // Logical Linking
    ];

    // Icon background color for the strategy cards
    const iconBg = [`bg-green-50`, `bg-green-50`, `bg-green-50`, `bg-green-50`];

    // ----------------------------------------------------
    // Content for the bottom "Strategic Content Planning Process" block
    // ----------------------------------------------------
    const frameworkHeading = 'Strategic Content Planning Process';
    const frameworkParagraph =
        'Our methodology involves systematic topic hierarchy definition, subtopic mapping, and comprehensive gap analysis to create content ecosystems that establish demonstrable expertise.';
    
    const frameworkPoints = [
        'Topic hierarchy definition and business alignment',
        'Comprehensive subtopic mapping and intent analysis',
        'Content gap analysis and opportunity identification',
        'Strategic linking architecture development',
    ];

    return (
        <section className="mt-20 flex flex-col items-center justify-center gap-10 p-4 sm:p-6 font-inter">
            
            {/* TOP SECTION: Heading and Description for the Content Cluster Architecture */}
            <div className="flex items-center flex-col gap-5 justify-center max-w-5xl mx-auto">
                <h3 className="text-neutral-800 text-center font-bold text-3xl md:text-4xl">
                    Content Cluster Architecture: Building Your Knowledge Foundation
                </h3>
                <p className="text-xl text-neutral-600 text-center max-w-4xl">
                    Content cluster architecture forms the structural backbone of effective topical authority, organizing
                    content around central themes to create a web of interconnected resources that demonstrate
                    comprehensive subject matter expertise.
                </p>
            </div>

            {/* GRID: Strategy Cards (Content Cluster Architecture) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 max-w-5xl w-full mx-auto">
                {strategies.map((strategy, index) => (
                    <div
                        key={index}
                        className="flex shadow-lg hover:shadow-xl transition duration-300 flex-col rounded-xl p-6 gap-5 bg-white border border-gray-100"
                    >
                        
                        {/* Strategy Title and Icon */}
                        <div className="flex items-start justify-start gap-4">
                            <div
                                className={`p-2 h-fit rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg[index]}`}
                            >
                                {strategyIcons[index]}
                            </div>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h5 className="text-xl font-bold text-neutral-800">
                                    {strategy.heading}
                                </h5>
                                <p className="text-neutral-600">{strategy.subheading}</p>
                            </div>
                        </div>

                        {/* Strategy Points (using CheckCircle icon) */}
                        <ul className="space-y-3 pt-2 border-t border-gray-100">
                            {strategy.points.map((point, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-neutral-700 text-xs"
                                >
                                    <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-1" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* BOTTOM SECTION: Strategic Content Planning Process (Image Block Structure) */}
            <div className="mt-20 max-w-5xl w-full bg-white shadow-xl rounded-xl p-6 md:p-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10 border border-gray-100">
                <div className="flex flex-col items-start justify-center w-full md:w-1/2">
                    <h6 className="text-neutral-800 font-bold text-2xl ">
                        {frameworkHeading}
                    </h6>
                    <p className="text-lg text-neutral-700 my-4">
                        {frameworkParagraph}
                    </p>
                    
                    {/* Custom Numbered List for the bottom block */}
                    <ol className="space-y-4 pt-2">
                        {frameworkPoints.map((point, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3"
                            >
                           
                                <div className="flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold bg-teal-100 text-cyan-700 flex-shrink-0 mt-1">
                                    {i + 1}
                                </div>
                                <span className="text-lg text-neutral-700">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Diagram Image Block */}
                <div className="w-full md:w-1/2 flex justify-center">
                    {/* Replaced 'Image' with 'img' and removed next/image properties */}
                    <img
                        src="/assets/authority-hub/topical-authority-architecture/2.png"
                        alt="Strategic Content Planning Diagram"
                        className="rounded-md shadow-lg w-full max-w-sm md:max-w-none h-auto"
                        // Added explicit width/height for structure, although they don't affect standard <img>
                        width={500} 
                        height={500} 
                    />
                </div>
            </div>
        </section>
    );
};

export default TopicalAuthorityStrategies;