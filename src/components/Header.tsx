'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function Header() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#1C1C1C]/5 py-4'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Left Navigation Links matching Aurum */}
          <nav className="hidden lg:flex items-center space-x-6 text-[14px] font-normal tracking-[-0.28px] text-[#1C1C1C]">
            <Link
              href="/collections/all"
              className={`hover:opacity-60 transition-opacity ${
                pathname === '/collections/all' ? 'font-medium' : ''
              }`}
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className={`hover:opacity-60 transition-opacity ${
                pathname === '/collections' ? 'font-medium' : ''
              }`}
            >
              Collections
            </Link>
            <Link
              href="/blog"
              className={`hover:opacity-60 transition-opacity ${
                pathname === '/blog' ? 'font-medium' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`hover:opacity-60 transition-opacity ${
                pathname === '/about' ? 'font-medium' : ''
              }`}
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1 -ml-1 text-[#1C1C1C]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Center Brand Logo - visible on subpages or when scrolled on home */}
          <div
            className={`flex-1 lg:flex-none text-center transition-all duration-300 ${
              pathname === '/' && !scrolled
                ? 'opacity-0 pointer-events-none'
                : 'opacity-100 pointer-events-auto'
            }`}
          >
            <Link href="/" className="inline-block relative">
              <span className="font-editorial text-[17px] sm:text-[19px] tracking-[0.16em] uppercase font-light text-[#1C1C1C] whitespace-nowrap">
                SHRI VIHOT IMITATION
              </span>
            </Link>
          </div>

          {/* Right Action Links matching Aurum */}
          <div className="flex items-center space-x-6 text-[14px] font-normal tracking-[-0.28px] text-[#1C1C1C]">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:inline-block hover:opacity-60 transition-opacity cursor-pointer"
            >
              Search
            </button>

            <Link
              href="/favorites"
              className="hidden sm:inline-block hover:opacity-60 transition-opacity"
            >
              Favorites
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:opacity-60 transition-opacity flex items-center space-x-1 cursor-pointer"
              aria-label="Cart"
            >
              <span>Cart</span>
              <span className="text-[12px] bg-[#1C1C1C]/5 rounded-full px-1.5 py-0.2">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu matching Aurum */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-400 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 bottom-0 w-[80%] max-w-[340px] bg-white p-6 flex flex-col justify-between transition-transform duration-400 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#ECEBE6]">
              <div className="relative">
                <span className="font-editorial text-[15px] font-normal tracking-[0.14em] text-[#1C1C1C] uppercase">
                  SHRI VIHOT IMITATION
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-[#1C1C1C]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-5 text-[18px] text-[#1C1C1C]">
              <Link href="/" className="hover:opacity-60 transition-opacity">
                Home
              </Link>
              <Link href="/collections/all" className="hover:opacity-60 transition-opacity">
                Shop
              </Link>
              <Link href="/collections" className="hover:opacity-60 transition-opacity">
                Collections
              </Link>
              <Link href="/blog" className="hover:opacity-60 transition-opacity">
                Blog
              </Link>
              <Link href="/about" className="hover:opacity-60 transition-opacity">
                About
              </Link>
              <Link href="/favorites" className="hover:opacity-60 transition-opacity">
                Favorites
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="text-left hover:opacity-60 transition-opacity"
              >
                Search
              </button>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#ECEBE6] text-[12px] text-[#787878]">
            <p>© {new Date().getFullYear()} SHRI VIHOT IMITATION. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
