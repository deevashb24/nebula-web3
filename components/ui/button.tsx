'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95 gap-2",
    {
        variants: {
            variant: {
                primary: "bg-primary text-black shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,242,255,0.5)]",
                secondary: "bg-secondary text-white shadow-[0_0_15px_rgba(112,0,255,0.3)] hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(112,0,255,0.5)]",
                glow: "bg-primary text-black shadow-[0_0_25px_rgba(0,242,255,0.5)] animate-pulse-slow",
                glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
                ghost: "bg-transparent hover:bg-white/5 text-white/70 hover:text-white",
                outline: "border border-primary/50 text-primary bg-transparent hover:bg-primary/10",
            },
            size: {
                sm: "h-9 px-3 rounded-lg text-xs",
                md: "h-11 px-5",
                lg: "h-14 px-8 text-base",
                icon: "h-10 w-10 p-0 rounded-lg",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        }
    }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

export const Button = ({
    className,
    variant,
    size,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
};
