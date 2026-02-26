"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Users, Plus, Star, Globe, Shield, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const rooms = [
    { id: 1, name: "Solana Super Slickers", host: "0x7a...d2f", members: 12, max: 20, type: "Public", tags: ["SOL", "Alpha"] },
    { id: 2, name: "Ethereum Endgame", host: "0x12...a3e", members: 8, max: 15, type: "Private", tags: ["ETH", "Deep Focus"] },
    { id: 3, name: "Polkadot Pals", host: "0x45...c1b", members: 5, max: 10, type: "Public", tags: ["DOT", "Learning"] },
    { id: 4, name: "Proof of Study", host: "0xf9...e9c", members: 18, max: 20, type: "Public", tags: ["Web3", "Study"] },
];

export default function RoomsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-bold tracking-tight">Study Lounges</h1>
                    <p className="text-white/40">Find your tribe, amplify your focus.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative group hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search lounges..."
                            className="pl-10 pr-4 py-2.5 rounded-full glass border border-white/10 focus:border-primary/50 outline-none w-64 text-sm transition-all"
                        />
                    </div>
                    <Button variant="primary">
                        <Plus className="w-5 h-5 mr-1" />
                        Create Lounge
                    </Button>
                </div>
            </header>

            {/* Featured / Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="flex items-center gap-4 bg-primary/10 border-primary/20">
                    <div className="p-3 bg-primary/20 rounded-xl text-primary">
                        <Globe className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xl font-bold">1,204</div>
                        <div className="text-xs text-white/40 font-medium">Builders Online</div>
                    </div>
                </GlassCard>

                <GlassCard className="flex items-center gap-4 bg-secondary/10 border-secondary/20">
                    <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xl font-bold">42</div>
                        <div className="text-xs text-white/40 font-medium">Active Lounges</div>
                    </div>
                </GlassCard>

                <GlassCard className="flex items-center gap-4 bg-accent/10 border-accent/20 text-center">
                    <div className="p-3 bg-accent/20 rounded-xl text-accent">
                        <Star className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xl font-bold">4.8/5</div>
                        <div className="text-xs text-white/40 font-medium">Global Mood</div>
                    </div>
                </GlassCard>
            </div>

            {/* Lounges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rooms.map((room, i) => (
                    <motion.div
                        key={room.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <GlassCard className="hover:border-primary/30 group p-0 overflow-hidden flex flex-col h-full">
                            <div className="p-6 space-y-4 flex-1">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center font-bold text-primary border border-white/5">
                                            {room.name[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{room.name}</h3>
                                            <p className="text-xs text-white/30 truncate w-32">Host: {room.host}</p>
                                        </div>
                                    </div>
                                    <div className={room.type === "Private" ? "text-accent" : "text-green-400"}>
                                        <Shield className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {room.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-bold uppercase tracking-wider text-white/40">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-white/60">
                                        <Users className="w-4 h-4" />
                                        <span className="font-mono">{room.members}/{room.max}</span>
                                    </div>
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full border border-black bg-white/10 ring-2 ring-transparent group-hover:ring-primary/20 transition-all" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-white/5 border-t border-white/5 font-bold hover:bg-primary hover:text-white transition-all">
                                Enter Lounge
                            </button>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
