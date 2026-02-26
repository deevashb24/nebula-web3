import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
    return (
        <div
            className={cn(
                "glass-card p-6 rounded-2xl",
                hoverEffect && "hover:bg-black/50 hover:border-white/10 hover:shadow-primary/5 cursor-default transition-all duration-300",
                className
            )}
        >
            {children}
        </div>
    );
};
