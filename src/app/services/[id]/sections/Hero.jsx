import { ArrowRight, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = ({ hero }) => {
  const { heading, subheading } = hero;
  const backgroundImage = "url('/assets/serviceBg.jpg')";

  return (
    <section
      className="relative flex items-center justify-center flex-col min-h-[90vh] gap-10 bg-cover bg-center"
      style={{ backgroundImage }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10">
        <Image
          src="/assets/service.jpg"
          width={70}
          height={70}
          alt="service-logo"
        />
        <h1 className="text-3xl md:text-4xl text-white lg:text-6xl font-bold">
          {heading}
        </h1>
        <h2 className="text-2xl text-white max-w-4xl text-center">
          {subheading}
        </h2>

        <div className="flex items-center justify-center gap-5">
          <button className="py-3 px-4 rounded-xl bg-[#0F6CBB] text-white flex items-center justify-center gap-2">
            <Link href="/contact" className="text-lg">
              Get Started
            </Link>
            <ArrowRight />
          </button>

          <button className="py-3 px-4 rounded-xl border-2 border-[#0F6CBB] text-[#0F6CBB] hover:bg-[#0a65b5] hover:text-white flex items-center justify-center gap-2">
            <Link href="/contact" className="text-lg">
              View All Services
            </Link>
            <Target />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
