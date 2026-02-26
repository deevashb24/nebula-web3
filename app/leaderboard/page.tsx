"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Trophy, Flame, Star, Zap, Crown, Medal } from "lucide-react";

const leaders = [
    { rank: 1, name: "Arya Sharma", address: "0x1a2b...3c4d", score: 12840, streak: 47, hours: 382, badge: "Deity", img: "arya" },
    { rank: 2, name: "Wei Chen", address: "0x5e6f...7a8b", score: 11200, streak: 38, hours: 340, badge: "Cosmic", img: "wei" },
    { rank: 3, name: "Sofia Martinez", address: "0x9c0d...1e2f", score: 10450, streak: 35, hours: 318, badge: "Solar", img: "sofia" },
    { rank: 4, name: "Mateo Torres", address: "0x3a4b...5c6d", score: 9800, streak: 29, hours: 295, badge: "Solar", img: "mateo" },
    { rank: 5, name: "Yuki Tanaka", address: "0x7e8f...9a0b", score: 8920, streak: 22, hours: 271, badge: "Lunar", img: "yuki" },
    { rank: 6, name: "Alex Rivera", address: "0x1c2d...3e4f", score: 8100, streak: 18, hours: 248, badge: "Lunar", img: "alex" },
    { rank: 7, name: "Priya Kapoor", address: "0x5a6b...7c8d", score: 7440, streak: 15, hours: 226, badge: "Nebula", img: "priya" },
    { rank: 8, name: "Lars Eriksen", address: "0x9e0f...1a2b", score: 6890, streak: 12, hours: 208, badge: "Nebula", img: "lars" },
    { rank: 9, name: "Emma Wilson", address: "0x3c4d...5e6f", score: 6200, streak: 9, hours: 188, badge: "Proto", img: "emma" },
    { rank: 10, name: "Omar Hassan", address: "0x7a8b...9c0d", score: 5750, streak: 7, hours: 175, badge: "Proto", img: "omar" },
];

const badgeColors: Record<string, string> = {
    Deity: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    Cosmic: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    Solar: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    Lunar: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    Nebula: "text-zinc-300 bg-zinc-500/10 border-zinc-500/30",
    Proto: "text-zinc-500 bg-zinc-800/50 border-zinc-700",
};

const rankIcons = [
    <Crown key={1} className="w-5 h-5 text-orange-400" />,
    <Medal key={2} className="w-5 h-5 text-zinc-300" />,
    <Medal key={3} className="w-5 h-5 text-orange-700" />,
];

export default function LeaderboardPage() {
    return (
        <div className="bg-[#09090b] min-h-screen text-white">
            <Navbar />
            <main className="max-w-5xl mx-auto px-6 py-10">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-medium mb-6">
                        <Trophy className="w-3.5 h-3.5" />
                        Global Rankings — Live
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-3">Focus Leaderboard</h1>
                    <p className="text-zinc-400 max-w-md mx-auto">The most disciplined minds in the Nebula network. Rankings update every hour.</p>
                </motion.div>

                {/* Top 3 Podium */}
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-3 gap-4 mb-8">
                    {[leaders[1], leaders[0], leaders[2]].map((leader, idx) => {
                        const podiumRank = [2, 1, 3][idx];
                        const isFirst = podiumRank === 1;
                        return (
                            <div key={leader.rank} className={`flex flex-col items-center text-center p-6 rounded-2xl border transition-all ${isFirst ? "bg-orange-500/5 border-orange-500/30 shadow-orange" : "bg-zinc-900 border-zinc-800"}`}>
                                <div className="text-2xl mb-2">{rankIcons[podiumRank - 1]}</div>
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${leader.img}`} className="w-14 h-14 rounded-full mb-3 border-2 border-zinc-700" alt={leader.name} />
                                <p className="font-bold text-white text-sm">{leader.name}</p>
                                <p className="text-xs text-zinc-500 font-mono mb-3">{leader.address}</p>
                                <div className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColors[leader.badge]}`}>{leader.badge}</div>
                                <p className="text-xl font-bold text-white mt-3">{leader.score.toLocaleString()}</p>
                                <p className="text-xs text-zinc-500">points</p>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Full Table */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                    className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                    <div className="px-5 py-3 border-b border-zinc-800 grid grid-cols-12 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        <span className="col-span-1">#</span>
                        <span className="col-span-4">Contributor</span>
                        <span className="col-span-2 text-right">Score</span>
                        <span className="col-span-2 text-right">Streak</span>
                        <span className="col-span-2 text-right">Hours</span>
                        <span className="col-span-1 text-right">Tier</span>
                    </div>
                    {leaders.map((l, i) => (
                        <div key={l.rank} className={`px-5 py-3.5 grid grid-cols-12 items-center hover:bg-zinc-800/50 transition-colors ${i > 0 ? "border-t border-zinc-800/60" : ""}`}>
                            <span className={`col-span-1 font-bold text-sm ${l.rank <= 3 ? "text-orange-400" : "text-zinc-500"}`}>{l.rank}</span>
                            <div className="col-span-4 flex items-center gap-3">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${l.img}`} className="w-7 h-7 rounded-full border border-zinc-700" alt={l.name} />
                                <div>
                                    <p className="text-sm font-semibold text-white leading-tight">{l.name}</p>
                                    <p className="text-xs text-zinc-600 font-mono">{l.address}</p>
                                </div>
                            </div>
                            <span className="col-span-2 text-right text-sm font-bold text-white">{l.score.toLocaleString()}</span>
                            <div className="col-span-2 flex items-center justify-end gap-1.5">
                                <Flame className="w-3.5 h-3.5 text-orange-400" />
                                <span className="text-sm text-zinc-300">{l.streak}d</span>
                            </div>
                            <span className="col-span-2 text-right text-sm text-zinc-400">{l.hours}h</span>
                            <div className="col-span-1 flex justify-end">
                                <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${badgeColors[l.badge]}`}>{l.badge}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
}
