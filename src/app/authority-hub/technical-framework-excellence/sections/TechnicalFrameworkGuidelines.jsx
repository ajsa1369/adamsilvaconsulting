import { ArrowRight, CheckCircle } from 'lucide-react'; // Using CheckCircle to match the image
import React from 'react';

// Renamed the component to match the content
const TechnicalFrameworkGuidelines = () => {
    // Content extracted from the "Expert Pillar Page Development" image
    const content = {
        heading: 'Performance Optimization Implementation', //
        paragraph:
            'Our technical SEO specialists implement comprehensive performance optimization strategies that ensure your website meets and exceeds Core Web Vitals thresholds while maintaining optimal user experience.', //
        features: [
            'Advanced performance auditing', //
            'Custom optimization strategies', //
            'Continuous monitoring systems', //
        ],
        buttonText: 'Get Performance Audit →', // Added arrow to the text
        buttonLink: '/contact',
        // Using the provided image path
        imageUrl: '/assets/authority-hub/technical-framework-excellence/3.png', 
    };

    // Styling to match the light-mint-green box in image_399d9d.jpg
    const cardBorderColor = 'border-neutral-200';
    const cardBgColor = 'bg-gray-50'; // Very light mint green/teal
    const headingColor = 'text-neutral-800';
    const textColor = 'text-neutral-700';
    const checkColor = 'text-gray-400'; // Darker teal/green for icons
    const buttonBg = 'bg-gray-600 hover:bg-gray-700'; // Strong teal button

    return (
        <section className="mt-10 p-4 sm:p-6 flex items-center justify-center">
            {/* Main container with light teal background, border, and shadow */}
            <div className={`max-w-6xl w-full p-6 sm:p-10 rounded-xl  border ${cardBorderColor} ${cardBgColor} flex flex-col md:flex-row items-center justify-between gap-8`}>
                
                {/* Text and Feature Block (Left side) */}
                <div className="flex flex-col items-start w-full md:w-1/2">
                    <h2 className={`text-2xl md:text-3xl font-bold ${headingColor} mb-4`}>
                        {content.heading}
                    </h2>
                    
                    <p className={`text-base ${textColor} mb-6`}>
                        {content.paragraph}
                    </p>

                    {/* Checkmark Features List */}
                    <ul className="space-y-3 mb-8">
                        {content.features.map((feature, index) => (
                            <li
                                key={index}
                                className={`flex items-start gap-2  text-base`} // Changed text-sm to text-base and color to neutral
                            >
                                {/* Using CheckCircle with teal color, matching the image */}
                                <CheckCircle className={`w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5`} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Call to Action Button */}
                    <a 
                        href={content.buttonLink} 
                        className={`text-white ${buttonBg} transition duration-300 p-3 px-5 text-base rounded-md flex items-center gap-2 font-medium`} // Changed gap-3 to gap-2
                    >
                        {content.buttonText}
                        {/* The arrow is integrated into the button text as per the image */}
                    </a>
                </div>

                {/* Image Block (Right side) */}
                <div className="w-full md:w-1/2 flex justify-end p-0">
                    <img
                        src={content.imageUrl}
                        alt="Team discussing pillar page strategy on a whiteboard"
                        width={500}
                        height={333}
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                        // Removed max-w-lg and set max-w-full on md to ensure it fits nicely
                    />
                </div>
            </div>
        </section>
    );
};

export default TechnicalFrameworkGuidelines;