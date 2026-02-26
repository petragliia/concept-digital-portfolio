'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "A tecnologia SoftCloud é anti-alérgica?",
        answer: "Sim! Todas as nossas fraldas passam por rigorosos testes dermatológicos e são hipoalergênicas, livres de parabenos e cloro."
    },
    {
        question: "Qual o prazo de entrega para meu CEP?",
        answer: "Nossas entregas são ultra-rápidas. Capitais recebem em até 24h e interior em até 3 dias úteis. Consulte no carrinho."
    },
    {
        question: "Posso criar uma assinatura recorrente?",
        answer: "Com certeza! Nosso Clube SoftCloud oferece 15% de desconto e frete grátis em todas as recorrências. Você pode cancelar quando quiser."
    },
    {
        question: "Como escolho o tamanho ideal?",
        answer: "Disponibilizamos uma tabela de medidas detalhada em cada produto. Se o bebê estiver entre dois tamanhos, recomendamos sempre o maior para garantir conforto."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 px-4 md:px-8 bg-white/50" id="suporte">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-quicksand text-gray-800">
                        Dúvidas Frequentes
                    </h2>
                    <p className="text-gray-500 font-nunito text-lg">
                        Tudo que você precisa saber sobre a Concept Ecommerce Fraldas.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass rounded-2xl overflow-hidden border border-gray-100">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/40 transition-colors"
                            >
                                <span className="font-bold text-gray-800 font-quicksand text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`text-brand-purple transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 font-nunito leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
