import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { ProjectCard, ProjectModal } from '../features/portfolio';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="portfolio" className="py-24 relative">
            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-digital-gold/20 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="text-digital-gold uppercase tracking-widest text-sm font-bold">Projetos Selecionados</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-montserrat mt-2">Projetos em Destaque</h2>
                    </div>
                    <Link to="/projetos" className="hidden md:block text-gray-400 hover:text-digital-gold transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-digital-gold pb-1">
                        Ver Todos os Projetos
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/projetos" className="text-gray-400 hover:text-digital-gold transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-digital-gold pb-1">
                        Ver Todos os Projetos
                    </Link>
                </div>
            </div>

            {/* Project Modal Overlay */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Portfolio;
