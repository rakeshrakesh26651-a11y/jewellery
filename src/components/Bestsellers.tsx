'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Exact Aurum Bestseller products from Section Bestsellers
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 sm:py-20 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
      {/* Header matching Aurum: Bestsellers on left, View Shop on right */}
      <div className="flex items-center justify-between mb-8 pb-3">
        <h2 className="text-[20px] sm:text-[24px] font-normal tracking-[-0.48px] text-[#1C1C1C]">
          Bestsellers
        </h2>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-[#ECEBE6] hover:border-[#1C1C1C] text-[#1C1C1C] transition-all"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-[#ECEBE6] hover:border-[#1C1C1C] text-[#1C1C1C] transition-all"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <Link
            href="/collections/all"
            className="text-[14px] text-[#1C1C1C] hover:opacity-70 transition-opacity"
          >
            View Shop
          </Link>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 sm:space-x-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12"
      >
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="w-[240px] sm:w-[280px] lg:w-[310px] flex-shrink-0"
          >
            <ProductCard product={product} aspectRatio="square" />
          </div>
        ))}
      </div>
    </section>
  );
}
