import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const AICTA = () => {
  const buttonColor = `text-blue-800`;
  const borderColor = `border-blue-900`;

  return (
    <section
      className={`bg-gradient-to-r from-blue-600 70% via-purple-600 to-purple-700 py-20 mt-20 w-full 
      flex flex-col items-center justify-center gap-10 px-4`}
    >
      <h5 className="text-3xl md:text-4xl font-bold text-white text-center">
    Ready to Master AI Engine Optimization?
      </h5>

      <h6 className="text-xl text-white text-center max-w-4xl">
      Transform your content strategy with our comprehensive AEO and GEO implementation services
      </h6>

      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
        
        {/* First Button → Contact */}
        <Link href="/contact" className="w-full sm:w-auto">
          <button
            className={`p-3 w-full hover:-translate-y-1 sm:w-auto cursor-pointer ${buttonColor} border-2 text-lg ${borderColor} 
            font-semibold rounded-md bg-white flex items-center justify-center gap-3`}
          >
            Start Your AEO Journey
            <ArrowRight />
          </button>
        </Link>

        {/* Second Button → Authority Hub */}
        <Link href="/authority-hub" className="w-full sm:w-auto">
          <button
            className="p-3 w-full sm:w-auto hover:-translate-y-1 cursor-pointer rounded-md border-white border-2 
            text-white text-lg font-semibold flex items-center justify-center gap-3"
          >
            <span>Explore More Guides</span>
            <BookOpen />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default AICTA