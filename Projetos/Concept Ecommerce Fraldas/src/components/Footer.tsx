export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-quicksand text-brand-purple">Concept Fraldas</h3>
                    <p className="text-sm text-gray-500 font-nunito">
                        Cuidando do seu bebê com carinho, tecnologia e economia.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-gray-800 mb-4 font-quicksand">Loja</h4>
                    <ul className="space-y-2 text-sm text-gray-500 font-nunito">
                        <li><a href="#" className="hover:text-brand-purple transition-colors">Fraldas</a></li>
                        <li><a href="#" className="hover:text-brand-purple transition-colors">Kits Mensais</a></li>
                        <li><a href="#" className="hover:text-brand-purple transition-colors">Toalhas Umedecidas</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-800 mb-4 font-quicksand">Ajuda</h4>
                    <ul className="space-y-2 text-sm text-gray-500 font-nunito">
                        <li><a href="#" className="hover:text-brand-purple transition-colors">Meus Pedidos</a></li>
                        <li><a href="#" className="hover:text-brand-purple transition-colors">Trocas e Devoluções</a></li>
                        <li><a href="#" className="hover:text-brand-purple transition-colors">Política de Privacidade</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-800 mb-4 font-quicksand">Contato</h4>
                    <ul className="space-y-2 text-sm text-gray-500 font-nunito">
                        <li>sac@conceptfraldas.com.br</li>
                        <li>0800 123 4567</li>
                        <li>Seg a Sex: 9h às 18h</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-400 font-nunito">
                © 2026 Concept Digital Portfolio. Todos os direitos reservados.
            </div>
        </footer>
    );
}
