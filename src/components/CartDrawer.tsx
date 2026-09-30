'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus } from 'lucide-react';
import { formatPrice } from '@/data/products';
import { useStore } from '@/context/StoreContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartCount,
    cartTotal,
  } = useStore();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-out Drawer matching Aurum */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header matching Aurum: Your cart 1   X */}
          <div className="p-6 flex items-center justify-between border-b border-[#ECEBE6]">
            <div className="flex items-center space-x-2">
              <h3 className="text-[18px] font-normal text-[#1C1C1C]">Your cart</h3>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1C1C1C]/10 text-[#1C1C1C] text-[11px] font-normal">
                {cartCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full text-[#1C1C1C] hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                <p className="text-[16px] text-[#1C1C1C]">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 text-[13px] text-[#1C1C1C] underline hover:opacity-70"
                >
                  <Link href="/collections/all">Start shopping</Link>
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex space-x-4 pb-6 border-b border-[#ECEBE6] last:border-0 relative"
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 rounded-[12px] overflow-hidden bg-[#F7F6F2] flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between pr-6">
                    <div>
                      <div className="flex items-start justify-between">
                        <Link
                          href={`/shop/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="text-[14px] text-[#1C1C1C] hover:opacity-70"
                        >
                          {item.product.name}
                        </Link>
                        <span className="text-[14px] text-[#1C1C1C] font-normal">
                          {formatPrice(item.product.price)}
                        </span>
                      </div>
                      {item.selectedSize && (
                        <span className="text-[12px] text-[#787878] block mt-0.5">
                          {item.selectedSize}
                        </span>
                      )}
                    </div>

                    {/* Quantity Selector matching Aurum */}
                    <div className="flex items-center space-x-2 mt-3">
                      <div className="inline-flex items-center border border-[#ECEBE6] rounded-full px-2 py-0.5 bg-[#FAF9F5]">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-[#787878] hover:text-[#1C1C1C]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-[12px] text-[#1C1C1C]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-[#787878] hover:text-[#1C1C1C]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="absolute top-0 right-0 p-1 text-[#787878] hover:text-[#1C1C1C]"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Subtotal and Checkout Button matching Aurum screenshot */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#ECEBE6] space-y-4">
              <div className="flex items-center justify-between text-[16px]">
                <span className="text-[#1C1C1C]">Subtotal</span>
                <span className="text-[#1C1C1C] font-normal">
                  {formatPrice(cartTotal)}
                </span>
              </div>

              <button
                onClick={() => alert('Proceeding to SHRI VIHOT IMITATION demo checkout...')}
                className="w-full py-3.5 px-6 rounded-full bg-[#1C1C1C] hover:bg-[#333333] text-white text-[14px] font-normal tracking-tight transition-colors shadow-xs"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
