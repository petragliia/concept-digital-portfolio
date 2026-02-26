"use client"

import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Trash2, Users, FileText, CalendarCheck } from "lucide-react"

const features = [
    {
        icon: Trash2,
        title: "Gestão de Resíduos",
        description: "Obra limpa do início ao fim. Cuidamos de todo o descarte de forma ecológica e organizada."
    },
    {
        icon: Users,
        title: "Equipe Própria",
        description: "Profissionais registrados, uniformizados e treinados. Segurança total para sua obra."
    },
    {
        icon: FileText,
        title: "Transparência Total",
        description: "Relatórios semanais de evolução e controle financeiro detalhado de cada etapa."
    },
    {
        icon: CalendarCheck,
        title: "Cronograma Garantido",
        description: "Compromisso em contrato com data de entrega. Respeito absoluto ao seu planejamento."
    }
]

export function Features() {
    return (
        <Section id="differential" className="bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-medium text-sm">
                            Por que nos escolher?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Mais do que construir, <br />
                            <span className="text-amber-500">nós cuidamos</span> da sua experiência.
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Sabemos que obra pode ser uma dor de cabeça. Por isso, criamos um método
                            que garante tranquilidade, previsibilidade e excelência na execução.
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors"
                            >
                                <feature.icon className="h-8 w-8 text-amber-500 mb-4" />
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-slate-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
