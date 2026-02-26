'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MOCK_PLAYERS } from '@/lib/mock-data';
import {
    Trophy,
    Medal,
    TrendingUp,
    Crown,
    Search,
    Filter
} from 'lucide-react';

export default function LeaderboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl uppercase italic">Focus Rankings</h1>
                    <p className="text-white/60 text-sm font-medium tracking-wide">The elite masters of the Nebula Galaxy</p>
                </div>

                <div className="flex gap-2">
                    <Button variant="glass" className="h-10 text-xs font-bold gap-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        WEEKLY POOL: 50,000 NEBULA
                    </Button>
                </div>
            </div>

            {/* Top 3 Podiums */}
            <div className="grid gap-6 md:grid-cols-3">
                {[MOCK_PLAYERS[1], MOCK_PLAYERS[0], MOCK_PLAYERS[2]].map((player, idx) => {
                    const isFirst = idx === 1;
                    return (
                        <motion.div
                            key={player.address}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={isFirst ? "order-first md:order-none" : ""}
                        >
                            <Card
                                variant={isFirst ? "neon" : "secondary"}
                                className={isFirst ? "relative -mt-4 py-12 scale-105 border-2 border-primary/40 shadow-[0_0_50px_rgba(0,242,255,0.15)]" : "relative"}
                                hoverEffect={true}
                            >
                                {isFirst && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                        <Crown className="h-12 w-12 text-primary drop-shadow-[0_0_15px_rgba(0,242,255,0.8)] fill-primary/20" />
                                    </div>
                                )}
                                <div className="flex flex-col items-center text-center">
                                    <div className={`mb-4 h-24 w-24 overflow-hidden rounded-full border-4 ${isFirst ? 'border-primary' : 'border-secondary/40'} bg-white/5 p-1 px-4`}>
                                        <img src={player.avatar} alt={player.username} className="h-full w-full rounded-full object-cover" />
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-1">{player.username}</h3>
                                    <p className="text-[10px] font-bold text-white/40 uppercase mb-4">{player.address}</p>

                                    <div className="grid grid-cols-2 gap-8 w-full border-t border-white/10 pt-6">
                                        <div>
                                            <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Win Rate</p>
                                            <p className="text-lg font-black text-white">{Math.floor((player.wins / (player.wins + player.losses)) * 100)}%</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Rank</p>
                                            <p className={`text-lg font-black ${isFirst ? 'text-primary' : 'text-secondary'}`}>#{player.rank}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    )
                })}
            </div>

            {/* Full Leaderboard Table */}
            <Card variant="glass" className="overflow-hidden p-0 border-white/5">
                <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] p-6 lg:px-8">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Tier 1 Elite</h3>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-white/20" />
                            <input
                                type="text"
                                placeholder="SEARCH PLAYER..."
                                className="h-8 w-40 rounded bg-white/5 pl-8 pr-4 text-[10px] font-bold uppercase text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary/40 border border-white/5"
                            />
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold gap-2 bg-white/5 border border-white/5 uppercase">
                            <Filter className="h-3 w-3" />
                            FILTER
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/[0.01]">
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-wider text-white/20">Rank</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-wider text-white/20">Player</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-wider text-white/20 text-center">Sessions</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-wider text-white/20 text-center">Efficiency</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-wider text-white/20 text-center">Focus State</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-wider text-white/20 text-right">Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_PLAYERS.map((player, idx) => (
                                <tr key={player.address} className="group border-b border-white/5 transition-colors hover:bg-white/[0.02]">
                                    <td className="px-8 py-6">
                                        <span className={`text-sm font-black italic tracking-tighter ${idx === 0 ? 'text-primary' : 'text-white'}`}>
                                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1">
                                                <img src={player.avatar} alt={player.username} className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white uppercase">{player.username}</p>
                                                <p className="text-[10px] font-medium text-white/40">{player.address}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span className="text-sm font-bold text-white">{player.wins}</span>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span className="text-sm font-bold text-white/60">{player.losses}</span>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <div className="mx-auto h-1.5 w-24 rounded-full bg-white/5 overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_rgba(0,242,255,0.4)]"
                                                style={{ width: `${(player.wins / (player.wins + player.losses)) * 100}%` }}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="inline-flex items-center gap-1.5 rounded-lg bg-green-500/10 px-2 py-1 text-[10px] font-black text-green-500 uppercase">
                                            <TrendingUp className="h-3 w-3" />
                                            +12 %
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
