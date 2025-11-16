import { ArrowRight, ExternalLink, Link2, Target } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const GuideCTA = () => {
 return (
    <section className="mt-20 mb-10 flex flex-col items-center justify-center gap-5 py-20 bg-[#025CA1]">
      <h4 className="text-3xl md:text-4xl font-bold text-black ">
     Need Custom Implementation Support?
      </h4>
      <p className="text-center max-w-4xl w-full mx-auto text-xl text-blue-100">
     Our strategic implementation guides provide comprehensive frameworks, but every organization has unique requirements. Adam Silva Consulting offers customized implementation support to accelerate your AI authority building journey.
      </p>
      <div className="flex mt-10 items-center justify-center flex-col md:flex-row gap-10 ">
        <button className="p-3  hover:-translate-y-1 flex items-center text-blue-800 bg-blue-50 justify-center gap-2 rounded-lg ">
          <Link href="/contact" className="text-lg">
            Request Implementation Consultation
          </Link>
          <ArrowRight className="w-5 h-5 text-center" />
        </button>
        <button className="p-3 flex items-center border-2 hover:-translate-y-1 text-white  justify-center gap-2 rounded-lg ">
          <Link href="/authority-hub" className="text-lg">
            Return To Authority Hub
          </Link>
          <ExternalLink className="w-5 h-5 text-center" />
        </button>
      </div>
    </section>
  );
}

export default GuideCTA