"use client"

import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { BrickWall, Home, Building2, PaintBucket } from "lucide-react"

const services = [
    {
        icon: BrickWall,
        title: "Construção Civil",
        description: "Execução completa da fundação ao telhado, seguindo rigorosamente o projeto estrutural e arquitetônico."
    },
    {
        icon: Home,
        title: "Reformas Residenciais",
        description: "Transformação de casas e apartamentos com foco em valorização do imóvel e conforto dos moradores."
    },
    {
        icon: Building2,
        title: "Reformas Comerciais",
        description: "Projetos ágeis para lojas e escritórios. Entregamos seu espaço pronto para faturar no menor tempo possível."
    },
    {
        icon: PaintBucket,
        title: "Acabamentos Premium",
        description: "Instalação de porcelanatos, revestimentos, gesso e pintura de alto padrão com equipe especializada."
    }
]

export function Services() {
    return (
        <Section id="services" className="bg-slate-50">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Soluções Completas para sua Obra
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Da fundação ao acabamento, cuidamos de cada detalhe para que você não precise se preocupar com nada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
                        >
                            <div className="h-12 w-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
