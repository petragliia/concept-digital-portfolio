"use client"

import { useState } from "react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
    {
        question: "Vocês cobram pelo orçamento?",
        answer: "Não. Nossa primeira visita técnica e a elaboração da proposta comercial são totalmente gratuitas e sem compromisso."
    },
    {
        question: "Atendem quais regiões?",
        answer: "Atendemos principalmente São Paulo (Capital), Alphaville, Tamboré, Cotia e ABC Paulista. Para outras regiões e litoral, consulte disponibilidade."
    },
    {
        question: "Como funciona a forma de pagamento?",
        answer: "Flexibilizamos o pagamento de acordo com o cronograma da obra. Parcelamos em até 12x no cartão ou negociamos descontos à vista. Trabalhamos com contrato detalhado para sua segurança."
    },
    {
        question: "Vocês fornecem material ou apenas mão de obra?",
        answer: "Trabalhamos das duas formas. Podemos gerenciar a compra de materiais (com nossos descontos de parceiro) ou focar apenas na execução. A escolha é sua."
    },
    {
        question: "A obra tem garantia?",
        answer: "Sim! Oferecemos 5 anos de garantia para serviços estruturais, conforme a legislação, e garantia estendida para acabamentos. Tudo documentado em contrato."
    }
]

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Section id="faq" className="bg-slate-50">
            <Container className="max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Tire suas dúvidas sobre nosso processo de trabalho.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div
                                key={index}
                                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:border-amber-300 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-semibold text-slate-900 pr-8">
                                        {faq.question}
                                    </span>
                                    {isOpen ? (
                                        <Minus className="h-5 w-5 text-amber-500 shrink-0" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-slate-400 shrink-0" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-slate-100 mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}
