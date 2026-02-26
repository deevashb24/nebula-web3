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
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
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
                        {NAV_LINKS.map(({ label, href }) => {
                            const isActive = pathname === href || pathname?.startsWith(href + '/');
                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                        isActive
                                            ? "text-white bg-white/8 border border-white/10"
                                            : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                                    )}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Auth */}
                    <div className="flex items-center gap-3">
                        {authenticated ? (
                            <div className="flex items-center gap-3">
                                <span className="hidden md:block text-xs text-zinc-400 font-mono px-3 py-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700">
                                    {shortAddress}
                                </span>
                                <Button variant="ghost" size="sm" onClick={() => logout()}>
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <Button variant="glow" size="sm" onClick={() => login()} className="gap-2">
                                Connect Wallet
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
                    <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 space-y-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="block px-4 py-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}
            </header>
            {/* Spacer */}
            <div className="h-[73px]" />
        </>
    );
}
