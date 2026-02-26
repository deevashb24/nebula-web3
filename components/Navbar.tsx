"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Activity, Wallet, Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import CosmicWarp from "./CosmicWarp";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isWarping, setIsWarping] = useState(false);
    const { login, authenticated, logout, user } = usePrivy();

    const handleLogin = async () => {
        setIsWarping(true);
        setTimeout(() => {
            setIsWarping(false);
            login();
        }, 2000);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <CosmicWarp active={isWarping} />
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-black/80 backdrop-blur-lg border-white/10 py-3"
                        : "bg-transparent border-transparent py-5"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.4)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                            <Rocket className="text-white w-6 h-6" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white">
                            Nebula<span className="text-brand-primary"> Galactic</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/dashboard" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Cosmology
                        </Link>
                        {authenticated ? (
                            <div className="flex items-center gap-4">
                                <span className="text-xs text-white/40 font-mono">
                                    {user?.wallet?.address?.slice(0, 6)}...{user?.wallet?.address?.slice(-4)}
                                </span>
                                <button
                                    onClick={logout}
                                    className="px-4 py-2 rounded-full glass border border-white/10 text-white text-sm hover:bg-white/10 transition-all"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={handleLogin}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black font-bold shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all active:scale-95"
                            >
                                <Wallet className="w-4 h-4" />
                                Connect Portal
                            </button>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                        <Link href="/focus" className="text-lg font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>
                            Focus
                        </Link>
                        <Link href="/leaderboard" className="text-lg font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>
                            Leaderboard
                        </Link>
                        <button
                            onClick={authenticated ? logout : handleLogin}
                            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-primary text-black font-bold"
                        >
                            <Wallet className="w-5 h-5" />
                            {authenticated ? "Log Out" : "Connect Portal"}
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}
