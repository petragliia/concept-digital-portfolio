"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "01",
        title: "CONSTRUÇÃO",
        subtitle: "RESIDENCIAL",
        description: "Gestão completa do alicerce ao acabamento. Sua visão materializada com precisão milimétrica.",
        features: ["Gestão 360º", "Cronograma Garantido", "Acabamento Elite"],
        videoUrl: "https://videos.pexels.com/video-files/3796395/3796395-hd_1920_1080_25fps.mp4",
        imageUrl: "/images/construction.png" // AI Generated
    },
    {
        id: "02",
        title: "REFORMAS",
        subtitle: "PREMIUM",
        description: "Transformação radical de ambientes com inteligência arquitetônica e respeito à estrutura existente.",
        features: ["Retrofit", "Design de Interiores", "Valorização do Imóvel"],
        videoUrl: "https://videos.pexels.com/video-files/7578546/7578546-uhd_2732_1440_25fps.mp4",
        imageUrl: "/images/renovation.png" // AI Generated
    },
    {
        id: "03",
        title: "CONSULTORIA",
        subtitle: "TÉCNICA",
        description: "Análise de viabilidade e segurança legal para empreendimentos de alto padrão.",
        features: ["Laudos Técnicos", "Regularização", "Gestão de Obra"],
        videoUrl: "https://videos.pexels.com/video-files/3129595/3129595-hd_1280_720_29fps.mp4",
        imageUrl: "/images/consulting.png" // AI Generated
    },
];

export function ServiceBentoGrid() {
    return (
        <section id="serviços" className="py-32 relative bg-primary overflow-hidden">
            {/* Background Blueprint Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-highlight font-mono text-sm tracking-widest uppercase mb-2 block">serviços_v2.2</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight">
                            DO PROJETO À <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">REALIDADE</span>
                        </h2>
                    </motion.div>
                    <p className="text-neutral-500 max-w-sm text-right mt-8 md:mt-0">
                        Transformamos rascunhos em marcos arquitetônicos.
                        Selecione o serviço para expandir os detalhes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-[600px] w-full bg-neutral-900 border border-white/5 cursor-pointer overflow-hidden transition-all duration-700 ease-out"
                        >
                            {/* 0. DEFAULT BACKGROUND IMAGE (Higher Opacity) */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-0 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-neutral-950/40" />
                            </div>

                            {/* 1. STATE: IDLE (Typographic / Wireframe) */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-6xl text-white/10 font-bold stroke-text">{service.id}</span>
                                    <div className="h-[1px] w-12 bg-white/20" />
                                </div>
                                <div>
                                    <h3 className="text-4xl font-heading font-black text-white leading-none mb-2">
                                        {service.title}<br />
                                        <span className="text-neutral-400">{service.subtitle}</span>
                                    </h3>
                                </div>
                            </div>

                            {/* 2. STATE: HOVER (Video/Photo Reveal) */}
                            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                                <video
                                    src={service.videoUrl}
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />
                            </div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 z-30 p-10 flex flex-col justify-end translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <span className="text-highlight font-mono text-xs mb-4 tracking-widest">{service.id} // SISTEMA INTEGRADO</span>
                                <h3 className="text-3xl font-bold text-white mb-4">{service.title} {service.subtitle}</h3>
                                <p className="text-neutral-300 mb-6 text-sm leading-relaxed border-l-2 border-highlight pl-4">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-white">
                                            <div className="w-1.5 h-1.5 bg-highlight rounded-full" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Border Glow Effect */}
                            <div className="absolute inset-0 border border-highlight/0 group-hover:border-highlight/50 transition-colors duration-500 z-40 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
