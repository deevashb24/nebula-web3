"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Trophy, Shield, Zap, Target, Lock, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
    { id: 1, title: "Nebula Architect", rarity: "Legendary", icon: "🏛️", description: "Joined during the genesis phase of Nebula Galactic.", unlocked: true, date: "Feb 12, 2026" },
    { id: 2, title: "Deep Focus Master", rarity: "Epic", icon: "🧠", description: "Completed 50 consecutive focus sessions without interruption.", unlocked: true, date: "Feb 20, 2026" },
    { id: 3, title: "Galaxy Warrior", rarity: "Rare", icon: "⚔️", description: "Maintained a focus streak for 7 consecutive days.", unlocked: true, date: "Feb 19, 2026" },
    { id: 4, title: "Moon Walker", rarity: "Legendary", icon: "🌙", description: "Completed a 4-hour deep focus session during night hours.", unlocked: false, requirement: "4h Night Focus" },
    { id: 5, title: "Social Scholar", rarity: "Common", icon: "🤝", description: "Participated in 10 different study lounges.", unlocked: false, requirement: "10 Lounge Visits" },
    { id: 6, title: "Vibe Setter", rarity: "Epic", icon: "✨", description: "Hosted a study lounge with more than 15 active participants.", unlocked: false, requirement: "Host 15+ Guest Room" },
];

export default function AwardsPage() {
    return (
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20 py-12 space-y-16">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-center md:text-left">
                <div className="space-y-1">
                    <h1 className="text-4xl font-bold tracking-tight">Achievement Galaxy</h1>
                    <p className="text-white/40">Your legacy of focus, immortalized in the stars.</p>
                </div>
                <div className="flex items-center gap-4 justify-center">
                    <GlassCard className="py-2 px-4 flex items-center gap-2 border-white/5">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="font-bold">3/6 Unlocked</span>
                    </GlassCard>
                    <Button variant="primary">Mint All Badges</Button>
                </div>
            </header>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {badges.map((badge, i) => (
                    <motion.div
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <GlassCard
                            className={cn(
                                "h-full flex flex-col items-center text-center gap-6 p-8 relative overflow-hidden group transition-all duration-500",
                                badge.unlocked
                                    ? "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                                    : "grayscale opacity-80"
                            )}
                        >
                            {!badge.unlocked && (
                                <div className="absolute top-4 right-4 text-white/20">
                                    <Lock className="w-5 h-5" />
                                </div>
                            )}

                            {/* Holographic Effect for Unlocked */}
                            {badge.unlocked && (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}

                            <div className={cn(
                                "w-24 h-24 rounded-full flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-110 relative",
                                badge.unlocked ? "filter drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" : ""
                            )}>
                                {badge.icon}
                                {badge.unlocked && (
                                    <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full -z-10 animate-pulse-slow" />
                                )}
                            </div>

                            <div className="space-y-2 relative z-10">
                                <div className="flex flex-col items-center gap-1">
                                    <span className={cn(
                                        "text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded border mb-1",
                                        badge.rarity === "Legendary" ? "text-amber-400 border-amber-400/20 bg-amber-400/5" :
                                            badge.rarity === "Epic" ? "text-primary border-primary/20 bg-primary/5" :
                                                badge.rarity === "Rare" ? "text-secondary border-secondary/20 bg-secondary/5" :
                                                    "text-white/40 border-white/10 bg-white/5"
                                    )}>
                                        {badge.rarity}
                                    </span>
                                    <h3 className="text-xl font-bold">{badge.title}</h3>
                                </div>
                                <p className="text-sm text-white/40 leading-relaxed font-medium">
                                    {badge.description}
                                </p>
                            </div>

                            <div className="pt-4 mt-auto w-full relative z-10">
                                {badge.unlocked ? (
                                    <div className="space-y-3">
                                        <div className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Unlocked on {badge.date}</div>
                                        <Button variant="outline" className="w-full text-xs font-bold border-white/5 hover:bg-white/10">
                                            Share on Farcaster
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="bg-white/5 rounded-full h-1.5 w-full overflow-hidden">
                                            <div className="bg-white/20 h-full w-1/3" />
                                        </div>
                                        <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Requirement: {badge.requirement}</div>
                                    </div>
                                )}
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Importing cn here because I forgot it in the previous file content plan
import { cn } from "@/lib/utils";
