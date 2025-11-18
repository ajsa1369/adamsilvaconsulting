import React from 'react';
import { Check, CheckCircle, ArrowRight } from 'lucide-react'; // Added CheckCircle and ArrowRight

const TechnicalFrameworkPillars = () => {
    // Data for the three Core Web Vitals cards, matching image_46e28c.png
    const webVitalsData = [
        {
            metric: '< 2.5 seconds',
            name: 'Largest Contentful Paint (LCP)',
            description: 'Loading performance optimization',
            strategies: [
                'Critical resource preloading',
                'Image optimization and WebP conversion',
                'Server-side rendering implementation',
                'CDN and caching strategies',
            ],
        },
        {
            metric: '< 200 milliseconds',
            name: 'Interaction to Next Paint (INP)',
            description: 'Responsiveness and interactivity',
            strategies: [
                'JavaScript optimization',
                'Third-party script management',
                'Event handler optimization',
                'Main thread workload reduction',
            ],
        },
        {
            metric: '< 0.1',
            name: 'Cumulative Layout Shift (CLS)',
            description: 'Visual stability and layout prevention',
            strategies: [
                'Image dimension specification',
                'Font loading optimization',
                'Dynamic content stabilization',
                'CSS containment implementation',
            ],
        },
    ];

    // Data for the new "Performance Optimization Implementation" section, matching image_46ed6f.jpg
    const performanceImplementation = {
        title: 'Performance Optimization Implementation',
        description:
            'Our technical SEO specialists implement comprehensive performance optimization strategies that ensure your website meets and exceeds Core Web Vitals thresholds while maintaining optimal user experience.',
        checklist: [
            'Advanced performance auditing',
            'Custom optimization strategies',
            'Continuous monitoring systems',
        ],
        buttonText: 'Get Performance Audit →',
        imageSrc: '/assets/authority-hub/technical-framework-excellence/2.png', // Placeholder for the server room image
    };

    // Styling constants
    const primaryTextColor = 'text-neutral-800';
    const secondaryTextColor = 'text-neutral-600';
    const cardBg = 'bg-white border border-gray-100 shadow-md';
    const checkColor = 'text-green-600'; // Green for the checklist icons

    // Styling for the new implementation box
    const implementationBoxBg = 'bg-white border border-gray-100 shadow-lg';
    const implementationCheckColor = 'text-green-600';

    return (
        <section className="mt-16 py-10 flex flex-col items-center justify-center gap-10 p-4 sm:p-6 bg-gray-50"> 
            
            {/* --- Core Web Vitals Introduction --- */}
            <div className="text-center max-w-4xl mb-8">
                <h2 className={`text-3xl md:text-4xl font-bold ${primaryTextColor} mb-4`}>
                    Core Web Vitals and Performance Optimization
                </h2>
                <p className={`text-lg ${secondaryTextColor}`}>
                    Master the 2025 Core Web Vitals metrics that measure real-world user experience across three key
                    dimensions of website performance.
                </p>
            </div>

            {/* --- Core Web Vitals Cards Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {webVitalsData.map((vital, index) => (
                    <div
                        key={index}
                        className={`flex flex-col rounded-xl p-6 ${cardBg} text-center`}
                    >
                        {/* Metric Value */}
                        <p className={`text-2xl font-bold ${primaryTextColor} mb-2`}>
                            {vital.metric}
                        </p>
                        {/* Vital Name and Description */}
                        <h3 className={`text-xl font-semibold ${primaryTextColor} mb-1`}>
                            {vital.name}
                        </h3>
                        <p className={`text-base ${secondaryTextColor} mb-6`}>
                            {vital.description}
                        </p>

                        {/* Optimization Strategies Section */}
                        <p className={`text-sm font-semibold text-left ${primaryTextColor} mb-3`}>
                            Optimization Strategies:
                        </p>
                        <ul className="space-y-2 text-left">
                            {vital.strategies.map((strategy, i) => (
                                <li
                                    key={i}
                                    className={`flex items-start gap-2 ${secondaryTextColor} text-sm`}
                                >
                                    {/* Using simple Check icon with green color */}
                                    <Check className={`w-4 h-4 ${checkColor} flex-shrink-0 mt-1`} />
                                    <span>{strategy}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalFrameworkPillars;