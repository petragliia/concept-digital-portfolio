"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

export default function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const position = Math.max(0, Math.min(100, (x / width) * 100));
        setSliderPosition(position);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - left;
        const position = Math.max(0, Math.min(100, (x / width) * 100));
        setSliderPosition(position);
    };

    return (
        <section className="py-24 bg-[var(--color-bg)]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-gold-champagne)] uppercase tracking-widest text-sm font-medium">Resultados Reais</span>
                    <h2 className="font-serif text-4xl md:text-5xl mt-4 text-[var(--color-foreground)]">A Arte da Transforma&ccedil;&atilde;o</h2>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-sm overflow-hidden cursor-col-resize select-none shadow-2xl"
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                >
                    {/* AFTER Image (Background) */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/after.png"
                            alt="Depois do tratamento"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#064E3B] rounded-sm">Depois</div>
                    </div>

                    {/* BEFORE Image (Clipped) */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <Image
                            src="/images/before.png"
                            alt="Antes do tratamento"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-white rounded-sm">Antes</div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-[var(--color-gold-champagne)]">
                            <ChevronsLeftRight className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <p className="text-center mt-8 text-gray-500 text-sm font-sans italic">
                    *Arraste a linha para ver o antes e depois. Resultados variam de paciente para paciente.
                </p>
            </div>
        </section>
    );
}
