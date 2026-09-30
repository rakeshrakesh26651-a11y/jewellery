'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1 }
      );

      tl.fromTo(
        imageRef.current,
        { opacity: 0, y: 60, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 },
        '-=0.8'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-[100px] sm:pt-[120px] pb-12 sm:pb-20 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center"
    >
      {/* Large Brand Logo Display matching top viewport */}
      <div ref={logoRef} className="w-full flex justify-center py-6 sm:py-12 md:py-16">
        <h1 className="font-editorial text-[32px] sm:text-[54px] md:text-[76px] lg:text-[96px] font-light tracking-[0.06em] sm:tracking-[0.1em] uppercase text-[#1C1C1C] text-center leading-none select-none">
          SHRI VIHOT IMITATION
        </h1>
      </div>

      {/* Full-Width Rounded Hero Image Container matching Aurum */}
      <div
        ref={imageRef}
        className="relative w-full h-[400px] sm:h-[580px] md:h-[720px] lg:h-[820px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#F7F6F2] shadow-sm"
      >
        <Image
          src="https://framerusercontent.com/images/pXt1Re6BMy4kyoOxbWLJMtPdBU.png?width=1376&height=768"
          alt="SHRI VIHOT IMITATION Heritage Jewelry"
          fill
          priority
          sizes="(max-width: 1800px) 100vw, 1800px"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
