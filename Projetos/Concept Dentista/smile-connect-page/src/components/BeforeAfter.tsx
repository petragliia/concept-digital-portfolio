import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const cases = [
  {
    image: beforeAfter1,
    title: "Clareamento Dental",
    description: "Resultado após 3 sessões de clareamento a laser",
  },
  {
    image: beforeAfter2,
    title: "Lentes de Contato",
    description: "Transformação completa com lentes de porcelana",
  },
  {
    image: beforeAfter3,
    title: "Harmonização Facial",
    description: "Procedimento minimamente invasivo com resultados naturais",
  },
];

const BeforeAfter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Vi%20os%20resultados%20no%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section ref={sectionRef} className="py-24 relative bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint-light text-accent mb-4">
            Resultados reais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transformações que <span className="text-gradient">inspiram</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos resultados alcançados por nossos pacientes. 
            Cada sorriso conta uma história de confiança renovada.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((caseItem, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-auto rounded-3xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-3xl">
                      <h3 className="font-display text-2xl font-semibold text-white mb-1">
                        {caseItem.title}
                      </h3>
                      <p className="text-white/80">{caseItem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-card transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-card transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Quer resultados como esses? Agende sua avaliação gratuita!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Quero minha avaliação
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
