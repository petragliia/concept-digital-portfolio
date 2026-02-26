import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
      style={{
        background: "var(--gradient-whatsapp)",
        boxShadow: "var(--shadow-whatsapp), 0 0 0 4px hsl(142 70% 45% / 0.2)",
      }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" 
        style={{ background: "hsl(142 70% 45%)" }}
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;
