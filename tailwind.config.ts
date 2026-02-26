import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#f97316",  // orange-500
                    glow: "rgba(249, 115, 22, 0.3)",
                    light: "#fb923c",    // orange-400
                    dark: "#ea580c",     // orange-600
                },
                secondary: {
                    DEFAULT: "#ea580c",
                },
                accent: "#fb923c",
                muted: "#71717a",       // zinc-500
                card: "#18181b",        // zinc-900
                border: "#3f3f46",      // zinc-700
                glass: {
                    bg: "rgba(24, 24, 27, 0.6)",
                    border: "rgba(63, 63, 70, 1)",
                },
                brand: {
                    primary: "#f97316",
                    secondary: "#ea580c",
                },
            },
            fontFamily: {
                sans: ['Geist', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'orange-glow': 'radial-gradient(ellipse at center, rgba(249,115,22,0.15) 0%, transparent 70%)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeSlideIn 1s ease-out both',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeSlideIn: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            boxShadow: {
                'orange': '0 0 40px -10px rgba(234, 88, 12, 0.5)',
                'orange-sm': '0 0 10px rgba(249, 115, 22, 0.5)',
                'orange-lg': '0 0 60px -10px rgba(234, 88, 12, 0.6)',
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
        },
    },
    plugins: [],
};
export default config;
