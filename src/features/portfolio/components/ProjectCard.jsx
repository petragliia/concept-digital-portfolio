import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            onClick={() => onClick(project)}
            className="group relative bg-[#0A0A0A] border border-white/10 overflow-hidden rounded-card hover:border-digital-primary/50 transition-all duration-300 block cursor-pointer hover:-translate-y-2 shadow-lg hover:shadow-[0_0_30px_rgba(197,160,89,0.1)]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick(project);
                }
            }}
            aria-label={`Ver detalhes do projeto ${project.title}`}
        >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                />

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-1 bg-black/80 backdrop-blur-md text-xs font-bold text-digital-primary uppercase tracking-wider border border-digital-primary/30 rounded-full shadow-lg">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 relative z-20 bg-[#0A0A0A] border-t border-white/5">
                <h3 className="text-2xl font-bold font-montserrat mb-3 text-white group-hover:text-digital-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 font-light group-hover:text-gray-400">
                    {project.description}
                </p>

                <span
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-digital-primary group-hover:text-white transition-colors"
                >
                    Ver Detalhes <ExternalLink className="ml-2 w-4 h-4" />
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;
