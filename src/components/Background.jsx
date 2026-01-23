import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-digital-black">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-digital-black via-digital-blue-dark to-digital-black opacity-80" />

            {/* Floating Orbs / Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-digital-blue-medium/10 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-digital-gold/5 rounded-full blur-[120px] animate-float" />

            {/* Animated Grid or Lines (Optional subtle texture) */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}
            />
        </div>
    );
};

export default Background;
