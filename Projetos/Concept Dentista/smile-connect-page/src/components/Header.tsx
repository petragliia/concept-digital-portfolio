import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-8"
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-none border border-primary/50 flex items-center justify-center transition-all duration-300 group-hover:border-primary">
              <span className="text-primary font-bold text-xl tracking-tighter">RM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-white tracking-widest uppercase leading-none">
                Dr. Rafael Mendes
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] mt-1">
                Precision Aesthetic
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {["Sobre", "Serviços", "Resultados", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-primary transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+5511999999999"
              className="group flex flex-col items-end"
            >
              <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Ligue agora</span>
              <span className="text-sm font-mono text-zinc-300 transition-colors group-hover:text-primary">(11) 99999-9999</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-3 px-6 text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-none border border-zinc-800 hover:border-primary transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-6 p-8 rounded-none bg-zinc-950 border border-zinc-900"
          >
            <nav className="flex flex-col gap-6">
              {["Sobre", "Serviços", "Resultados", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-8 border-t border-zinc-900 flex flex-col gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
