import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <Section id="sobre" className="bg-background">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                                alt="Architecture Detail"
                                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-lg shadow-xl hidden md:block max-w-xs">
                                <p className="font-serif text-2xl text-primary mb-2">"Mais que imóveis, legados."</p>
                                <div className="h-1 w-12 bg-secondary" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                            Sobre a Concept
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-6">
                            A Arte de Viver Bem
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Na Concept Imobiliária, entendemos que um lar é a extensão da sua personalidade. Oferecemos um{" "}
                            <strong className="text-primary font-medium">Concierge Imobiliário</strong> para quem não busca apenas metros quadrados, mas sim um estilo de vida inegociável.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Nossa curadoria é meticulosa, selecionando apenas propriedades que transcendem o comum e oferecem experiências únicas de conforto, design e exclusividade.
                        </p>
                        <a
                            href="#diferenciais"
                            className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center gap-2 group transition-colors"
                        >
                            Conheça nossos diferenciais{" "}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
