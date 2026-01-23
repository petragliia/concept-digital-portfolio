import clsx from 'clsx';
import { Clock } from 'lucide-react';

interface TimeSlotGridProps {
    slots: string[]; // ["09:00", "09:30"]
    selectedSlot?: string;
    onSelectSlot: (slot: string) => void;
    loading?: boolean;
}

export function TimeSlotGrid({ slots, selectedSlot, onSelectSlot, loading }: TimeSlotGridProps) {
    if (loading) {
        return <div className="text-center py-10 text-[var(--pk-text-secondary)] animate-pulse">Buscando horários...</div>;
    }

    if (slots.length === 0) {
        return (
            <div className="text-center py-10 text-[var(--pk-text-secondary)] bg-white/5 rounded-xl border border-white/10">
                <Clock className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p>Sem horários disponíveis para esta data.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {slots.map((slot) => (
                <button
                    key={slot}
                    onClick={() => onSelectSlot(slot)}
                    className={clsx(
                        "py-2 px-3 rounded-lg text-sm transition-all border",
                        selectedSlot === slot
                            ? "bg-[var(--pk-gold)] border-[var(--pk-gold)] text-[var(--pk-navy)] font-semibold shadow-[0_0_8px_var(--pk-gold)]"
                            : "bg-white/5 border-white/10 text-[var(--pk-text-primary)] hover:bg-white/10 hover:border-white/20"
                    )}
                >
                    {slot}
                </button>
            ))}
        </div>
    );
}
