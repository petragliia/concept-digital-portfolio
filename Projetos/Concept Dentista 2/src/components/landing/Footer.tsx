import { Facebook, Instagram, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0B1120] text-gray-300 py-16 font-sans">
            <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="text-2xl font-serif font-bold text-white">
                        Concept Odonto
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Transformando sorrisos e vidas com tecnologia, conforto e atendimento humanizado.
                        Sua saúde bucal em primeiro lugar.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-primary transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            <Facebook size={24} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold mb-6 font-serif">Navegação</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-primary transition-colors">Sobre Nós</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Tratamentos</a></li>
                        <li><a href="#testimonials" className="hover:text-primary transition-colors">Depoimentos</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors">Contato</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold mb-6 font-serif">Tratamentos</h4>
                    <ul className="space-y-3 text-sm">
                        <li>Implantes Dentários</li>
                        <li>Clareamento a Laser</li>
                        <li>Lentes de Contato</li>
                        <li>Ortodontia Invisível</li>
                        <li>Harmonização Facial</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-bold mb-6 font-serif">Contato</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start space-x-3">
                            <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>Av. da Saúde, 1000 - Sala 402<br />Centro, Santos - SP</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={20} className="text-primary flex-shrink-0" />
                            <span>(13) 99999-9999</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={20} className="text-primary flex-shrink-0" />
                            <span>contato@conceptodonto.com.br</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
                <p>© {new Date().getFullYear()} Concept Odonto. Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0">
                    Desenvolvido por <a href="#" className="text-gray-400 hover:text-white transition-colors">Concept Digital</a>
                </p>
            </div>
        </footer>
    );
}
