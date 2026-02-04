import { Card } from "@/components/ui/card";
import { PROFESSIONALS } from "@/data/mocks";
import { useBookingStore } from "@/store/useBookingStore";
import { cn } from "@/lib/utils";
import { User, Check, Star } from "lucide-react";

export function ProfessionalSelector() {
    const { selectedService, selectProfessional, selectedProfessional } = useBookingStore();

    const availableProfessionals = PROFESSIONALS.filter((prof) =>
        selectedService ? prof.serviceIds.includes(selectedService.id) : true
    );

    if (!selectedService) {
        return (
            <div className="text-center py-12 bg-white/5 rounded-3xl border border-dashed border-white/10 animate-pulse backdrop-blur-sm">
                <p className="text-slate-400 font-medium">Por favor, selecione um serviço primeiro.</p>
            </div>
        );
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {availableProfessionals.map((prof) => {
                const isSelected = selectedProfessional?.id === prof.id;

                return (
                    <Card
                        key={prof.id}
                        onClick={() => selectProfessional(prof)}
                        className={cn(
                            "cursor-pointer p-6 text-center transition-all duration-300 relative overflow-hidden group border",
                            "backdrop-blur-xl", // Glass Effect
                            isSelected
                                ? "bg-white/10 border-primary/50 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)] scale-[1.02] ring-1 ring-primary/20"
                                : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg"
                        )}
                    >
                        {/* Subtle Glow */}
                        <div className={cn(
                            "absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500",
                            isSelected || "group-hover:opacity-100"
                        )} />

                        {/* Avatar Container */}
                        <div className={cn(
                            "mx-auto w-24 h-24 rounded-full flex items-center justify-center overflow-hidden mb-4 border-4 transition-all duration-300 relative z-10",
                            isSelected ? "border-primary p-1 shadow-lg shadow-primary/20" : "border-white/10 group-hover:border-primary/50"
                        )}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 relative">
                                {prof.avatar ? (
                                    <img src={prof.avatar} alt={prof.name} className="w-full h-full object-cover" />
                                ) : (
                                    <User className="h-10 w-10 text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                )}
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className={cn("font-bold text-lg transition-colors", isSelected ? "text-primary" : "text-white group-hover:text-white/90")}>
                                {prof.name}
                            </h3>
                            <p className="text-sm text-slate-400 font-medium mb-3">{prof.role}</p>

                            {/* Fake Rating for Social Proof */}
                            <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-bold mb-2 bg-white/5 inline-block px-2 py-0.5 rounded-full border border-white/5">
                                <Star className="w-3 h-3 fill-current" />
                                <span>5.0</span>
                            </div>
                        </div>

                        {isSelected && (
                            <div className="absolute top-3 right-3 text-primary-foreground bg-primary rounded-full p-1.5 animate-in zoom-in shadow-lg shadow-primary/20 z-20">
                                <Check className="h-4 w-4" />
                            </div>
                        )}
                    </Card>
                );
            })}
        </div>
    );
}
