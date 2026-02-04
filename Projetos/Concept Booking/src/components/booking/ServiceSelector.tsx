import { Card } from "@/components/ui/card";
import { SERVICES } from "@/data/mocks";
import { useBookingStore } from "@/store/useBookingStore";
import { cn } from "@/lib/utils";
import { Check, Scissors } from "lucide-react";

export function ServiceSelector() {
    const { selectedService, selectService } = useBookingStore();

    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {SERVICES.map((service) => {
                const isSelected = selectedService?.id === service.id;

                return (
                    <Card
                        key={service.id}
                        onClick={() => selectService(service)}
                        className={cn(
                            "cursor-pointer p-5 transition-all duration-300 relative overflow-hidden group border",
                            // Base Glass Style
                            "backdrop-blur-xl",
                            isSelected
                                ? "bg-white/10 border-primary/50 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)] scale-[1.02] ring-1 ring-primary/20"
                                : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5"
                        )}
                    >
                        {/* Subtle Gradient Glow effect on background */}
                        <div className={cn(
                            "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500",
                            isSelected || "group-hover:opacity-100" // active on select or hover
                        )} />

                        <div className="relative z-10 flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className={cn(
                                    "p-3 rounded-2xl transition-all duration-300 shadow-inner",
                                    isSelected
                                        ? "bg-primary text-primary-foreground shadow-primary/20"
                                        : "bg-white/5 text-white/70 group-hover:text-primary group-hover:bg-white/10"
                                )}>
                                    <Scissors className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className={cn("font-bold text-lg transition-colors", isSelected ? "text-primary" : "text-white group-hover:text-white/90")}>
                                        {service.name}
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-1 leading-relaxed max-w-[200px]">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right min-w-[80px]">
                                <span className={cn("block font-bold text-lg tracking-tight", isSelected ? "text-primary" : "text-white")}>
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(service.price)}
                                </span>
                                <span className={cn(
                                    "text-xs font-medium px-2.5 py-1 rounded-md border transition-colors inline-block mt-1",
                                    isSelected
                                        ? "bg-primary/20 text-primary border-primary/20"
                                        : "bg-white/5 text-slate-400 border-white/5 group-hover:border-white/10"
                                )}>
                                    {service.duration} min
                                </span>
                            </div>
                        </div>

                        {/* Animated Selection Indicator (Corner Ribbon style) */}
                        <div className={cn(
                            "absolute top-0 right-0 transition-all duration-300 transform",
                            isSelected ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-full -translate-y-full"
                        )}>
                            <div className="bg-primary text-primary-foreground rounded-bl-xl p-2 shadow-lg shadow-primary/20">
                                <Check className="h-4 w-4" />
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}
