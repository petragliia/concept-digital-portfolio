import { useBookingStore } from "@/store/useBookingStore";
import { generateTimeSlots } from "@/utils/dateHelpers";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { useMemo } from "react";

export function TimeGrid() {
    const { selectedDate, selectedService, selectedTimeSlot, setTimeSlot } = useBookingStore();

    const slots = useMemo(() => {
        if (!selectedDate || !selectedService) return [];
        return generateTimeSlots(selectedDate, selectedService.duration);
    }, [selectedDate, selectedService]);

    if (!selectedDate) return null;

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-4 mt-6">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-white">Horários Disponíveis</h3>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {slots.map((slot) => {
                    const isSelected = selectedTimeSlot === slot.time;

                    return (
                        <button
                            key={slot.time}
                            disabled={!slot.available}
                            onClick={() => setTimeSlot(slot.time)}
                            className={cn(
                                "py-3 px-2 rounded-xl text-sm font-semibold transition-all duration-200 border backdrop-blur-sm",
                                isSelected
                                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_-3px_rgba(245,158,11,0.4)] scale-105"
                                    : slot.available
                                        ? "bg-white/5 text-slate-200 border-white/10 hover:border-primary/50 hover:bg-white/10 hover:shadow-md"
                                        : "bg-white/0 text-slate-600 border-transparent opacity-30 cursor-not-allowed line-through decoration-slate-600"
                            )}
                        >
                            {slot.time}
                        </button>
                    );
                })}
            </div>

            {slots.length === 0 && (
                <div className="text-center py-8 text-slate-500 bg-white/5 rounded-2xl border border-dashed border-white/10">
                    Nenhum horário disponível para esta data.
                </div>
            )}
        </div>
    );
}
