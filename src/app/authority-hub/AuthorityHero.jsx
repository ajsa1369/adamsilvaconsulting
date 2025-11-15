import React from 'react';
import { Zap, ShieldCheck, Globe, TrendingUp } from 'lucide-react';

// Using a public placeholder for the background image path.
// Replace this with your actual uploaded image URL: './assets/AuthorityHero.png'
const bgImageUrl = './assets/AuthorityHero.jpg';

const stats = [
  {
    icon: Zap,
    value: '50%',
    label: 'Traffic Decline Risk',
  },
  {
    icon: ShieldCheck,
    value: '60%',
    label: 'Zero-Click Searches',
  },
  {
    icon: Globe,
    value: '85%',
    label: 'AI Skills Gap',
  },
];

const AuthorityHero = () => {
  const gradientOverlay =
    'linear-gradient(to right, rgba(29, 78, 216, 0.95) 0%, rgba(109, 40, 217, 0.85) 100%)';

  return (
    <section className="relative w-full overflow-hidden min-h-screen md:min-h-[75vh]">
      {/* Background Image and Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: gradientOverlay }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl  font-extrabold text-white leading-tight drop-shadow-2xl">
          The Authority Intelligence Hub
        </h1>

        <h2 className="text-2xl mt-2 text-white">
          The Definitive Resource for AI Engine Citation Mastery
        </h2>

        {/* Subtitle/Mission Statement */}
        <p className="mt-6 max-w-4xl text-xl  text-blue-100 font-light leading-relaxed">
          Comprehensive methodologies, strategic frameworks, and tactical
          implementations for building digital authority that AI engines
          recognize, cite, and trust. Transform from click-seeking to
          authority-building with proven strategies that create defensible
          competitive moats in the generative AI era.
        </p>

        {/* Statistics Section */}
        <div className="mt-5 w-full max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-4 p-4 md:p-8 rounded-2xl ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm uppercase tracking-wider text-blue-200 mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityHero;
