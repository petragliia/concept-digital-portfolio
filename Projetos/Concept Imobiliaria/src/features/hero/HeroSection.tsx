import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroSection() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Fallback/Loading Image - Always present behind */}
                <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670"
                    alt="Luxury Interior"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Video Overlay - Only shows when loaded */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670"
                >
                    <source
                        src="https://videos.pexels.com/video-files/3773487/3773487-hd_1920_1080_30fps.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Overlays */}
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/40 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <h1 className="hero-title font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                    <RevealText delay={0.1}>O Cenário Perfeito</RevealText>
                    <RevealText delay={0.3}>para a Sua</RevealText>
                    <RevealText delay={0.5} className="text-secondary">
                        Nova História.
                    </RevealText>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="hero-subtitle font-sans text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light"
                >
                    Curadoria exclusiva de imóveis de alto padrão. Onde a arquitetura encontra a arte de viver bem.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="hero-cta flex flex-col md:flex-row gap-6 justify-center"
                >
                    <Button size="lg" asChild>
                        <a href="#colecao">Explorar Coleção</a>
                    </Button>
                    <Button variant="outline" size="lg" className="group" asChild>
                        <a href="https://wa.me/5511999999999" target="_blank">
                            Falar com Concierge <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                href="#sobre"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.a>
        </section>
    );
}

// Helper component for text reveal animation - DRY
function RevealText({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
    return (
        <span className="block overflow-hidden">
            <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay, ease: "easeOut" }}
                className={cn("inline-block", className)}
            >
                {children}
            </motion.span>
        </span>
    );
}
