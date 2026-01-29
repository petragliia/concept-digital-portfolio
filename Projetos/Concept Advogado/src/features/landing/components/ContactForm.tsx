'use client'

import { useTransition, useState } from 'react'
import { submitLead } from '../actions'
import { Button } from '@/components/ui/button' // Using shadcn button if available, or custom styles
import { CheckCircle, Loader2 } from 'lucide-react'

export function ContactForm() {
    const [isPending, startTransition] = useTransition()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [focusedField, setFocusedField] = useState<string | null>(null)
    const [completion, setCompletion] = useState(0)

    // Form inputs state to track progress
    const [formValues, setFormValues] = useState({
        name: '',
        company: '',
        email: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const newValues = { ...formValues, [name]: value }
        setFormValues(newValues)

        // Calculate progress
        const filled = Object.values(newValues).filter(v => v.length > 0).length
        setCompletion((filled / 3) * 100)
    }

    async function handleSubmit(formData: FormData) {
        setError(null)
        setCompletion(100)
        startTransition(async () => {
            const result = await submitLead(formData)
            if (result?.error) {
                setError(result.error)
            } else {
                setSuccess(true)
            }
        })
    }

    if (success) {
        return (
            <div className="bg-black-900/80 backdrop-blur-2xl p-8 md:p-10 rounded-none shadow-2xl border border-gold-500/30 text-center py-20 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold-500"></div>
                <CheckCircle className="w-16 h-16 text-gold-500 mx-auto mb-6 animate-pulse-gold" />
                <h4 className="text-white font-serif font-bold text-3xl mb-4 uppercase tracking-tighter">Diagnóstico Aceito</h4>
                <p className="text-gray-400 font-light italic">Seus dados foram criptografados e enviados ao nosso comitê estratégico.</p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-10 px-8 py-3 border border-white/10 text-xs text-gray-500 uppercase tracking-widest hover:text-gold-500 hover:border-gold-500/30 transition-all"
                >
                    Novo Diagnóstico
                </button>
            </div>
        )
    }

    return (
        <div className="bg-black-900/60 backdrop-blur-xl p-8 md:p-10 rounded-none shadow-2xl border border-white/5 relative overflow-hidden transition-all duration-700">
            {/* DIAGNOSTIC PROGRESS BAR */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-white/5 z-30">
                <div
                    className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-1000 ease-out"
                    style={{ width: `${completion}%` }}
                />
            </div>

            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isPending ? 'bg-amber-500 animate-pulse' : 'bg-gold-500 animate-pulse-gold'}`}></div>
                    <h4 className="text-white font-serif font-bold text-2xl tracking-tighter uppercase">Protocolo de Auditoria</h4>
                </div>
                <div className="text-[10px] font-mono text-gold-500/50 uppercase tracking-widest">
                    Status: {completion === 100 ? 'PRONTO' : 'ESCANEANDO...'}
                </div>
            </div>

            <form action={handleSubmit} className="space-y-6 relative">
                {/* ADVANCED FOCUS WRAPPER */}
                <div className="space-y-8">
                    {/* Name Field */}
                    <div
                        className={`relative transition-all duration-500 ${focusedField && focusedField !== 'name' ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}
                    >
                        <div className="flex justify-between items-end mb-2 px-1">
                            <label className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em]" htmlFor="name">Identificação</label>
                            {focusedField === 'name' && <span className="text-gold-500/60 text-[8px] font-mono animate-pulse">| DADO_OBRIGATÓRIO</span>}
                        </div>
                        <div className="relative group">
                            {/* Brackets Overlay */}
                            {focusedField === 'name' && (
                                <div className="absolute -inset-x-3 -inset-y-2 border-x border-gold-500/40 pointer-events-none transition-all duration-300">
                                    <div className="absolute top-0 left-0 w-2 h-[1px] bg-gold-500/40"></div>
                                    <div className="absolute top-0 right-0 w-2 h-[1px] bg-gold-500/40"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-gold-500/40"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-gold-500/40"></div>
                                </div>
                            )}
                            <input
                                className={`
                                    w-full px-5 py-4 bg-white/5 border transition-all duration-300 font-serif text-lg
                                    ${focusedField === 'name' ? 'border-gold-500/60 bg-gold-500/[0.03] outline-none' : 'border-white/10 hover:border-white/20'}
                                    text-white placeholder:text-white/10
                                `}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Candidato ou Empresa"
                                required
                                value={formValues.name}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>

                    {/* Company Field */}
                    <div
                        className={`relative transition-all duration-500 ${focusedField && focusedField !== 'company' ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}
                    >
                        <div className="flex justify-between items-end mb-2 px-1">
                            <label className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em]" htmlFor="company">Entidade Institucional</label>
                            {focusedField === 'company' && <span className="text-gold-500/60 text-[8px] font-mono animate-pulse">| SELEÇÃO_SETOR</span>}
                        </div>
                        <div className="relative group">
                            {focusedField === 'company' && (
                                <div className="absolute -inset-x-3 -inset-y-2 border-x border-gold-500/40 pointer-events-none transition-all duration-300">
                                    <div className="absolute top-0 left-0 w-2 h-[1px] bg-gold-500/40"></div>
                                    <div className="absolute top-0 right-0 w-2 h-[1px] bg-gold-500/40"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-gold-500/40"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-gold-500/40"></div>
                                </div>
                            )}
                            <input
                                className={`
                                    w-full px-5 py-4 bg-white/5 border transition-all duration-300 font-serif text-lg
                                    ${focusedField === 'company' ? 'border-gold-500/60 bg-gold-500/[0.03] outline-none' : 'border-white/10 hover:border-white/20'}
                                    text-white placeholder:text-white/10
                                `}
                                type="text"
                                name="company"
                                id="company"
                                placeholder="Holding, SaaS ou Indústria"
                                value={formValues.company}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField('company')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div
                        className={`relative transition-all duration-500 ${focusedField && focusedField !== 'email' ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}
                    >
                        <div className="flex justify-between items-end mb-2 px-1">
                            <label className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em]" htmlFor="email">Correspondência Segura</label>
                            {focusedField === 'email' && <span className="text-gold-500/60 text-[8px] font-mono animate-pulse">| ALVO_CRIPTOGRAFIA</span>}
                        </div>
                        <div className="relative group">
                            {focusedField === 'email' && (
                                <div className="absolute -inset-x-3 -inset-y-2 border-x border-gold-500/40 pointer-events-none transition-all duration-300">
                                    <div className="absolute top-0 left-0 w-2 h-[1px] bg-gold-500/40"></div>
                                    <div className="absolute top-0 right-0 w-2 h-[1px] bg-gold-500/40"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-gold-500/40"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-gold-500/40"></div>
                                </div>
                            )}
                            <input
                                className={`
                                    w-full px-5 py-4 bg-white/5 border transition-all duration-300 font-serif text-lg
                                    ${focusedField === 'email' ? 'border-gold-500/60 bg-gold-500/[0.03] outline-none' : 'border-white/10 hover:border-white/20'}
                                    text-white placeholder:text-white/10
                                `}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="seu@email.com.br"
                                required
                                value={formValues.email}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>
                </div>

                {error && <p className="text-red-500 text-xs font-mono bg-red-500/10 p-3 border border-red-500/20">{error}</p>}

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-gold-500 hover:bg-gold-400 text-black-900 font-bold py-5 px-8 transition-all duration-500 mt-6 flex flex-col items-center justify-center uppercase tracking-widest text-[10px] shadow-[0_20px_40px_-15px_rgba(212,175,55,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(212,175,55,0.6)] hover:-translate-y-1 active:translate-y-0"
                >
                    {isPending ? (
                        <div className="flex flex-col items-center gap-2">
                            <Loader2 className="animate-spin" />
                            <span>Transmitindo...</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <span>Enviar Diagnóstico Seguro</span>
                            <span className="text-[7px] text-black/40 mt-1 opacity-70">Criptografia Ponta-a-Ponta</span>
                        </div>
                    )}
                </button>
            </form>
        </div>
    )
}
