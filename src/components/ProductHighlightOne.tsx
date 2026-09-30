'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductHighlightOne() {
  const claraEarrings =
    PRODUCTS.find((p) => p.slug === 'mica-earrings-copy') ||
    PRODUCTS.find((p) => p.name.includes('Clara')) ||
    PRODUCTS[0];

  return (
    <section className="py-12 sm:py-20 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Large Editorial Photo with Bottom Title */}
        <div className="lg:col-span-8 relative h-[480px] sm:h-[620px] rounded-[24px] overflow-hidden bg-[#F7F6F2]">
          <Image
            src="https://framerusercontent.com/images/Fx6MJ3qsmjs1lm6f4HnDKpvx4g.webp?width=2836&height=3545"
            alt="Curated Mediterranean Earrings"
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
            <h3 className="text-[22px] sm:text-[28px] font-normal tracking-[-0.96px] text-white">
              Curated Mediterranean Earrings
            </h3>
          </div>
        </div>

        {/* Product Card for Clara Earrings */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="w-full max-w-[360px]">
            <ProductCard product={claraEarrings} aspectRatio="square" />
          </div>
        </div>
      </div>
    </section>
  );
}
