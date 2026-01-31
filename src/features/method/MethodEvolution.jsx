import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Lightbulb, Palette, Rocket, Trophy, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: '01',
        title: "A Visão",
        subtitle: "O Potencial Oculto",
        description: "Não olhamos apenas para o que você é, mas para o que você pode se tornar. Identificamos as oportunidades de mercado que outros ignoram.",
        icon: Lightbulb,
        color: "from-blue-500/20 to-purple-500/20",
        glow: "group-hover:shadow-blue-500/50"
    },
    {
        id: '02',
        title: "A Criação",
        subtitle: "Design & Estratégia",
        description: "Transformamos ideias abstratas em experiências digitais tangíveis. Estética de nível global fundida com psicologia do consumidor.",
        icon: Palette,
        color: "from-amber-500/20 to-orange-500/20",
        glow: "group-hover:shadow-amber-500/50"
    },
    {
        id: '03',
        title: "A Ascensão",
        subtitle: "Engenharia de Alta Performance",
        description: "Construímos a infraestrutura robusta necessária para o hipercrescimento. Velocidade, segurança e escalabilidade sem concessões.",
        icon: Rocket,
        color: "from-emerald-500/20 to-cyan-500/20",
        glow: "group-hover:shadow-emerald-500/50"
    },
    {
        id: '04',
        title: "O Legado",
        subtitle: "Dominação de Mercado",
        description: "O resultado final não é apenas um site, é a liderança do seu setor. Sua marca se torna a referência inquestionável.",
        icon: Trophy,
        color: "from-rose-500/20 to-pink-500/20",
        glow: "group-hover:shadow-rose-500/50"
    }
];

const TiltCard = ({ children, className }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            style={{ perspective: 1000 }}
        >
            <motion.div
                className="h-full w-full relative transition-all duration-200 ease-out"
                style={{
                    rotateX: useTransform(mouseY, [0, 400], [5, -5]),
                    rotateY: useTransform(mouseX, [0, 600], [-5, 5]),
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

const MethodNode = ({ step, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex items-center justify-between w-full mb-24 relative ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Content Side */}
            <div className="w-full md:w-5/12 relative z-10 group">
                <TiltCard className="relative w-full">
                    {/* Holographic Glass Card */}
                    <div className={`
                        relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl p-8
                        transition-all duration-500 hover:border-white/20 hover:-translate-y-2
                        ${step.glow} shadow-2xl
                    `}>
                        {/* Gradient Glow Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-4xl font-bold text-white/5 font-montserrat">{step.id}</span>
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                    <step.icon className="w-6 h-6 text-digital-gold" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 font-montserrat group-hover:text-digital-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-digital-secondary text-sm font-bold uppercase tracking-widest mb-4">
                                {step.subtitle}
                            </p>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    </div>
                </TiltCard>
            </div>

            {/* Center Node */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-4 h-4 rounded-full bg-digital-gold shadow-[0_0_20px_rgba(255,215,0,0.5)] border-4 border-[#0A0A0A]"
                />
            </div>

            {/* Empty Side for alignment */}
            <div className="w-full md:w-5/12 hidden md:block" />
        </div>
    );
};

const MethodEvolution = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

    return (
        <section id="method" ref={containerRef} className="py-32 relative bg-[#050505] overflow-clip">
            {/* Background Ambient Light */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-digital-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-digital-gold text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
                    >
                        Nossa Jornada
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6"
                    >
                        A Evolução <span className="text-transparent bg-clip-text bg-gradient-to-r from-digital-gold to-yellow-200">Digital</span>
                    </motion.h2>
                    <p className="max-w-xl mx-auto text-gray-400">
                        Não apenas construímos sites. Criamos ecossistemas digitais que transformam visitantes em defensores da marca.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-digital-gold via-purple-500 to-digital-primary box-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
                        />
                    </div>

                    {/* Nodes */}
                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <MethodNode key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodEvolution;
