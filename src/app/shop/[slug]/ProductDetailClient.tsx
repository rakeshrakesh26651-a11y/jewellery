'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Product, formatPrice } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import ProductCard from '@/components/ProductCard';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const { addToCart } = useStore();
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [openAccordion, setOpenAccordion] = useState<string | null>('care');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Layout matching Aurum: Gallery on Left, Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Gallery */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[24px] overflow-hidden bg-[#F7F6F2]">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-all duration-300"
              />
            </div>

            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative aspect-square rounded-[14px] overflow-hidden bg-[#F7F6F2] transition-opacity ${
                      selectedImage === img ? 'ring-1 ring-[#1C1C1C]' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      sizes="120px"
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Details matching Aurum */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:pl-6">
            <div>
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#787878] font-normal block mb-2">
                {product.category.toUpperCase()}
              </span>
              <h1 className="text-[32px] sm:text-[40px] font-normal tracking-[-1px] text-[#1C1C1C] leading-tight">
                {product.name}
              </h1>
              <div className="mt-2 text-[20px] font-normal text-[#1C1C1C]">
                {formatPrice(product.price)}
              </div>
            </div>

            <p className="text-[14px] text-[#1C1C1C]/80 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector matching Aurum */}
            {product.sizes && product.sizes.length > 0 && product.sizes[0] !== 'Default Title' && (
              <div className="space-y-2 pt-2">
                <span className="text-[13px] text-[#1C1C1C] font-normal block">
                  Size
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full text-[13px] transition-colors ${
                        selectedSize === size
                          ? 'bg-[#1C1C1C] text-white'
                          : 'bg-[#FAF9F5] text-[#1C1C1C] hover:bg-[#ECEBE6]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button matching Aurum */}
            <div className="pt-2">
              <button
                onClick={() => addToCart(product, 1, selectedSize)}
                className="w-full py-3.5 px-6 rounded-full bg-[#1C1C1C] hover:bg-[#333333] text-white text-[14px] font-normal tracking-tight transition-colors shadow-xs cursor-pointer"
              >
                Add to Cart
              </button>
            </div>

            {/* Collapsible Accordions matching Aurum */}
            <div className="pt-4 border-t border-[#ECEBE6] divide-y divide-[#ECEBE6]">
              {/* Product Care */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('care')}
                  className="w-full flex items-center justify-between text-[14px] text-[#1C1C1C] text-left cursor-pointer"
                >
                  <span>Product Care</span>
                  {openAccordion === 'care' ? (
                    <ChevronUp className="w-4 h-4 text-[#787878]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#787878]" />
                  )}
                </button>
                {openAccordion === 'care' && (
                  <div className="mt-3 text-[13px] text-[#787878] leading-relaxed">
                    To extend the life of your pieces, avoid direct contact with liquids. We recommend storing them separately in a fabric pouch or in their original box to prevent bumps and scratches.
                  </div>
                )}
              </div>

              {/* Return Policy */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('returns')}
                  className="w-full flex items-center justify-between text-[14px] text-[#1C1C1C] text-left cursor-pointer"
                >
                  <span>Return Policy</span>
                  {openAccordion === 'returns' ? (
                    <ChevronUp className="w-4 h-4 text-[#787878]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#787878]" />
                  )}
                </button>
                {openAccordion === 'returns' && (
                  <div className="mt-3 text-[13px] text-[#787878] leading-relaxed">
                    You have 15 days from the date of purchase to request a return or exchange. Please visit our Policy page for more information.
                  </div>
                )}
              </div>

              {/* Handcrafting & Dispatch */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('dispatch')}
                  className="w-full flex items-center justify-between text-[14px] text-[#1C1C1C] text-left cursor-pointer"
                >
                  <span>Handcrafting & Dispatch</span>
                  {openAccordion === 'dispatch' ? (
                    <ChevronUp className="w-4 h-4 text-[#787878]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#787878]" />
                  )}
                </button>
                {openAccordion === 'dispatch' && (
                  <div className="mt-3 text-[13px] text-[#787878] leading-relaxed">
                    Each piece is individually handcrafted in our workshop, so the preparation time is 2–5 business days before delivery.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MORE FEATURED PRODUCTS matching Aurum */}
        <div className="mt-24 mb-16">
          <div className="mb-8 pb-3 border-b border-[#ECEBE6]">
            <h3 className="text-[20px] font-normal tracking-[-0.4px] text-[#1C1C1C]">
              MORE FEATURED PRODUCTS
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} aspectRatio="square" />
            ))}
          </div>
        </div>
      </div>

      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
