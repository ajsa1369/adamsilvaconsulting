import { Shield } from 'lucide-react'
import React from 'react'

const PrivacyHero = () => {
  return (
    <section 
      className="w-full min-h-[50vh] flex items-center justify-center flex-col gap-5 px-4 sm:px-6 lg:px-8 py-20 text-center"
      style={{
        // Gradient background from blue to white
        background: 'linear-gradient(to bottom, #eff6ff, #ffffff)' // blue-50 to white
      }}
    >
      {/* Icon with circular blue background */}
      <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full shadow-lg mb-4">
        <Shield className='w-10 h-10 text-blue-600'/>
      </div>

      {/* Responsive Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight">
        Privacy Policy
      </h1>

      {/* Responsive Subheading */}
      <h2 className='text-xl md:text-2xl max-w-4xl text-center text-neutral-600 '>
        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
      </h2>

      {/* Last Updated Date */}
      <p className='mt-4 text-neutral-500 text-lg md:text-xl '>
        Last updated: September 21, 2025
      </p>
    </section>
  )
}

export default PrivacyHero