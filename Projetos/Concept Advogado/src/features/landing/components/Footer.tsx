export function Footer() {
    return (
        <footer className="bg-[#001021] text-white py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-serif font-bold text-gold-500 tracking-wider mb-6">
                            CONCEPT <span className="text-white">LAW</span>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
                            Compromisso inabalável com a excelência jurídica e a defesa dos interesses de nossos parceiros corporativos.
                        </p>
                        <div className="text-gold-500 font-bold">
                            OAB/SP 123.456
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-lg mb-6 text-white">Escritório</h5>
                        <p className="text-gray-400 mb-2">Av. Paulista, 1000 - 15º Andar</p>
                        <p className="text-gray-400 mb-2">São Paulo, SP - Brasil</p>
                        <p className="text-gray-400 hover:text-gold-500 transition-colors cursor-pointer">+55 (11) 3000-0000</p>
                        <p className="text-gray-400 hover:text-gold-500 transition-colors cursor-pointer">contato@conceptlaw.com.br</p>
                    </div>
                    <div>
                        <h5 className="font-bold text-lg mb-6 text-white">Links Rápidos</h5>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-gold-500 transition-colors cursor-pointer">Sobre Nós</li>
                            <li className="hover:text-gold-500 transition-colors cursor-pointer">Áreas de Atuação</li>
                            <li className="hover:text-gold-500 transition-colors cursor-pointer">Nossa Equipe</li>
                            <li className="hover:text-gold-500 transition-colors cursor-pointer">Carreiras</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; 2024 Concept Law Partners. Todos os direitos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer">Termos de Uso</span>
                        <span className="hover:text-white cursor-pointer">Política de Privacidade</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
