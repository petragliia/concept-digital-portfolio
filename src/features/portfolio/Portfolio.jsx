import React, { useState } from 'react';
import { useProjectFilter } from './hooks/useProjectFilter';
import ProjectModal from './components/ProjectModal';
import FilterBar from './components/FilterBar';
import ProjectGrid from './components/ProjectGrid';
import { AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const {
        selectedCategory,
        setSelectedCategory,
        categories,
        filteredProjects
    } = useProjectFilter();

    return (
        <section id="portfolio" className="py-24 relative min-h-screen bg-gradient-to-b from-black via-[#000B18] to-black overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Ambient Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-digital-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4" />
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-digital-primary/20 to-transparent z-10" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-digital-primary uppercase tracking-widest text-sm font-bold block mb-2">
                        Portfolio Exclusivo
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
                        Projetos Selecionados
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore nossa coleção de projetos digitais de alta performance, desenvolvidos com foco em conversão, estética e funcionalidade.
                    </p>
                </div>

                {/* Filter Bar */}
                <FilterBar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                {/* Project Grid */}
                <ProjectGrid
                    projects={filteredProjects}
                    onProjectClick={setSelectedProject}
                />
            </div>

            {/* Project Modal Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;

