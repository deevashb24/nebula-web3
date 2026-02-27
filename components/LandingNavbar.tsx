"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Product", href: "/product" },
    { label: "Docs", href: "/docs" },
    { label: "Customers", href: "/customers" },
    { label: "Pricing", href: "/pricing" },
];

export default function LandingNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Desktop: Floating pill navbar — exact reference structure */}
            <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] mt-6 w-max hidden md:flex items-center gap-8 py-2 px-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 pl-2">
                    <div className="w-6 h-6 rounded-lg bg-orange-500 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <span className="text-sm font-medium text-white tracking-tight">Nebula</span>
                </Link>

                {/* Nav links — exact: text-xs font-medium text-gray-400 hover:text-white */}
                {NAV_LINKS.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
                    >
                        {label}
                    </Link>
                ))}

                {/* Sign in */}
                <Link
                    href="#"
                    className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-wide pl-2"
                >
                    Sign in
                </Link>

                {/* Request Demo — exact reference: rounded-full with glow border effect */}
                <Link
                    href="/pricing"
                    className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full relative items-center justify-center"
                >
                    {/* Gradient border glow */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-white/5" />
                    <span className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900 text-xs font-semibold text-white tracking-wide m-[1px]">
                        Request Demo
                    </span>
                </Link>
            </nav>

            {/* Mobile navbar */}
            <header className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/90 backdrop-blur-xl">
                <div className="flex items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>
                        <span className="text-base font-semibold text-white">Nebula</span>
                    </Link>
                    <button
                        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {mobileOpen && (
                    <div className="border-t border-white/5 bg-zinc-950 px-6 py-4 space-y-2">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="block px-3 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/[0.04] transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-white/5 mt-4 flex flex-col gap-3">
                            <Link href="#" className="flex justify-center py-3 text-base font-medium text-gray-300 hover:text-white transition-colors">
                                Sign in
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center py-3.5 px-6 rounded-full bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-zinc-100 transition-all"
                                onClick={() => setMobileOpen(false)}
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Spacer for mobile header */}
            <div className="md:hidden h-[65px]" />
            {/* Spacer for desktop pill nav */}
            <div className="hidden md:block h-[88px]" />
        </>
    );
}
