import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, message } = formData;

        // Format message for WhatsApp
        const text = `*Nova solicitação do Portfólio*\n\n*Nome:* ${name}\n*Mensagem:* ${message}`;
        const encodedText = encodeURIComponent(text);

        // Open WhatsApp
        window.open(`https://wa.me/5513991353207?text=${encodedText}`, '_blank');
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden backdrop-blur-sm">
            {/* Background decoration */}
            <div className="absolute right-0 bottom-0 w-1/3 h-full bg-digital-gold/5 skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold font-montserrat">
                            Pronto para <br />
                            <span className="text-digital-gold">Escalar?</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Vamos construir uma presença digital que reflita sua autoridade. Entre em contato diretamente via WhatsApp para uma consulta prioritária.
                        </p>

                        <div className="flex items-center gap-4 text-digital-gold mt-8">
                            <div className="p-3 bg-digital-gold/10 rounded-full animate-pulse">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <span className="text-sm uppercase tracking-widest font-bold">Suporte Prioritário</span>
                        </div>
                    </div>

                    <div className="bg-digital-blue-dark/50 p-8 border border-white/10 backdrop-blur-md relative group shadow-2xl">
                        {/* Box Glow */}
                        <div className="absolute inset-0 bg-digital-gold/5 blur-xl group-hover:bg-digital-gold/10 transition-colors pointer-events-none" />

                        <form onSubmit={handleSubmit} className="relative space-y-6">
                            <div>
                                <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Nome</label>
                                <input
                                    type="text"
                                    className="w-full bg-digital-blue-medium/50 border border-white/10 p-4 text-white focus:border-digital-gold focus:outline-none transition-colors"
                                    placeholder="Seu Nome"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Visão do Projeto</label>
                                <textarea
                                    className="w-full bg-digital-blue-medium/50 border border-white/10 p-4 text-white focus:border-digital-gold focus:outline-none transition-colors h-32 resize-none"
                                    placeholder="Conte-nos sobre seu projeto..."
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-digital-gold text-digital-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 group/btn"
                            >
                                Iniciar Conversa
                                <Send className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
