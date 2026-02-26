"use client";

import Link from "next/link"; import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Timer, Zap, Trophy, TrendingUp, Calendar, ChevronRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from 'canvas-confetti';

const stats = [
    { label: "Total Focus Hours", value: "142.5", icon: Timer, color: "text-primary" },
    { label: "Tokens Earned", value: "1,250", icon: Zap, color: "text-secondary" },
    { label: "Current Streak", value: "12 Days", icon: Trophy, color: "text-accent" },
    { label: "Rank", value: "Top 5%", icon: TrendingUp, color: "text-green-400" },
];

const achievements = [
    { title: "Early Architect", date: "Feb 12, 2026", icon: "🏛️" },
    { title: "Deep Focus Master", date: "Feb 20, 2026", icon: "🧠" },
    { title: "7-Day Warrior", date: "Feb 19, 2026", icon: "⚔️" },
];

export default function DashboardPage() {
    const handleBirthStar = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#00f2fe', '#7000ff', '#ffffff']
        });
    };
    return (
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20 py-12 space-y-16">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Cosmic Dashboard</h1>
                    <p className="text-white/40 mt-1 font-medium italic">Mapping your productivity across the universe.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="glass border-white/5">
                        <Calendar className="w-4 h-4 mr-2" />
                        Galactic Cycle
                    </Button>
                    <Button variant="primary" onClick={handleBirthStar}>Birth a Star</Button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard className="flex flex-col gap-4">
                                <div className={`p-3 rounded-2xl bg-white/5 w-fit ${stat.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-3xl font-black tracking-tighter">{stat.value}</div>
                                    <div className="text-sm font-medium text-white/40">{stat.label}</div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Productivity Chart Mock */}
                <GlassCard className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Focus Trends</h2>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-primary" />
                            <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Concentration Index</span>
                        </div>
                    </div>
                    <div className="h-[300px] w-full bg-white/5 rounded-2xl flex items-end justify-between p-8 gap-2">
                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="w-full bg-gradient-to-t from-primary/20 via-primary/60 to-primary rounded-t-lg relative group"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                                    {h} hours
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-between px-2 text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </GlassCard>

                {/* Recent Achievements */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Latest Badges</h2>
                        <Link href="/awards">
                            <ChevronRight className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {achievements.map((ach, i) => (
                            <motion.div
                                key={ach.title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 + 0.5 }}
                            >
                                <GlassCard className="p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                    <div className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                        {ach.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">{ach.title}</div>
                                        <div className="text-xs text-white/30">{ach.date}</div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full border-white/5 bg-white/5">
                        View Trophy Room
                    </Button>
                </div>
            </div>
        </div>
    );
}
