import * as React from "react";
import { addDays } from "date-fns";
import { formatDateFriendly, isPastDate, isSunday } from "@/utils/dateHelpers";
import { useBookingStore } from "@/store/useBookingStore";
import { cn } from "@/lib/utils";
import { ChevronRight, Calendar as CalendarIcon } from "lucide-react";

export function DayPicker() {
    const { selectedDate, setDate } = useBookingStore();
    const [days, setDays] = React.useState<Date[]>([]);

    React.useEffect(() => {
        // Generate next 14 days
        const nextDays = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));
        setDays(nextDays);
    }, []);

    return (
        <div className="w-full overflow-hidden animate-in slide-in-from-right-4 duration-500">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    Escolha uma Data
                </h3>
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-lg border border-primary/20">
                    Próximos 14 dias
                </span>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-3 overflow-x-auto pb-6 pt-2 px-1 snap-x scrollbar-hide">
                {days.map((date) => {
                    const isDisabled = isSunday(date); // Logic from dateHelpers.ts
                    const isSelected = selectedDate ? selectedDate.toDateString() === date.toDateString() : false;

                    return (
                        <button
                            key={date.toISOString()}
                            disabled={isDisabled}
                            onClick={() => setDate(date)}
                            className={cn(
                                "flex-shrink-0 w-[4.5rem] h-24 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 snap-center border backdrop-blur-md",
                                isSelected
                                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] scale-105"
                                    : isDisabled
                                        ? "bg-white/5 text-slate-600 border-white/5 cursor-not-allowed opacity-40 grayscale"
                                        : "bg-white/5 text-slate-300 border-white/10 hover:border-primary/50 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1"
                            )}
                        >
                            <span className="text-xs font-medium uppercase tracking-wider opacity-80">
                                {date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '')}
                            </span>
                            <span className={cn("text-2xl font-bold", isSelected ? "text-primary-foreground" : "text-white")}>
                                {date.getDate()}
                            </span>
                            {isSelected && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-1 animate-pulse shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
