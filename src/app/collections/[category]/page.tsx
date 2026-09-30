import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { COLLECTIONS } from '@/data/collections';
import ProductCard from '@/components/ProductCard';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: 'earrings' },
    { category: 'necklaces' },
    { category: 'rings' },
  ];
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const validCategories = ['earrings', 'necklaces', 'rings'];
  if (!validCategories.includes(category.toLowerCase())) {
    notFound();
  }

  const matchingProducts = PRODUCTS.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="mb-10 pb-4 border-b border-[#ECEBE6]">
          <h1 className="text-[28px] sm:text-[36px] font-normal tracking-[-0.8px] text-[#1C1C1C]">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 mb-20">
          {matchingProducts.map((product) => (
            <ProductCard key={product.id} product={product} aspectRatio="square" />
          ))}
        </div>
      </div>

      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
