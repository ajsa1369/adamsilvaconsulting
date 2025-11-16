import { ArrowRight, Target } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ServiceCTA = ({ cta }) => {
  return (
    <section className="mt-20 mb-10 flex flex-col items-center justify-center gap-5 py-20 bg-[#0a61ad]">
      <h4 className="text-3xl md:text-4xl font-bold text-white ">
        Ready To Get Started?
      </h4>
      <p className="text-center max-w-4xl w-full mx-auto text-xl text-blue-100">
        {cta}
      </p>
      <div className="flex mt-10 items-center justify-center flex-col md:flex-row gap-10 ">
        <button className="p-3  hover:-translate-y-1 flex items-center text-blue-800 bg-blue-100 justify-center gap-2 rounded-lg ">
          <Link href="/contact" className="text-lg">
            Contact Us Today
          </Link>
          <ArrowRight className="w-5 h-5 text-center" />
        </button>
        <button className="p-3 flex items-center border-2 hover:-translate-y-1 text-white  justify-center gap-2 rounded-lg ">
          <Link href="/services" className="text-lg">
            Explore All Services
          </Link>
          <Target className="w-5 h-5 text-center" />
        </button>
      </div>
    </section>
  );
};

export default ServiceCTA;
