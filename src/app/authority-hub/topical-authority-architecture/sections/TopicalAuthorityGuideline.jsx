import { ArrowRight, Check } from 'lucide-react';
import React from 'react';

// NOTE: next/image and next/link are not available in this environment.
// Using standard <img> tag for the image and <a> tag for the link.

const TopicalAuthorityGuideline = () => {
    // Content extracted from the "Expert Pillar Page Development" image
    const content = {
        heading: 'Expert Pillar Page Development',
        paragraph:
            'Our content strategists specialize in creating pillar pages that establish and demonstrate topical authority through comprehensive coverage, strategic positioning, and optimized user experience design.',
        features: [
            'Comprehensive topic coverage analysis',
            'Strategic internal linking implementation',
            'E-E-A-T authority signal optimization',
        ],
        buttonText: 'Get Pillar Page Strategy',
        buttonLink: '/pillar-page-strategy',
        imageUrl:
            '/assets/authority-hub/topical-authority-architecture/3.png', // Placeholder image for the team meeting visual
    };

    // Updated Styling
    const cardBorderColor = 'border-green-200';
    const cardBgColor = 'bg-green-50';
    const buttonBg = 'bg-green-700 hover:bg-green-800'; // Darker teal button

    return (
        <section className="mt-10 p-4 sm:p-6 flex items-center justify-center">
            {/* Main container with light border and shadow */}
            <div className={`max-w-4xl w-full p-6 sm:p-8 rounded-xl shadow-lg border ${cardBorderColor} ${cardBgColor} flex flex-col md:flex-row items-center justify-between gap-8`}>
                
                {/* Text and Feature Block (Left side) */}
                <div className="flex flex-col items-start w-full md:w-1/2">
                    <h2 className="text-2xl md:text-2xl font-semibold text-green-800 mb-4">
                        {content.heading}
                    </h2>
                    {/* Changed paragraph text color to text-neutral-700 */}
                    <p className="text-base text-green-800 mb-6">
                        {content.paragraph}
                    </p>

                    {/* Checkmark Features List */}
                    <ul className="space-y-3 mb-8">
                        {content.features.map((feature, index) => (
                            <li
                                key={index}
                                // Changed feature text color to text-neutral-700
                                className="flex items-start gap-2 text-teal-600 text-sm"
                            >
                                {/* Using Check for the checkmark icon - Color is a darker teal/green */}
                                <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Call to Action Button */}
                    <a 
                        href={content.buttonLink} 
                        className={`text-white ${buttonBg} transition duration-300 p-3 px-5 text-base rounded-md flex items-center gap-3 font-medium`}
                    >
                        {content.buttonText} <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

                {/* Image Block (Right side) */}
                <div className="w-full md:w-1/2 flex justify-end p-0">
                    {/* Placeholder for the image of the team meeting */}
                    <img
                        src={content.imageUrl}
                        alt="Team discussing pillar page strategy on a whiteboard"
                        className="rounded-xl shadow-lg w-full h-auto max-w-lg md:max-w-full"
                        width={400}
                        height={300}
                        style={{ objectFit: 'cover' }} // Ensure the image looks good within its container
                    />
                </div>
            </div>
        </section>
    );
};

export default TopicalAuthorityGuideline;