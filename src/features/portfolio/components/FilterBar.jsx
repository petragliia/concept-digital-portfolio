import React from 'react';
import { motion } from 'framer-motion';

const FilterBar = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${selectedCategory === category
                            ? 'text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    {selectedCategory === category && (
                        <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-digital-primary rounded-full -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    {category}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
