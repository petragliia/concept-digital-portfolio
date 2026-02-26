import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";

export function ContactSection() {
    return (
        <Section id="contato" className="bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-background hidden lg:block z-0" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                            Contato
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-6">
                            Agende uma Consultoria Private
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Nossos especialistas estão prontos para compreender suas necessidades e encontrar o imóvel que define o seu momento de vida.
                        </p>

                        <div className="space-y-6">
                            <ContactInfoItem
                                icon={<MapPin className="w-5 h-5" />}
                                title="Concept Headquarters"
                                description={<>Av. Faria Lima, 4055 - Itaim Bibi<br />São Paulo, SP</>}
                            />
                            <ContactInfoItem
                                icon={<Phone className="w-5 h-5" />}
                                title="Atendimento 24/7"
                                description="+55 (11) 99999-9999"
                            />
                            <ContactInfoItem
                                icon={<Mail className="w-5 h-5" />}
                                title="Email"
                                description="private@conceptimobiliaria.com.br"
                            />
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}

// DRY helper
function ContactInfoItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: React.ReactNode }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-secondary shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-primary mb-1">{title}</h4>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
}
