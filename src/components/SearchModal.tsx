'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import ProductCard from './ProductCard';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useStore();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>(PRODUCTS);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults(PRODUCTS);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(PRODUCTS);
    } else {
      const q = query.toLowerCase();
      const filtered = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
      setResults(filtered);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 py-8 min-h-screen flex flex-col">
        {/* Top Header with Close */}
        <div className="flex items-center justify-between pb-8">
          <div className="w-[120px]" />
          <div className="text-center">
            <span className="font-editorial text-[18px] sm:text-[20px] tracking-[0.14em] uppercase font-light text-[#1C1C1C]">
              SHRI VIHOT IMITATION
            </span>
          </div>
          <div className="w-[120px] flex justify-end">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 rounded-full text-[#1C1C1C] hover:opacity-60 transition-opacity"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Centered Search Bar matching Aurum screenshot */}
        <div className="max-w-xl mx-auto w-full mb-12">
          <div className="relative flex items-center bg-[#FAF9F5] rounded-full px-5 py-3 border border-[#ECEBE6]">
            <Search className="w-4 h-4 text-[#787878] mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${PRODUCTS.length} items...`}
              className="w-full bg-transparent text-[14px] text-[#1C1C1C] placeholder-[#787878] focus:outline-hidden"
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

        {/* Product Grid matching Aurum screenshot */}
        <div className="flex-1">
          {results.length === 0 ? (
            <div className="py-20 text-center text-[#787878] text-[15px]">
              No products found matching “{query}”
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((product) => (
                <div key={product.id} onClick={() => setIsSearchOpen(false)}>
                  <ProductCard product={product} aspectRatio="square" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
