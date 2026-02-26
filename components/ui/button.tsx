'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-none text-sm font-bold uppercase tracking-widest transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] gap-3",
    {
        variants: {
            variant: {
                primary: "bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]",
                secondary: "bg-slate-900 text-white border border-slate-800 hover:bg-slate-800",
                glow: "bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.02]",
                glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
                ghost: "bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border border-transparent hover:border-white/10",
                outline: "border border-white/20 text-white bg-transparent hover:border-white/60 hover:bg-white/5",
                white: "bg-white text-black font-black hover:bg-white/90",
            },
            size: {
                sm: "h-10 px-6 text-[10px]",
                md: "h-14 px-10 text-xs",
                lg: "h-20 px-16 text-sm",
                icon: "h-12 w-12 p-0",
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
