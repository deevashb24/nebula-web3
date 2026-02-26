"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Zap, Clock, Trophy, TrendingUp, Star, ArrowRight, Timer, Target, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
    { icon: Clock, label: "Today's Focus", value: "4h 20m", change: "+12%", up: true },
    { icon: Flame, label: "Current Streak", value: "12 Days", change: "+3 days", up: true },
    { icon: Trophy, label: "$NEBULA Earned", value: "1,240", change: "+85 today", up: true },
    { icon: Star, label: "Global Rank", value: "#142", change: "+8 places", up: true },
];

const recentSessions = [
    { date: "Today, 09:00", duration: "90 min", earned: 45, status: "complete" },
    { date: "Today, 06:30", duration: "60 min", earned: 30, status: "complete" },
    { date: "Yesterday, 20:00", duration: "120 min", earned: 60, status: "complete" },
    { date: "Yesterday, 15:00", duration: "30 min", earned: 15, status: "complete" },
    { date: "Feb 26, 10:00", duration: "90 min", earned: 45, status: "complete" },
];

const quickActions = [
    { icon: Timer, label: "25 min Sprint", desc: "Classic Pomodoro session", href: "/focus", color: "orange" },
    { icon: Target, label: "50 min Deep Work", desc: "Extended focus block", href: "/focus", color: "orange" },
    { icon: Star, label: "View Rankings", desc: "Check leaderboard", href: "/leaderboard", color: "zinc" },
];

export default function DashboardPage() {
    return (
        <div className="bg-[#09090b] min-h-screen text-white">
            <Navbar />
            <main className="max-w-7xl mx-auto px-6 py-10">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="mb-10">
                    <div className="flex items-center gap-2 text-xs font-medium upperase tracking-wider text-orange-400 mb-2">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Welcome back, Deevash</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Your Focus Dashboard</h1>
                    <p className="text-zinc-400 text-sm">Track your productivity, earnings, and streaks in real-time.</p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map(({ icon: Icon, label, value, change, up }, i) => (
                        <motion.div key={label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-3">
                                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-orange-400" />
                                </div>
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${up ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"}`}>
                                    {change}
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-white tracking-tight mb-0.5">{value}</p>
                            <p className="text-xs text-zinc-500 font-medium">{label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Quick Actions */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-4 space-y-3">
                        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Quick Start</h2>
                        {quickActions.map(({ icon: Icon, label, desc, href }) => (
                            <Link href={href} key={label}>
                                <div className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 hover:shadow-orange transition-all cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                                        <Icon className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-white text-sm">{label}</p>
                                        <p className="text-xs text-zinc-500 truncate">{desc}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                            </Link>
                        ))}

                        {/* Start Focus CTA */}
                        <Link href="/focus">
                            <Button variant="glow" className="w-full mt-4 gap-2">
                                <Zap className="w-4 h-4" />
                                Start Focus Session
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Recent Sessions */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Recent Sessions</h2>
                            <span className="text-xs text-zinc-600">Last 7 days</span>
                        </div>
                        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                            {recentSessions.map((s, i) => (
                                <div key={i} className={`flex items-center justify-between px-5 py-4 hover:bg-zinc-800/50 transition-colors ${i > 0 ? "border-t border-zinc-800" : ""}`}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                            <Timer className="w-3.5 h-3.5 text-orange-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">{s.duration} session</p>
                                            <p className="text-xs text-zinc-500">{s.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-orange-400">+{s.earned} $NEBULA</p>
                                            <p className="text-xs text-green-500">Verified ✓</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Weekly Activity Bar */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Weekly Activity</h2>
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                            <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                            <span>+24% vs last week</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-2 h-24">
                        {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <div
                                    className="w-full rounded-t-lg bg-orange-500/20 hover:bg-orange-500/40 transition-colors relative group"
                                    style={{ height: `${h}%` }}
                                >
                                    <div
                                        className="absolute bottom-0 left-0 right-0 rounded-t-lg bg-gradient-to-t from-orange-500 to-orange-400"
                                        style={{ height: "30%" }}
                                    />
                                </div>
                                <span className="text-xs text-zinc-600">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
