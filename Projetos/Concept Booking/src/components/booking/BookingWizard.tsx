'use client'; // Client Component

import { useState, useMemo } from 'react';
import { Professional, Service } from '@/types/scheduling';
import { ProfessionalCard } from './ProfessionalCard';
import { ServiceCard } from './ServiceCard';
import { CalendarView } from './CalendarView';
import { TimeSlotGrid } from './TimeSlotGrid';
import { BookingSummary } from './BookingSummary';
import { MOCK_PROFESSIONALS, MOCK_SERVICES } from '@/lib/mock-data';
import { getAvailableSlots } from '@/lib/availability';
import { format } from 'date-fns';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import clsx from 'clsx';

type Step = 'PROFESSIONAL' | 'SERVICE' | 'DATE' | 'SUMMARY' | 'CONFIRMED';

export function BookingWizard() {
    const [step, setStep] = useState<Step>('PROFESSIONAL');

    const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    // Derived state: Available slots
    const availableSlots = useMemo(() => {
        if (!selectedDate || !selectedProfessional || !selectedService) return [];

        // In a real app, we would fetch existing appointments here
        const dateStr = format(selectedDate, 'yyyy-MM-dd');
        return getAvailableSlots(dateStr, selectedProfessional, selectedService.durationMin, []);
    }, [selectedDate, selectedProfessional, selectedService]);

    const handleNext = () => {
        if (step === 'PROFESSIONAL' && selectedProfessional) setStep('SERVICE');
        else if (step === 'SERVICE' && selectedService) setStep('DATE');
        else if (step === 'DATE' && selectedDate && selectedSlot) setStep('SUMMARY');
        else if (step === 'SUMMARY') {
            // Submit booking logic would go here
            setStep('CONFIRMED');
        }
    };

    const handleBack = () => {
        if (step === 'SERVICE') setStep('PROFESSIONAL');
        else if (step === 'DATE') setStep('SERVICE');
        else if (step === 'SUMMARY') setStep('DATE');
    };

    if (step === 'CONFIRMED') {
        return (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-[var(--pk-gold)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(197,160,89,0.4)]">
                    <Check size={48} className="text-[var(--pk-navy)]" strokeWidth={3} />
                </div>
                <h1 className="text-3xl font-bold text-[var(--pk-text-primary)] mb-2">Agendamento Confirmado!</h1>
                <p className="text-[var(--pk-text-secondary)]">Enviamos os detalhes para o seu email.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-8 px-6 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/10 transition-colors"
                >
                    Novo Agendamento
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            {/* Progress Bar */}
            <div className="flex justify-between items-center mb-10 max-w-md mx-auto">
                {['Profissional', 'Serviço', 'Horário', 'Resumo'].map((label, idx) => {
                    const steps: Step[] = ['PROFESSIONAL', 'SERVICE', 'DATE', 'SUMMARY'];
                    const currentIdx = steps.indexOf(step);
                    const isActive = idx <= currentIdx;

                    return (
                        <div key={label} className="flex flex-col items-center gap-2">
                            <div className={clsx(
                                "w-3 h-3 rounded-full transition-all duration-500",
                                isActive ? "bg-[var(--pk-gold)] shadow-[0_0_8px_var(--pk-gold)]" : "bg-white/10"
                            )} />
                            <span className={clsx("text-xs transition-colors", isActive ? "text-[var(--pk-gold)]" : "text-white/20")}>
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Step Content */}
            <div className="min-h-[400px]">
                {step === 'PROFESSIONAL' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-light text-center text-[var(--pk-text-primary)] mb-8">
                            Escolha seu <span className="font-semibold text-[var(--pk-gold)]">Profissional</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                            {MOCK_PROFESSIONALS.map(p => (
                                <ProfessionalCard
                                    key={p.id}
                                    professional={p}
                                    selected={selectedProfessional?.id === p.id}
                                    onSelect={setSelectedProfessional}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {step === 'SERVICE' && (
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h2 className="text-2xl font-light text-center text-[var(--pk-text-primary)] mb-8">
                            Selecione o <span className="font-semibold text-[var(--pk-gold)]">Serviço</span>
                        </h2>
                        <div className="space-y-4">
                            {MOCK_SERVICES.map(s => (
                                <ServiceCard
                                    key={s.id}
                                    service={s}
                                    selected={selectedService?.id === s.id}
                                    onSelect={setSelectedService}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {step === 'DATE' && selectedProfessional && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-light text-center text-[var(--pk-text-primary)] mb-8">
                            Escolha <span className="font-semibold text-[var(--pk-gold)]">Data e Hora</span>
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                            <CalendarView
                                selectedDate={selectedDate || undefined}
                                onSelectDate={(d) => {
                                    setSelectedDate(d);
                                    setSelectedSlot(null); // Reset slot on date change
                                }}
                                businessHours={selectedProfessional.businessHours}
                            />

                            <div className="w-full max-w-sm bg-white/5 rounded-2xl p-6 border border-white/10 min-h-[300px]">
                                <h3 className="text-lg font-medium text-[var(--pk-text-primary)] mb-4">
                                    Horários Disponíveis
                                </h3>
                                {selectedDate ? (
                                    <TimeSlotGrid
                                        slots={availableSlots}
                                        selectedSlot={selectedSlot || undefined}
                                        onSelectSlot={setSelectedSlot}
                                    />
                                ) : (
                                    <div className="text-center py-12 text-white/30 text-sm">
                                        Selecione um dia no calendário
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {step === 'SUMMARY' && selectedProfessional && selectedService && selectedDate && selectedSlot && (
                    <div className="space-y-6">
                        <BookingSummary
                            professional={selectedProfessional}
                            service={selectedService}
                            date={selectedDate}
                            slot={selectedSlot}
                        />
                    </div>
                )}
            </div>

            {/* Footer Navigation */}
            <div className="flex justify-between items-center max-w-xl mx-auto mt-12 pt-6 border-t border-white/10">
                <button
                    onClick={handleBack}
                    disabled={step === 'PROFESSIONAL'}
                    className={clsx(
                        "flex items-center gap-2 px-6 py-2 rounded-lg transition-colors",
                        step === 'PROFESSIONAL' ? "opacity-0 pointer-events-none" : "text-white/50 hover:text-white"
                    )}
                >
                    <ArrowLeft size={18} />
                    Voltar
                </button>

                <button
                    onClick={handleNext}
                    disabled={
                        (step === 'PROFESSIONAL' && !selectedProfessional) ||
                        (step === 'SERVICE' && !selectedService) ||
                        (step === 'DATE' && (!selectedDate || !selectedSlot))
                    }
                    className={clsx(
                        "flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-all duration-300",
                        // Disabled State
                        ((step === 'PROFESSIONAL' && !selectedProfessional) ||
                            (step === 'SERVICE' && !selectedService) ||
                            (step === 'DATE' && (!selectedDate || !selectedSlot)))
                            ? "bg-white/10 text-white/30 cursor-not-allowed"
                            // Active State
                            : "bg-[var(--pk-gold)] text-[var(--pk-navy)] hover:bg-[var(--pk-gold-hover)] shadow-[0_0_20px_rgba(197,160,89,0.3)] transform hover:-translate-y-1"
                    )}
                >
                    {step === 'SUMMARY' ? 'Confirmar Agendamento' : 'Continuar'}
                    {step !== 'SUMMARY' && <ArrowRight size={18} />}
                </button>
            </div>
        </div>
    );
}
