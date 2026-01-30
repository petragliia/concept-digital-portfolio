import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectModal } from '../features/portfolio';
import ProjectCarousel from './ProjectCarousel';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="portfolio" className="py-24 relative overflow-hidden">
            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-digital-primary/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-4">
                    <div>
                        <span className="text-digital-primary uppercase tracking-widest text-sm font-bold">Projetos Selecionados</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-montserrat mt-2">Projetos em Destaque</h2>
                    </div>
                    <Link to="/projetos" className="hidden md:block text-gray-400 hover:text-digital-primary transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-digital-primary pb-1">
                        Ver Todos os Projetos
                    </Link>
                </div>

                {/* 3D Interactive Carousel */}
                <div className="w-full">
                    <ProjectCarousel projects={projects} onProjectClick={setSelectedProject} />
                </div>
                <div className="mt-12 text-center md:hidden">
                    <Link to="/projetos" className="text-gray-400 hover:text-digital-primary transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-digital-primary pb-1">
                        Ver Todos os Projetos
                    </Link>
                </div>
            </div>

            {/* Project Modal Overlay */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Portfolio;
