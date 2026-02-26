import { Sparkles, Anchor, Smile, Gem } from "lucide-react";

export default function ServicesGrid() {
    const services = [
        {
            title: "Clareamento Dental",
            icon: Sparkles,
            description: "Recupere o brilho natural dos seus dentes com técnicas seguras e eficazes.",
        },
        {
            title: "Implantes Dentários",
            icon: Anchor, // Using Anchor as a placeholder for Implant structure if strictly sticking to common icons, or maybe 'Cylinder' from lucide if available. Using Anchor as spec/prompt suggested 'Anchor or similar'.
            description: "Soluções definitivas para repor dentes perdidos e devolver sua mastigação.",
        },
        {
            title: "Ortodontia Estética",
            icon: Smile,
            description: "Alinhadores transparentes e aparelhos modernos para um sorriso perfeito.",
        },
        {
            title: "Lentes de Contato",
            icon: Gem,
            description: "Facetas de porcelana para transformar o formato e cor do seu sorriso.",
        },
    ];

    return (
        <section id="services" className="py-20 bg-secondary font-sans scroll-mt-20">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                        Especialidades
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark">
                        Tratamentos Personalizados
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-3 font-serif">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
