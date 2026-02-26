import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <a href="#" className="text-3xl font-serif font-bold text-white mb-6 block">
                            Concept<span className="text-secondary">.</span>
                        </a>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Redefinindo o mercado imobiliário de luxo com curadoria, exclusividade e excelência.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <FooterColumn
                        title="Navegação"
                        links={[
                            { name: "Sobre Nós", href: "#sobre" },
                            { name: "Imóveis", href: "#colecao" },
                            { name: "Serviços", href: "#diferenciais" },
                            { name: "Contato", href: "#contato" },
                        ]}
                    />

                    {/* Legal Links */}
                    <FooterColumn
                        title="Legal"
                        links={[
                            { name: "Termos de Uso", href: "#" },
                            { name: "Política de Privacidade", href: "#" },
                            { name: "Cookies", href: "#" },
                        ]}
                    />

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Receba novidades off-market em primeira mão.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-secondary outline-none text-white"
                            />
                            <button className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors">
                                OK
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; 2024 Concept Imobiliária. Todos os direitos reservados.</p>
                    <p className="flex items-center gap-2">
                        Desenvolvido por <span className="text-white font-medium">Concept Digital</span>
                    </p>
                </div>
            </Container>
        </footer>
    );
}

// Subcomponents for DRY principle
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
        >
            {icon}
        </a>
    );
}

function FooterColumn({ title, links }: { title: string; links: { name: string; href: string }[] }) {
    return (
        <div>
            <h4 className="font-bold text-lg mb-6 text-white">{title}</h4>
            <ul className="space-y-4">
                {links.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} className="text-gray-400 hover:text-secondary transition-colors">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
