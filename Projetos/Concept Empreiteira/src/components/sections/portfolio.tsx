"use client"

import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
    {
        title: "Casa de Campo",
        category: "Construção",
        location: "Itu, SP",
        image: "https://images.unsplash.com/photo-1600596542815-bfad4c1539a9?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Residencial Alphaville",
        category: "Reforma Completa",
        location: "Barueri, SP",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Escritório Tech",
        category: "Corporativo",
        location: "Vila Olímpia, SP",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Apartamento Jardins",
        category: "Interiores",
        location: "Jardins, SP",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Consultório Odontológico",
        category: "Comercial",
        location: "Moema, SP",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Loja Boutique",
        category: "Comercial",
        location: "Oscar Freire, SP",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop"
    }
]

export function Portfolio() {
    return (
        <Section id="portfolio" className="bg-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Excelência em cada detalhe
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Confira alguns dos nossos projetos recentes entregues com o padrão de qualidade Concept.
                        </p>
                    </div>
                    <Button variant="outline" className="shrink-0" asChild>
                        <Link href="#contact">Quero um projeto assim</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-amber-500 font-medium text-sm mb-1">{project.category}</span>
                                <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                                <p className="text-slate-300 text-sm flex items-center gap-1">
                                    {project.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
