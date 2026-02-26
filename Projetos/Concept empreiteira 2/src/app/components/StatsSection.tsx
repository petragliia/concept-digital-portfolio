"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "+500", label: "Obras Entregues" },
    { value: "98%", label: "Satisfação" },
    { value: "Zero", label: "Atrasos em 2024" },
    { value: "ISO", label: "Certificação 9001" },
];

export function StatsSection() {
    return (
        <section id="diferenciais" className="py-20 border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-neutral-500 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
