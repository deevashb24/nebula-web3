"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { usePrivy } from "@privy-io/react-auth";
import { Clock, Trophy, Flame, Zap, Star, Copy, ExternalLink, Shield, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const recentActivity = [
    { type: "focus", label: "90 min Deep Work", earned: "+45 $NEBULA", time: "2h ago" },
    { type: "streak", label: "12 Day Streak Milestone", earned: "+100 $NEBULA", time: "1d ago" },
    { type: "focus", label: "60 min Sprint", earned: "+30 $NEBULA", time: "1d ago" },
    { type: "rank", label: "Reached Rank #142", earned: "Achievement", time: "2d ago" },
];

const achievements = [
    { icon: Flame, label: "12-Day Streak", desc: "Focused 12 days in a row", earned: true },
    { icon: Trophy, label: "First 100h", desc: "100 hours of verified focus", earned: true },
    { icon: Target, label: "50 Sessions", desc: "Completed 50 focus sessions", earned: true },
    { icon: TrendingUp, label: "Top 200", desc: "Reached global top 200", earned: true },
    { icon: Shield, label: "Genesis Member", desc: "Early protocol adopter", earned: true },
    { icon: Star, label: "Solar Tier", desc: "Reached Solar rank tier", earned: false },
];

export default function ProfilePage() {
    const { user, authenticated } = usePrivy();
    const [copied, setCopied] = useState(false);

    const address = user?.wallet?.address || "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b";
    const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#09090b] min-h-screen text-white">
            <Navbar />

            {/* Cover */}
            <div className="relative h-44 bg-gradient-to-br from-zinc-900 via-orange-950/20 to-zinc-900 border-b border-zinc-800">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <main className="max-w-5xl mx-auto px-6 -mt-16 pb-16">
                {/* Profile Header */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-6 items-start mb-8">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                        <div className="w-28 h-28 rounded-2xl border-4 border-zinc-950 overflow-hidden bg-zinc-800">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=nebula`} className="w-full h-full object-cover" alt="Avatar" />
                        </div>
                        <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                            <Zap className="w-3.5 h-3.5 text-white" />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 pt-12 md:pt-10">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-white">Deevash</h1>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm text-zinc-400 font-mono">{shortAddress}</span>
                                    <button onClick={handleCopy} className="text-zinc-500 hover:text-orange-400 transition-colors">
                                        <Copy className="w-3.5 h-3.5" />
                                    </button>
                                    {copied && <span className="text-xs text-green-400">Copied!</span>}
                                    <a href={`https://etherscan.io/address/${address}`} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-orange-400 transition-colors">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-yellow-500/30 text-yellow-400 bg-yellow-500/10">Solar Tier</span>
                                <Button variant="outline" size="sm">Edit Profile</Button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { icon: Clock, label: "Total Focus", value: "142h" },
                        { icon: Flame, label: "Streak", value: "12 Days" },
                        { icon: Trophy, label: "$NEBULA Earned", value: "1,240" },
                        { icon: Star, label: "Global Rank", value: "#142" },
                    ].map(({ icon: Icon, label, value }) => (
                        <div key={label} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 transition-all text-center">
                            <Icon className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                            <p className="text-xl font-bold text-white">{value}</p>
                            <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
                        </div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Achievements */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-7">
                        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Achievements</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {achievements.map(({ icon: Icon, label, desc, earned }) => (
                                <div key={label} className={`p-4 rounded-xl border text-center transition-all ${earned ? "bg-zinc-900 border-orange-500/20 hover:border-orange-500/40" : "bg-zinc-900/40 border-zinc-800 opacity-40"}`}>
                                    <div className={`w-9 h-9 rounded-xl mx-auto mb-2.5 flex items-center justify-center ${earned ? "bg-orange-500/15 border border-orange-500/20" : "bg-zinc-800 border border-zinc-700"}`}>
                                        <Icon className={`w-4 h-4 ${earned ? "text-orange-400" : "text-zinc-600"}`} />
                                    </div>
                                    <p className="text-xs font-semibold text-white mb-0.5">{label}</p>
                                    <p className="text-xs text-zinc-600 leading-tight">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                        className="md:col-span-5">
                        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Recent Activity</h2>
                        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                            {recentActivity.map((a, i) => (
                                <div key={i} className={`px-4 py-3.5 flex items-center gap-3 hover:bg-zinc-800/50 transition-colors ${i > 0 ? "border-t border-zinc-800/60" : ""}`}>
                                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-3.5 h-3.5 text-orange-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-white truncate">{a.label}</p>
                                        <p className="text-xs text-zinc-500">{a.time}</p>
                                    </div>
                                    <span className="text-xs font-semibold text-orange-400 flex-shrink-0">{a.earned}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
