import React from 'react';
import { Zap, ShieldCheck, Globe, TrendingUp } from 'lucide-react';

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
    'linear-gradient(to right,rgba(87, 96, 226, 0.9) 100%, rgba(62, 134, 230, 0.35) 100%,   rgba(120, 115, 236, 0.75) 100%   )';

  return (
    <section className="relative w-full overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-22 flex flex-col items-center justify-center text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
          Authority{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
            Intelligence Hub
          </span>
        </h1>

        <h2 className="text-2xl mt-2 text-white">
          The Definitive Resource for AI Engine Citation Mastery
        </h2>

        {/* Subtitle/Mission Statement */}
        <p className="mt-6 max-w-5xl text-xl  text-blue-100  leading-relaxed">
          Comprehensive methodologies, strategic frameworks, and tactical
          implementations for building digital authority that AI engines
          recognize, cite, and trust. Transform from click-seeking to
          authority-building with proven strategies that create defensible
          competitive moats in the generative AI era.
        </p>

        {/* Statistics Section */}
        <div className="mt-5 w-full max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-4 p-4 md:p-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
          flex flex-col items-center justify-center p-4  
          rounded-2xl shadow-lg
          bg-white/10 
          backdrop-blur-md 
          border border-white/20
        "
              >
                <span className="text-2xl  font-semibold text-white">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-white mt-1 text-center">
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
