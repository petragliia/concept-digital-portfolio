import { Instagram, MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1c1917] text-white py-16 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Column 1: Brand */}
                <div className="space-y-6">
                    <h3 className="font-serif text-3xl text-[var(--color-gold-champagne)]">Aesthetic Luxo</h3>
                    <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-xs">
                        Redefinindo o conceito de beleza com tratamentos personalizados e tecnologia de ponta em um ambiente de absoluto conforto.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-gold-champagne)] hover:text-white transition-colors duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Contact */}
                <div className="space-y-6">
                    <h4 className="font-serif text-lg tracking-wide uppercase text-white/90">Contato & Localiza&ccedil;&atilde;o</h4>
                    <ul className="space-y-4 text-gray-400 font-sans text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[var(--color-gold-champagne)] shrink-0" />
                            <span>Av. Paulista, 1000 - Jardins<br />S&atilde;o Paulo - SP</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[var(--color-gold-champagne)] shrink-0" />
                            <span>(11) 99999-9999</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[var(--color-gold-champagne)] shrink-0" />
                            <span>contato@aestheticluxo.com.br</span>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Hours */}
                <div className="space-y-6">
                    <h4 className="font-serif text-lg tracking-wide uppercase text-white/90">Hor&aacute;rios</h4>
                    <ul className="space-y-4 text-gray-400 font-sans text-sm">
                        <li className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-[var(--color-gold-champagne)] shrink-0" />
                            <div>
                                <p className="font-medium text-white">Segunda a Sexta</p>
                                <p>09:00 - 20:00</p>
                            </div>
                        </li>
                        <li className="pl-8">
                            <p className="font-medium text-white">S&aacute;bado</p>
                            <p>09:00 - 14:00</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-xs font-sans">
                &copy; 2026 Aesthetic Luxo. Todos os direitos reservados.
            </div>
        </footer>
    );
}
