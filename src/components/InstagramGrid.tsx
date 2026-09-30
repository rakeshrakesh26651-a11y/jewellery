'use client';

import React from 'react';
import Image from 'next/image';

const AURUM_INSTA_IMAGES = [
  'https://framerusercontent.com/images/jIgDgysk3xpkmRFFHhP7yaarHQo.jpeg?width=736&height=920',
  'https://framerusercontent.com/images/peOo5BuFYetGcZdKJq9SMIV82E.jpeg?width=683&height=1024',
  'https://framerusercontent.com/images/L3VYQJW7TJfGwOtG2EBjoKxQk.png?width=1024&height=1024',
  'https://framerusercontent.com/images/93rBJJnPhAOrzGdEoCdvS6bRUo.png?width=1500&height=1500',
  'https://framerusercontent.com/images/AFZsTIk3eC4BPhpyhjDNfTcbhI.png?width=1500&height=1500',
];

export default function InstagramGrid() {
  return (
    <section className="py-12 sm:py-20 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
      {/* Header matching Aurum: FOLLOW US ON INSTAGRAM on left, @aurum.jewelry on right */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-3 gap-2">
        <h2 className="text-[14px] uppercase tracking-[0.2em] text-[#1C1C1C] font-normal">
          FOLLOW US ON INSTAGRAM
        </h2>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[#1C1C1C] hover:opacity-60 transition-opacity"
        >
          @shrivihotimitation
        </a>
      </div>

      {/* 5-Column Photo Grid matching Aurum */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {AURUM_INSTA_IMAGES.map((img, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-[18px] overflow-hidden bg-[#F7F6F2] block"
          >
            <Image
              src={img}
              alt="SHRI VIHOT IMITATION Instagram piece"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
            />
          </a>
        ))}
      </div>

      {/* Underneath statement matching Aurum */}
      <div className="mt-8 text-center">
        <p className="text-[14px] text-[#1C1C1C] tracking-tight">
          We craft jewelry as wearable art
        </p>
      </div>
    </section>
  );
}
