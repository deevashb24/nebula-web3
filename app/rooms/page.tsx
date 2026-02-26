"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Users, Flame, Lock, Globe, ChevronRight, Search, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const rooms = [
    { id: "1", name: "Morning Deep Work", host: "Arya Sharma", participants: 12, maxParticipants: 20, focus: "Coding", isLive: true, duration: "2h session", stake: "50 $NEBULA", type: "public" },
    { id: "2", name: "Web3 Builders Sprint", host: "Wei Chen", participants: 8, maxParticipants: 15, focus: "Building", isLive: true, duration: "1h session", stake: "25 $NEBULA", type: "public" },
    { id: "3", name: "Research Collective", host: "Sofia Martinez", participants: 5, maxParticipants: 10, focus: "Research", isLive: true, duration: "90m session", stake: "0 $NEBULA", type: "public" },
    { id: "4", name: "Design Sprint Club", host: "Mateo Torres", participants: 7, maxParticipants: 10, focus: "Design", isLive: false, duration: "Starts in 30m", stake: "10 $NEBULA", type: "public" },
    { id: "5", name: "Elite Dev Circle", host: "Yuki Tanaka", participants: 3, maxParticipants: 5, focus: "Coding", isLive: true, duration: "3h session", stake: "100 $NEBULA", type: "private" },
    { id: "6", name: "Writers' Block Breaker", host: "Emma Wilson", participants: 6, maxParticipants: 12, focus: "Writing", isLive: false, duration: "Starts in 1h", stake: "0 $NEBULA", type: "public" },
];

const focusColors: Record<string, string> = {
    Coding: "text-blue-400 bg-blue-400/10",
    Building: "text-orange-400 bg-orange-400/10",
    Research: "text-purple-400 bg-purple-400/10",
    Design: "text-pink-400 bg-pink-400/10",
    Writing: "text-green-400 bg-green-400/10",
};

export default function RoomsPage() {
    const [search, setSearch] = useState("");
    const filtered = rooms.filter(r => r.name.toLowerCase().includes(search.toLowerCase()) || r.focus.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="bg-[#09090b] min-h-screen text-white">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 py-10">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-medium text-orange-400 mb-2">
                                <Users className="w-3.5 h-3.5" />
                                <span>{rooms.filter(r => r.isLive).length} rooms live now</span>
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Community Rooms</h1>
                            <p className="text-zinc-400 text-sm">Focus together, earn together. Join live rooms or create your own.</p>
                        </div>
                        <Button variant="glow" className="gap-2 hidden md:flex">
                            <Zap className="w-4 h-4" />
                            Create Room
                        </Button>
                    </div>

                    {/* Search */}
                    <div className="relative mb-8">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search rooms..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        />
                    </div>
                </motion.div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((room, i) => (
                        <motion.div key={room.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                            <Link href={`/battle/${room.id}`}>
                                <div className="group p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 hover:shadow-orange transition-all cursor-pointer h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                {room.isLive ? (
                                                    <div className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                                        LIVE
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                                                        <Clock className="w-3 h-3" />
                                                        Upcoming
                                                    </div>
                                                )}
                                                {room.type === "private" && <Lock className="w-3.5 h-3.5 text-zinc-500" />}
                                                {room.type === "public" && <Globe className="w-3.5 h-3.5 text-zinc-600" />}
                                            </div>
                                            <h3 className="font-semibold text-white group-hover:text-orange-100 transition-colors">{room.name}</h3>
                                            <p className="text-xs text-zinc-500">by {room.host}</p>
                                        </div>
                                        <span className={`text-xs px-2 py-1 rounded-lg font-medium flex-shrink-0 ${focusColors[room.focus] || "text-zinc-400 bg-zinc-700"}`}>
                                            {room.focus}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5" />
                                            <span>{room.participants}/{room.maxParticipants}</span>
                                        </div>
                                        <span>{room.duration}</span>
                                        {room.stake !== "0 $NEBULA" && (
                                            <div className="flex items-center gap-1 text-orange-400 font-medium">
                                                <Flame className="w-3.5 h-3.5" />
                                                {room.stake}
                                            </div>
                                        )}
                                    </div>
                                    {/* Participants bar */}
                                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                                            style={{ width: `${(room.participants / room.maxParticipants) * 100}%` }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs text-zinc-600">{room.maxParticipants - room.participants} spots left</span>
                                        <div className="flex items-center gap-1 text-xs text-orange-400 font-medium group-hover:gap-2 transition-all">
                                            Join Room <ChevronRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
