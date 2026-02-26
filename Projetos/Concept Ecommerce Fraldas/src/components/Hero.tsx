'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Star, ShieldCheck } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-baby-blue via-white to-soft-green/30 pt-20 pb-10 px-4 md:px-8">

            {/* Background blobs for glassmorphism depth */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-soft-orange rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-baby-blue rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-4000" />

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 text-center md:text-left"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/20 text-brand-purple font-semibold text-sm mx-auto md:mx-0"
                    >
                        <ShieldCheck size={18} />
                        <span>Dermatologicamente Testado</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight font-quicksand">
                        Noites tranquilas para o seu bebê, <span className="text-brand-purple">economia real</span> para o seu bolso.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-nunito max-w-xl mx-auto md:mx-0">
                        Conheça a nova geração de fraldas ultra-absorventes com tecnologia <span className="font-semibold text-blue-500">SoftCloud</span>. Até 12 horas de proteção total contra vazamentos.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                        <Button size="lg" className="w-full md:w-auto shadow-xl shadow-orange-200/50">
                            QUERO GARANTIR O MEU KIT COM 20% OFF
                        </Button>

                        <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 font-medium">
                            <span className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                            </span>
                            <span>+5.000 mamães confiam</span>
                        </div>
                    </div>

                    {/* Mobile Social Proof */}
                    <div className="md:hidden flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                        <span className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                        </span>
                        <span>+5.000 mamães confiam</span>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex justify-center"
                >
                    <div className="relative z-10 glass-card p-4 rounded-[2rem] rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md w-full">
                        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-inner bg-white">
                            <Image
                                src="/hero-baby.png"
                                alt="Bebê feliz e confortável"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-4 glass px-5 py-3 rounded-2xl shadow-lg border-white/60 text-brand-purple font-bold flex flex-col items-center"
                        >
                            <span className="text-2xl font-quicksand">12h</span>
                            <span className="text-[10px] uppercase tracking-wider font-nunito">Proteção</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-4 glass px-5 py-3 rounded-2xl shadow-lg border-white/60 text-green-600 font-bold flex items-center gap-2"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-nunito">Pele Sequinha</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
