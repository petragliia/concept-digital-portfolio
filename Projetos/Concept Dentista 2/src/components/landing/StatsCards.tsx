import { Clock, Award, Star } from "lucide-react";

export default function StatsCards() {
    const stats = [
        {
            icon: Clock,
            title: "Horários Flexíveis",
            description: "Atendimento estendido para se adequar à sua rotina.",
        },
        {
            icon: Award,
            title: "Especialistas",
            description: "Equipe altamente qualificada em diversas áreas.",
        },
        {
            icon: Star,
            title: "Avaliações 5 Estrelas",
            description: "Reconhecidos pela excelência e satisfação dos pacientes.",
        },
    ];

    return (
        <section className="relative -mt-16 lg:-mt-20 z-20 pb-12 font-sans">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center space-y-4 border-b-4 border-primary/10 hover:border-primary"
                        >
                            <div className="bg-secondary p-4 rounded-full text-primary mb-2">
                                <stat.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-dark font-serif">{stat.title}</h3>
                            <p className="text-gray-600">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
