import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard, ProjectModal } from '../features/portfolio';

const AllProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="pt-32 pb-24 relative min-h-screen">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <Link to="/" className="inline-flex items-center text-digital-gold hover:text-white transition-colors mb-6 uppercase tracking-widest text-xs font-bold gap-2">
                        <ArrowLeft className="w-4 h-4" /> Voltar para Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-4">
                        Todos os Projetos
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg font-light">
                        Explore nosso portfólio completo de soluções digitais de alta performance.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
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

export default AllProjects;
