"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/70 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
                    alt="Obra de alto padrão"
                    className="w-full h-full object-cover"
                />
            </div>

            <Container className="relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-medium text-sm mb-4">
                        Empreiteira Premium em São Paulo
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                        Sua obra entregue no prazo, <br className="hidden md:block" />
                        <span className="text-amber-500">sem surpresas</span> no orçamento.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                        Especialistas em reformas de alto padrão com gestão completa.
                        Transformamos seu projeto em realidade com cronograma garantido e acabamento impecável.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" variant="accent" className="w-full sm:w-auto text-lg h-14 px-8" asChild>
                            <Link href="#contact">Solicitar Orçamento</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900" asChild>
                            <Link href="#portfolio">Ver Projetos Realizados</Link>
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
