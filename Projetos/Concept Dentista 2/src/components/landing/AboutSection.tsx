import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
    const benefits = [
        "Ambiente acolhedor e livre de estresse",
        "Tecnologia 3D para diagnósticos precisos",
        "Profissionais atualizados com as últimas técnicas",
        "Biossegurança rigorosa em todos os procedimentos",
    ];

    return (
        <section id="about" className="py-20 bg-white font-sans overflow-hidden">
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark">
                            Mais que um dentista, um <br className="hidden lg:block" />
                            <span className="text-primary">ambiente de cuidado</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Na Concept Odonto, entendemos que visitar o dentista pode gerar ansiedade.
                            Por isso, criamos um espaço pensado para o seu conforto, onde a tecnologia
                            encontra o atendimento humanizado.
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {benefits.map((item, index) => (
                            <li key={index} className="flex items-center space-x-3 text-gray-700">
                                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4">
                        <a
                            href="#contact"
                            className="text-primary font-semibold hover:text-blue-700 transition-colors inline-flex items-center group"
                        >
                            Conheça nossa estrutura
                            <span className="block w-6 h-0.5 bg-primary ml-2 group-hover:w-8 transition-all"></span>
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="order-1 lg:order-2 relative">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-100">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                            <span className="font-serif italic text-xl">Foto Institucional / Ambiente</span>
                        </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block border border-gray-100">
                        <p className="font-serif text-4xl font-bold text-primary mb-1">15+</p>
                        <p className="text-sm text-gray-600 font-medium">Anos transformando sorrisos</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
