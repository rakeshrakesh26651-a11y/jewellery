import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COLLECTIONS } from '@/data/collections';
import Testimonial from '@/components/Testimonial';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

export default function CollectionsPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Header matching Aurum */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-[14px] uppercase tracking-[0.2em] text-[#1C1C1C] font-normal mb-3">
            COLLECTIONS
          </h1>
          <p className="text-[24px] sm:text-[32px] md:text-[38px] font-normal tracking-[-1px] text-[#1C1C1C] max-w-2xl leading-snug">
            We craft pieces meant to be worn, lived in, and loved.
          </p>
        </div>

        {/* 3 Large Collection Cards matching Aurum */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="group relative block aspect-[3/4] rounded-[24px] overflow-hidden bg-[#F7F6F2]"
            >
              <Image
                src={col.image}
                alt={col.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 z-10">
                <h3 className="text-[32px] sm:text-[40px] font-normal tracking-[-1.6px] leading-tight text-white">
                  {col.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Testimonial />
      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
