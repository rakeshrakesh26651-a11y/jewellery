'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandOutro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0.2, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-32 max-w-[1200px] mx-auto px-6 sm:px-12 text-center"
    >
      <h2
        ref={textRef}
        className="text-[26px] sm:text-[32px] md:text-[36px] font-normal leading-[1.2] tracking-[-1.28px] text-[#1C1C1C]"
      >
        From the heart of Rajkot, Gujarat, India, SHRI VIHOT IMITATION transforms ancestral techniques into contemporary treasures, where every detail tells a story of passion, culture, and devotion to beauty.
      </h2>
    </section>
  );
}
