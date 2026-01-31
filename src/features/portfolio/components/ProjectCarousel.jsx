import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const ProjectCarousel = ({ projects, onProjectClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-play interval
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // 5 seconds auto-play

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const traverse = (index) => {
        if (index > currentIndex) {
            setDirection(1);
            setCurrentIndex(index);
        } else if (index < currentIndex) {
            setDirection(-1);
            setCurrentIndex(index);
        }
    }

    // Calculate indices for circular display
    const getVisibleProjects = () => {
        const total = projects.length;
        if (total === 0) return [];

        // Simple logic for 3 visible items if possible, but handling array wrapping
        const prev = (currentIndex - 1 + total) % total;
        const next = (currentIndex + 1) % total;
        return [prev, currentIndex, next];
    };

    const visibleIndices = getVisibleProjects();

    const variants = {
        center: {
            x: 0,
            scale: 1,
            opacity: 1,
            zIndex: 5,
            rotateY: 0,
            filter: "brightness(1)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
        left: {
            x: "-60%",
            scale: 0.8,
            opacity: 0.6,
            zIndex: 2,
            rotateY: 25,
            filter: "brightness(0.5)",
            transition: { duration: 0.5 },
        },
        right: {
            x: "60%",
            scale: 0.8,
            opacity: 0.6,
            zIndex: 2,
            rotateY: -25,
            filter: "brightness(0.5)",
            transition: { duration: 0.5 },
        },
        hidden: {
            scale: 0,
            opacity: 0,
        }
    };

    // Determine variants dynamically based on index relative to current
    const getVariant = (index) => {
        if (index === currentIndex) return "center";

        const total = projects.length;
        const prev = (currentIndex - 1 + total) % total;
        const next = (currentIndex + 1) % total;

        if (index === prev) return "left";
        if (index === next) return "right";
        return "hidden";
    };

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000 overflow-hidden">
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 z-50 p-3 bg-black/50 hover:bg-digital-primary/20 text-white rounded-full backdrop-blur-md border border-white/10 hover:border-digital-primary transition-all group"
            >
                <ChevronLeft className="w-6 h-6 group-hover:text-digital-primary transition-colors" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 z-50 p-3 bg-black/50 hover:bg-digital-primary/20 text-white rounded-full backdrop-blur-md border border-white/10 hover:border-digital-primary transition-all group"
            >
                <ChevronRight className="w-6 h-6 group-hover:text-digital-primary transition-colors" />
            </button>

            {/* Carousel Track */}
            <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
                <AnimatePresence initial={false} mode="popLayout">
                    {projects.map((project, index) => {
                        const variant = getVariant(index);
                        if (variant === 'hidden') return null;

                        return (
                            <motion.div
                                key={project.id}
                                variants={variants}
                                initial={direction > 0 ? "right" : "left"} // Simple entry animation logic
                                animate={variant}
                                exit="hidden" // Exit logic is tricky in circular, simplified here
                                className="absolute w-[300px] md:w-[600px] aspect-video rounded-xl bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl cursor-pointer"
                                onClick={() => {
                                    if (index === currentIndex) {
                                        onProjectClick(project);
                                    } else {
                                        traverse(index);
                                    }
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                {/* Image */}
                                <img
                                    src={project.image_url}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                {/* Content (Only visible on center slide) */}
                                {variant === 'center' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-left pb-10 md:pb-8"
                                    >
                                        <span className="text-digital-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span>Ver Detalhes</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 flex gap-2 z-50">
                {projects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-digital-primary' : 'bg-gray-600 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectCarousel;
