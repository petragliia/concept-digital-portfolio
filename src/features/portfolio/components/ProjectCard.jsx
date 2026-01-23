import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            onClick={() => onClick(project)}
            className="group relative bg-digital-blue-medium border border-white/5 overflow-hidden rounded-card hover:border-digital-gold/50 transition-all duration-300 block cursor-pointer hover:-translate-y-2 shadow-lg hover:shadow-2xl"
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
                <div className="absolute inset-0 bg-digital-blue-dark/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                />

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-1 bg-digital-blue-dark/90 backdrop-blur-md text-xs font-bold text-digital-gold uppercase tracking-wider border border-white/10 rounded-full shadow-lg">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 relative z-20 bg-digital-blue-medium border-t border-white/5">
                <h3 className="text-2xl font-bold font-montserrat mb-3 text-white group-hover:text-digital-gold transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
                    {project.description}
                </p>

                <span
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-digital-gold group-hover:text-white transition-colors"
                >
                    Ver Detalhes <ExternalLink className="ml-2 w-4 h-4" />
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;
