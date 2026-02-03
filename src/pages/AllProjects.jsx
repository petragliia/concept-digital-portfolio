import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../features/portfolio/Portfolio';

const AllProjects = () => {
    // Reusing the Portfolio component but we might want to hide the "Projetos Selecionados" header 
    // or customize it. For now, since Portfolio component has its own header internal logic, 
    // we renders it as is, or we could pass a prop to customize the title if we refactored Portfolio.
    // Given the current implementation of Portfolio.jsx, it includes the header hardcoded. 
    // A quick improvement is to wrap it or just render it. 
    // Ideally we would refactor Portfolio to accept a title prop, but let's stick to the plan of reusing.

    return (
        <div className="pt-20 min-h-screen bg-black">
            <Portfolio />

            {/* Back to Home Button (Fixed/Floating is nice, or just rely on Navbar) */}
        </div>
    );
};

export default AllProjects;
