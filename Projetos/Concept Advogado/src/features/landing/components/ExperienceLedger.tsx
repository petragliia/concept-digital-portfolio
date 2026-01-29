"use client";

import { useEffect, useState } from "react";
import { Briefcase, TrendingUp, Users } from "lucide-react";

export function ExperienceLedger() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="py-24 bg-navy-900 relative border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8 gap-6">
                    <div>
                        <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2">Track Record</h2>
                        <h3 className="text-4xl font-serif text-white">Experience Ledger</h3>
                    </div>
                    <p className="text-gray-400 max-w-md text-right md:text-left">
                        Resultados auditáveis de nossa atuação em cenários de alta complexidade.
                    </p>
                </div>

                {/* Stats Grid with 3D Interaction */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {[
                        { label: "Capital Preservado", val: "R$ 450M+", icon: TrendingUp },
                        { label: "Casos Complexos", val: "1.200+", icon: Briefcase },
                        { label: "Taxa de Sucesso", val: "94%", icon: Users },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className={`
                            group p-8 rounded-none transition-all duration-500 border border-white/5 bg-black-900/40 relative overflow-hidden
                            hover:bg-white/5 hover:border-gold-500/30 hover:scale-[1.02] hover:-translate-y-1
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                          `}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 blur-[50px] group-hover:bg-gold-500/10 transition-colors"></div>
                            <stat.icon className="w-8 h-8 text-gold-500 mb-6 opacity-40 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-500" />
                            <div className="text-5xl font-serif text-white font-bold mb-3 tracking-tighter">
                                {stat.val}
                            </div>
                            <div className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-bold">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mini Case Studies */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                        CASOS RECENTES
                    </h4>

                    {[
                        {
                            client: "Tech Giant SaaS",
                            tag: "M&A",
                            desc: "Estruturação de venda cross-border para conglomerado norte-americano.",
                            result: "Deal: R$ 85M"
                        },
                        {
                            client: "Indústria Farmacêutica",
                            tag: "Compliance",
                            desc: "Redesenho completo de política de compliance pós-fusão.",
                            result: "Risco Mitigado: 100%"
                        },
                        {
                            client: "Varejo Nacional",
                            tag: "Tributário",
                            desc: "Recuperação de créditos tributários em litígio de 5 anos.",
                            result: "Recuperado: R$ 12M"
                        },
                    ].map((c, i) => (
                        <div
                            key={i}
                            className={`
                            flex flex-col md:flex-row items-center justify-between p-6 border border-white/5 bg-black-900/20 
                            hover:border-gold-500/40 transition-all cursor-crosshair group relative overflow-hidden
                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                          `}
                            style={{ transitionDelay: `${400 + (i * 150)}ms`, transitionDuration: '800ms' }}
                        >
                            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-1/3 z-10">
                                <span className="text-gold-500 font-mono text-[10px] opacity-40">ENTRY_0{i + 1}</span>
                                <h5 className="text-white font-bold text-lg group-hover:text-gold-400 transition-colors uppercase tracking-tight">{c.client}</h5>
                            </div>

                            <div className="hidden md:block w-px h-8 bg-white/5 mx-4 z-10"></div>

                            <div className="text-gray-400 text-sm md:w-1/3 mb-4 md:mb-0 z-10 font-serif italic">
                                {c.desc}
                            </div>

                            <div className="flex items-center gap-6 justify-end md:w-1/3 w-full z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-gold-500 animate-pulse-gold"></div>
                                    <span className="px-3 py-1 bg-black-900 text-gold-500 text-[10px] font-bold uppercase tracking-widest border border-gold-500/30">
                                        {c.tag}
                                    </span>
                                </div>
                                <span className="text-white font-mono font-bold text-sm tracking-tight group-hover:scale-105 transition-transform">
                                    {c.result}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
