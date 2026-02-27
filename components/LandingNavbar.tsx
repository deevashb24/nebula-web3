"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

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
            {/* Top announcement banner */}
            <div className="bg-orange-500/10 border-b border-orange-500/20 text-center py-2.5 px-4">
                <p className="text-xs font-medium text-orange-400 tracking-wide">
                    <span className="inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse inline-block" />
                        New release: Nebula Protocol v2.0 —{" "}
                        <Link href="#" className="underline underline-offset-2 hover:text-orange-300 transition-colors">
                            Read the announcement
                        </Link>
                    </span>
                </p>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-[#09090b]/90 backdrop-blur-xl">
                <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-orange-sm group-hover:shadow-orange transition-shadow">
                            <Zap className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-white text-lg tracking-tight">Nebula</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="#"
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-zinc-100 transition-all duration-200 tracking-wide uppercase"
                        >
                            Request Demo
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-zinc-800 bg-[#09090b] px-6 py-4 space-y-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="block px-4 py-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="pt-3 border-t border-zinc-800 mt-3 flex flex-col gap-2">
                            <Link href="#" className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                                Sign in
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-zinc-100 transition-all duration-200 tracking-wide uppercase"
                                onClick={() => setMobileOpen(false)}
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
