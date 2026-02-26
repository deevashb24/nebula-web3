"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Activity, Wallet, Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import { usePathname } from "next/navigation";
import CosmicWarp from "./CosmicWarp";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isWarping, setIsWarping] = useState(false);
    const { login, authenticated, logout, user } = usePrivy();
    const pathname = usePathname();

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
        <div className="fixed top-0 left-0 right-0 z-[100] px-12 py-12 pointer-events-none">
            <CosmicWarp active={isWarping} />

            <div className="flex items-start justify-between w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col gap-10 pointer-events-auto">
                    {/* Brand Anchor */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-white flex items-center justify-center text-black font-black text-2xl">N</div>
                        <span className="text-3xl font-black tracking-[-0.05em] text-white uppercase italic">
                            Nebula
                        </span>
                    </Link>

                    {/* Expansive Tab Switcher */}
                    <div className="flex items-center gap-0 border border-white/5 bg-black/50 backdrop-blur-3xl overflow-hidden">
                        {[
                            { name: "DASHBOARD", href: "/dashboard" },
                            { name: "FOCUS CHAMBER", href: "/focus" },
                            { name: "PROFILE", href: "/profile" },
                            { name: "COMMUNITY", href: "/rooms" },
                        ].map((tab) => {
                            const isActive = pathname === tab.href;
                            return (
                                <Link
                                    key={tab.name}
                                    href={tab.href}
                                    className={cn(
                                        "px-10 py-6 text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-500",
                                        isActive
                                            ? "bg-white text-black border-l first:border-l-0 border-white"
                                            : "text-white/30 hover:text-white/70 bg-transparent border-l first:border-l-0 border-white/5"
                                    )}
                                >
                                    {tab.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* User State - Institutional Style */}
                <div className="flex items-center gap-8 pointer-events-auto">
                    {authenticated ? (
                        <div className="flex items-center gap-8 bg-black/50 backdrop-blur-3xl border border-white/5 px-8 py-3 translate-y-3">
                            <span className="text-[10px] text-white/20 font-mono tracking-widest lowercase">
                                {user?.wallet?.address?.slice(0, 8)}...
                            </span>
                            <div className="w-px h-4 bg-white/5" />
                            <button
                                onClick={logout}
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all"
                            >
                                Deauthorize
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleLogin}
                            className="translate-y-3 px-10 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white/90 transition-all shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                        >
                            Initialize System
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
