import React from 'react';
import { PenTool, Target, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: PenTool,
        title: "Design",
        description: "Estética imersiva que captura a essência da sua marca e comanda a atenção."
    },
    {
        icon: Target,
        title: "Estratégia",
        description: "Fluxos de usuário baseados em dados projetados para converter visitantes em clientes de alto valor."
    },
    {
        icon: TrendingUp,
        title: "Vendas",
        description: "Integração perfeita de canais de receita para escalar seu negócio digital."
    }
];

const Method = () => {
    return (
        <section id="metodo" className="py-24 relative bg-black overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                        O Método <span className="text-digital-gold">Concept</span>
                    </h2>
                    <div className="w-24 h-1 bg-digital-gold mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Card Background with Skew */}
                            <div className="absolute inset-0 bg-[#0A0A0A] border border-white/10 -skew-x-10 scale-[0.98] group-hover:scale-100 group-hover:border-digital-primary/50 group-hover:bg-[#0F0F0F] transition-all duration-500 ease-out shadow-2xl" />

                            <div className="relative p-10 flex flex-col items-start h-full z-10 hover:-translate-y-2 transition-transform duration-500">
                                <div className="mb-6 inline-block p-4 bg-digital-primary/5 border border-digital-primary/20 -skew-x-10 group-hover:bg-digital-primary/10 transition-colors">
                                    <step.icon className="w-8 h-8 text-digital-primary skew-x-10 group-hover:text-white transition-colors" />
                                </div>

                                <div className="space-y-4">
                                    <div className="text-digital-secondary text-xs font-bold uppercase tracking-widest font-inter">
                                        Fase 0{index + 1}
                                    </div>

                                    <h3 className="text-2xl font-bold font-montserrat text-white group-hover:text-digital-primary transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-500 font-light leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="mt-8 pt-8 w-full border-t border-white/5 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs uppercase tracking-widest text-digital-primary">Saiba mais</span>
                                    <ArrowRight className="w-4 h-4 text-digital-primary -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Method;
