"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

interface Treatment {
    id: number;
    title: string;
    description: string;
    details: string;
}

const treatments: Treatment[] = [
    {
        id: 1,
        title: "Harmonização Facial",
        description: "Equilíbrio e simetria para realçar a sua beleza natural.",
        details: "Técnica que visa alinhar e corrigir angulações do rosto, trazendo mais harmonia e jovialidade sem perder a naturalidade. Procedimentos personalizados para cada tipo de face.",
    },
    {
        id: 2,
        title: "Bioestimuladores",
        description: "Estimule o colágeno e recupere a firmeza da pele.",
        details: "Substâncias injetáveis que ativam a produção de colágeno pelo próprio organismo, combatendo a flacidez e melhorando a textura da pele de forma progressiva e duradoura.",
    },
    {
        id: 3,
        title: "Toxina Botulínica",
        description: "Suavize linhas de expressão com naturalidade.",
        details: "Tratamento preventivo e corretivo para rugas dinâmicas. Relaxa a musculatura facial, prevenindo a formação de vincos profundos e proporcionando um aspecto descansado.",
    },
    {
        id: 4,
        title: "Preenchimento Labial",
        description: "Volume e contorno para lábios perfeitos.",
        details: "Realce do contorno e volume dos lábios com ácido hialurônico. Foco na hidratação (efeito gloss) ou volumização, respeitando as proporções do rosto.",
    },
    {
        id: 5,
        title: "Skinbooster",
        description: "Hidratação profunda para um glow imediato.",
        details: "Injeções de ácido hialurônico fluido que hidratam profundamente a derme, melhorando a elasticidade, viço e luminosidade da pele.",
    },
    {
        id: 6,
        title: "Fios de Sustentação",
        description: "Lifting não cirúrgico para rejuvenescimento.",
        details: "Fios absorvíveis que promovem efeito lifting imediato e estimulam a produção de colágeno a longo prazo, reposicionando os tecidos da face.",
    },
];

export default function TreatmentsGrid() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="py-24 px-4 bg-[var(--color-bg)]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-gold-champagne)] uppercase tracking-widest text-sm font-medium">Nossos Tratamentos</span>
                    <h2 className="font-serif text-4xl md:text-5xl mt-4 text-[var(--color-foreground)]">Excelência em cada detalhe</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((treatment) => (
                        <motion.div
                            key={treatment.id}
                            layoutId={`card-${treatment.id}`}
                            onClick={() => setSelectedId(treatment.id)}
                            className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-[var(--color-beige-savana)] group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[var(--color-gold-champagne)] text-xl font-serif">0{treatment.id}</span>
                                <Plus className="w-5 h-5 text-gray-300 group-hover:text-[var(--color-gold-champagne)] transition-colors" />
                            </div>
                            <h3 className="font-serif text-2xl mb-3 text-gray-900">{treatment.title}</h3>
                            <p className="text-gray-600 font-sans text-sm leading-relaxed">{treatment.description}</p>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="bg-white p-10 max-w-lg w-full rounded-sm shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                            >
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {(() => {
                                    const treatment = treatments.find(t => t.id === selectedId);
                                    if (!treatment) return null;
                                    return (
                                        <>
                                            <span className="text-[var(--color-gold-champagne)] text-xl font-serif block mb-4">0{treatment.id}</span>
                                            <h3 className="font-serif text-3xl mb-6 text-gray-900">{treatment.title}</h3>
                                            <p className="text-gray-600 font-sans leading-relaxed mb-8">{treatment.details}</p>

                                            <button className="w-full bg-[var(--color-foreground)] text-white py-4 uppercase tracking-widest text-xs font-medium hover:bg-gray-800 transition-colors">
                                                Saber mais sobre {treatment.title}
                                            </button>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
