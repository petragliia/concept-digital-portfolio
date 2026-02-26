import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Zap, Shield, Star, Clock } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Tecnologia Avançada",
    description: "Equipamentos de última geração para diagnósticos precisos e tratamentos menos invasivos.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado focado no seu bem-estar e conforto durante todo o tratamento.",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Técnicas modernas que garantem resultados visíveis em menos tempo.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Protocolos rigorosos de biossegurança e esterilização para sua tranquilidade.",
  },
  {
    icon: Star,
    title: "Especialista Reconhecido",
    description: "Dr. Rafael é referência em harmonização facial e estética dental na região.",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Agendamentos que se adaptam à sua rotina, inclusive aos sábados.",
  },
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-4">
            <Star className="w-4 h-4" />
            Por que nos escolher
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cuidado que faz a <span className="text-gradient">diferença</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Na nossa clínica, cada paciente é único. Combinamos expertise técnica com 
            atendimento acolhedor para transformar seu sorriso.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
