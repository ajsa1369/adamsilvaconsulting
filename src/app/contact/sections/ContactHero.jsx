import React from 'react';

const ContactHero = () => {
  // Custom style for the diamond grid texture and blue gradient overlay
const backgroundStyle = {
  backgroundColor: '#298CD7',
  backgroundImage: `
    linear-gradient(to top right, rgba(52, 140, 210, 0.7), rgba(39, 130, 201, 0.7)),
    
    repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.06) 0px,
      rgba(255, 255, 255, 0.06) 20px,
      transparent 40px,
      transparent 60px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.06) 0px,
      rgba(255, 255, 255, 0.06) 20px,
      transparent 40px,
      transparent 60px
    )
  `,
  color: '#fff',
  backgroundAttachment: 'fixed',
};


  return (
    <section 
      className="w-full flex items-center justify-center flex-col gap-8 p-8 py-20 md:min-h-[70vh] text-center shadow-2xl"
      style={backgroundStyle}
    >
      <div className="max-w-7xl mx-auto z-10">
        {/* Responsive Heading with Yellow-Orange Gradient */}
        <h1 className='text-4xl sm:text-5xl  font-extrabold text-white leading-tight drop-shadow-lg'>
          <span>Let's Build Your </span>
          {/* Gradient text from light yellow (yellow-300) to dark yellow/orange (orange-500) */}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500'>
            AI Authority
          </span>
        </h1>
        {/* Responsive Sub-text */}
        <p className='mt-6 max-w-4xl text-lg sm:text-xl lg:text-2xl text-white opacity-90 mx-auto font-light leading-relaxed'>
          Ready to transform your business with AI-powered marketing? Let's discuss your vision and create a strategic roadmap for digital authority.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;