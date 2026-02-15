"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types/project';
import { openWhatsAppProject } from '../../features/portfolio/utils/whatsapp';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    // Lock scroll when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [project]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${project.id}`}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                aria-hidden="true"
            />

            <motion.div
                layoutId={`project-card-${project.id}`}
                className="relative w-full max-w-5xl bg-[#0F0F0F] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh] md:h-[600px]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
                    aria-label="Fechar Modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-[#0F0F0F]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-transparent z-10 md:bg-gradient-to-t pointer-events-none" />
                    <motion.div
                        className="relative w-full h-full"
                        layoutId={`project-image-${project.id}`}
                    >
                        <Image
                            src={project.image_url}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority // Modal image is high priority when open
                        />
                    </motion.div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col bg-[#0F0F0F]">
                    <div className="mb-6">
                        <span className="px-3 py-1 bg-digital-primary/10 border border-digital-primary/20 rounded-full text-xs font-bold text-digital-primary uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>

                    <motion.h2
                        layoutId={`project-title-${project.id}`}
                        id={`modal-title-${project.id}`}
                        className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat"
                    >
                        {project.title}
                    </motion.h2>

                    <motion.p
                        layoutId={`project-desc-${project.id}`}
                        className="text-gray-300 mb-8 leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    <div className="mt-auto space-y-4">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Ações do Projeto</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href={project.demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-digital-primary hover:bg-digital-primary-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-digital-primary/20"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Acessar Projeto Online
                            </a>

                            <button
                                onClick={() => openWhatsAppProject(project.title)}
                                className="w-full py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                            >
                                <span className="text-green-400">Tenho Interesse</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;
