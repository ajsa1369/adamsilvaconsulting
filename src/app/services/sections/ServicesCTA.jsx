import { ArrowRight, Globe, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServicesCTA = () => {
  return (
         <section className="relative py-20 min-h-[80vh]  mt-20 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[#0F6CBB]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl  font-bold text-white mb-6 leading-tight">
         Ready to Build AI Authority?

          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-10">
      Start your transformation with a comprehensive strategy consultation. Let's discuss how our integrated AI services can position your brand as the authority AI engines cite.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-[#0F6CBB] text-[#0F6CBB] font-semibold text-lg rounded-lg shadow-lg hover:shadow-blue-900/30 transition-all hover:text-white hover:-translate-y-1 duration-300"
            >
              <span>Schedule  Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/authority-hub"
              className="inline-flex items-center justify-center gap-3 px-8 py-4   hover:bg-[#085DA0] hover:text-white text-white hover:-translate-y-1 font-semibold text-lg rounded-lg shadow-lg border-2 border-white hover:shadow-blue-900/20 transition-all duration-300"
            >
              <span>Learn About Us</span>
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
  )
}

export default ServicesCTA