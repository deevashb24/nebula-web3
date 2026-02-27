'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] gap-2",
    {
        variants: {
            variant: {
                primary: "bg-orange-500 text-white hover:bg-orange-600 shadow-[0_4px_15px_rgba(234,88,12,0.3)] hover:shadow-[0_6px_25px_rgba(234,88,12,0.4)] hover:-translate-y-0.5",
                secondary: "bg-zinc-100 text-zinc-900 border border-zinc-200 hover:bg-zinc-200 hover:border-zinc-300 shadow-sm",
                glow: "bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-0.5",
                glass: "bg-white/60 backdrop-blur-xl border border-zinc-200 text-zinc-900 hover:bg-white/90 hover:border-orange-500/30 shadow-sm",
                ghost: "bg-transparent hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-transparent hover:border-zinc-200",
                outline: "border border-zinc-200 text-zinc-900 bg-transparent hover:border-orange-500/50 hover:bg-orange-50 hover:text-orange-600",
                white: "bg-zinc-900 text-white font-bold hover:bg-zinc-800 shadow-md",
                monochrome: "bg-zinc-900 text-white hover:bg-zinc-800 font-semibold shadow-sm",
                default: "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 shadow-sm",
            },
            size: {
                sm: "h-9 px-4 text-xs rounded-lg",
                md: "h-11 px-6 text-sm",
                lg: "h-12 px-8 text-base rounded-xl",
                icon: "h-10 w-10 p-0 rounded-xl",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        }
    }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
