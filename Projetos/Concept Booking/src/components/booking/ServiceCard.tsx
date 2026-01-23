import { Service } from "@/types/scheduling";
import { Clock, Check } from "lucide-react";
import clsx from "clsx";

interface ServiceCardProps {
    service: Service;
    selected: boolean;
    onSelect: (s: Service) => void;
}

export function ServiceCard({ service, selected, onSelect }: ServiceCardProps) {
    return (
        <button
            onClick={() => onSelect(service)}
            className={clsx(
                "relative flex items-center justify-between p-4 px-6 rounded-xl transition-all duration-300 w-full border text-left",
                selected
                    ? "border-[var(--pk-gold)] bg-[var(--pk-navy-light)]"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
            )}
        >
            <div>
                <h3 className={clsx("font-medium text-lg", selected ? "text-[var(--pk-gold)]" : "text-[var(--pk-text-primary)]")}>
                    {service.name}
                </h3>
                <p className="text-sm text-[var(--pk-text-secondary)] mt-1 max-w-[80%]">
                    {service.description}
                </p>
                <div className="flex items-center gap-4 mt-3 text-sm text-[var(--pk-text-secondary)]">
                    <span className="flex items-center gap-1.5">
                        <Clock size={14} className={selected ? "text-[var(--pk-gold)]" : "opacity-60"} />
                        {service.durationMin} min
                    </span>
                    <span className="font-semibold text-[var(--pk-text-primary)]">
                        R$ {service.price.toFixed(2)}
                    </span>
                </div>
            </div>

            {selected && (
                <div className="bg-[var(--pk-gold)] text-[var(--pk-navy)] rounded-full p-1">
                    <Check size={16} strokeWidth={3} />
                </div>
            )}
        </button>
    );
}
