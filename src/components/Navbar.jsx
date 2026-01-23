import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate(`/?scrollTo=${id}`);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-digital-blue-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="w-16 md:w-20 cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <img src="/logo-concept.png" alt="Concept Digital" className="w-full h-auto object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['home', 'method', 'portfolio', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}
                            className="text-white/80 hover:text-digital-gold text-sm font-bold uppercase tracking-widest transition-colors"
                        >
                            {item === 'home' ? 'Início' : item === 'method' ? 'Método' : item === 'portfolio' ? 'Projetos' : 'Contato'}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-6 py-2 border border-digital-gold/30 text-digital-gold hover:bg-digital-gold hover:text-digital-blue-dark transition-all rounded-full text-xs font-bold uppercase tracking-widest"
                    >
                        Fale Conosco
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-digital-blue-dark/95 backdrop-blur-xl border-b border-white/10 p-8 flex flex-col gap-6 md:hidden animate-fade-in-down">
                    {['home', 'method', 'portfolio', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}
                            className="text-white hover:text-digital-gold text-lg font-bold uppercase tracking-widest text-left"
                        >
                            {item === 'home' ? 'Início' : item === 'method' ? 'Método' : item === 'portfolio' ? 'Projetos' : 'Contato'}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
