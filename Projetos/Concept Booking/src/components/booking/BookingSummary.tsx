import { useBookingStore } from "@/store/useBookingStore";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatDateFriendly, generateGoogleCalendarLink } from "@/utils/dateHelpers";
import { CheckCircle2, Calendar, Clock, User, Scissors, Wallet } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function BookingSummary() {
    const {
        selectedService,
        selectedProfessional,
        selectedDate,
        selectedTimeSlot,
        reset
    } = useBookingStore();

    const [isSuccess, setIsSuccess] = useState(false);

    const handleConfirm = () => {
        // Simulate API call
        setTimeout(() => {
            setIsSuccess(true);
            // Save to real database here
            localStorage.removeItem('booking-storage'); // Clear session
        }, 1000);
    };

    if (isSuccess) {
        return (
            <Card className="text-center p-8 md:p-12 animate-in zoom-in duration-500 border-none shadow-[0_0_50px_-10px_rgba(245,158,11,0.2)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary animate-bounce cursor-default border border-primary/20 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]">
                    <CheckCircle2 className="w-12 h-12" />
                </div>

                <h2 className="text-3xl font-bold text-white mb-2 text-shadow-sm">Agendado!</h2>
                <p className="text-slate-400 mb-8 text-lg">Seu horário foi reservado com sucesso.</p>

                <div className="bg-white/5 p-6 rounded-2xl mb-8 text-left max-w-sm mx-auto border border-white/10 backdrop-blur-md">
                    <p className="flex justify-between mb-2">
                        <span className="text-slate-400">Data:</span>
                        <span className="font-semibold text-slate-200">{selectedDate ? formatDateFriendly(new Date(selectedDate)) : ''}</span>
                    </p>
                    <p className="flex justify-between mb-2">
                        <span className="text-slate-400">Horário:</span>
                        <span className="font-semibold text-slate-200">{selectedTimeSlot}</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="text-slate-400">Profissional:</span>
                        <span className="font-semibold text-slate-200">{selectedProfessional?.name}</span>
                    </p>
                </div>

                <Button onClick={reset} size="lg" className="w-full max-w-sm rounded-2xl text-lg h-14 shadow-lg shadow-primary/20">
                    Novo Agendamento
                </Button>

                <div className="mt-4">
                    {selectedService && selectedProfessional && selectedDate && selectedTimeSlot && (
                        <Button
                            variant="outline"
                            className="w-full max-w-sm rounded-2xl text-primary border-primary/30 hover:bg-primary/10 gap-2 bg-transparent"
                            onClick={() => {
                                const link = generateGoogleCalendarLink(
                                    selectedService.name,
                                    selectedProfessional.name,
                                    selectedDate.toString(),
                                    selectedTimeSlot,
                                    selectedService.duration
                                );
                                window.open(link, '_blank');
                            }}
                        >
                            <Calendar className="w-4 h-4" />
                            Adicionar à Agenda
                        </Button>
                    )}
                </div>
            </Card>
        );
    }

    // Summary View
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30">4</span>
                <h2 className="text-xl font-bold text-white">Confirme os Detalhes</h2>
            </div>

            <Card className="p-0 overflow-hidden border border-white/10 shadow-2xl relative">
                {/* Header with cosmic glow */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white text-center relative overflow-hidden border-b border-white/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

                    <h3 className="text-2xl font-bold relative z-10 tracking-tight">Resumo do Pedido</h3>
                    <p className="text-slate-400 text-sm mt-1 relative z-10 font-medium">Concept Booking</p>
                </div>

                <div className="p-6 md:p-8 space-y-6 bg-white/5 backdrop-blur-3xl">
                    {/* Service */}
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                        <div className="bg-slate-800 p-3 rounded-full shadow-inner text-primary border border-white/5 group-hover:scale-110 transition-transform duration-300">
                            <Scissors className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary">Serviço</h4>
                            <p className="text-lg text-slate-100">{selectedService?.name}</p>
                            <p className="text-sm text-slate-500">{selectedService?.duration} min</p>
                        </div>
                    </div>

                    {/* Professional */}
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                        <div className="bg-slate-800 p-3 rounded-full shadow-inner text-primary border border-white/5 group-hover:scale-110 transition-transform duration-300">
                            <User className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary">Profissional</h4>
                            <p className="text-lg text-slate-100">{selectedProfessional?.name}</p>
                            <p className="text-sm text-slate-500">{selectedProfessional?.role}</p>
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                        <div className="bg-slate-800 p-3 rounded-full shadow-inner text-primary border border-white/5 group-hover:scale-110 transition-transform duration-300">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary">Data e Hora</h4>
                            <p className="text-lg text-slate-100 capitalize">
                                {selectedDate ? formatDateFriendly(new Date(selectedDate)) : ''}
                            </p>
                            <p className="text-lg text-slate-200 font-bold flex items-center gap-1 mt-1">
                                <Clock className="w-4 h-4 text-primary" />
                                {selectedTimeSlot}
                            </p>
                        </div>
                    </div>

                    {/* Price Total */}
                    <div className="mt-8 pt-6 border-t border-dashed border-white/10 flex items-center justify-between">
                        <span className="text-slate-400 font-medium flex items-center gap-2">
                            <Wallet className="w-5 h-5" /> Total
                        </span>
                        <span className="text-3xl font-bold text-primary drop-shadow-sm">
                            {selectedService?.price ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedService.price) : 'R$ 0,00'}
                        </span>
                    </div>
                </div>

                <div className="p-6 bg-white/5 border-t border-white/5">
                    <Button
                        onClick={handleConfirm}
                        size="lg"
                        className="w-full text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                        Confirmar Agendamento
                    </Button>
                </div>
            </Card>
        </div>
    );
}
