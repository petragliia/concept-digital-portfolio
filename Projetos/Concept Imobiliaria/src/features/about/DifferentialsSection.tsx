import { Key, ShieldCheck, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const differentials = [
    {
        icon: Key,
        title: "Acesso Off-Market",
        description: "Acesso exclusivo a propriedades que não estão listadas publicamente nos portais tradicionais.",
    },
    {
        icon: ShieldCheck,
        title: "Concierge Jurídico",
        description: "Assessoria jurídica completa para garantir uma transação blindada, segura e totalmente sigilosa.",
    },
    {
        icon: Star,
        title: "Experiência Private",
        description: "Atendimento personalizado no seu tempo e local de preferência. Transporte executivo para visitas.",
    },
];

export function DifferentialsSection() {
    return (
        <Section id="diferenciais" className="bg-primary text-white">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                        Vantagens
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                        Por que a Concept?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {differentials.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-8 rounded-2xl hover:bg-white/5 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6 text-secondary">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
