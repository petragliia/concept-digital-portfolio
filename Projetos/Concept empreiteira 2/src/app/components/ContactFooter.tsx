"use client";

import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";

export function ContactFooter() {
    return (
        <footer className="bg-neutral-900 border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <span className="text-highlight font-medium mb-4 block">FALE CONOSCO</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Pronto para elevar seu padrão?
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 max-w-md">
                            Entre em contato para uma consultoria exclusiva. Transformamos sua visão em realidade estruturada.
                        </p>

                        <div className="flex gap-4">
                            {[Instagram, Linkedin, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-highlight hover:text-primary hover:border-highlight transition-all"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden group/form">
                        {/* Form Glow Effect */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-highlight/5 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover/form:opacity-100 transition-opacity duration-700" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-neutral-700 appearance-none focus:outline-none focus:ring-0 focus:border-highlight peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-highlight peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nome
                                </label>
                            </div>
                            <div className="relative z-0 w-full group">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-neutral-700 appearance-none focus:outline-none focus:ring-0 focus:border-highlight peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="phone"
                                    className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-highlight peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Telefone
                                </label>
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-8 group z-10">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-neutral-700 appearance-none focus:outline-none focus:ring-0 focus:border-highlight peer resize-none"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="message"
                                className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-highlight peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Mensagem
                            </label>
                        </div>

                        <button className="w-full bg-highlight text-primary font-bold py-4 rounded-xl hover:bg-highlight/90 transition-all flex items-center justify-center gap-3 group relative z-10 overflow-hidden">
                            <span className="relative z-10">Enviar Solicitação</span>
                            <ArrowUpRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </form>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
                    <p>© {new Date().getFullYear()} Concept Empreiteira. Todos os direitos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
