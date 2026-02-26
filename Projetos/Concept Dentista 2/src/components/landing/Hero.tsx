
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center font-sans overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Clínica Odontológica de Luxo"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                {/* Dark Overlay for minimal text contrast base, glass card provides the rest */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="container-custom relative z-10 w-full px-4 lg:px-0">
                <div className="max-w-3xl mx-auto lg:mx-0 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl animate-fade-in-up">
                    <div className="space-y-8 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-md">
                            O Cuidado Que Seu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                                Sorriso Merece
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-blue-50/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                            Tecnologia de ponta, conforto e especialistas dedicados para transformar
                            sua saúde bucal com segurança e acolhimento.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <a
                                href="#contact"
                                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Agendar Avaliação
                            </a>
                            <a
                                href="#services"
                                className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors hover:border-white"
                            >
                                Nossos Serviços
                            </a>
                        </div>

                        <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-blue-100 font-medium">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center text-xs backdrop-blur-sm">
                                        ⭐️
                                    </div>
                                ))}
                            </div>
                            <p className="drop-shadow-sm">Mais de 1.000 sorrisos transformados</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
