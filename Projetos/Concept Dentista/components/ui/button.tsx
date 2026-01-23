import * as React from "react"
// import { Slot } from "@radix-ui/react-slot" // Removed unused import 
// Actually, standard button is fine, I'll avoid adding more deps unless needed.
// Rewriting without Slot to avoid extra dependency install for now, or I can install it quickly.
// Given strict instructions, I'll stick to what I have, but `cn` is available.

import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        // Basic variance implementation
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        }

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        }

        // Custom Pulse Animation Class
        const pulseAnimation = "animate-pulse shadow-[0_0_15px_rgba(0,128,128,0.5)]"

        // If implementing pulse explicitly via prop or class
        // For now, I'll rely on the user passing `animate-pulse` or similar in className if needed, 
        // or I creates specific 'cta' variant.

        // Check if "pulse" is in className for special handling if needed, otherwise just standard merge.

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
