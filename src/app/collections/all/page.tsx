'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

export default function ShopAllPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Filter Pills matching Aurum ALL | EARRINGS | NECKLACES | RINGS */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto no-scrollbar py-6 mb-8 border-b border-[#ECEBE6]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[12px] uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#1C1C1C] text-white'
                  : 'bg-[#FAF9F5] hover:bg-[#ECEBE6] text-[#1C1C1C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid matching Aurum 4-column layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 mb-20">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} aspectRatio="square" />
          ))}
        </div>
      </div>

      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
