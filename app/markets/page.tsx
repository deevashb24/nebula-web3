"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Zap, Shield, Cpu, Globe } from "lucide-react";
import { useState } from "react";

const REWARDS = [
    {
        id: 1,
        name: "Golden Alpha Node",
        description: "Exclusive digital badge signifying 100+ hours of focus.",
        price: 5000,
        icon: Cpu,
        color: "text-amber-400",
    },
    {
        id: 2,
        name: "Nebula Shield",
        description: "Prevents streak loss for 24 hours if you miss a session.",
        price: 1500,
        icon: Shield,
        color: "text-blue-400",
    },
    {
        id: 3,
        name: "Turbo Overclock",
        description: "Doubles points earned for the next 2 hours.",
        price: 800,
        icon: Zap,
        color: "text-yellow-400",
    },
    {
        id: 4,
        name: "Solar Domain",
        description: "Unlock a custom profile theme with galactic animations.",
        price: 3000,
        icon: Globe,
        color: "text-emerald-400",
    },
];

export default function MarketplacePage() {
    const [balance, setBalance] = useState(2450);

    return (
        <div className="flex flex-col items-center px-6 py-12 space-y-12">
            {/* Header */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center gap-4">
                        <ShoppingBag className="w-10 h-10 text-primary" />
                        Galactic <span className="text-primary">Market</span>
                    </h1>
                    <p className="text-white/40">
                        Exchange your focus energy for premium upgrades and limited collectibles.
                    </p>
                </div>

                <GlassCard className="px-8 py-4 bg-primary/10 border-primary/20">
                    <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Your Balance</div>
                    <div className="text-3xl font-black text-primary flex items-center gap-2">
                        <Zap className="w-6 h-6" />
                        {balance} <span className="text-lg font-medium opacity-60">NEBULA</span>
                    </div>
                </GlassCard>
            </div>

            {/* Rewards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {REWARDS.map((reward, i) => (
                    <motion.div
                        key={reward.id}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <GlassCard className="p-6 h-full flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors group">
                            <div className="space-y-4">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${reward.color} group-hover:scale-110 transition-transform`}>
                                    <reward.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold">{reward.name}</h3>
                                    <p className="text-sm text-white/40">{reward.description}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-white/20 uppercase tracking-tighter">Availability: Limited</span>
                                    <span className="text-lg font-black">{reward.price} NEBULA</span>
                                </div>
                                <Button
                                    className="w-full"
                                    variant={balance >= reward.price ? "default" : "outline"}
                                    disabled={balance < reward.price}
                                >
                                    {balance >= reward.price ? "Purchase" : "Insufficient Energy"}
                                </Button>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
