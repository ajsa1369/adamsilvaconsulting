import React from 'react';
import { CheckCircle } from 'lucide-react';

const TopicalAuthorityPillars = () => {
    // 1. Updated content based on the "Pillar Page Strategy" image
    const pillarPages = [
        {
            heading: 'Guide Pillar Pages',
            mainDescription:
                'Comprehensive resources providing end-to-end coverage of complex topics',
            callout: 'Best for educational content and process-oriented topics',
            features: [
                'Step-by-step processes',
                'Practical examples',
                'Supporting cluster links',
                'Actionable insights',
            ],
        },
        {
            heading: 'What-Is Pillar Pages',
            mainDescription:
                'Authoritative explanations of concepts, products, or services',
            callout:
                'Ideal for capturing featured snippets and establishing thought leadership',
            features: [
                'Clear definitions',
                'Common questions coverage',
                'Related concept exploration',
                'Expert insights',
            ],
        },
        {
            heading: 'How-To Pillar Pages',
            mainDescription:
                'Process-oriented pages providing comprehensive guidance on achieving specific outcomes',
            callout:
                'Perfect for solution-focused content and implementation guides',
            features: [
                'Detailed methodologies',
                'Implementation steps',
                'Troubleshooting guides',
                'Success metrics',
            ],
        },
    ];

    // Colors for the callout boxes (Light green theme based on the image)
    const calloutColors = {
        bg: 'bg-green-50',
        text: 'text-green-800',
        border: 'border-green-300',
        icon: 'text-green-600',
    };

    return (
        <section className="p-4 sm:p-8 flex items-center justify-center flex-col gap-8 md:gap-10 mx-auto mt-20">
            {/* Main Heading and Subheading */}
            <div className="text-center max-w-4xl">
                <h3 className="text-3xl  font-bold text-neutral-800 mb-4">
                    Pillar Page Strategy: Creating Authoritative Content Hubs
                </h3>
                <p className="text-lg text-neutral-600">
                    Pillar pages serve as the cornerstone of content cluster architecture, providing comprehensive
                    coverage of broad topics while linking to supporting cluster content that explores specific aspects
                    in greater detail.
                </p>
            </div>

            {/* Pillar Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-5">
                {pillarPages.map((pillar, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full rounded-xl p-6 bg-white shadow-lg border border-gray-100 flex flex-col justify-start"
                        >
                            {/* Card Heading */}
                            <h4 className="text-xl font-bold text-neutral-800 mb-3">
                                {pillar.heading}
                            </h4>
                            
                            {/* Main Description */}
                            <p className="text-neutral-600 mb-5">
                                {pillar.mainDescription}
                            </p>

                            {/* Callout Box (Light Green Styled) */}
                            <div
                                className={`rounded-lg p-3 my-4 border ${calloutColors.bg} ${calloutColors.border}`}
                            >
                                <p className={`text-sm font-medium ${calloutColors.text}`}>
                                    {pillar.callout}
                                </p>
                            </div>

                            {/* Key Features Section */}
                            <p className="text-sm font-semibold text-neutral-700 mt-2 mb-3">
                                Key Features:
                            </p>
                            <ul className="space-y-2">
                                {pillar.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2 text-neutral-700 text-sm"
                                    >
                                        <CheckCircle className={`w-4 h-4 ${calloutColors.icon} flex-shrink-0 mt-0.5`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
            
            {/* Placeholder for the green box content below the pillars, if needed */}
            {/* If the user wanted the bottom green box from the original image (image_38d5cd.png), 
                that would be added here as a full-width component. For now, it's omitted. */}
        </section>
    );
};

export default TopicalAuthorityPillars;