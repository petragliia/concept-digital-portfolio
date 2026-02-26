import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-20 md:py-32 scroll-mt-20", className)}
                {...props}
            />
        );
    }
);

Section.displayName = "Section";
