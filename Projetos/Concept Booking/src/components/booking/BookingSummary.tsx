import { Appointment, Professional, Service } from "@/types/scheduling";
import { Calendar, Clock, User, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingSummaryProps {
    professional: Professional;
    service: Service;
    date: Date;
    slot: string;
}

export function BookingSummary({ professional, service, date, slot }: BookingSummaryProps) {
    return (
        <div className="w-full max-w-md mx-auto bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-[var(--pk-text-primary)] mb-6 flex items-center gap-2">
                <CheckCircle className="text-[var(--pk-gold)]" />
                Resumo do Agendamento
            </h2>

            <div className="space-y-6">
                {/* Professional */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                    <div className="w-12 h-12 rounded-full bg-[var(--pk-navy)] border border-[var(--pk-gold)] flex items-center justify-center overflow-hidden">
                        {professional.photoUrl ? (
                            <img src={professional.photoUrl} alt={professional.name} className="w-full h-full object-cover" />
                        ) : (
                            <User size={20} className="text-[var(--pk-gold)]" />
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-[var(--pk-text-secondary)]">Profissional</p>
                        <p className="font-medium text-[var(--pk-text-primary)]">{professional.name}</p>
                    </div>
                </div>

                {/* Service */}
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <div>
                        <p className="text-sm text-[var(--pk-text-secondary)]">Serviço</p>
                        <p className="font-medium text-[var(--pk-text-primary)]">{service.name}</p>
                    </div>
                    <p className="text-[var(--pk-gold)] font-bold">R$ {service.price.toFixed(2)}</p>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-[var(--pk-text-secondary)] mb-1">
                            <Calendar size={14} />
                            <span className="text-xs">Data</span>
                        </div>
                        <p className="font-medium text-[var(--pk-text-primary)] capitalize">
                            {format(date, 'EEE, d MMM', { locale: ptBR })}
                        </p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-[var(--pk-text-secondary)] mb-1">
                            <Clock size={14} />
                            <span className="text-xs">Horário</span>
                        </div>
                        <p className="font-medium text-[var(--pk-text-primary)]">{slot}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
