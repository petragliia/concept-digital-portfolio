import React, { useEffect, useState } from 'react';

const IsometricScene = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate mouse position relative to center of screen
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Head-on view logic
    const rotateX = -5 + mousePosition.y * 2; // Slight look up/down
    const rotateY = mousePosition.x * 3; // Slight subtle pan

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-2000 overflow-visible">
            {/* Main Scene Container */}
            <div
                className="relative w-[500px] h-[320px] preserve-3d transition-transform duration-100 ease-out"
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                }}
            >
                {/* 
                   =============================================
                   LAPTOP BASE (Bottom Half) - Perspective View
                   =============================================
                */}
                {/* Top Face (Keyboard Area) - Barely visible in head-on view */}
                <div className="absolute inset-x-0 -bottom-[120px] h-[140px] bg-[#0F0F0F] rounded-xl preserve-3d transform origin-top rotate-x-[80deg] shadow-2xl border border-white/5">
                    <div className="absolute inset-4 bg-[#050505] rounded-lg opacity-50"></div>
                </div>

                {/* 
                   =============================================
                   LAPTOP SCREEN (Top Half) - Main Focus
                   =============================================
                */}
                <div className="absolute inset-0 bg-[#020617] border-[4px] border-[#1a1a1a] rounded-xl overflow-hidden preserve-3d shadow-[0_0_50px_rgba(244,63,94,0.15)] ring-1 ring-white/10">

                    {/* Bezel Gloss */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-50"></div>

                    {/* Screen Content Container */}
                    <div className="absolute inset-1 bg-[#020617] rounded-lg overflow-hidden flex flex-col relative">
                        {/* Wallpaper Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-digital-primary/10 via-[#020617] to-[#020617] opacity-60"></div>

                        {/* Status Bar */}
                        <div className="w-full h-8 flex items-center justify-between px-4 border-b border-white/5 z-10">
                            <div className="flex space-x-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-[10px] text-gray-500 font-mono">dashboard_v2.0</div>
                        </div>

                        {/* Dashboard Grid */}
                        <div className="p-6 grid grid-cols-12 gap-4 h-full z-10 content-start">

                            {/* Metric Card 1: Revenue */}
                            <div className="col-span-4 bg-white/5 rounded-xl p-3 border border-white/5 backdrop-blur-sm">
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Revenue</div>
                                <div className="text-2xl font-bold text-white">$128.4k</div>
                                <div className="flex items-center gap-1 mt-2">
                                    <div className="text-[10px] text-digital-primary font-bold bg-digital-primary/10 px-1 rounded">+12.5%</div>
                                    <div className="h-4 flex-1 flex items-end gap-[1px]">
                                        {[30, 45, 35, 60, 50, 70, 80].map((h, i) => (
                                            <div key={i} className="flex-1 bg-digital-primary/50" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Metric Card 2: Conversion */}
                            <div className="col-span-4 bg-white/5 rounded-xl p-3 border border-white/5 backdrop-blur-sm">
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Conversion</div>
                                <div className="text-2xl font-bold text-white">4.8%</div>
                                <div className="w-full bg-gray-800 h-1 mt-3 rounded-full overflow-hidden">
                                    <div className="w-[65%] h-full bg-digital-secondary shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
                                </div>
                            </div>

                            {/* Metric Card 3: Active Users */}
                            <div className="col-span-4 bg-white/5 rounded-xl p-3 border border-white/5 backdrop-blur-sm flex flex-col justify-between">
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Active Users</div>
                                <div className="text-xl font-bold text-white">2,491</div>
                                <div className="flex -space-x-1 mt-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-4 h-4 rounded-full bg-gray-600 border border-[#020617]"></div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Chart Area (Bottom) */}
                            <div className="col-span-12 bg-white/5 rounded-xl p-4 border border-white/5 h-32 relative overflow-hidden group">
                                <div className="absolute top-4 left-4 text-[10px] text-gray-400 uppercase">Growth Engine</div>

                                {/* Abstract Line Chart */}
                                <svg className="absolute bottom-0 left-0 right-0 w-full h-24 text-digital-primary opacity-80" viewBox="0 0 100 40" preserveAspectRatio="none">
                                    <path
                                        d="M0 35 Q 10 32, 20 30 T 40 25 T 60 15 T 80 10 T 100 5 L 100 40 L 0 40 Z"
                                        fill="url(#gradient)"
                                    />
                                    <path
                                        d="M0 35 Q 10 32, 20 30 T 40 25 T 60 15 T 80 10 T 100 5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Hover tooltip interaction simulator */}
                                <div className="absolute top-10 right-10 bg-digital-primary text-white text-[10px] px-2 py-1 rounded shadow-lg transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                    $45,290
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 
                   =============================================
                   FLOATING ELEMENTS (Augmented Reality style)
                   =============================================
                */}
                <div
                    className="absolute -right-16 top-10 w-32 bg-[#020617]/90 backdrop-blur-md border border-digital-primary/50 rounded-lg p-3 shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-float ring-1 ring-digital-primary/20"
                    style={{ animationDelay: '0.5s' }}
                >
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-digital-primary rounded-full animate-pulse"></div>
                        <span className="text-[10px] text-white font-bold">Live Sales</span>
                    </div>
                    <div className="space-y-1">
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[80%] bg-digital-primary animate-[shimmer_2s_infinite]"></div>
                        </div>
                        <div className="text-[8px] text-gray-400 text-right">Just now</div>
                    </div>
                </div>

                <div
                    className="absolute -left-12 bottom-20 w-auto px-4 py-2 bg-digital-secondary/10 backdrop-blur-md border border-digital-secondary/30 rounded-full flex items-center gap-2 animate-float-fast shadow-lg"
                    style={{ animationDelay: '1.2s' }}
                >
                    <div className="text-digital-secondary text-xs">🚀</div>
                    <div className="text-[10px] text-white font-bold tracking-wide">SCALING...</div>
                </div>

            </div>
        </div>
    );
};

export default IsometricScene;
