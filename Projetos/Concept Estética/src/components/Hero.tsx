"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative h-[90vh] overflow-hidden flex items-center justify-center">
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Aesthetic Spa"
                    fill
                    priority
                    className="object-cover brightness-75"
                />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl font-medium tracking-wide mb-6 drop-shadow-lg"
                >
                    Revele sua melhor vers&atilde;o
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl font-light tracking-widest uppercase mb-10 text-white/90"
                >
                    Est&eacute;tica Avan&ccedil;ada &amp; Bem-estar
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[var(--color-gold-champagne)] text-white px-8 py-4 rounded-full font-sans uppercase tracking-[0.2em] text-sm hover:bg-[#b8962e] transition-colors duration-300 backdrop-blur-sm bg-opacity-90"
                >
                    Agendar Consulta
                </motion.button>
            </motion.div>

            <div className="absolute bottom-10 w-full flex justify-center z-10 animate-bounce">
                <span className="text-white text-sm tracking-widest uppercase opacity-70">Deslize</span>
            </div>
        </div>
    );
}
