"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Sobre", href: "#about" },
        { name: "Serviços", href: "#services" },
        { name: "Depoimentos", href: "#testimonials" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
            <div className="container-custom flex items-center justify-between h-20">
                {/* Logo */}
                <div className="text-2xl font-serif font-bold text-primary">
                    Concept Odonto
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-dark hover:text-primary transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="https://wa.me/5513999999999"
                        className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors"
                    >
                        Agendar (13) 99999-9999
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-dark focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="container-custom py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-dark hover:text-primary font-medium text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/5513999999999"
                            className="bg-primary text-white px-6 py-3 rounded-full font-medium text-center hover:bg-blue-700 transition-colors w-full"
                        >
                            Agendar (13) 99999-9999
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
