import React, { useEffect } from 'react';
import { X, MessageCircle, ExternalLink } from 'lucide-react';
import { openWhatsAppProject } from '../utils/whatsapp';

const ProjectModal = ({ project, onClose }) => {
    // Lock scroll when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [project]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true">
            <div
                className="absolute inset-0 bg-[#020408]/95 backdrop-blur-xl"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white hover:text-digital-primary transition-colors rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-digital-primary"
                    aria-label="Fechar modal"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Modal Image */}
                <div className="md:w-3/5 h-[300px] md:h-auto relative">
                    <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Modal Content */}
                <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center space-y-6 overflow-y-auto bg-[#0A0A0A]">
                    <div>
                        <span className="text-digital-primary uppercase tracking-[0.2em] text-xs font-bold border-b border-digital-primary/30 pb-1 mb-4 inline-block">
                            {project.category}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white mt-4">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        {project.description}
                    </p>

                    <div className="pt-6 space-y-3">
                        {project.demo_link && (
                            <a
                                href={project.demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all transform hover:scale-[1.02] rounded-sm"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Ver Demo Online
                            </a>
                        )}
                        <button
                            onClick={() => openWhatsAppProject(project.title)}
                            className="w-full py-4 bg-digital-primary text-black font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02] rounded-sm shadow-[0_0_20px_rgba(197,160,89,0.2)]"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Tenho Interesse
                        </button>
                        <p className="text-center text-gray-500 text-xs mt-4 uppercase tracking-widest">
                            Consultoria prioritária via WhatsApp
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
