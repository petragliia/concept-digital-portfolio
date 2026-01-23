import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex flex-col md:flex-row overflow-hidden bg-background">
            {/* Left: Value Proposition */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 z-10">
                <div className="space-y-6 max-w-xl animate-in fade-in slide-in-from-left-10 duration-700">
                    <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-semibold text-primary">
                        Odontologia Estética Premium
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground/90 leading-tight">
                        Seu sorriso, <br />
                        <span className="text-primary italic">sua assinatura.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
                        Harmonização facial e estética dental com tecnologia de ponta e atendimento personalizado.
                    </p>
                    <div className="pt-4">
                        <Button
                            size="lg"
                            className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,128,128,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,128,128,0.5)] active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Agendar Avaliação
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            <span className="absolute inset-0 z-0 bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right: Smiling Confident Person */}
            <div className="flex-1 relative h-[50vh] md:h-full bg-muted/30">
                {/* Placeholder for high-quality image */}
                {/* Using a generated placeholder logic or a real simple placeholder for now */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 md:bg-gradient-to-l" />
                <div className="w-full h-full relative">
                    {/* Note: In a real app we'd use a real localized image. For now, using a premium looking placeholder from Unsplash or similar if network allowed, but I will use a colored placeholder with text to represent the image until user provides one, or I can use a generic next/image placeholder. */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                        <span className="sr-only">Imagem de Paciente Sorrindo</span>
                        <svg className="w-full h-full object-cover text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 24H0V0h24v24z" fill="none" />
                            {/* Abstract representation or just a nice gradient/color block if no image */}
                            <rect width="100%" height="100%" fill="#f1f5f9" />
                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#94a3b8" fontSize="20">
                                [Imagem Hero: Paciente Sorrindo]
                            </text>
                        </svg>
                        {/* For the "Premium" verification, I really should try to use a real image if I can fetch one, but I don't have internet access for random images easily unless I use a known placeholder service or just describe it. 
                 I'll stick to a nice placeholder div for now to avoid broken links. */}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    )
}
