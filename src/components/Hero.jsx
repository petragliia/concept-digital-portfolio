import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden p-6">
            {/* Background Gradient Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-digital-gold/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Geometric Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-digital-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-digital-blue-medium/30 skew-x-12 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-5xl">
                    <div className="inline-block animate-fade-in-up mb-6">
                        <span className="text-digital-gold tracking-[0.3em] text-xs uppercase font-extrabold border-b border-digital-gold/50 pb-2">
                            Concept Digital
                        </span>
                    </div>

                    {/* Massive Typography - overlapping style */}
                    <div className="relative">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-montserrat leading-[0.9] text-white tracking-tighter mix-blend-overlay opacity-50 absolute -top-12 -left-8 select-none pointer-events-none blur-sm sm:blur-0">
                            AUTORIDADE
                        </h1>
                        <h1 className="relative z-10 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-montserrat leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tighter">
                            TRANSFORMA <br />
                            <span className="text-digital-gold inline-block transform hover:skew-x-[-10deg] transition-transform duration-500 cursor-default">
                                AUTORIDADE
                            </span>
                        </h1>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row items-start gap-12 max-w-4xl">
                        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md border-l-2 border-digital-gold/30 pl-6">
                            Construímos ecossistemas digitais de alta performance para marcas de luxo que exigem <span className="text-white font-medium">excelência absoluta</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                            <a
                                href="#portfolio"
                                className="group relative px-10 py-5 bg-digital-gold text-digital-blue-dark font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Nossos Projetos
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
