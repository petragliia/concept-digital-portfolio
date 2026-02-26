"use client"

import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        name: "Ricardo Mendes",
        role: "Proprietário Residencial",
        location: "Morumbi, SP",
        content: "A obra fluiu de forma impressionante. O que mais me surpreendeu foi a limpeza e organização diária. Entregaram 3 dias antes do prazo.",
        rating: 5
    },
    {
        name: "Ana Clara Silva",
        role: "Empresária",
        location: "Itaim Bibi, SP",
        content: "Contratei para reformar meu escritório e o resultado ficou incrível. A equipe é muito educada e técnica. Recomendo de olhos fechados.",
        rating: 5
    },
    {
        name: "Carlos Eduardo",
        role: "Investidor",
        location: "Pinheiros, SP",
        content: "Já fiz três obras com eles. A transparência nos custos e a qualidade do acabamento são os diferenciais que me fazem voltar.",
        rating: 5
    }
]

export function Testimonials() {
    return (
        <Section className="bg-slate-50 border-t border-slate-200/60">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        O que nossos clientes dizem
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative"
                        >
                            <Quote className="h-10 w-10 text-amber-500/20 absolute top-6 right-6" />

                            <div className="flex gap-1 mb-6 text-amber-500">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-slate-600 mb-6 italic leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div>
                                <div className="font-bold text-slate-900">{testimonial.name}</div>
                                <div className="text-sm text-slate-500">
                                    {testimonial.role} • {testimonial.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
