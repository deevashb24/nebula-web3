'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'glass' | 'monochrome' | 'secondary';
    hoverEffect?: boolean;
}

export const Card = ({
    children,
    className,
    variant = 'default',
    hoverEffect = true
}: CardProps) => {
    const variants = {
        default: "bg-black/40 border border-white/5",
        glass: "bg-white/[0.02] backdrop-blur-xl border border-white/10",
        monochrome: "bg-white text-black border-none",
        secondary: "bg-slate-900/50 border border-slate-800",
    };

    return (
        <div
            className={cn(
                "rounded-none p-10 transition-all duration-500",
                variants[variant],
                hoverEffect && "hover:bg-white/[0.04] hover:border-white/20",
                className
            )}
        >
            {children}
        </div>
    );
};
