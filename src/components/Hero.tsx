"use client";

import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 -z-10">
        <Image 
          src="/hero1.jpg" // replace with your background image path
          alt="City Buildings"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div> */}

      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero1.jpg"
          alt="City Buildings"
          fill
          className="object-cover object-center"
          priority
        />

        {/* black overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="text-center px-4 md:px-8 lg:px-16">
        <p className="text-sm md:text-base lg:text-lg text-blue-200 tracking-widest mb-3 font-bold">
          WELCOME TO TUCKER TECHNOLOGY
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          IN A WIRELESS WORLD <br />
          <span className="text-white">
            TTI KEEPS YOU <br /> CONNECTED
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
          TTI is the network behind your wireless network. Since 1995, we’ve
          been building the largest and widest network of telecommunications
          professionals in the industry.
        </p>
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
          Connect With Us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
