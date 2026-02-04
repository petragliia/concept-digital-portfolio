import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            // Cosmic Glass: Translucent + Blur + Edge Light
            className={cn(
                "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-card-foreground shadow-2xl transition-all duration-300",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

export { Card };
