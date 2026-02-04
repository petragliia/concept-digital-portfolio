import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { TrendingDown, Zap, ShieldCheck, MousePointerClick, Smartphone, DollarSign } from 'lucide-react';

const WhyUsSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth drawing of the vertical line
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative bg-digital-black min-h-[300vh] py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            {/* Central Animated Line (Desktop) - hidden on mobile, visible on lg */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-digital-secondary/20 origin-top">
                <motion.div
                    className="w-full bg-gradient-to-b from-digital-primary to-digital-primary/50 origin-top"
                    style={{ scaleY, height: "100%" }}
                />
            </div>

            {/* Section 1: Money / ROI */}
            <Step
                index={0}
                icon={TrendingDown}
                title="Google Ads com Desconto?"
                subtitle="O Segredo do Índice de Qualidade"
                content="O Google cobra menos por clique de sites rápidos e bem estruturados. Nossas páginas reduzem seu CPC, fazendo seu orçamento de anúncios render mais."
                visual={<ROIGraph />}
                alignment="left"
            />

            {/* Section 2: Speed / Conversion */}
            <Step
                index={1}
                icon={Zap}
                title="Velocidade é Lucro"
                subtitle="Carregamento Instantâneo"
                content="53% dos usuários abandonam sites que demoram mais de 3s. Nossas páginas carregam instantaneamente, garantindo que você não perca o cliente que pagou para atrair."
                visual={<SpeedCounter />}
                alignment="right"
            />

            {/* Section 3: Authority / Trust */}
            <Step
                index={2}
                icon={ShieldCheck}
                title="Autoridade Inquestionável"
                subtitle="Design que Transmite Confiança"
                content="Para nichos de alto padrão como Advocacia e Saúde, a estabilidade técnica é percebida como competência profissional. Blindamos sua imagem online."
                visual={<AuthorityVisual />}
                alignment="left"
            />
        </section>
    );
};

const Step = ({ index, icon: Icon, title, subtitle, content, visual, alignment }) => {
    const isRight = alignment === 'right';
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

    // Format number like "01", "02"
    const stepNumber = `0${index + 1}`;

    return (
        <div ref={ref} className="min-h-screen flex items-center justify-center relative py-20 lg:py-0">
            <div className={`container mx-auto px-6 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${isRight ? 'lg:flex-row-reverse' : ''}`}>

                {/* Text Content (Styled like Method Cards) */}
                <motion.div
                    initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 lg:text-right text-left pl-12 lg:pl-0"
                    style={{ textAlign: isRight ? 'left' : 'right' }}
                >
                    <div className="group relative">
                        {/* Card Background with Skew (Adapted from Method) */}
                        <div className={`absolute inset-0 bg-[#0A0A0A] border border-white/10 -skew-x-3 scale-[0.98] group-hover:scale-100 group-hover:border-digital-primary/50 group-hover:bg-[#0F0F0F] transition-all duration-500 ease-out shadow-2xl ${isRight ? 'origin-left' : 'origin-right'}`} />

                        <div className={`relative p-8 lg:p-10 flex flex-col h-full z-10 ${isRight ? 'items-start' : 'lg:items-end items-start'}`}>

                            {/* Icon Container */}
                            <div className="mb-6 inline-block p-4 bg-digital-primary/5 border border-digital-primary/20 -skew-x-10 group-hover:bg-digital-primary/10 transition-colors">
                                <Icon className="w-8 h-8 text-digital-primary skew-x-10 group-hover:text-white transition-colors" />
                            </div>

                            <div className={`space-y-4 flex flex-col ${isRight ? 'items-start' : 'lg:items-end items-start'}`}>
                                <div className="text-digital-secondary text-xs font-bold uppercase tracking-widest font-inter">
                                    Fase {stepNumber}
                                </div>

                                <div className={`flex flex-col ${isRight ? 'items-start' : 'lg:items-end items-start'}`}>
                                    <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-white group-hover:text-digital-primary transition-colors leading-tight mb-1">
                                        {title}
                                    </h2>
                                    <h3 className="text-lg text-digital-primary font-medium tracking-wide opacity-80">
                                        {subtitle}
                                    </h3>
                                </div>

                                <p className="text-gray-500 font-light leading-relaxed text-base group-hover:text-gray-300 transition-colors max-w-md">
                                    {content}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Center Point (Desktop only decorative) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-digital-black border-2 border-digital-primary items-center justify-center z-20">
                    <div className={`w-3 h-3 rounded-full bg-digital-primary transition-all duration-500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                </div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full max-w-lg pl-12 lg:pl-0"
                >
                    <div className="relative aspect-video rounded-sm overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl group hover:border-digital-primary/30 transition-colors duration-500 -skew-x-3">
                        {/* Remove rounded-3xl to match brutalist/sharp style or keep minimal rounding */}
                        <div className="absolute inset-0 bg-gradient-to-br from-digital-primary/5 to-transparent" />
                        <div className="relative h-full w-full flex items-center justify-center p-8 skew-x-3">
                            {visual}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// --- Micro-Interactions / Visuals ---

const ROIGraph = () => {
    return (
        <div className="w-full h-full flex flex-col justify-end relative">
            {/* Axis */}
            <div className="absolute left-0 bottom-0 top-0 w-px bg-white/10" />
            <div className="absolute left-0 bottom-0 right-0 h-px bg-white/10" />

            {/* Animated Lines */}
            <div className="relative h-40 w-full">
                {/* CPC Line (High to Low) */}
                <motion.path
                    d="M0 10 L100 10 L200 80 L300 120" // Simple representation
                    fill="transparent"
                    strokeWidth="3"
                    stroke="#C5A059" // Gold
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}

                // Note: This needs an SVG wrapper to work properly as path
                />

                {/* Visualizing with div bars for simplicity/reliability without complex SVG paths hand-coding */}
                <div className="flex justify-between items-end h-full px-4 gap-4">
                    <Bar height="h-32" label="Outros" color="bg-red-500/50" />
                    <Bar height="h-24" label="" color="bg-red-500/40" />
                    <Bar height="h-16" label="" color="bg-digital-primary/40" />
                    <Bar height="h-8" label="Concept" color="bg-digital-primary" highlight />
                </div>
            </div>
            <div className="mt-4 flex justify-between text-xs text-white/50 font-mono">
                <span>Custo Médio</span>
                <span className="text-digital-primary">-60% CPC</span>
            </div>
        </div>
    );
};

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


const SpeedCounter = () => {
    const [count, setCount] = React.useState(3.0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    React.useEffect(() => {
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
        <div ref={ref} className="text-center relative">
            <div className="text-7xl font-bold font-mono text-digital-white tabular-nums tracking-tighter">
                {count.toFixed(1)}<span className="text-lg text-digital-primary ml-2">s</span>
            </div>
            <div className="text-sm text-white/40 mt-2 uppercase tracking-widest font-semibold">
                Tempo de Carregamento
            </div>
            <motion.div
                className="h-1 bg-digital-primary mt-6 rounded-full mx-auto"
                initial={{ width: "10%" }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 2 }}
            />
        </div>
    );
};

const AuthorityVisual = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Spinning Rings */}
            <motion.div
                className="absolute w-40 h-40 border border-digital-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute w-52 h-52 border border-digital-white/10 rounded-full border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Central Badge */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative z-10 bg-digital-primary p-6 rounded-full shadow-[0_0_50px_rgba(197,160,89,0.3)]"
            >
                <ShieldCheck size={48} className="text-digital-black" />
            </motion.div>

            {/* Floating Badges */}
            <FloatingBadge icon={MousePointerClick} label="UX" delay={0.5} x={80} y={-60} />
            <FloatingBadge icon={Smartphone} label="Mobile" delay={0.7} x={-80} y={40} />
            <FloatingBadge icon={DollarSign} label="Sales" delay={0.9} x={60} y={70} />
        </div>
    );
};

const FloatingBadge = ({ icon: Icon, label, delay, x, y }) => (
    <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        whileInView={{ opacity: 1, x, y }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className="absolute bg-digital-secondary/80 backdrop-blur-md border border-white/10 p-2 rounded-lg flex items-center gap-2 shadow-lg"
    >
        <Icon size={14} className="text-digital-primary" />
        <span className="text-xs font-bold text-white">{label}</span>
    </motion.div>
);

export default WhyUsSection;
