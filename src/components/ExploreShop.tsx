'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ExploreShop() {
  return (
    <section className="py-12 sm:py-20 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
      <div className="relative rounded-[28px] overflow-hidden bg-[#1C1C1C] text-white py-20 sm:py-32 px-6 sm:px-12 text-center shadow-sm">
        {/* Background Image matching Aurum */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://framerusercontent.com/images/tdPiIc5kbcFNlWD8FOIgFdtsPZo.png?width=1024&height=1024"
            alt="Jewelry that redefines elegance"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <h2 className="text-[32px] sm:text-[44px] md:text-[50px] font-normal leading-tight tracking-[-1.6px] text-white">
            Jewelry that redefines elegance.
          </h2>

          <div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-[#1C1C1C] text-[13px] font-medium tracking-tight hover:bg-white/90 transition-colors"
            >
              More About SHRI VIHOT IMITATION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
