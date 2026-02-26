'use client';

import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { PortfolioReturn } from "@/components/PortfolioReturn";
import { CartProvider, useCart } from "@/context/CartContext";
import { ShoppingBag } from 'lucide-react';

function FloatingCartButton() {
  const { toggleCart, cartCount } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="fixed bottom-6 right-6 z-40 bg-brand-purple text-white p-4 rounded-full shadow-xl hover:bg-purple-700 transition-colors hover:scale-105 active:scale-95"
      aria-label="Abrir carrinho"
    >
      <ShoppingBag size={24} />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
          {cartCount}
        </span>
      )}
    </button>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <main className="relative">
        {/* Navbar Placeholder (Ideally would be a separate component but keeping simple for this iteration) */}
        <nav className="absolute top-0 left-0 right-0 z-30 p-6 flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-brand-purple font-quicksand">Concept.</div>
          {/* Cart Trigger inside Nav for Desktop */}
        </nav>

        <Hero />
        <Catalog />
        <FAQ />
        <Footer />

        <CartDrawer />
        <FloatingCartButton />
        <PortfolioReturn />
      </main>
    </CartProvider>
  );
}
