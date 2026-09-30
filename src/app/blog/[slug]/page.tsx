import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <article className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2 text-[12px] text-[#787878] uppercase tracking-wider">
            <span>{post.category}</span>
            <span>/</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-[34px] sm:text-[48px] font-normal tracking-[-1px] text-[#1C1C1C] leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-[28px] overflow-hidden bg-[#F7F6F2] mb-14 shadow-xs">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Article Body */}
        <div className="max-w-2xl mx-auto space-y-6 text-[16px] text-[#1C1C1C]/80 leading-relaxed pb-20">
          <p className="text-[18px] text-[#1C1C1C] leading-relaxed">
            {post.excerpt}
          </p>
          <p>
            Jewelry is language without words, a subtle form of self-expression that communicates what you feel in the moment. A dainty necklace may express tenderness, introspection, or quiet romance, speaking with soft elegance. Ornate earrings or statement rings evoke confidence, flair, and a desire to stand out.
          </p>
          <p>
            At SHRI VIHOT IMITATION, our artisans work with patience and reverence, guided by traditional techniques passed down through generations. These methods demand time—slow, meticulous steps that machines cannot replicate. Metal is shaped gradually, stones are set with deliberate precision, and surfaces are refined until they feel alive in the hand.
          </p>
          <p>
            SHRI VIHOT IMITATION’s versatile creations are made to adapt—transforming effortlessly from morning to midnight, from subtle to spectacular. Our pieces are designed to accompany you through every chapter of your day, allowing you to shift styles with ease.
          </p>
        </div>

        {/* More Articles Section */}
        <div className="py-16 border-t border-[#ECEBE6]">
          <div className="mb-8">
            <h3 className="text-[14px] uppercase tracking-[0.2em] text-[#1C1C1C]">
              MORE ARTICLES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((op) => (
              <Link key={op.slug} href={`/blog/${op.slug}`} className="group space-y-3">
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[#F7F6F2]">
                  <Image
                    src={op.image}
                    alt={op.title}
                    fill
                    sizes="33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[12px] text-[#787878]">{op.date}</div>
                <h4 className="text-[16px] font-normal text-[#1C1C1C] line-clamp-2 group-hover:opacity-70">
                  {op.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
