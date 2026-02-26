'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-soft-orange text-brand-purple hover:bg-orange-200 shadow-md hover:shadow-lg",
        secondary: "bg-soft-green text-green-900 hover:bg-green-200 shadow-sm",
        outline: "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple/10"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg font-bold"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "rounded-full transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden font-quicksand",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {/* Shine effect for primary button */}
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    animate={{ translateX: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
                />
            )}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
}
