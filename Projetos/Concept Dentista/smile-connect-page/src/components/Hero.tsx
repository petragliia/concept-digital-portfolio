import { motion } from "framer-motion";
import { MessageCircle, Phone, Shield, Award, Clock } from "lucide-react";
import dentistImage from "@/assets/dentist-premium.png";

const Hero = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section className="relative min-h-[110vh] flex items-center overflow-hidden bg-background">
      {/* Option B: The Clinical Panorama - Immersive Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <img
            src={dentistImage}
            alt="Consultório Dr. Rafael Mendes"
            className="w-full h-full object-cover object-[center_30%]"
          />
          {/* Advanced Vignette for Readability & Luxury */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/10" />
          {/* Right side fade for balance */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background/40 to-transparent opacity-60" />
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '120px 120px' }} />

      <div className="section-container relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] w-20 bg-primary" />
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-primary/80">Especialista em Reabilitação Oral & Estética</span>
            </div>

            <h1 className="font-display text-7xl sm:text-8xl lg:text-[10rem] font-bold leading-[0.8] mb-12">
              <span className="block text-zinc-500 text-3xl sm:text-5xl tracking-normal mb-6 font-normal">Sua melhor versão começa no</span>
              <span className="text-gradient drop-shadow-2xl">SORRISO</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <p className="text-xl text-zinc-400 leading-relaxed border-l-[1px] border-primary/30 pl-8">
                  O Dr. Rafael Mendes utiliza odontologia digital de alta precisão para criar transformações naturais e duradouras. Onde a ciência encontra a arte do sorriso.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-hero group relative overflow-hidden"
                  >
                    <span className="relative z-10">Iniciar Diagnóstico Estético</span>
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-8 pt-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Shield className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Certificação</p>
                      <p className="text-sm text-zinc-300">Lumineers® Certified Specialist</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Award className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Tecnologia</p>
                      <p className="text-sm text-zinc-300">Invisalign® Platinum Provider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Asymmetric Bottom Status */}
      <div className="absolute bottom-12 right-12 z-30 hidden lg:block">
        <div className="flex flex-col items-end gap-2 border-r-[1px] border-primary/20 pr-6 text-right">
          <span className="text-[10px] text-zinc-600 uppercase tracking-[0.6em] font-bold">Dr. Rafael Mendes</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-zinc-400">CRO-SP 123456</span>
            <div className="w-2 h-2 bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
