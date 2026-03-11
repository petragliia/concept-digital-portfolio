import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useInView } from 'framer-motion';
import { TrendingDown, Zap, ShieldCheck, MousePointerClick, Smartphone, DollarSign } from 'lucide-react';

const results = [
    {
        id: 'R1',
        title: "ROI Otimizado",
        subtitle: "Tráfego Eficiente",
        description: "Estrutura otimizada que reduz seu custo de aquisição e faz seu orçamento render muito mais.",
        icon: TrendingDown,
        visual: "ROIGraph",
        color: "from-yellow-500/20 to-orange-500/20",
        glow: "group-hover:shadow-yellow-500/50"
    },
    {
        id: 'R2',
        title: "Zero Atrito",
        subtitle: "Carregamento Instantâneo",
        description: "Performance extrema para garantir que você não perca nenhum lead por causa de lentidão.",
        icon: Zap,
        visual: "SpeedCounter",
        color: "from-blue-500/20 to-cyan-500/20",
        glow: "group-hover:shadow-blue-500/50"
    },
    {
        id: 'R3',
        title: "Percepção Premium",
        subtitle: "Autoridade Visual",
        description: "Design de alto padrão que transmite credibilidade instantânea e reforça seu posicionamento.",
        icon: ShieldCheck,
        visual: "AuthorityVisual",
        color: "from-purple-500/20 to-pink-500/20",
        glow: "group-hover:shadow-purple-500/50"
    }
];

const TiltCard = ({ children, className }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left - width / 2);
        mouseY.set(clientY - top - height / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            <motion.div
                className="h-full w-full relative transition-all duration-200 ease-out"
                style={{
                    rotateX: useTransform(mouseY, [-200, 200], [5, -5]),
                    rotateY: useTransform(mouseX, [-200, 200], [-5, 5]),
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// --- Visualization Components ---

const Bar = ({ height, color, highlight, label }) => (
    <div className="flex flex-col items-center gap-2 flex-1">
        <motion.div
            className={`w-full rounded-t-lg ${color} relative group`}
            initial={{ height: 0 }}
            whileInView={{ height: height === 'h-32' ? '8rem' : height === 'h-24' ? '6rem' : height === 'h-16' ? '4rem' : '2rem' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "backOut" }}
        >
            {highlight && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-digital-primary text-black text-xs font-bold px-2 py-1 rounded">
                    Winner
                </div>
            )}
        </motion.div>
        {label && <span className="text-xs text-white/70">{label}</span>}
    </div>
);

const ROIGraph = () => {
    return (
        <div className="w-full h-48 flex flex-col justify-end relative mt-4 bg-white/5 rounded-lg p-4 border border-white/10">
            {/* Axis */}
            <div className="absolute left-4 bottom-4 top-4 w-px bg-white/10" />
            <div className="absolute left-4 bottom-4 right-4 h-px bg-white/10" />

            <div className="relative h-full w-full flex items-end justify-between pl-4 pb-2">
                <Bar height="h-32" label="Outros" color="bg-red-500/50" />
                <Bar height="h-24" label="" color="bg-red-500/40" />
                <Bar height="h-16" label="" color="bg-digital-primary/40" />
                <Bar height="h-8" label="Concept" color="bg-digital-primary" highlight />
            </div>
            <div className="mt-2 flex justify-between text-xs text-white/50 font-mono pl-4">
                <span>Custo Médio</span>
                <span className="text-digital-primary">-60% CPC</span>
            </div>
        </div>
    );
};

const SpeedCounter = () => {
    const [count, setCount] = useState(3.0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const intervalTime = duration / steps;
            let current = 3.0;
            const timer = setInterval(() => {
                current -= 0.05;
                if (current <= 0.5) {
                    current = 0.5;
                    clearInterval(timer);
                }
                setCount(current);
            }, intervalTime);
            return () => clearInterval(timer);
        }
    }, [isInView]);

    return (
        <div ref={ref} className="text-center relative mt-4 py-8 bg-white/5 rounded-lg border border-white/10">
            <div className="text-6xl font-bold font-mono text-white tabular-nums tracking-tighter">
                {count.toFixed(1)}<span className="text-lg text-digital-primary ml-2">s</span>
            </div>
            <div className="text-sm text-white/40 mt-2 uppercase tracking-widest font-semibold">
                Tempo de Carregamento
            </div>
            <motion.div
                className="h-1 bg-digital-primary mt-6 rounded-full mx-auto"
                initial={{ width: "10%" }}
                animate={isInView ? { width: "80%" } : {}}
                transition={{ duration: 2 }}
            />
        </div>
    );
};

const FloatingBadge = ({ icon: Icon, label, delay, x, y }) => (
    <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        whileInView={{ opacity: 1, x, y }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className="absolute bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 p-2 rounded-lg flex items-center gap-2 shadow-lg z-20"
    >
        <Icon size={14} className="text-digital-primary" />
        <span className="text-xs font-bold text-white">{label}</span>
    </motion.div>
);

const AuthorityVisual = () => {
    return (
        <div className="relative w-full h-48 flex items-center justify-center mt-4 bg-white/5 rounded-lg border border-white/10 overflow-hidden">
            {/* Spinning Rings */}
            <motion.div
                className="absolute w-32 h-32 border border-digital-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute w-40 h-40 border border-white/10 rounded-full border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Central Badge */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative z-10 bg-digital-primary p-4 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
                <ShieldCheck size={32} className="text-black" />
            </motion.div>

            {/* Floating Badges */}
            <FloatingBadge icon={MousePointerClick} label="UX" delay={0.5} x={60} y={-40} />
            <FloatingBadge icon={Smartphone} label="Mobile" delay={0.7} x={-60} y={30} />
            <FloatingBadge icon={DollarSign} label="Sales" delay={0.9} x={50} y={50} />
        </div>
    );
};

const ResultCard = ({ result }) => {
    const VisualComponent = {
        "ROIGraph": ROIGraph,
        "SpeedCounter": SpeedCounter,
        "AuthorityVisual": AuthorityVisual
    }[result.visual];

    return (
        <TiltCard className="h-full w-full">
            <div className={`
                h-full relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl p-8
                transition-all duration-500 hover:border-white/20 hover:-translate-y-2
                ${result.glow} shadow-2xl flex flex-col justify-between
            `}>
                <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                    <div className="mb-6 p-4 inline-block rounded-xl bg-white/5 border border-white/10">
                        <result.icon className="w-8 h-8 text-digital-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-montserrat group-hover:text-digital-primary transition-colors">
                        {result.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-bold uppercase tracking-widest mb-4">
                        {result.subtitle}
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm mb-8">
                        {result.description}
                    </p>
                    {VisualComponent && <VisualComponent />}
                </div>
            </div>
        </TiltCard>
    );
};

const ResultNode = ({ result, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex items-center justify-between w-full mb-32 relative ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Content Side */}
            <div className="w-full md:w-5/12 relative z-10 group">
                <ResultCard result={result} />
            </div>

            {/* Center Node */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20 hidden md:flex">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-12 h-12 rounded-full bg-[#0A0A0A] border-4 border-white/10 flex items-center justify-center transition-colors duration-500 shadow-xl relative"
                >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${result.color} opacity-20 blur-md`} />
                    <div className="w-4 h-4 rounded-full bg-digital-primary shadow-[0_0_15px_rgba(255,215,0,0.8)] z-10" />
                </motion.div>

                {/* Checkpoint text */}
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-white/40 ${isEven ? 'right-16' : 'left-16'}`}
                >
                    Fase 0{index + 1}
                </motion.div>
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
        offset: ["start center", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="method" ref={containerRef} className="py-24 relative bg-gradient-to-b from-black to-[#050505] overflow-clip">
            {/* Background Ambient Light */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-digital-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-digital-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
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
                        A Evolução <span className="text-transparent bg-clip-text bg-gradient-to-r from-digital-primary to-yellow-200">Digital</span>
                    </motion.h2>
                    <p className="max-w-xl mx-auto text-gray-400">
                        Não apenas construímos sites. Criamos ecossistemas digitais que transformam visitantes em defensores da marca.
                    </p>
                </div>

                {/* Results Section (Timeline) */}
                <div className="relative max-w-6xl mx-auto mt-24">
                    {/* Central Animated Line */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 h-[calc(100%-8rem)] w-[2px] bg-white/5">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-digital-primary via-purple-500 to-digital-primary shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                        />
                    </div>

                    <div className="space-y-0 relative z-10">
                        {results.map((result, index) => (
                            <ResultNode key={result.id} result={result} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodEvolution;
