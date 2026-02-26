import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-12 md:py-16">
            <Container className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4 md:col-span-2">
                    <Link href="/" className="text-2xl font-bold tracking-tighter uppercase text-white">
                        Concept<span className="text-amber-500">.</span>
                    </Link>
                    <p className="text-slate-400 max-w-sm">
                        Especialistas em construção e reformas de alto padrão.
                        Transformamos projetos em realidade com excelência,
                        cumprimento de prazos e gestão transparente.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="hover:text-amber-500 transition-colors"><Instagram className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-amber-500 transition-colors"><Facebook className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Navegação</h3>
                    <ul className="space-y-2">
                        <li><Link href="#services" className="hover:text-amber-500 transition-colors">Nossos Serviços</Link></li>
                        <li><Link href="#portfolio" className="hover:text-amber-500 transition-colors">Projetos Realizados</Link></li>
                        <li><Link href="#about" className="hover:text-amber-500 transition-colors">Sobre a Empresa</Link></li>
                        <li><Link href="#contact" className="hover:text-amber-500 transition-colors">Solicitar Orçamento</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Contato</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
                            <span>Av. Paulista, 1000 - São Paulo, SP</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                            <span>(11) 99999-9999</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                            <span>contato@concept.com.br</span>
                        </li>
                    </ul>
                </div>
            </Container>

            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Concept Empreiteira. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
