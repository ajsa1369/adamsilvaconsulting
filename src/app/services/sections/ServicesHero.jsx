import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServicesHero = () => {
  return (
    <section 
      className='flex items-center justify-center flex-col gap-8 md:min-h-[70vh] p-8 text-center'
      style={{
        // Gradient background from white (top left) to blue-200 (bottom right)
        background: 'linear-gradient(to bottom right, #ffffff, #EBF3FA)' 
      }}
    >
      {/* Responsive Heading */}
      <h1 className='text-black text-4xl sm:text-5xl lg:text-6xl font-bold max-w-5xl leading-tight drop-shadow-sm'>
        <span>AI-Powered{" "}</span>
        <span className='text-[#085DA0]'>Marketing Solutions</span>
      </h1>

      {/* Responsive Subtitle */}
      <h2 className='text-lg md:text-xl text-neutral-700 max-w-4xl text-center leading-relaxed'>
        Comprehensive services designed to build authority that AI engines cite and trust. Transform your digital presence with our integrated AI-first approach.
      </h2>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
        {/* Primary CTA Button/Link */}
        <a 
          href="/contact" 
          className="bg-[#085DA0] flex items-center justify-center gap-3 text-md font-semibold p-4 sm:p-5 rounded-xl text-white shadow-xl hover:bg-[#07538d] transition duration-300 transform hover:scale-[1.02] cursor-pointer w-full sm:w-auto"
        >
          Start Your Transformation 
          <ArrowRight className='w-5 h-5'/>
        </a>
        
        {/* Secondary CTA Button/Link */}
        <Link
          href="/authority-hub" 
          className="bg-white border-2 border-[#085DA0] flex items-center justify-center gap-3 text-md font-semibold p-4 sm:p-5 rounded-xl text-[#085DA0] hover:bg-blue-50 transition duration-300 transform hover:scale-[1.02] cursor-pointer w-full sm:w-auto"
        >
          Explore Authority Hub
          <ArrowRight className='w-5 h-5'/>
        </Link>
      </div>
    </section>
  )
}

export default ServicesHero