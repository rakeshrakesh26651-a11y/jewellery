import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Hero Banner matching Aurum's Contact Page */}
        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px] rounded-[28px] overflow-hidden bg-[#1C1C1C] mb-16 flex items-center justify-center">
          <Image
            src="https://framerusercontent.com/images/9syDBRpnShrG3sco4AnRWRB0pJs.png?width=1376&height=480"
            alt="Contact"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-[44px] sm:text-[68px] md:text-[84px] font-normal tracking-[-2px] text-white">
              Contact
            </h1>
          </div>
        </div>

        {/* 3 Information Columns matching Aurum screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-[#ECEBE6] mb-24">
          <div className="space-y-2">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#787878] font-normal">
              CONTACT EMAIL
            </span>
            <p className="text-[16px] sm:text-[18px] text-[#1C1C1C]">
              <a href="mailto:hola@vitreastudio.com" className="hover:opacity-70 transition-opacity">
                hola@vitreastudio.com
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#787878] font-normal">
              CONTACT NUMBER
            </span>
            <p className="text-[16px] sm:text-[18px] text-[#1C1C1C]">
              <a href="tel:+40604120220" className="hover:opacity-70 transition-opacity">
                +40 604 12 02 20
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#787878] font-normal">
              ADDRESS
            </span>
            <p className="text-[16px] sm:text-[18px] text-[#1C1C1C]">
              Rajkot, Gujarat, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
