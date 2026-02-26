"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroImages = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop", // Interior Luxo
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2700&auto=format&fit=crop", // Fachada Moderna
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2700&auto=format&fit=crop", // Living Room
    "https://images.unsplash.com/photo-1600570997533-f321908a6e4d?q=80&w=2700&auto=format&fit=crop", // Suite
];

export function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 6000); // 6 seconds per image
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-highlight/5 to-transparent pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-highlight/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-highlight/20 bg-highlight/5 text-highlight text-sm font-semibold mb-6"
                    >
                        EXCELÊNCIA EM CADA DETALHE
                    </motion.span>

                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
                        Construímos o cenário da sua <span className="text-highlight">melhor fase.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-lg leading-relaxed">
                        Engenharia de precisão e acabamentos de elite para quem não aceita o "bom o suficiente".
                        Transformamos projetos ambiciosos em realidade tangível.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-highlight text-primary font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-highlight/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,184,0,0.3)]">
                            Solicitar Orçamento Exclusivo
                            <ArrowRight size={20} />
                        </button>
                        <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/5 transition-colors font-medium">
                            Ver Portfólio
                        </button>
                    </div>
                </motion.div>

                {/* Image / Visual - Slideshow */}
                <div className="relative h-[500px] lg:h-[700px] w-full">
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 2, ease: "easeInOut" }} // Slower transition (2 seconds)
                                className="absolute inset-0"
                            >
                                <img
                                    src={heroImages[currentImage]}
                                    alt={`Slide ${currentImage + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-[6000ms] ease-linear scale-110 group-hover:scale-100"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Constant Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-8 right-8 glass-panel px-6 py-4 rounded-2xl flex flex-col z-20"
                        >
                            <span className="text-highlight font-bold text-2xl">15+</span>
                            <span className="text-xs text-neutral-300 uppercase tracking-widest">Anos de Mercado</span>
                        </motion.div>

                        {/* Progress Indicators */}
                        <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                            {heroImages.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 transition-all duration-500 rounded-full ${i === currentImage ? 'w-8 bg-highlight' : 'w-2 bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
