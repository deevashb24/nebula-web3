"use client";

import { motion } from "framer-motion";
import {
    Trophy,
    TrendingUp,
    History,
    Wallet,
    ArrowUpRight,
    CheckCircle2,
    Clock,
    ArrowRight,
    Zap
} from "lucide-react";

import { MOCK_HISTORY } from "@/lib/mock-data";
import { formatCurrency, cn } from "@/lib/utils";
import Link from "next/link";

export default function PortfolioPage() {
    const stats = [
        { label: "Total Focus", value: "142.5h", icon: Clock, color: "text-primary" },
        { label: "Completion", value: "88%", icon: CheckCircle2, color: "text-primary" },
        { label: "Total Points", value: "12,450", icon: Zap, color: "text-green-400" },
        { label: "Rank", value: "#142", icon: Trophy, color: "text-secondary" },
    ];

    return (
        <div className="container mx-auto px-6 pt-12 space-y-12">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-black text-white tracking-tight">Your Profile</h1>
                <p className="text-gray-400 mt-1">Monitor your productivity metrics and reward history.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl glass-card border-white/5 relative overflow-hidden group hover:border-brand-primary/20 transition-all"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-3 rounded-2xl bg-white/5", stat.color)}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-brand-primary transition-colors" />
                        </div>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                        <p className="text-3xl font-black text-white mt-1">{stat.value}</p>

                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-primary/5 blur-[40px] rounded-full group-hover:bg-brand-primary/10 transition-all" />
                    </motion.div>
                ))}
            </div>

            {/* Prediction History */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <History className="text-primary" />
                        Activity Log
                    </h2>
                    <button className="text-sm font-bold text-primary hover:underline">Download Log</button>
                </div>

                <div className="rounded-3xl glass-card border-white/5 overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/[0.02]">
                                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Session Type</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Duration</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Points</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Efficiency</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm">
                            {MOCK_HISTORY.map((tx, i) => (
                                <motion.tr
                                    key={tx.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="hover:bg-white/[0.02] transition-colors group"
                                >
                                    <td className="px-8 py-6">
                                        <div className="font-bold text-white group-hover:text-brand-primary transition-colors cursor-pointer">
                                            {tx.marketTitle}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">26 Feb 2026, 4:52 PM</div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border",
                                            tx.choice === "Yes" ? "bg-brand-primary/10 text-brand-primary border-brand-primary/20" : "bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20"
                                        )}>
                                            {tx.choice}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 font-bold text-white">{formatCurrency(tx.amount)}</td>
                                    <td className="px-8 py-6 font-bold text-white">{formatCurrency(tx.payout)}</td>
                                    <td className="px-8 py-6">
                                        {tx.status === "Won" ? (
                                            <div className="flex items-center gap-1.5 text-green-400 font-bold uppercase text-[10px] tracking-widest">
                                                <CheckCircle2 className="w-4 h-4" />
                                                Settled
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1.5 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
                                                <Clock className="w-4 h-4 animate-pulse" />
                                                Live
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <Link href={`/market/${tx.marketId}`} className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-500 hover:text-white hover:bg-white/10 inline-block transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>

                    {MOCK_HISTORY.length === 0 && (
                        <div className="py-24 text-center">
                            <p className="text-gray-500">No prediction history yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
