'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 sm:py-20 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12">
      <div className="relative rounded-[28px] overflow-hidden bg-[#1C1C1C] text-white py-20 sm:py-28 px-6 sm:px-12 text-center">
        {/* Background Image matching Aurum */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://framerusercontent.com/images/csb1YuRMZ6dQem64YvjdtkW9k.jpg?width=1440&height=1799"
            alt="SHRI VIHOT IMITATION Newsletter Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <h2 className="text-[32px] sm:text-[44px] md:text-[50px] font-normal tracking-[-1.6px] leading-tight text-white">
            Don’t miss out
          </h2>
          <p className="text-[14px] sm:text-[15px] text-white/80 tracking-tight">
            Get early access to new collections and special deals
          </p>

          {subscribed ? (
            <div className="pt-4 text-white text-[14px]">
              Thank you for subscribing to SHRI VIHOT IMITATION.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-4 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 text-[14px] focus:outline-hidden focus:border-white backdrop-blur-md"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-white text-[#1C1C1C] text-[13px] font-medium tracking-tight hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
