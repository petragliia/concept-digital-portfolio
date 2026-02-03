import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            layoutId={`project-card-${project.id}`}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden cursor-pointer min-h-[400px] flex flex-col"
        >
            {/* Image container */}
            <div className="h-64 w-full relative overflow-hidden shrinkage-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60" />
                <motion.img
                    layoutId={`project-image-${project.id}`}
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge - positioned on top of image */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col relative z-20 bg-[#0a0a0a] border-t border-white/5">
                <div className="flex-1">
                    <motion.h3
                        layoutId={`project-title-${project.id}`}
                        className="text-2xl font-bold text-white mb-2 group-hover:text-digital-primary transition-colors"
                    >
                        {project.title}
                    </motion.h3>
                    <motion.p
                        layoutId={`project-desc-${project.id}`}
                        className="text-gray-400 text-sm line-clamp-3 mb-6"
                    >
                        {project.description}
                    </motion.p>
                </div>

                <div className="mt-auto flex items-center text-sm font-medium text-digital-primary">
                    <span className="mr-2">Ver Detalhes</span>
                    <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 border-2 border-digital-primary/0 rounded-2xl group-hover:border-digital-primary/50 transition-colors duration-500 pointer-events-none" />
        </motion.div>
    );
};

export default ProjectCard;
