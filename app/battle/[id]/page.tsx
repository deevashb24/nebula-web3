'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MOCK_DUELS, MOCK_PLAYERS, Duel } from '@/lib/mock-data';
import {
    Timer,
    Sword,
    Trophy,
    ChevronLeft,
    Zap,
    Shield,
    Activity,
    Coins
} from 'lucide-react';
import Link from 'next/link';

export default function BattlePage() {
    const { id } = useParams();
    const router = useRouter();
    const [duel, setDuel] = useState<Duel | null>(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [hostScore, setHostScore] = useState(0);
    const [opponentScore, setOpponentScore] = useState(0);
    const [battleStatus, setBattleStatus] = useState<'counting-down' | 'active' | 'finished'>('counting-down');
    const [winner, setWinner] = useState<'host' | 'opponent' | null>(null);

    useEffect(() => {
        const foundDuel = MOCK_DUELS.find(d => d.id === id) || MOCK_DUELS[0];
        setDuel(foundDuel);

        // Simulate scoring
        let interval: NodeJS.Timeout;
        if (battleStatus === 'active' && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1);
                if (Math.random() > 0.4) setHostScore(prev => prev + Math.floor(Math.random() * 50));
                if (Math.random() > 0.4) setOpponentScore(prev => prev + Math.floor(Math.random() * 50));
            }, 1000);
        } else if (timeLeft === 0 && battleStatus === 'active') {
            setBattleStatus('finished');
            setWinner(hostScore > opponentScore ? 'host' : 'opponent');
        }

        return () => clearInterval(interval);
    }, [id, battleStatus, timeLeft, hostScore, opponentScore]);

    useEffect(() => {
        if (battleStatus === 'counting-down') {
            const timer = setTimeout(() => setBattleStatus('active'), 3000);
            return () => clearTimeout(timer);
        }
    }, [battleStatus]);

    if (!duel) return null;

    const opponent = duel.opponent || MOCK_PLAYERS[1];

    return (
        <div className="min-h-screen pb-20">
            <Link href="/lobby" className="mb-8 inline-flex items-center gap-2 text-white/40 transition-colors hover:text-white">
                <ChevronLeft className="h-4 w-4" />
                Back to Lobby
            </Link>

            <div className="grid gap-8 lg:grid-cols-12">
                {/* Battle HUD */}
                <div className="lg:col-span-8">
                    <Card variant="neon" className="relative mb-8 overflow-hidden border-2 p-0">
                        {/* Battle Background Effect */}
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_100%)]" />
                        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/10" />

                        {/* Header Info */}
                        <div className="relative z-10 flex items-center justify-between border-b border-white/10 p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Activity className="h-5 w-5" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black italic tracking-tighter uppercase">{duel.gameType} Battle</h2>
                                    <p className="text-xs font-bold text-white/40 uppercase">Session ID: {duel.id.substring(0, 8)}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="text-xs font-bold text-white/40 uppercase">Stake Arena</p>
                                    <div className="flex items-center gap-1 font-black text-primary">
                                        <Coins className="h-4 w-4" />
                                        {duel.stake} {duel.token}
                                    </div>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white font-black">
                                    VS
                                </div>
                            </div>
                        </div>

                        {/* Live Scoreboard */}
                        <div className="relative z-10 flex flex-col items-center justify-center py-20">
                            <AnimatePresence mode="wait">
                                {battleStatus === 'counting-down' ? (
                                    <motion.div
                                        key="countdown"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 2, opacity: 0 }}
                                        className="text-8xl font-black text-primary"
                                    >
                                        READY?
                                    </motion.div>
                                ) : (
                                    <div className="flex w-full items-center justify-around px-8">
                                        <div className="text-center">
                                            <motion.div
                                                key={hostScore}
                                                initial={{ scale: 0.8 }}
                                                animate={{ scale: 1 }}
                                                className="text-7xl font-black text-white md:text-9xl"
                                            >
                                                {hostScore}
                                            </motion.div>
                                            <p className="mt-2 text-sm font-black uppercase tracking-widest text-primary">{duel.host.username}</p>
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <div className={`mb-4 flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 ${battleStatus === 'finished' ? 'border-accent/40 bg-accent/10' : 'border-primary/40 bg-primary/10 animate-pulse-slow'}`}>
                                                <Timer className={`h-8 w-8 ${battleStatus === 'finished' ? 'text-accent' : 'text-primary'}`} />
                                                <span className="text-xl font-black">{timeLeft}s</span>
                                            </div>
                                            {battleStatus === 'finished' && (
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    className="rounded-full bg-accent px-6 py-2 text-xs font-black uppercase text-white shadow-lg shadow-accent/40"
                                                >
                                                    BATTLE ENDED
                                                </motion.div>
                                            )}
                                        </div>

                                        <div className="text-center">
                                            <motion.div
                                                key={opponentScore}
                                                initial={{ scale: 0.8 }}
                                                animate={{ scale: 1 }}
                                                className="text-7xl font-black text-white md:text-9xl"
                                            >
                                                {opponentScore}
                                            </motion.div>
                                            <p className="mt-2 text-sm font-black uppercase tracking-widest text-secondary">{opponent.username}</p>
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>

                            {battleStatus === 'finished' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mt-16 flex flex-col items-center"
                                >
                                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-[0_0_50px_rgba(0,242,255,0.4)]">
                                        <Trophy className="h-10 w-10 text-black" />
                                    </div>
                                    <h3 className="text-3xl font-black uppercase italic tracking-tighter">
                                        {winner === 'host' ? duel.host.username : opponent.username} WINS!
                                    </h3>
                                    <p className="mt-2 font-bold text-white/40">Rewards: +{duel.stake * 1.9} {duel.token}</p>

                                    <div className="mt-8 flex gap-4">
                                        <Button size="lg" className="h-14 px-10 shadow-primary/20">VIEW REBATTLE</Button>
                                        <Link href="/lobby">
                                            <Button variant="glass" size="lg" className="h-14 px-10">EXIT ARENA</Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer Info */}
                        <div className="relative z-10 flex items-center justify-between border-t border-white/10 bg-black/40 p-4 backdrop-blur-md">
                            <div className="flex gap-8">
                                <div className="flex items-center gap-2">
                                    <Zap className="h-3 w-3 text-primary" />
                                    <span className="text-[10px] font-bold text-white/40 uppercase">On-Chain Verified</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="h-3 w-3 text-secondary" />
                                    <span className="text-[10px] font-bold text-white/40 uppercase">Anti-Cheat Active</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-green-500 uppercase">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                                Live Network: Mainnet
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Player Stats Side */}
                <div className="space-y-6 lg:col-span-4">
                    {[duel.host, opponent].map((player, idx) => (
                        <div key={idx}>
                            <Card variant={idx === 0 ? 'neon' : 'secondary'} className="group">
                                <div className="flex items-center gap-4">
                                    <div className={`h-16 w-16 overflow-hidden rounded-2xl border-2 ${idx === 0 ? 'border-primary/40' : 'border-secondary/40'} bg-white/5 p-1`}>
                                        <img src={player.avatar} alt={player.username} className="h-full w-full rounded-xl object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black uppercase tracking-tight">{player.username}</h3>
                                        <p className="text-xs font-bold text-white/40">{player.address}</p>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-4">
                                    <div className="rounded-xl bg-white/5 p-3 text-center">
                                        <p className="text-[10px] font-bold uppercase text-white/40">Win Rate</p>
                                        <p className="text-lg font-black text-white">{Math.floor((player.wins / (player.wins + player.losses)) * 100)}%</p>
                                    </div>
                                    <div className="rounded-xl bg-white/5 p-3 text-center">
                                        <p className="text-[10px] font-bold uppercase text-white/40">Rank</p>
                                        <p className={`text-lg font-black ${idx === 0 ? 'text-primary' : 'text-secondary'}`}>#{player.rank}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}

                    <Card variant="glass" className="relative overflow-hidden">
                        <h4 className="mb-4 text-xs font-black uppercase tracking-widest text-white/40">Battle Feed</h4>
                        <div className="space-y-4">
                            {[
                                `Connecting to global nodes...`,
                                `Wallet signatures verified.`,
                                `Anti-cheat initialized.`,
                                `Battle sequence starting in 3s...`,
                            ].map((log, i) => (
                                <div key={i} className="flex items-center gap-3 text-xs font-mono text-white/60">
                                    <span className="text-primary opacity-40">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                                    <span>{log}</span>
                                </div>
                            ))}
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1 flex flex-col">
                            <div className="h-1/3 w-full bg-primary/40 shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
