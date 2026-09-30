import React from 'react';
import Image from 'next/image';
import FeaturedCollections from '@/components/FeaturedCollections';
import Testimonial from '@/components/Testimonial';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

export default function AboutPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Hero Section matching Aurum's "Our Story" banner */}
        <div className="relative w-full h-[380px] sm:h-[500px] md:h-[620px] rounded-[28px] overflow-hidden bg-[#1C1C1C] mb-16 sm:mb-24 flex items-center justify-center">
          <Image
            src="https://framerusercontent.com/images/rzNTJ5ezCQj0nPrA3oBa4sWZx8.png?width=2352&height=1252"
            alt="Our Story"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Centered Title matching Aurum screenshot */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-[44px] sm:text-[68px] md:text-[84px] font-normal tracking-[-2px] text-white">
              Our Story
            </h1>
          </div>
        </div>

        {/* Brand Statement matching Aurum about */}
        <div className="max-w-3xl mx-auto text-center py-12">
          <h2 className="text-[26px] sm:text-[34px] font-normal leading-[1.25] tracking-[-1px] text-[#1C1C1C]">
            Welcome to a new dimension of jewelry—SHRI VIHOT IMITATION blends meticulous design, flawless craftsmanship, and precious materials to elevate your style and awaken your senses.
          </h2>
        </div>
      </div>

      <Testimonial />
      <FeaturedCollections />
      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
