"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AuthoritySection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative h-[600px] w-full max-w-md mx-auto md:ml-auto"
                >
                    <div className="absolute inset-0 bg-[var(--color-gold-champagne)] translate-x-4 translate-y-4 rounded-sm" />
                    <div className="relative h-full w-full overflow-hidden rounded-sm">
                        <Image
                            src="/images/authority.png"
                            alt="Dra. Especialista"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <span className="text-[var(--color-gold-champagne)] uppercase tracking-widest text-sm font-medium">Sobre a Especialista</span>
                    <h2 className="font-serif text-4xl mt-4 mb-8 text-gray-900">Dra. Sofia Martins</h2>

                    <div className="font-sans text-gray-600 space-y-6 leading-relaxed text-lg">
                        <p>
                            Com mais de 10 anos de experi&ecirc;ncia em medicina est&eacute;tica, a Dra. Sofia Martins acredita que a verdadeira beleza reside na harmonia e na autenticidade.
                        </p>
                        <p>
                            Membro da Sociedade Brasileira de Dermatologia, ela combina t&eacute;cnicas avan&ccedil;adas com uma vis&atilde;o art&iacute;stica para entregar resultados que n&atilde;o apenas transformam a apar&ecirc;ncia, mas renovam a autoconfian&ccedil;a.
                        </p>
                        <p className="italic font-serif text-xl pt-4 text-[var(--color-gold-champagne)]">
                            "Minha miss&atilde;o &eacute; real&ccedil;ar o que voc&ecirc; j&aacute; tem de melhor, com sutileza e sofistica&ccedil;&atilde;o."
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 px-10 py-4 bg-[var(--color-foreground)] text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
                    >
                        Conhe&ccedil;a Minha Trajet&oacute;ria
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
