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

const  Hero = ({ heroData ,color}) => {
  const { heading, subheading, description, stats, linearGradient } = heroData;
    const words = heading.split(' ');
  const lastWord = words.pop();
  const mainHeading = words.join(' ');
  const lightColor=`text-${color}-200`
  const subColor=`text-${color}-300`

  return (
    <section
      className={`w-full min-h-screen  flex flex-col items-center justify-center gap-8  sm:p-10 text-white bg-gradient-to-br ${linearGradient}`}
    >
      {/* Back Link - Using MockLink for standalone compatibility */}
      <MockLink
        href="/authority-hub"
        className={`${lightColor} text-md flex items-center justify-center gap-2  hover:text-gray-200 transition duration-200`}
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
        <h2 className={`text-2xl md:text-3xl font-light ${subColor}`}>
          {subheading}
        </h2>
      </div>

      {/* Description */}
      <p className={`max-w-4xl text-center text-xl  ${lightColor} px-4 `}>
        {description}
      </p>

      {/* Stats Container - Responsive Grid/Flex for Stats */}
      <div className="flex flex-wrap items-stretch justify-center mt-10 mb-20 gap-6 sm:gap-8 max-w-6xl w-full">
        {stats?.map((stat, index) => (
          // Stat Card with Glassmorphism Effect
          <div
            key={index}
            className="
              text-center p-4  rounded-2xl
              bg-white/10 backdrop-blur-lg
              border border-white/30 
              shadow-2xl shadow-black/30
              transition-all duration-300
              w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]
              flex flex-col justify-center items-center
              hover:scale-[1.03] hover:border-white/50
            "
          >
            <h3 className="text-2xl font-bold mb-1 text-white">
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

