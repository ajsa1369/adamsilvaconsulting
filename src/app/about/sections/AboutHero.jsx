import React from 'react';

const AboutHero = () => {
  const bgImageUrl = "./assets/abouthero.jpg";

  return (
    // Section with fixed background image and dark overlay for text contrast
    <section
      className="w-full min-h-[80vh]  flex items-center justify-center flex-col gap-6 p-6  text-center relative overflow-hidden"
      style={{
        // Dark gradient overlay for text readability, layered over the background image
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('${bgImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Keeps the image fixed during scroll (nice effect)
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div className="z-10 max-w-7xl mx-auto rounded-xl p-4 sm:p-6">
        {/* Responsive Heading */}
        <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 drop-shadow-lg">
          <span>About</span>
          {" "}
          {/* Gradient Text Span */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Adam Silva Consulting
          </span>
        </h1>

        {/* Responsive Sub-Heading */}
        <h2 className="text-gray-200 text-xl sm:text-2xl  font-medium tracking-wide mb-8">
          Pioneering the Evolution from Traditional SEO to AI Authority Building
        </h2>

        {/* Responsive Paragraph */}
        <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed opacity-90 rounded-lg  p-4">
          In the age of generative AI, the strategic objective has irrevocably shifted from ranking for keywords to being cited for authority. Adam Silva Consulting leads this transformation, helping businesses become the authoritative sources that AI engines trust and recommend.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;