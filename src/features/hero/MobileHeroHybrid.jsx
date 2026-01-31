import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
    { text: "LEGADO", color: "text-digital-gold" },
    { text: "IMPÉRIOS", color: "text-digital-secondary" },
    { text: "FUTURO", color: "text-white" }
];

const Cuboid = ({ width, height, x, y }) => {
    // Determine dimensions for faces based on props
    // This is a simplified CSS 3D cuboid builder
    const style = {
        width: width,
        height: height,
        left: x,
        top: y,
    };

    return (
        <div className="absolute transform-style-3d" style={style}>
            {/* Front */}
            <div className="absolute inset-0 bg-digital-primary/20 border border-digital-primary/40 translate-z-6 backdrop-blur-sm" />
            {/* Back */}
            <div className="absolute inset-0 bg-digital-primary/20 border border-digital-primary/40 -translate-z-6 backdrop-blur-sm" />
            {/* Left */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-digital-secondary/20 border border-digital-secondary/40 origin-left -rotate-y-90 translate-x-0" />
            {/* Right */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-digital-secondary/20 border border-digital-secondary/40 origin-right rotate-y-90 translate-x-0" />
            {/* Top */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-white/10 border border-white/20 origin-top rotate-x-90 translate-y-0" />
            {/* Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/10 border border-white/20 origin-bottom -rotate-x-90 translate-y-0" />
        </div>
    );
};

const MobileHeroHybrid = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full mt-10 h-[450px] relative flex flex-col items-center justify-center overflow-visible">
            {/* 3D C-Shape Prism Layer */}
            <div className="w-64 h-64 relative perspective-1000 mb-10">
                <div className="w-full h-full relative transform-style-3d animate-spin-3d">
                    {/* The "C" Shape - Concept Digital Style (Metallic Gold & Deep Blue) */}

                    {/* 1. Spine (Left Vertical) - The "Backbone" */}
                    <div className="absolute left-0 top-0 w-1/3 h-full transform-style-3d">
                        {/* Front Face - Metallic Blue */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] border-l border-t border-white/20 translate-z-8 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] rounded-l-xl" />
                        {/* Back Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] border-r border-b border-white/20 -translate-z-8 rounded-l-xl" />
                        {/* Left Face - Glowing Edge */}
                        <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-[#172554] to-[#1e40af] origin-left -rotate-y-90 border-y border-l border-white/10 rounded-xl" />
                        {/* Right Face (Inner) - Darker */}
                        <div className="absolute right-0 w-16 h-full bg-[#020617] origin-right rotate-y-90" />
                        {/* Top Face */}
                        <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-white/20 to-transparent origin-top rotate-x-90 rounded-tl-xl" />
                        {/* Bottom Face */}
                        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white/10 to-transparent origin-bottom -rotate-x-90 rounded-bl-xl" />
                    </div>

                    {/* 2. Top Arm - Gold Highlight */}
                    <div className="absolute right-0 top-0 w-2/3 h-1/3 transform-style-3d">
                        {/* Front Face - Metallic Gold Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#FCD34D] to-[#926F34] translate-z-8 shadow-[inset_0_0_15px_rgba(255,255,255,0.4)] rounded-r-xl border-t border-r border-white/40" />
                        {/* Back Face */}
                        <div className="absolute inset-0 bg-[#785c28] -translate-z-8 rounded-r-xl" />
                        {/* Top Face - Shine */}
                        <div className="absolute top-0 w-full h-16 bg-white/40 origin-top rotate-x-90 rounded-tr-xl backdrop-blur-md" />
                        {/* Bottom Face (Inner) */}
                        <div className="absolute bottom-0 w-full h-16 bg-[#5E4715] origin-bottom -rotate-x-90" />
                        {/* Right Face */}
                        <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-[#FCD34D] to-[#D4AF37] origin-right rotate-y-90 rounded-r-xl border-y border-r border-white/30" />
                    </div>

                    {/* 3. Bottom Arm - Gold Shadow */}
                    <div className="absolute right-0 bottom-0 w-2/3 h-1/3 transform-style-3d">
                        {/* Front Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#926F34] via-[#D4AF37] to-[#FCD34D] translate-z-8 shadow-[inset_0_0_15px_rgba(0,0,0,0.2)] rounded-r-xl border-b border-r border-white/40" />
                        {/* Back Face */}
                        <div className="absolute inset-0 bg-[#785c28] -translate-z-8 rounded-r-xl" />
                        {/* Top Face (Inner) */}
                        <div className="absolute top-0 w-full h-16 bg-[#5E4715] origin-top rotate-x-90" />
                        {/* Bottom Face - Reflection */}
                        <div className="absolute bottom-0 w-full h-16 bg-white/20 origin-bottom -rotate-x-90 rounded-br-xl backdrop-blur-md" />
                        {/* Right Face */}
                        <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-[#D4AF37] to-[#926F34] origin-right rotate-y-90 rounded-r-xl border-y border-r border-white/30" />
                    </div>
                </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-3 animate-pulse">
                    NÓS CONSTRUÍMOS
                </span>

                <div className="h-16 relative w-full flex justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={index}
                            initial={{ y: 30, opacity: 0, filter: "blur(12px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: -30, opacity: 0, filter: "blur(12px)" }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Custom ease
                            className={`text-5xl font-black font-montserrat tracking-tighter ${words[index].color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                        >
                            {words[index].text}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Decorative Elements */}
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-digital-primary to-transparent mt-6 opacity-50" />
            </div>
        </div>
    );
};

export default MobileHeroHybrid;
