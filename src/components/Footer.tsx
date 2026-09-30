'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#ECEBE6] pt-16 sm:pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Top Grid matching Aurum */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          {/* Statement Column */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#1C1C1C] font-normal block">
              SHRI VIHOT IMITATION
            </span>
            <p className="text-[20px] sm:text-[24px] font-normal leading-snug tracking-[-0.6px] text-[#1C1C1C] max-w-md">
              Each piece is a fusion of precious materials and modern vision.
            </p>
            <p className="text-[13px] text-[#787878] tracking-wide pt-1">
              Rajkot, Gujarat, India
            </p>
          </div>

          {/* Links Column 1: PAGES */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#1C1C1C] font-normal">
              PAGES
            </h4>
            <ul className="space-y-2 text-[14px] text-[#1C1C1C]/70">
              <li>
                <Link href="/" className="hover:text-[#1C1C1C] transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1C1C1C] transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-[#1C1C1C] transition-colors">
                  COLLECTIONS
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#1C1C1C] transition-colors">
                  BLOG
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: INFO */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#1C1C1C] font-normal">
              INFO
            </h4>
            <ul className="space-y-2 text-[14px] text-[#1C1C1C]/70">
              <li>
                <Link href="/contact" className="hover:text-[#1C1C1C] transition-colors">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#1C1C1C] transition-colors">
                  FAQS
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1C1C1C] transition-colors">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1C1C1C] transition-colors">
                  TERMS OF SERVICE
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: SOCIALS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#1C1C1C] font-normal">
              SOCIALS
            </h4>
            <ul className="space-y-2 text-[14px] text-[#1C1C1C]/70">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1C1C] transition-colors">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1C1C] transition-colors">
                  THREADS
                </a>
              </li>
              <li>
                <a href="https://framer.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1C1C] transition-colors">
                  FRAMER PAGE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Giant Brand Logo Wordmark */}
        <div className="pt-10 sm:pt-16 pb-4 flex justify-center overflow-hidden">
          <span className="font-editorial text-[32px] sm:text-[60px] md:text-[90px] lg:text-[120px] font-light tracking-[0.04em] uppercase text-[#1C1C1C] select-none text-center leading-none whitespace-nowrap">
            SHRI VIHOT IMITATION
          </span>
        </div>
      </div>
    </footer>
  );
}
