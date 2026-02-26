'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const cardVariants = cva(
    "rounded-2xl border transition-all duration-300",
    {
        variants: {
            variant: {
                default: "bg-zinc-900 border-zinc-800 hover:border-zinc-700",
                glass: "bg-zinc-900/30 backdrop-blur-xl border-zinc-800 hover:border-zinc-700",
                secondary: "bg-zinc-800/50 border-zinc-700 hover:border-zinc-600",
                monochrome: "bg-zinc-900 border-zinc-800",
                orange: "bg-zinc-900 border-orange-500/20 hover:border-orange-500/50 hover:shadow-orange",
                outline: "bg-transparent border-zinc-700 hover:border-orange-500/40",
            },
            padding: {
                none: "p-0",
                sm: "p-4",
                md: "p-6",
                lg: "p-8",
            }
        },
        defaultVariants: {
            variant: "default",
            padding: "md",
        }
    }
);

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> { }

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, padding, ...props }, ref) => {
        return (
            <div
                className={cn(cardVariants({ variant, padding, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";
