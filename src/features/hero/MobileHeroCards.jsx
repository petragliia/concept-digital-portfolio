import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const MobileHeroCards = () => {
    return (
        <div className="w-full mt-10 space-y-4 px-4 pb-12">
            {/* Card 1: Revenue - Main Highlight */}
            <div className="bg-[#020617]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-2xl relative overflow-hidden group hover:border-digital-primary/30 transition-all duration-500">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-digital-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />

                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                            <DollarSign className="w-4 h-4 text-digital-primary" />
                        </div>
                        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Receita</span>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-digital-primary bg-digital-primary/10 px-2 py-1 rounded-full border border-digital-primary/20">
                        <TrendingUp className="w-3 h-3" />
                        +12.5%
                    </span>
                </div>

                <div className="text-3xl font-bold text-white mb-4 tracking-tight">$128,420</div>

                {/* Mini Chart Visualization */}
                <div className="flex items-end gap-1 h-8 w-full">
                    {[35, 45, 40, 60, 55, 75, 85, 80, 95, 100].map((h, i) => (
                        <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-digital-primary/20 to-digital-primary rounded-sm transition-all duration-300 hover:opacity-100 opacity-60"
                            style={{ height: `${h}%` }}
                        />
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Card 2: Conversion Rate */}
                <div className="bg-[#020617]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl relative overflow-hidden">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Conversão</div>
                    <div className="text-2xl font-bold text-white mb-2">4.8%</div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-digital-secondary shadow-[0_0_10px_rgba(96,165,250,0.6)] animate-pulse-slow"></div>
                    </div>
                </div>

                {/* Card 3: Active Users */}
                <div className="bg-[#020617]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl relative overflow-hidden flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider">Usuários Ativos</div>
                        <Users className="w-3 h-3 text-gray-500" />
                    </div>
                    <div className="text-xl font-bold text-white">2,491</div>
                    <div className="flex -space-x-2 mt-1">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-5 h-5 rounded-full bg-gray-700 border border-[#020617] flex items-center justify-center text-[6px] text-white">
                                {i}
                            </div>
                        ))}
                        <div className="w-5 h-5 rounded-full bg-gray-600 border border-[#020617] flex items-center justify-center text-[6px] text-white">+</div>
                    </div>
                </div>
            </div>

            {/* Trust Indicator */}
            <div className="text-center pt-2 pb-6 opacity-60">
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Utilizado por Líderes de Mercado</p>
            </div>
        </div>
    );
};

export default MobileHeroCards;
