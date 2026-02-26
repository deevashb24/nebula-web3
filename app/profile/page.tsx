'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MOCK_PLAYERS, MOCK_HISTORY } from '@/lib/mock-data';
import {
    User,
    Settings,
    History,
    Award,
    Zap,
    Target,
    Share2,
    Copy,
    ExternalLink
} from 'lucide-react';

export default function ProfilePage() {
    const player = MOCK_PLAYERS[0]; // Logic for logged-in user

    return (
        <div className="space-y-8">
            {/* Profile Header */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 md:p-12">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

                <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center">
                    <div className="relative">
                        <div className="h-32 w-32 overflow-hidden rounded-3xl border-4 border-primary/20 bg-white/5 p-2">
                            <img src={player.avatar} alt={player.username} className="h-full w-full rounded-2xl object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-black shadow-lg shadow-primary/40">
                            <Award className="h-4 w-4" />
                        </div>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-4xl font-black uppercase italic tracking-tighter text-white">{player.username}</h1>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-white">
                                    <Settings className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <code className="rounded bg-white/5 px-2 py-1 text-xs font-bold text-white/40">{player.address}</code>
                                <button className="text-white/20 hover:text-white"><Copy className="h-3 w-3" /></button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: 'Tier 1 Elite', color: 'text-primary' },
                                { label: 'Early Adopter', color: 'text-secondary' },
                                { label: 'Pro Duelist', color: 'text-accent' }
                            ].map((tag, i) => (
                                <span key={i} className={`rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest ${tag.color}`}>
                                    {tag.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="primary" className="h-12 gap-2 shadow-primary/20">
                            <Share2 className="h-4 w-4" />
                            SHARE PROFILE
                        </Button>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-4">
                {[
                    { label: 'Total Earnings', value: '$8,420', icon: Zap, sub: '+12% this week', color: 'text-primary' },
                    { label: 'Total Duels', value: player.wins + player.losses, icon: Target, sub: 'Rank #245', color: 'text-secondary' },
                    { label: 'Win Rate', value: `${Math.floor((player.wins / (player.wins + player.losses)) * 100)}%`, icon: Award, sub: 'Global Average: 52%', color: 'text-primary' },
                    { label: 'Global Rank', value: `#${player.rank}`, icon: Trophy, sub: 'Top 1% Players', color: 'text-accent' }
                ].map((stat, i) => (
                    <Card key={i} variant="glass" className="relative group">
                        <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${stat.color} transition-transform group-hover:scale-110`}>
                            <stat.icon className="h-5 w-5" />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</p>
                        <h3 className="mt-1 text-2xl font-black text-white">{stat.value}</h3>
                        <p className="mt-2 text-[10px] font-bold text-white/20">{stat.sub}</p>
                    </Card>
                ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Battle History */}
                <div className="lg:col-span-2">
                    <Card variant="glass" className="p-0 border-white/5">
                        <div className="flex items-center justify-between border-b border-white/5 p-6 md:px-8">
                            <div className="flex items-center gap-2">
                                <History className="h-4 w-4 text-primary" />
                                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/60">Battle History</h2>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 text-[10px] font-black uppercase text-white/40 hover:text-white">
                                View All
                            </Button>
                        </div>

                        <div className="divide-y divide-white/5">
                            {MOCK_HISTORY.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-6 transition-colors hover:bg-white/[0.02] md:px-8">
                                    <div className="flex items-center gap-6">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 ${item.result === 'won' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                            <Sword className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-black text-white uppercase">{item.gameType} Battle</p>
                                                <span className={`text-[10px] font-black uppercase ${item.result === 'won' ? 'text-green-500' : 'text-red-500'}`}>
                                                    {item.result}
                                                </span>
                                            </div>
                                            <p className="text-[10px] font-bold text-white/40 uppercase">Vs. {item.opponent} • {new Date(item.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-sm font-black ${item.result === 'won' ? 'text-green-500' : 'text-white/60'}`}>
                                            {item.result === 'won' ? '+' : '-'}{item.amount} {item.token}
                                        </p>
                                        <button className="mt-1 flex items-center gap-1 ml-auto text-[10px] font-bold text-white/20 hover:text-white">
                                            Details <ExternalLink className="h-2.5 w-2.5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Inventory/Badges */}
                <div className="space-y-6">
                    <Card variant="glass">
                        <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white/40">Earned Badges</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="aspect-square rounded-2xl border border-white/5 bg-white/[0.02] p-2 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-help opacity-40 hover:opacity-100">
                                    <Award className={`h-8 w-8 ${i === 1 ? 'text-primary' : i === 2 ? 'text-secondary' : 'text-white/20'}`} />
                                </div>
                            ))}
                            <div className="aspect-square rounded-2xl border border-dashed border-white/10 flex items-center justify-center text-[10px] font-bold text-white/20">
                                +12
                            </div>
                        </div>
                        <Button variant="ghost" className="w-full mt-6 text-[10px] font-black uppercase border border-white/5">VIEW SHOWCASE</Button>
                    </Card>

                    <Card variant="neon" className="bg-gradient-to-br from-primary/10 to-transparent">
                        <h3 className="mb-2 text-sm font-black uppercase italic tracking-tighter">REFER A FRIEND</h3>
                        <p className="mb-6 text-[10px] font-bold text-white/60 leading-relaxed uppercase">Invite your crew and earn 5% of their battle fees for life.</p>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                readOnly
                                value="clash.x/cyberghost"
                                className="h-10 flex-1 rounded-lg bg-black/40 border border-white/10 px-3 text-xs font-bold text-white/60 focus:outline-none"
                            />
                            <Button className="h-10 w-10 p-0 rounded-lg">
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
