"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FilterBarProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const FilterBar = ({ categories, selectedCategory, onSelectCategory }: FilterBarProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`relative px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${selectedCategory === category
                        ? 'text-black font-bold'
                        : 'text-gray-400 hover:text-white'
                        }`}
                >
                    {selectedCategory === category && (
                        <motion.div
                            layoutId="activeFilter"
                            className="absolute inset-0 bg-digital-primary rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{category}</span>
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
