import { Professional } from "@/types/scheduling";
import { User } from "lucide-react";
import clsx from "clsx";

interface ProfessionalCardProps {
    professional: Professional;
    selected: boolean;
    onSelect: (p: Professional) => void;
}

export function ProfessionalCard({ professional, selected, onSelect }: ProfessionalCardProps) {
    return (
        <button
            onClick={() => onSelect(professional)}
            className={clsx(
                "relative flex flex-col items-center p-6 rounded-xl transition-all duration-300 w-full md:w-64 border group",
                selected
                    ? "border-[var(--pk-gold)] bg-[var(--pk-navy-light)] shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
            )}
        >
            <div className={clsx(
                "w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-colors",
                selected ? "bg-[var(--pk-gold)] text-[var(--pk-navy)]" : "bg-white/10 text-white/50 group-hover:bg-white/20"
            )}>
                {professional.photoUrl ? (
                    <img src={professional.photoUrl} alt={professional.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                    <User size={32} />
                )}
            </div>

            <h3 className="text-lg font-medium text-[var(--pk-text-primary)]">{professional.name}</h3>
            <p className="text-sm text-[var(--pk-text-secondary)] mt-1">{professional.role}</p>

            {/* Selected Indicator */}
            {selected && (
                <div className="absolute top-3 right-3 w-3 h-3 bg-[var(--pk-gold)] rounded-full animate-pulse shadow-[0_0_10px_var(--pk-gold)]" />
            )}
        </button>
    );
}
