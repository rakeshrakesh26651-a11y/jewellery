'use client';

import React from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductHighlightTwo() {
  const biancaRing =
    PRODUCTS.find((p) => p.slug === 'bianca-ring') ||
    PRODUCTS[0];

  return (
    <section className="py-12 sm:py-20 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Product Card for Bianca Ring on Left */}
        <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center">
          <div className="w-full max-w-[360px]">
            <ProductCard product={biancaRing} aspectRatio="square" />
          </div>
        </div>

        {/* Large Editorial Image on Right with "Spanish heritage rings" */}
        <div className="lg:col-span-8 order-1 lg:order-2 relative h-[480px] sm:h-[620px] rounded-[24px] overflow-hidden bg-[#F7F6F2]">
          <Image
            src="https://framerusercontent.com/images/Lde3EurMOIH92xihWEF94kw4.png?width=1248&height=832"
            alt="Spanish heritage rings"
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
            <h3 className="text-[22px] sm:text-[28px] font-normal tracking-[-0.96px] text-white">
              Spanish heritage rings
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
