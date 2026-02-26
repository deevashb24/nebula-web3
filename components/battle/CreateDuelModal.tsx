'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Coins, Sword, Trophy } from 'lucide-react';

interface CreateDuelModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateDuelModal = ({ isOpen, onClose }: CreateDuelModalProps) => {
    const [selectedGame, setSelectedGame] = useState('Aim Pro');
    const [stake, setStake] = useState('10');
    const [token, setToken] = useState('USDC');

    const games = ['Aim Pro', 'Code Clash', 'Reflex', 'Memory'];
    const tokens = ['USDC', 'ETH', 'SOL'];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg"
                >
                    <Card variant="glass" className="border-2 border-primary/20 shadow-[0_0_50px_rgba(0,242,255,0.1)]">
                        <div className="mb-8 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Sword className="h-5 w-5" />
                                </div>
                                <h2 className="text-2xl font-black italic tracking-tighter uppercase">Initiate Duel</h2>
                            </div>
                            <Button variant="ghost" size="icon" onClick={onClose} className="text-white/40 hover:text-white">
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        <div className="space-y-6">
                            {/* Game Selection */}
                            <div>
                                <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-white/40">Select Game Arena</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {games.map((game) => (
                                        <button
                                            key={game}
                                            onClick={() => setSelectedGame(game)}
                                            className={`rounded-xl border p-3 text-sm font-bold transition-all ${selectedGame === game
                                                ? 'border-primary bg-primary/10 text-primary shadow-[inset_0_0_10px_rgba(0,242,255,0.1)]'
                                                : 'border-white/5 bg-white/5 text-white/40 hover:bg-white/10'
                                                }`}
                                        >
                                            {game}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Stake Amount */}
                            <div>
                                <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-white/40">Set Your Stake</label>
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <Coins className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                                        <input
                                            type="number"
                                            value={stake}
                                            onChange={(e) => setStake(e.target.value)}
                                            className="h-12 w-full rounded-xl border border-white/10 bg-black/40 pl-10 pr-4 text-sm font-bold text-white focus:border-primary/50 focus:outline-none"
                                        />
                                    </div>
                                    <select
                                        value={token}
                                        onChange={(e) => setToken(e.target.value)}
                                        className="h-12 w-24 rounded-xl border border-white/10 bg-black/40 px-3 text-sm font-bold text-white focus:border-primary/50 focus:outline-none"
                                    >
                                        {tokens.map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Warning/Info */}
                            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                                <div className="flex items-center gap-3 text-xs font-bold text-white/60">
                                    <Trophy className="h-4 w-4 text-primary" />
                                    <span>Potential Prize Pool: <span className="text-primary">{parseFloat(stake) * 1.9} {token}</span></span>
                                </div>
                                <p className="mt-2 text-[10px] text-white/20 uppercase font-medium">A 5% protocol fee applies to the winner's bounty.</p>
                            </div>

                            <Button className="h-14 w-full text-lg font-black italic tracking-tighter" onClick={() => {
                                alert('Duel Initiated on Chain!');
                                onClose();
                            }}>
                                DEPLOY DUEL CONTRACT
                            </Button>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
