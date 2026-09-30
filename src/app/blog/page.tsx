import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/data/blog';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

export default function BlogIndexPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="mb-12 pb-4 border-b border-[#ECEBE6]">
          <h1 className="text-[32px] sm:text-[44px] font-normal tracking-tight text-[#1C1C1C]">
            Blog
          </h1>
        </div>

        {/* Blog Posts Grid matching Aurum */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col space-y-4"
            >
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-[#F7F6F2]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-[12px] text-[#787878]">
                  <span>{post.category}</span>
                  <span>/</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-normal text-[#1C1C1C] leading-snug group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h3>
                <p className="text-[14px] text-[#787878] line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
