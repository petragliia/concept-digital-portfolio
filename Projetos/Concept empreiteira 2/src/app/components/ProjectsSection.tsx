"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Residência Alpha",
        category: "Construção",
        image: "/images/residencia_alpha.png",
        location: "Alphaville, SP"
    },
    {
        id: 2,
        title: "Loft Industrial",
        category: "Reforma",
        image: "/images/loft_industrial.png",
        location: "Vila Madalena, SP"
    },
    {
        id: 3,
        title: "Complexo Corporativo",
        category: "Consultoria",
        image: "/images/complexo_corporativo.png",
        location: "Faria Lima, SP"
    }
];

export function ProjectsSection() {
    return (
        <section id="projetos" className="py-32 bg-neutral-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-highlight font-mono text-sm tracking-widest uppercase mb-2 block">portfólio_selecionado</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight">
                            OBRAS EM <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">DESTAQUE</span>
                        </h2>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 md:mt-0 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2 group"
                    >
                        Ver Todos os Projetos
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-sm"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full group-hover:translate-y-0 translate-y-4 transition-transform duration-500">
                                <span className="text-highlight font-mono text-xs tracking-wider uppercase mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-highlight transition-colors">{project.title}</h3>
                                <p className="text-neutral-400 text-sm flex items-center gap-2">
                                    <span className="w-1 h-1 bg-highlight rounded-full" />
                                    {project.location}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
