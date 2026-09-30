'use client';

import React from 'react';

export default function Testimonial() {
  return (
    <section className="py-20 sm:py-28 max-w-[1200px] mx-auto px-6 text-center">
      <blockquote className="text-[28px] sm:text-[38px] md:text-[44px] font-normal leading-[1.25] tracking-[-1px] text-[#1C1C1C]">
        “Elegant, radiant, and utterly captivating.”
      </blockquote>

      <div className="mt-4">
        <span className="text-[14px] uppercase tracking-[0.2em] text-[#1C1C1C]/60 font-medium">
          Vura
        </span>
      </div>
    </section>
  );
}
