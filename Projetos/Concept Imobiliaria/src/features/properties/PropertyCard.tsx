import { Property } from "./types";
import { Bed, Maximize, Car, Waves, Trees } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const iconMap = {
    bed: Bed,
    maximize: Maximize,
    car: Car,
    waves: Waves,
    trees: Trees,
};

interface PropertyCardProps {
    property: Property;
    index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
        >
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-6 h-80">
                {property.badge && (
                    <div
                        className={cn(
                            "absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide",
                            property.badgeColor === "secondary" ? "bg-secondary" : "bg-primary"
                        )}
                    >
                        {property.badge}
                    </div>
                )}
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl text-primary font-bold group-hover:text-secondary transition-colors">
                        {property.title}
                    </h3>
                    <span className="text-primary font-semibold">{property.price}</span>
                </div>
                <p className="text-gray-500 mb-4 text-sm uppercase tracking-wide">
                    {property.location}
                </p>
                <div className="flex gap-6 text-gray-600 text-sm border-t border-gray-100 pt-4">
                    {property.specs.map((spec, i) => {
                        const Icon = iconMap[spec.icon];
                        return (
                            <span key={i} className="flex items-center gap-2">
                                <Icon className="w-4 h-4 text-secondary" /> {spec.label}
                            </span>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
