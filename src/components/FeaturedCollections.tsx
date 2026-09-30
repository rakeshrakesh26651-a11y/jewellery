'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COLLECTIONS } from '@/data/collections';

export default function FeaturedCollections() {
  return (
    <section className="py-12 sm:py-20 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
      {/* Header matching Aurum: Collections on left, Explore All on right */}
      <div className="flex items-center justify-between mb-8 pb-3">
        <h2 className="text-[20px] sm:text-[24px] font-normal tracking-[-0.48px] text-[#1C1C1C]">
          Collections
        </h2>

        <Link
          href="/collections"
          className="text-[14px] text-[#1C1C1C] hover:opacity-70 transition-opacity"
        >
          Explore All
        </Link>
      </div>

      {/* 3-Column Grid matching Aurum */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {COLLECTIONS.map((col) => (
          <Link
            key={col.slug}
            href={`/collections/${col.slug}`}
            className="group relative block aspect-[3/4] sm:aspect-square md:aspect-[3/4] rounded-[24px] overflow-hidden bg-[#F7F6F2]"
          >
            <Image
              src={col.image}
              alt={col.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Title at bottom left matching Aurum: Earrings, Necklaces, Rings */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h3 className="text-[32px] sm:text-[40px] font-normal tracking-[-1.6px] leading-tight text-white">
                {col.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
