import { Star } from "lucide-react";

export default function Testimonials() {
    const reviews = [
        {
            name: "Mariana Costa",
            role: "Empresária",
            content:
                "Melhor dentista que já fui! Não senti nada durante o procedimento e o resultado ficou incrível. Recomendo de olhos fechados.",
        },
        {
            name: "Carlos Eduardo",
            role: "Advogado",
            content:
                "Profissionais extremamente atenciosos. O ambiente é tão tranquilo que nem parece consultório. Minha família toda se trata aqui.",
        },
        {
            name: "Fernanda Lima",
            role: "Arquiteta",
            content:
                "Fiz minhas lentes de contato e estou apaixonada pelo meu novo sorriso. A atenção aos detalhes fez toda a diferença.",
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-white font-sans scroll-mt-20">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-4">
                        Histórias de Sorrisos Reais
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Veja o que nossos pacientes dizem sobre a experiência Concept Odonto.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl relative shadow-sm border border-gray-100"
                        >
                            {/* Stars */}
                            <div className="flex space-x-1 text-yellow-400 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-8 leading-relaxed">
                                "{review.content}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-bold text-dark font-serif">{review.name}</h4>
                                    <span className="text-sm text-gray-500">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
