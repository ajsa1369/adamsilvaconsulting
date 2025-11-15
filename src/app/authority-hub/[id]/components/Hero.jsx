import React from 'react';
import { ArrowLeft } from 'lucide-react';

// Mocked Link component for standalone React environment
const MockLink = ({ href, children, className }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      console.log(`Navigating to ${href}`);
    }}
    className={className}
  >
    {children}
  </a>
);

// --- Component Definition ---

const  Hero = ({ heroData }) => {
  const { heading, subheading, description, stats, linearGradient } = heroData;
    const words = heading.split(' ');
  const lastWord = words.pop();
  const mainHeading = words.join(' ');

  return (
    <section
      className={`w-full min-h-screen  flex flex-col items-center justify-center gap-8 p-6 sm:p-10 text-white bg-gradient-to-r ${linearGradient}`}
    >
      {/* Back Link - Using MockLink for standalone compatibility */}
      <MockLink
        href="/authority-hub"
        className="text-white text-md flex items-center justify-center gap-2  hover:text-gray-200 transition duration-200"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="cursor-pointer hover:underline">
          Back to Authority Hub
        </span>
      </MockLink>

      <div className="text-center mb-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2 leading-tight">
          {/* Main heading part (white) */}
          {mainHeading}{' '}
          {/* Last word with Yellow to Amber gradient */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            {lastWord}
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-purple-200">
          {subheading}
        </h2>
      </div>

      {/* Description */}
      <p className="max-w-4xl text-center text-xl  text-white/90 px-4 ">
        {description}
      </p>

      {/* Stats Container - Responsive Grid/Flex for Stats */}
      <div className="flex flex-wrap items-stretch justify-center gap-6 sm:gap-8 max-w-6xl w-full">
        {stats.map((stat, index) => (
          // Stat Card with Glassmorphism Effect
          <div
            key={index}
            className="
              text-center p-6 md:p-8 rounded-2xl
              bg-white/10 backdrop-blur-lg
              border border-white/30 
              shadow-2xl shadow-black/30
              transition-all duration-300
              w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]
              flex flex-col justify-center items-center
              hover:scale-[1.03] hover:border-white/50
            "
          >
            <h3 className="text-3xl font-bold mb-1 text-white">
              {stat.value}
            </h3>
            <p className="font-semibold text-white/90 mb-1 leading-tight">
              {stat.label1}
            </p>
            <p className="text-sm text-white/70">{stat.label2}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

