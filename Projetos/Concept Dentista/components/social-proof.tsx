"use client"

import { Star } from "lucide-react"

const reviews = [
    {
        id: 1,
        name: "Mariana Costa",
        text: "Simplesmente incrível! O atendimento da Concept Health mudou minha percepção sobre ir ao dentista. Resultado impecável.",
        stars: 5,
    },
    {
        id: 2,
        name: "Carlos Eduardo",
        text: "Profissionais de altíssimo nível. A harmonização ficou super natural, exatamente como eu queria. Recomendo demais!",
        stars: 5,
    },
    {
        id: 3,
        name: "Fernanda Lima",
        text: "Ambiente sofisticado e acolhedor. Me senti segura desde a primeira avaliação. O tratamento Invisalign foi super rápido.",
        stars: 5,
    },
    {
        id: 4,
        name: "Roberto Almeida",
        text: "Melhor clínica da cidade. Tecnologia de ponta e uma equipe muito atenciosa. Meu sorriso ficou perfeito.",
        stars: 5,
    },
]

export function SocialProof() {
    return (
        <section className="py-16 bg-background border-y border-muted">
            <div className="container mx-auto px-4 mb-10">
                <h3 className="text-2xl font-bold text-center text-foreground uppercase tracking-wider">
                    O que nossos pacientes dizem
                </h3>
            </div>

            {/* Scroll Container */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex overflow-x-auto pb-8 px-4 gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex-none w-[300px] md:w-[400px] bg-muted/40 p-6 rounded-xl border border-muted hover:border-primary/20 transition-colors snap-center"
                        >
                            <div className="flex gap-1 mb-3 text-yellow-500">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic mb-4">"{review.text}"</p>
                            <div className="font-semibold text-foreground flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                {review.name}
                            </div>
                        </div>
                    ))}
                    {/* Duplicate for basic visual continuity if needed, or just standard list */}
                </div>
            </div>

        </section>
    )
}
