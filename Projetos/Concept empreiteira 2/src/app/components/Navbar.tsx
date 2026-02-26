"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-primary/80 backdrop-blur-xl border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-white">
                        CONCEPT <span className="text-highlight">EMPREITEIRA</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {["Serviços", "Diferenciais", "Projetos"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="bg-highlight hover:bg-highlight/90 text-primary font-bold px-6 py-2 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,184,0,0.3)]">
                        Solicitar Orçamento
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl">
                    {["Serviços", "Diferenciais", "Projetos"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-medium text-neutral-300 py-2 border-b border-white/5 last:border-0"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="w-full bg-highlight text-primary font-bold py-3 rounded-full mt-2">
                        Solicitar Orçamento
                    </button>
                </div>
            )}
        </motion.nav>
    );
}
