"use client";

import Link from "next/link";
import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Focus", href: "/focus" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Community", href: "/rooms" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { login, authenticated, logout, user } = usePrivy();
    const pathname = usePathname();

    const shortAddress = user?.wallet?.address
        ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}`
        : null;

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_0_20px_rgba(234,88,12,0.4)] group-hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] transition-all duration-300">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-white text-xl tracking-tight">Nebula</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
                        {NAV_LINKS.map(({ label, href }) => {
                            const isActive = pathname === href || pathname?.startsWith(href + '/');
                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={cn(
                                        "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                                        isActive
                                            ? "text-white bg-white/10 shadow-sm"
                                            : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                                    )}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Auth */}
                    <div className="flex items-center gap-4">
                        {authenticated ? (
                            <div className="flex items-center gap-4">
                                <span className="hidden md:block text-sm text-zinc-300 font-mono px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                    {shortAddress}
                                </span>
                                <Button variant="ghost" size="md" className="font-semibold px-5 rounded-xl hover:bg-white/5" onClick={() => logout()}>
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <Button
                                variant="glow"
                                size="md"
                                onClick={() => login()}
                                className="group relative overflow-hidden bg-zinc-950 font-bold px-8 py-2.5 rounded-full border-0 p-[2px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]"
                            >
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-gradient-xy" />
                                <span className="relative z-10 w-full h-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-zinc-950 text-white transition-colors group-hover:bg-transparent">
                                    Sign In
                                </span>
                            </Button>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-2xl px-6 py-4 space-y-2 shadow-2xl">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="block px-4 py-3.5 rounded-2xl text-base font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}
            </header>
            {/* Spacer */}
            <div className="h-[90px]" />
        </>
    );
}
