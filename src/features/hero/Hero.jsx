import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import IsometricScene from './IsometricScene';
import MobileHeroHybrid from './MobileHeroHybrid';
import { openWhatsAppGeneral } from '../portfolio/utils/whatsapp';

const Hero = () => {
    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        openWhatsAppGeneral();
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden p-6 bg-digital-black">
            {/* Background Gradient Effects (Ambient Lighting) */}
            {/* Top Left: Purple (Software/Cyber) */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-digital-blue-medium/30 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />

            {/* Bottom Right: Gold/Sand */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-digital-primary/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

            {/* Geometric Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-digital-secondary/20 to-transparent -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-t from-digital-secondary/20 to-transparent skew-x-12 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center gap-12 lg:flex-row lg:justify-between">

                {/* 
                  LEFT SIDE: TEXT CONTENT 
                  Repositioned to left on Desktop, Top on mobile
                */}
                <div className="w-full lg:w-1/2 text-center lg:text-left z-20">
                    <div className="inline-block animate-fade-in-up mb-6">
                        <div className="flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-digital-primary animate-pulse"></div>
                            <span className="text-gray-300 text-[10px] uppercase tracking-[0.2em] font-bold">
                                Growth Engine v2.0
                            </span>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-montserrat leading-[1.1] text-white tracking-tighter mb-8">
                        Sua Máquina de <br />
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#F8FAFC,#FCD34D,#C5A059,#FCD34D,#F8FAFC)] bg-[length:200%_auto] animate-matrix-scroll inline-block pb-2">
                            VENDAS DIGITAL
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-2 border-digital-primary/50 pl-6 mb-10">
                        Ecossistemas de <strong className="text-digital-primary font-medium">Alta Conversão</strong> e <strong className="text-white font-medium">Velocidade Recorde</strong>. Unimos design premium e engenharia de performance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                        <a
                            href="#portfolio"
                            className="group relative px-8 py-4 bg-gradient-to-r from-digital-primary via-[#D4AF37] to-digital-primary text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] overflow-hidden rounded-sm ring-1 ring-white/20"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Iniciar Projeto
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </a>

                        <button
                            onClick={handleWhatsAppClick}
                            className="group px-8 py-4 border border-white/10 text-white font-medium text-sm tracking-widest uppercase hover:bg-white/5 hover:border-digital-primary/50 hover:text-digital-primary transition-all rounded-sm flex items-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4 group-hover:text-digital-primary transition-colors" />
                            Consultoria VIP
                        </button>
                    </div>
                </div>

                {/* 
                  RIGHT SIDE: ISOMETRIC SCENE (Desktop) & FLOATING CARDS (Mobile)
                */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative lg:translate-x-12">
                    {/* Desktop Only 3D Scene */}
                    <div className="hidden lg:flex w-full h-[500px] items-center justify-center">
                        <IsometricScene />
                    </div>

                    {/* Mobile Only Floating Cards */}
                    <div className="block lg:hidden w-full">
                        <MobileHeroHybrid />
                    </div>
                </div>
            </div>


            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-digital-black to-transparent z-20 pointer-events-none" />
        </section >
    );
};

export default Hero;
