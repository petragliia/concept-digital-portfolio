"use client";

import { useState, useEffect, useRef } from "react";
import { Scale, Gavel, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/features/landing/components/Navbar";
import { Footer } from "@/features/landing/components/Footer";
import { ContactForm } from "@/features/landing/components/ContactForm";
import { DiagnosticModal } from "@/features/landing/components/DiagnosticModal";
import { ExperienceLedger } from "@/features/landing/components/ExperienceLedger";
import { FloatingBackButton } from "@/components/FloatingBackButton";

export default function Home() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateParallax = (factor: number) => {
    const dx = (mousePos.x - 0.5) * factor;
    const dy = (mousePos.y - 0.5) * factor;
    return `translate3d(${dx}px, ${dy}px, 0)`;
  };

  return (
    <div className="min-h-screen font-sans text-gray-200 selection:bg-gold-500 selection:text-black-900 bg-black-950">
      <Navbar />
      <DiagnosticModal isOpen={isDiagnosticOpen} onClose={() => setIsDiagnosticOpen(false)} />
      <FloatingBackButton />

      {/* HERO SECTION - INNOVATED WITH PARALLAX & SPOTLIGHT */}
      <section ref={heroRef} className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden group/hero">

        {/* LIGHTING LAYER: Dynamic Spotlight Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000 opacity-0 group-hover/hero:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(212, 175, 55, 0.08), transparent 80%)`
          }}
        />

        {/* BACKGROUND LAYER 0: Kinetic Typography */}
        <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none flex flex-col justify-around py-20 overflow-hidden font-serif">
          <div className="animate-marquee whitespace-nowrap text-[15vh] font-bold tracking-tighter uppercase italic">
            ESTRATÉGIA • BLINDAGEM • PODER • DEFESA • CORPORATE • HOLDING •
          </div>
          <div className="animate-marquee-reverse whitespace-nowrap text-[15vh] font-bold tracking-tighter uppercase italic ml-[-50%]">
            LITIGATION • ARBITRAGEM • PREVENÇÃO • ÉTICA • COMPLIANCE •
          </div>
          <div className="animate-marquee whitespace-nowrap text-[15vh] font-bold tracking-tighter uppercase italic">
            BLINDAGEM • JURÍDICA • ESTRATÉGICA • DEFESA •
          </div>
        </div>

        {/* MAIN BACKGROUND */}
        <div className="absolute inset-0 z-0 bg-black-950">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black-900 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,255,255,0.02)_0%,_transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content - Typography & CTA with Parallax */}
            <div
              className="lg:col-span-7 flex flex-col justify-center transition-transform duration-300 ease-out"
              style={{ transform: calculateParallax(15) }}
            >

              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-gold-500"></div>
                <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-semibold">Advocacia de Elite</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[0.95] text-white tracking-tight drop-shadow-2xl">
                Blindagem <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-200 to-amber-700 animate-gradient-x"> Jurídica.</span>
              </h1>

              <div
                className="transition-transform duration-500 ease-out"
                style={{ transform: calculateParallax(25) }}
              >
                <h2 className="text-2xl text-white/80 font-medium mb-10 max-w-lg border-l-2 border-gold-500/50 pl-6 italic font-serif">
                  A defesa impecável para o seu legado corporativo.
                </h2>

                <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setIsDiagnosticOpen(true)}
                      className="px-8 py-4 bg-gold-500 text-black-900 font-bold text-lg hover:bg-gold-400 transition-all rounded-none w-fit shadow-[0_4px_25px_0_rgba(212,175,55,0.4)] hover:shadow-[0_8px_35px_0_rgba(212,175,55,0.6)] hover:-translate-y-1 active:translate-y-0"
                    >
                      Iniciar Diagnóstico
                    </button>
                    <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-gold-500/50 transition-all rounded-none w-fit backdrop-blur-sm">
                      Ver Manifesto
                    </button>
                  </div>

                  {/* "Limited Items" Box Style - Static Depth */}
                  <div className="border border-white/10 p-6 max-w-xs backdrop-blur-md relative group bg-black-900/40 hover:border-gold-500/40 transition-colors">
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-500"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold-500"></div>
                    <p className="font-serif italic text-gold-500 text-lg mb-2 text-center group-hover:scale-105 transition-transform">
                      "Exclusividade Absoluta"
                    </p>
                    <p className="text-[10px] text-center text-white/40 uppercase tracking-widest leading-relaxed">
                      Apenas 3 slots corporativos disponíveis por trimestre.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Content - Lawyer Image with Deep Parallax */}
            <div
              className="lg:col-span-5 relative h-full min-h-[500px] flex items-end justify-center lg:justify-end transition-transform duration-200 ease-out"
              style={{ transform: calculateParallax(-30) }}
            >
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden border border-white/10 shadow-[0_0_100px_-20px_rgba(0,0,0,0.8)] bg-black-900 group/image">
                <Image
                  src="/images/lawyer-hero.png"
                  alt="Advogado Sênior"
                  fill
                  className="object-cover object-top opacity-100 scale-105 group-hover/image:scale-110 transition-transform duration-1000 ease-out"
                  priority
                />
                {/* Glass Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-transparent to-transparent opacity-60" />

                {/* Moving Shine Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/image:animate-shine"
                />
              </div>

              {/* Decorative floating lines */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-2 border-l-2 border-gold-500/30 z-20 pointer-events-none" />
              <div className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-gold-500/30 z-20 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE LEDGER (REPLACES PRACTICE AREAS) */}
      <ExperienceLedger />

      {/* LEAD MAGNET / DIAGNOSTIC CTA - INNOVATED WITH SCANNER & GRID */}
      <section className="py-32 bg-black-950 relative overflow-hidden border-t border-white/5">

        {/* BACKGROUND GRID LAYER */}
        <div className="absolute inset-0 z-0 bg-grid-gold opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="lg:w-1/2">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-gold-500"></div>
              <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-semibold">Inteligência Preventiva</span>
            </div>

            <h3 className="text-6xl md:text-7xl font-serif font-bold text-white mb-10 leading-[0.9]">
              O custo da <br /> ignorância é <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 animate-flicker italic">
                incalculável.
              </span>
            </h3>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light border-l border-gold-500/30 pl-8 max-w-lg">
              Não espere o processo judicial. Nossa metodologia de <strong>Blindagem 360º</strong> identifica vulnerabilidades antes que elas se tornem passivos.
            </p>
            <div className="flex items-center gap-4 text-gold-500 font-serif italic text-xl">
              <div className="w-12 h-px bg-gold-500/40"></div>
              Agende sua Avaliação de Risco &rarr;
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            {/* SCANNER LINE EFFECT */}
            <div className="absolute -inset-2 z-20 pointer-events-none overflow-hidden">
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.8)] animate-scanner"></div>
            </div>

            <div className="relative z-10">
              <ContactForm />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-gold-500/20 group-hover:border-gold-500/50 transition-colors"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-gold-500/20 group-hover:border-gold-500/50 transition-colors"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
