import { Container } from "@/components/ui/container"

const stats = [
    { label: "Anos de Experiência", value: "10+" },
    { label: "Projetos Entregues", value: "500+" },
    { label: "Garantia em Contrato", value: "100%" },
    { label: "Satisfação dos Clientes", value: "4.9/5" },
]

export function Stats() {
    return (
        <div className="bg-amber-500 text-slate-900 py-12 relative z-20">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-900/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2 p-4">
                            <div className="text-4xl md:text-5xl font-bold tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base font-semibold uppercase tracking-wide opacity-90">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
