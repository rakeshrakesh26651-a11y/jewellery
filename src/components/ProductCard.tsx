'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Product, formatPrice } from '@/data/products';
import { useStore } from '@/context/StoreContext';

interface ProductCardProps {
  product: Product;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  className?: string;
  showWishlist?: boolean;
}

export default function ProductCard({
  product,
  aspectRatio = 'square',
  className = '',
  showWishlist = true,
}: ProductCardProps) {
  const { toggleWishlist, isInWishlist } = useStore();
  const [isHovered, setIsHovered] = useState(false);
  const isFavorited = isInWishlist(product.id);

  const ratioClass =
    aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : aspectRatio === 'landscape'
      ? 'aspect-[4/3]'
      : 'aspect-square';

  return (
    <div
      className={`group relative flex flex-col ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container matching Aurum */}
      <div
        className={`relative w-full ${ratioClass} overflow-hidden rounded-[20px] bg-[#F7F6F2] transition-all duration-500`}
      >
        <Link href={`/shop/${product.slug}`} className="block w-full h-full">
          {/* Primary Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover object-center transition-all duration-700 ease-out ${
              isHovered && product.secondaryImage
                ? 'opacity-0 scale-105'
                : 'opacity-100 scale-100 group-hover:scale-105'
            }`}
          />

          {/* Secondary Image on Hover */}
          {product.secondaryImage && (
            <Image
              src={product.secondaryImage}
              alt={`${product.name} alternate view`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover object-center transition-all duration-700 ease-out absolute inset-0 ${
                isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            />
          )}
        </Link>

        {/* Wishlist Button matching Aurum's top-right heart position */}
        {showWishlist && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
            className="absolute top-4 right-4 z-10 p-2 text-[#1C1C1C] opacity-70 hover:opacity-100 transition-all duration-200"
          >
            <Heart
              className={`w-4 h-4 transition-transform ${
                isFavorited ? 'fill-[#1C1C1C] scale-110 text-[#1C1C1C]' : 'hover:scale-110'
              }`}
            />
          </button>
        )}
      </div>

      {/* Product Details matching Aurum */}
      <div className="mt-3.5 flex flex-col space-y-0.5">
        <Link
          href={`/shop/${product.slug}`}
          className="text-[15px] font-normal text-[#1C1C1C] tracking-tight leading-snug hover:opacity-80 transition-opacity line-clamp-1"
        >
          {product.name}
        </Link>
        <span className="text-[14px] text-[#1C1C1C] tracking-tight">
          {formatPrice(product.price)}
        </span>
      </div>
    </div>
  );
}
