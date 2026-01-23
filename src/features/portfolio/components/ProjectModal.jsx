import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
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
                className="absolute inset-0 bg-digital-blue-dark/95 backdrop-blur-md"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative w-full max-w-5xl bg-digital-blue-medium border border-white/10 overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col md:flex-row shadow-2xl rounded-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white hover:text-digital-gold transition-colors rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-digital-gold"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-digital-blue-medium via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Modal Content */}
                <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center space-y-6 overflow-y-auto">
                    <div>
                        <span className="text-digital-gold uppercase tracking-[0.2em] text-xs font-bold border-b border-digital-gold/30 pb-1 mb-4 inline-block">
                            {project.category}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white mt-4">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        {project.description}
                    </p>

                    <div className="pt-6">
                        <button
                            onClick={() => openWhatsAppProject(project.title)}
                            className="w-full py-4 bg-digital-gold text-digital-black font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02] rounded-sm"
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
