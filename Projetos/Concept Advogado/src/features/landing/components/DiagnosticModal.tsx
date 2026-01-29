"use client";

import { useState } from "react";
import { X, CheckCircle, ArrowRight, ShieldAlert, TrendingUp, Users } from "lucide-react";

interface DiagnosticModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = "intro" | "sector" | "size" | "pain" | "result";

export function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
    const [step, setStep] = useState<Step>("intro");
    const [data, setData] = useState({
        sector: "",
        size: "",
        pain: "",
    });

    if (!isOpen) return null;

    const handleNext = (key: string, value: string, nextStep: Step) => {
        setData((prev) => ({ ...prev, [key]: value }));
        setStep(nextStep);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-navy-900/90 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white text-navy-900 shadow-2xl border-t-4 border-gold-500 overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <h3 className="font-serif font-bold text-xl tracking-wide">
                        DIAGNÓSTICO JURÍDICO <span className="text-gold-500">CORP</span>
                    </h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-10 min-h-[400px] flex flex-col justify-center">

                    {step === "intro" && (
                        <div className="text-center space-y-6">
                            <ShieldAlert className="w-16 h-16 text-gold-500 mx-auto" />
                            <h2 className="text-3xl font-bold font-serif">Sua empresa está blindada?</h2>
                            <p className="text-gray-600 text-lg max-w-md mx-auto">
                                Em 2025, 68% das empresas pagaram multas evitáveis. Descubra seu nível de risco em 30 segundos.
                            </p>
                            <button
                                onClick={() => setStep("sector")}
                                className="bg-navy-900 text-white px-8 py-4 font-bold tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 shadow-lg"
                            >
                                INICIAR ANÁLISE
                            </button>
                        </div>
                    )}

                    {step === "sector" && (
                        <div className="space-y-6 animate-in slide-in-from-right duration-300">
                            <h2 className="text-2xl font-bold font-serif text-center mb-8">Qual o setor da sua empresa?</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {["Tecnologia / SaaS", "Indústria", "Varejo / E-commerce", "Serviços"].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => handleNext("sector", item, "size")}
                                        className="p-6 border border-gray-200 hover:border-gold-500 hover:bg-gray-50 text-left font-medium transition-all group"
                                    >
                                        <span className="block text-gold-500 group-hover:translate-x-1 transition-transform mb-2">01.</span>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === "size" && (
                        <div className="space-y-6 animate-in slide-in-from-right duration-300">
                            <h2 className="text-2xl font-bold font-serif text-center mb-8">Qual o tamanho da operação?</h2>
                            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                                {[
                                    { label: "Early Stage", desc: "< R$ 1MM Faturamento" },
                                    { label: "Growth", desc: "R$ 1MM - R$ 10MM" },
                                    { label: "Corporate", desc: "> R$ 10MM" },
                                ].map((item) => (
                                    <button
                                        key={item.label}
                                        onClick={() => handleNext("size", item.label, "pain")}
                                        className="flex justify-between items-center p-6 border border-gray-200 hover:border-gold-500 hover:bg-gray-50 transition-all group"
                                    >
                                        <div>
                                            <span className="text-lg font-bold block">{item.label}</span>
                                            <span className="text-sm text-gray-500">{item.desc}</span>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gold-500" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === "pain" && (
                        <div className="space-y-6 animate-in slide-in-from-right duration-300">
                            <h2 className="text-2xl font-bold font-serif text-center mb-8">Qual sua maior preocupação hoje?</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Contratos e Riscos", icon: ShieldAlert },
                                    { label: "Trabalhista", icon: Users },
                                    { label: "Tributário", icon: TrendingUp },
                                    { label: "M&A / Societário", icon: CheckCircle },
                                ].map((item) => (
                                    <button
                                        key={item.label}
                                        onClick={() => handleNext("pain", item.label, "result")}
                                        className="p-6 border border-gray-200 hover:border-gold-500 hover:bg-gray-50 text-center flex flex-col items-center gap-3 transition-all group"
                                    >
                                        <item.icon className="w-8 h-8 text-gray-400 group-hover:text-gold-500" />
                                        <span className="font-medium">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === "result" && (
                        <div className="text-center space-y-6 animate-in zoom-in duration-500">
                            <div className="inline-block p-4 rounded-full bg-green-50 border border-green-200 mb-2">
                                <CheckCircle className="w-12 h-12 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-bold font-serif">Pré-Análise Concluída</h2>
                            <p className="text-gray-600 text-lg max-w-lg mx-auto">
                                Identificamos 3 pontos de atenção críticos para empresas <span className="font-bold text-navy-900">{data.size}</span> do setor <span className="font-bold text-navy-900">{data.sector}</span> com foco em <span className="font-bold text-navy-900">{data.pain}</span>.
                            </p>

                            <div className="bg-gray-50 p-6 border border-gray-200 mt-4 text-left">
                                <h4 className="font-bold text-navy-900 mb-2">Recomendação Imediata:</h4>
                                <p className="text-sm text-gray-600">
                                    Agende um debriefing de 15 min com nosso sócio especialista para receber o relatório completo.
                                </p>
                            </div>

                            <div className="pt-4">
                                <a
                                    href={`https://wa.me/5511999999999?text=Olá, finalizei o diagnóstico. Minha empresa é ${data.size} do setor ${data.sector} e tenho interesse em ${data.pain}.`}
                                    target="_blank"
                                    className="bg-gold-500 text-navy-900 px-8 py-4 font-bold hover:bg-gold-400 transition-colors shadow-lg flex items-center justify-center gap-2 mx-auto w-full md:w-auto"
                                >
                                    AGENDAR DEBRIEFING <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer/Progress */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 font-mono uppercase tracking-wider">
                    <span>Concept Advogados Protection System</span>
                    <span>{step === "intro" ? "Start" : step === "result" ? "Final" : "Analysing..."}</span>
                </div>
            </div>
        </div>
    );
}
