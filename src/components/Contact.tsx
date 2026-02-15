"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', message: '' });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, message } = formData;
        const text = `*Nova solicitação do Portfólio (v2)*\n\n*Nome:* ${name}\n*Mensagem:* ${message}`;
        window.open(`https://wa.me/5513991353207?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-[#020408]">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-digital-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-digital-primary/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 item-center">

                    {/* Left Column: Copy */}
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="text-digital-primary text-xs font-bold uppercase tracking-[0.2em] bg-digital-primary/10 px-3 py-1 rounded-full border border-digital-primary/20">
                                Fale Conosco
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold font-montserrat tracking-tight leading-tight">
                            Pronto para <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                                Escalar?
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-md border-l-2 border-digital-primary/30 pl-6">
                            Construímos ecossistemas digitais de alta performance. Entre em contato para uma análise de viabilidade do seu projeto.
                        </p>

                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#020408] overflow-hidden flex items-center justify-center relative">
                                        <img
                                            src={`/avatars/partner-${i}.png`}
                                            alt={`Parceiro ${i}`}
                                            className="w-full h-full object-cover"
                                            width="40"
                                            height="40"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm">
                                <p className="text-white font-bold">Junte-se a +50 Parceiros</p>
                                <p className="text-digital-primary text-xs flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> Resposta em &lt; 2h
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Glass Form */}
                    <div className="relative">
                        {/* Decorative Border Gradient */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-digital-secondary via-digital-primary to-digital-secondary rounded-2xl opacity-30 blur-sm"></div>

                        <div className="relative bg-[#0A0A0A]/90 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Iniciar Conversa</h3>
                                <p className="text-gray-500 text-sm">Preencha os detalhes abaixo para agendar uma call.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div className="group relative">
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name ? 'top-[-10px] text-[10px] text-digital-primary bg-[#0A0A0A] px-2' : 'top-4 text-gray-500 text-sm'
                                            }`}
                                    >
                                        Seu Nome
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full bg-[#111] border border-white/10 rounded-lg p-4 text-white focus:border-digital-primary/50 focus:ring-1 focus:ring-digital-primary/50 transition-all outline-none"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="group relative">
                                    <label
                                        htmlFor="message"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message ? 'top-[-10px] text-[10px] text-digital-primary bg-[#0A0A0A] px-2' : 'top-4 text-gray-500 text-sm'
                                            }`}
                                    >
                                        Sobre o Projeto
                                    </label>
                                    <textarea
                                        id="message"
                                        className="w-full bg-[#111] border border-white/10 rounded-lg p-4 text-white focus:border-digital-primary/50 focus:ring-1 focus:ring-digital-primary/50 transition-all outline-none resize-none h-32"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full group relative overflow-hidden rounded-lg bg-digital-primary p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                                >
                                    <div className="relative z-10 flex items-center justify-center gap-2 text-black font-bold uppercase tracking-widest text-sm">
                                        Enviar Proposta
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                    {/* Buttton Shine Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
