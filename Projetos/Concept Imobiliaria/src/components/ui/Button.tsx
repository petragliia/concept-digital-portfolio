import React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", fullWidth, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-secondary/20 hover:-translate-y-1",
            secondary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-1",
            outline: "border border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-primary hover:-translate-y-1",
            ghost: "text-white/90 hover:text-secondary bg-transparent hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-10 py-4 text-lg",
        };

        return (
            <Comp
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
