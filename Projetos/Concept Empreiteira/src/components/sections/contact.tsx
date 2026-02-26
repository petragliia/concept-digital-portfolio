"use client"

import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Contact() {
    return (
        <Section id="contact" className="bg-slate-900 text-white relative">
            <div className="absolute inset-0 bg-slate-900/50 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Fundo"
                    className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                />
            </div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Pronto para transformar <br />
                            <span className="text-amber-500">seu projeto?</span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                            Preencha o formulário e receba um contato de um de nossos engenheiros em até 24 horas úteis.
                        </p>

                        <div className="space-y-4 pt-8">
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="text-amber-500 h-6 w-6" />
                                <span className="text-lg">Orçamento detalhado e sem surpresas</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="text-amber-500 h-6 w-6" />
                                <span className="text-lg">Cronograma que funciona de verdade</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="text-amber-500 h-6 w-6" />
                                <span className="text-lg">Equipe 100% própria e qualificada</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <h3 className="text-2xl font-bold mb-6">Solicite seu orçamento</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nome Completo</label>
                                    <Input id="name" type="text" placeholder="Seu nome" required className="h-12" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">WhatsApp</label>
                                    <Input id="phone" type="tel" placeholder="(11) 99999-9999" required className="h-12" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="type" className="text-sm font-medium">Tipo de Imóvel</label>
                                    <select id="type" className="flex h-12 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
                                        <option value="">Selecione...</option>
                                        <option value="casa">Casa</option>
                                        <option value="apartamento">Apartamento</option>
                                        <option value="comercial">Comercial</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium">Serviço</label>
                                    <select id="service" className="flex h-12 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
                                        <option value="">Selecione...</option>
                                        <option value="construcao">Construção Nova</option>
                                        <option value="reforma">Reforma Completa</option>
                                        <option value="reparo">Pequenos Reparos</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Mensagem (Opcional)</label>
                                <Textarea
                                    id="message"
                                    placeholder="Conte um pouco mais sobre seu projeto..."
                                    className="min-h-[100px]"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full text-lg h-12 bg-amber-500 hover:bg-amber-600 text-white border-0">
                                Enviar Solicitação <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    </div>

                </div>
            </Container>
        </Section>
    )
}
