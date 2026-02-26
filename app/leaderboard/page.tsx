"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Search, Filter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const leaderboardData = [
    { rank: 1, name: "Nexus.Alpha", score: "14,202", change: "+12.4%", status: "Legendary" },
    { rank: 2, name: "Vertex_01", score: "12,850", change: "+8.1%", status: "Elite" },
    { rank: 3, name: "Cipher_Protocol", score: "11,200", change: "+15.2%", status: "Elite" },
    { rank: 4, name: "Solaris.X", score: "9,400", change: "+2.4%", status: "Pro" },
    { rank: 5, name: "Aether_99", score: "8,850", change: "+5.7%", status: "Pro" },
];

export default function LeaderboardPage() {
    return (
        <div className="flex flex-col bg-[#050505] min-h-screen text-white pt-36 px-10 sm:px-20 lg:px-32 relative selection:bg-white selection:text-black">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl w-full mx-auto mb-24"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-16">
                    <div>
                        <div className="flex items-center gap-4 mb-8 opacity-40">
                            <div className="w-1 h-1 bg-white rounded-full" />
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase">Global Performance Registry</span>
                        </div>
                        <h1 className="text-8xl font-black tracking-tighter uppercase italic leading-none">
                            Rankings.
                        </h1>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-6">
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">Current Weekly Pool</span>
                        <div className="text-5xl font-black tracking-tighter text-white">
                            125,000 <span className="text-white/20">NEB</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Content Section */}
            <div className="max-w-7xl w-full mx-auto pb-40">
                <Card variant="default" className="border-white/5 bg-black/40">
                    <div className="flex items-center justify-between mb-16">
                        <div className="flex items-center gap-8">
                            <div className="relative group">
                                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="SEARCH SYSTEM..."
                                    className="bg-transparent border-none text-[10px] font-black uppercase tracking-[0.3em] pl-10 focus:ring-0 placeholder:text-white/10 w-64"
                                />
                            </div>
                        </div>

                        <Button variant="outline" size="sm" className="border-white/5 hover:border-white/20 text-[10px]">
                            <Filter className="w-3 h-3 mr-2" />
                            Filter Options
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/5 text-left">
                                    <th className="px-10 py-8 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Index</th>
                                    <th className="px-10 py-8 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Operator</th>
                                    <th className="px-10 py-8 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Score</th>
                                    <th className="px-10 py-8 text-right text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Variance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboardData.map((player) => (
                                    <tr key={player.rank} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-10 py-10">
                                            <span className="text-2xl font-black tracking-tighter text-white/40 group-hover:text-white transition-colors">
                                                {player.rank.toString().padStart(2, '0')}
                                            </span>
                                        </td>
                                        <td className="px-10 py-10">
                                            <div className="flex items-center gap-6">
                                                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black">
                                                    {player.name[0]}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-black uppercase tracking-widest group-hover:text-white transition-colors">{player.name}</div>
                                                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-1">{player.status}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-10">
                                            <div className="text-sm font-black tracking-widest">{player.score}</div>
                                        </td>
                                        <td className="px-10 py-10 text-right">
                                            <div className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                                <TrendingUp className="h-3 w-3" />
                                                {player.change}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>

            {/* Background Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-150"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        </div>
    );
}
