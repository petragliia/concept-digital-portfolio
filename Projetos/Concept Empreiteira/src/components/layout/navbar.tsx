"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
    { href: "#services", label: "Serviços" },
    { href: "#differential", label: "Diferenciais" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#faq", label: "FAQ" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link
                    href="/"
                    className={cn(
                        "text-2xl font-bold tracking-tighter uppercase",
                        isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"
                    )}
                >
                    Concept<span className="text-amber-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-amber-500",
                                isScrolled ? "text-slate-600" : "text-white/90"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="accent" size="sm" asChild>
                        <Link href="#contact">Solicitar Orçamento</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-current"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </Container>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b absolute top-full left-0 right-0 shadow-lg"
                    >
                        <Container className="py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-900 hover:text-amber-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button variant="accent" className="w-full" asChild onClick={() => setIsOpen(false)}>
                                <Link href="#contact">Solicitar Orçamento</Link>
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
