'use client';

import React from 'react';

const BRANDS = [
  'VOGUE',
  'HARPER’S BAZAAR',
  'ELLE',
  'GRAZIA',
  'MARIE CLAIRE',
  'VANITY FAIR',
];

export default function PressTicker() {
  return (
    <section className="py-14 sm:py-20 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 text-center">
      <h2 className="text-[14px] uppercase tracking-[0.2em] text-[#1C1C1C] font-normal mb-8 sm:mb-10">
        FIND US IN
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
        {BRANDS.map((brand, idx) => (
          <div key={idx} className="w-full text-center py-2">
            <span className="font-sans text-[16px] sm:text-[19px] tracking-[0.15em] font-light text-[#1C1C1C]/40 hover:text-[#1C1C1C] transition-colors uppercase whitespace-nowrap cursor-default">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
