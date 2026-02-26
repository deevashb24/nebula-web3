'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MOCK_DUELS, Duel } from '@/lib/mock-data';
import {
    Gamepad2,
    Sword,
    Clock,
    Plus,
    Filter,
    Search,
    Coins
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CreateDuelModal } from '@/components/battle/CreateDuelModal';

export default function LobbyPage() {
    const [filter, setFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredDuels = MOCK_DUELS.filter(duel => {
        if (filter !== 'all' && duel.gameType.toLowerCase() !== filter.toLowerCase()) return false;
        if (searchQuery && !duel.host.username.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        return true;
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">SKILL LOBBY</h1>
                    <p className="text-white/60">Find an opponent and clash for rewards</p>
                </div>

                <Button className="h-12 gap-2 shadow-primary/20" onClick={() => setIsModalOpen(true)}>
                    <Plus className="h-5 w-5" />
                    CREATE NEW DUEL
                </Button>
            </div>

            <CreateDuelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <input
                        type="text"
                        placeholder="Search by username..."
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar md:pb-0">
                    {['all', 'Aim Pro', 'Code Clash', 'Reflex', 'Memory'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold uppercase transition-all ${filter === type
                                ? 'bg-primary text-black shadow-lg shadow-primary/20'
                                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {filteredDuels.map((duel, idx) => (
                        <motion.div
                            key={duel.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <Card variant={duel.status === 'active' ? 'secondary' : 'glass'} className="h-full">
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 bg-white/5">
                                                <img src={duel.host.avatar} alt={duel.host.username} className="h-full w-full object-cover" />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
                                                <span className="sr-only">Online</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{duel.host.username}</p>
                                            <p className="text-[10px] font-medium uppercase text-white/40">Host</p>
                                        </div>
                                    </div>

                                    <div className={`rounded-full px-3 py-1 text-[10px] font-black uppercase ${duel.status === 'active' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                                        }`}>
                                        {duel.status}
                                    </div>
                                </div>

                                <div className="mb-6 space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-white/40">Game</span>
                                        <span className="font-bold text-white">{duel.gameType}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-white/40">Stake</span>
                                        <div className="flex items-center gap-1 font-black text-white">
                                            <Coins className="h-3.5 w-3.5 text-primary" />
                                            {duel.stake} {duel.token}
                                        </div>
                                    </div>
                                </div>

                                <Link href={`/battle/${duel.id}`}>
                                    <Button variant={duel.status === 'active' ? 'secondary' : 'primary'} className="w-full font-black italic tracking-tighter">
                                        {duel.status === 'active' ? 'OBSERVE BATTLE' : 'CHALLENGE NOW'}
                                    </Button>
                                </Link>

                                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium text-white/20">
                                    <Clock className="h-3 w-3" />
                                    Created 5 mins ago
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredDuels.length === 0 && (
                <div className="flex h-64 flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 text-center">
                    <Gamepad2 className="mb-4 h-12 w-12 text-white/20" />
                    <p className="text-white/40">No duels found matching your search.</p>
                    <Button variant="ghost" className="mt-2 text-primary" onClick={() => { setFilter('all'); setSearchQuery(''); }}>
                        Clear filters
                    </Button>
                </div>
            )}
        </div>
    );
}
