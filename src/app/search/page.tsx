'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return PRODUCTS;
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Centered Search Bar matching Aurum screenshot */}
        <div className="max-w-xl mx-auto w-full my-8">
          <div className="relative flex items-center bg-[#FAF9F5] rounded-full px-5 py-3 border border-[#ECEBE6]">
            <Search className="w-4 h-4 text-[#787878] mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${PRODUCTS.length} items...`}
              className="w-full bg-transparent text-[14px] text-[#1C1C1C] placeholder-[#787878] focus:outline-hidden"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-[#787878] hover:text-[#1C1C1C]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-20">
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-[#787878] text-[15px]">
              No products found matching “{query}”
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} aspectRatio="square" />
              ))}
            </div>
          )}
        </div>
      </div>

      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
