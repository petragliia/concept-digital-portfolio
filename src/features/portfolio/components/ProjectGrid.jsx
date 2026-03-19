import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { trackEvent } from '@/lib/supabase';

const ProjectGrid = ({ projects, onProjectClick }) => {
    return (
        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode='popLayout'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => {
                            trackEvent('project_clicks', { project_id: project.id, project_title: project.title });
                            onProjectClick(project);
                        }}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    );    
};

export default ProjectGrid;
