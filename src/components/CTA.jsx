import { ArrowRight, Globe } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
         <section className="relative py-20 min-h-[80vh]  mt-20 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-100 to-blue-200" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl  font-bold text-black mb-6 leading-tight">
            Ready to Build{' '}
            <span className="text-[#085DA0]">AI Authority</span>{" "}?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-10">
            The transition to AI-driven information discovery is not a distant trend—its the current reality. 
            The organizations that thrive will be those that move decisively to build genuine, verifiable authority.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#085DA0] hover:bg-blue-950 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-blue-900/30 transition-all hover:-translate-y-1 duration-300"
            >
              <span>Start Your Authority Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/authority-hub"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white  hover:bg-[#085DA0] hover:text-white text-[#085DA0] hover:-translate-y-1 font-semibold text-lg rounded-lg shadow-lg border-2 border-blue-900 hover:shadow-blue-900/20 transition-all duration-300"
            >
              <Globe className="w-5 h-5" />
              <span>Explore Authority Hub</span>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default CTA