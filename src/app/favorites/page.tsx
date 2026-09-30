'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import ProductCard from '@/components/ProductCard';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

export default function FavoritesPage() {
  const { wishlist } = useStore();

  const favoriteProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="mb-10 pb-4 border-b border-[#ECEBE6]">
          <h1 className="text-[28px] sm:text-[36px] font-normal tracking-[-0.8px] text-[#1C1C1C]">
            Favorites
          </h1>
          <p className="text-[14px] text-[#787878] mt-1">
            {favoriteProducts.length} {favoriteProducts.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4 max-w-md mx-auto">
            <p className="text-[16px] text-[#1C1C1C]">You haven’t added any favorites yet.</p>
            <div>
              <Link
                href="/collections/all"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1C1C1C] text-white text-[13px] tracking-tight hover:bg-[#333333] transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 mb-20">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} aspectRatio="square" />
            ))}
          </div>
        )}
      </div>

      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
