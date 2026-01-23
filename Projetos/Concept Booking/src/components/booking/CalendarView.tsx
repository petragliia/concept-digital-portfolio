import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isBefore, startOfDay, addMonths, subMonths, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { WeekDay } from '@/types/scheduling';

interface CalendarViewProps {
    selectedDate?: Date;
    onSelectDate: (date: Date) => void;
    businessHours: Partial<Record<WeekDay, { isOpen: boolean }>>; // Used to gray out closed days
}

export function CalendarView({ selectedDate, onSelectDate, businessHours }: CalendarViewProps) {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const days = eachDayOfInterval({
        start: startOfMonth(currentMonth),
        end: endOfMonth(currentMonth),
    });

    // Safe check for day availability
    const isDayAvailable = (date: Date) => {
        const dayIndex = getDay(date);
        const dayKeys: WeekDay[] = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        const weekDay = dayKeys[dayIndex];
        return businessHours[weekDay]?.isOpen ?? false;
    };

    const isPast = (date: Date) => isBefore(date, startOfDay(new Date()));

    // Pad the grid to start at the correct weekday
    const startDay = getDay(startOfMonth(currentMonth));
    const emptyDays = Array.from({ length: startDay });

    return (
        <div className="w-full max-w-md mx-auto bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                    disabled={isBefore(endOfMonth(subMonths(currentMonth, 1)), startOfDay(new Date()))}
                >
                    <ChevronLeft size={20} />
                </button>
                <h2 className="text-xl font-semibold text-[var(--pk-text-primary)] capitalize">
                    {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
                </h2>
                <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 mb-2">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
                    <div key={i} className="text-center text-sm font-medium text-[var(--pk-text-secondary)] py-2">
                        {d}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2">
                {emptyDays.map((_, i) => <div key={`empty-${i}`} />)}

                {days.map((day) => {
                    const available = isDayAvailable(day) && !isPast(day);
                    const isSelected = selectedDate ? format(selectedDate, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd') : false;

                    return (
                        <button
                            key={day.toISOString()}
                            onClick={() => available && onSelectDate(day)}
                            disabled={!available}
                            className={clsx(
                                "h-10 w-10 text-sm rounded-full flex items-center justify-center transition-all",
                                isSelected
                                    ? "bg-[var(--pk-gold)] text-[var(--pk-navy)] font-bold shadow-[0_0_10px_var(--pk-gold)]"
                                    : available
                                        ? "text-[var(--pk-text-primary)] hover:bg-white/10"
                                        : "text-white/20 cursor-not-allowed",
                                isToday(day) && !isSelected && "ring-1 ring-[var(--pk-gold)]/50"
                            )}
                        >
                            {format(day, 'd')}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
