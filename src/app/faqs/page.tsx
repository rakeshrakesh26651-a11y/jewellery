'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

const FAQS = [
  {
    q: 'How do I care for my SHRI VIHOT IMITATION pieces?',
    a: 'To extend the life of your jewelry, avoid direct contact with water, perfumes, and cleaning agents. We recommend storing each piece in its original microfiber pouch or jewelry box to prevent scratching.'
  },
  {
    q: 'What materials does SHRI VIHOT IMITATION use?',
    a: 'Our pieces are handcrafted using ethically sourced 925 sterling silver, brass alloys dipped in heavy 18K/24K gold vermeil, and hand-selected natural and synthetic gemstones.'
  },
  {
    q: 'What is your return and exchange policy?',
    a: 'We accept returns and exchanges on unworn items in their original condition and packaging within 15 days of receiving your order.'
  },
  {
    q: 'How long does shipping take?',
    a: 'Each piece is prepared and polished in our workshop. Standard delivery takes 3–5 business days within the continental regions, and 5–8 days for international orders.'
  }
];

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 md:px-12 py-10">
        <h1 className="text-[32px] sm:text-[44px] font-normal tracking-tight text-[#1C1C1C] mb-8 pb-4 border-b border-[#ECEBE6]">
          Frequently Asked Questions
        </h1>

        <div className="divide-y divide-[#ECEBE6]">
          {FAQS.map((item, idx) => (
            <div key={idx} className="py-5">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-[17px] text-[#1C1C1C] hover:opacity-70 transition-opacity cursor-pointer"
              >
                <span>{item.q}</span>
                {open === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#787878]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#787878]" />
                )}
              </button>
              {open === idx && (
                <p className="mt-3 text-[14px] text-[#787878] leading-relaxed pr-8">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <InstagramGrid />
      <Newsletter />
    </div>
  );
}
