"use client";

import { motion } from "framer-motion";
import FocusTracker from "@/components/FocusTracker";
import { GlassCard } from "@/components/ui/glass-card";
import { Brain, Star, Clock, Trophy } from "lucide-react";

export default function FocusPage() {
    return (
        <div className="flex flex-col items-center px-6 py-12 space-y-12">
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                    Deep <span className="text-primary italic">Focus</span> Chamber
                </h1>
                <p className="text-white/40 max-w-xl mx-auto">
                    Disconnect from the noise and enter the chamber. Your productivity is
                    hashed and verified in real-time.
                </p>
            </motion.div>

            {/* Main Focus UI */}
            <FocusTracker />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {[
                    { icon: Brain, label: "Daily Intensity", value: "High", color: "text-purple-400" },
                    { icon: Star, label: "Streak", value: "12 Days", color: "text-amber-400" },
                    { icon: Clock, label: "Total Focus", value: "142 Hours", color: "text-blue-400" },
                    { icon: Trophy, label: "Rank", value: "Solar Master", color: "text-emerald-400" },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                    >
                        <GlassCard className="p-6 flex items-center gap-4">
                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
                                <div className="text-xl font-bold">{stat.value}</div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
