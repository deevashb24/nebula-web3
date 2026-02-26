'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] gap-2",
    {
        variants: {
            variant: {
                primary: "bg-orange-500 text-white hover:bg-orange-600 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-orange hover:scale-[1.02]",
                secondary: "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600",
                glow: "bg-orange-500 text-white shadow-orange hover:bg-orange-600 hover:shadow-orange-lg hover:scale-[1.02]",
                glass: "bg-white/[0.04] backdrop-blur-xl border border-white/10 text-white hover:bg-white/[0.08] hover:border-orange-500/30",
                ghost: "bg-transparent hover:bg-white/[0.04] text-zinc-400 hover:text-white border border-transparent hover:border-zinc-700",
                outline: "border border-zinc-700 text-white bg-transparent hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400",
                white: "bg-white text-black font-bold hover:bg-zinc-100",
                monochrome: "bg-white text-black hover:bg-zinc-100 font-semibold",
                default: "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800",
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
