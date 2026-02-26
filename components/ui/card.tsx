'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'glass' | 'neon' | 'secondary';
    hoverEffect?: boolean;
}

export const Card = ({
    children,
    className,
    variant = 'default',
    hoverEffect = true
}: CardProps) => {
    const variants = {
        default: "bg-white/5 border border-white/10",
        glass: "glass backdrop-blur-xl bg-white/5 border border-white/10",
        neon: "bg-black/40 border border-primary/20 shadow-[0_0_15px_rgba(0,242,255,0.1)]",
        secondary: "bg-black/40 border border-secondary/20 shadow-[0_0_15px_rgba(112,0,255,0.1)]",
    };

    return (
        <div
            className={cn(
                "rounded-2xl p-6 transition-all duration-300",
                variants[variant],
                hoverEffect && "hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl",
                className
            )}
        >
            {children}
        </div>
    );
};
