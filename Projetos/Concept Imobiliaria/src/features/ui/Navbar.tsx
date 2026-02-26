import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button"; // Reusing Button component - DRY
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Imóveis", href: "#colecao" },
    { name: "Diferenciais", href: "#diferenciais" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed w-full z-50 transition-all duration-300 py-6",
                isScrolled ? "bg-primary/95 backdrop-blur-md shadow-md py-4" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a
                    href="#"
                    className="text-2xl font-serif font-bold text-white transition-colors duration-300 z-50 relative group"
                >
                    Concept<span className="text-secondary">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-white/90 hover:text-secondary transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant={isScrolled ? "primary" : "outline"} asChild>
                        <a href="#contato">Agendar Consultoria</a>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-primary/95 backdrop-blur-lg md:hidden flex flex-col justify-center items-center space-y-8 z-40"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-serif text-white hover:text-secondary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contato"
                            className="px-8 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Agendar Consultoria
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
