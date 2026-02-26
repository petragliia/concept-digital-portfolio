import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações.";
  const mapsLink = "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+500+-+Bela+Vista,+São+Paulo+-+SP";

  return (
    <footer ref={footerRef} className="py-16 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            top: "-20%",
            right: "-10%",
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--mint)) 0%, transparent 70%)",
            bottom: "-20%",
            left: "-10%",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Dr. Rafael Mendes
            </h3>
            <p className="text-background/70 mb-6">
              Especialista em Harmonização Facial e Odontologia Estética. 
              Transformando sorrisos e devolvendo a autoestima há mais de 10 anos.
            </p>
            <div className="flex items-center gap-2 text-background/80">
              <Clock className="w-5 h-5 text-mint" />
              <span>Seg-Sex: 8h-19h | Sáb: 8h-13h</span>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-xl font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <a 
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-background/80 hover:text-background transition-colors"
              >
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Av. Paulista, 500 - Bela Vista<br/>São Paulo - SP, 01310-100</span>
              </a>
              <a 
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>(11) 99999-9999</span>
              </a>
              <a 
                href="mailto:contato@drrafaelmendes.com.br"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@drrafaelmendes.com.br</span>
              </a>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-xl font-semibold mb-6">Agende sua consulta</h4>
            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 w-full rounded-full font-medium transition-all duration-300 bg-primary text-primary-foreground hover:opacity-90"
              >
                <Navigation className="w-5 h-5" />
                Como chegar
              </a>
            </div>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl overflow-hidden h-64 mb-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976982853!2d-46.65512868502155!3d-23.564611284681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20500%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da clínica"
          />
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-background/10 text-center text-background/60 text-sm"
        >
          <p>© {new Date().getFullYear()} Dr. Rafael Mendes - Todos os direitos reservados</p>
          <p className="mt-2">CRO-SP 123456 | Responsável Técnico: Dr. Rafael Mendes</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
