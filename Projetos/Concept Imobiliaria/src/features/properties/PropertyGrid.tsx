import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PropertyCard } from "./PropertyCard";
import { PROPERTIES } from "./data";
import { motion } from "framer-motion";

export function PropertyGrid() {
    return (
        <Section id="colecao" className="bg-white">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                        Portfolio
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">
                        Curadoria Concept
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Selecionados rigorosamente para os padrões mais exigentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {PROPERTIES.map((property, index) => (
                        <PropertyCard key={property.id} property={property} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors border-b border-primary hover:border-secondary pb-1"
                    >
                        Ver todo o portfólio <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </Container>
        </Section>
    );
}
