"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Zap, Brain, Star, Clock, Trophy } from "lucide-react";
import { Button } from "./ui/button";

export default function FocusTracker() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [showReward, setShowReward] = useState(false);
    const [sessionsCompleted, setSessionsCompleted] = useState(0);

    const toggleTimer = () => {
        setIsActive(!isActive);
        setIsPaused(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setIsPaused(false);
        setTimeLeft(25 * 60);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleSessionComplete = useCallback(() => {
        setIsActive(false);
        setSessionsCompleted((prev) => prev + 1);
        setShowReward(true);
        setTimeout(() => setShowReward(false), 5000);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isActive && !isPaused && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleSessionComplete();
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, isPaused, timeLeft, handleSessionComplete]);

    return (
        <div className="w-full flex flex-col items-center gap-32">

            <div className="flex flex-col items-center gap-16">
                {/* Active Focus Header */}
                <div className="flex flex-col items-center gap-6">
                    <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full">
                        <Zap className="w-5 h-5 text-white animate-pulse fill-white shadow-[0_0_20px_rgba(255,255,255,1)]" />
                        <span className="text-xs font-black uppercase tracking-[0.5em]">Active Focus Session</span>
                    </div>

                    {/* Massive Digital Timer */}
                    <motion.div
                        key={timeLeft}
                        initial={{ opacity: 0.8, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[15vw] md:text-[220px] font-black tabular-nums tracking-[-0.08em] text-white leading-none"
                    >
                        {formatTime(timeLeft)}
                    </motion.div>
                </div>

                {/* Magnified Control Action */}
                <div className="flex items-center gap-12">
                    <Button
                        variant="primary"
                        onClick={toggleTimer}
                        className="group relative w-full min-w-[400px] h-32 rounded-[40px] text-xl font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6 transition-all duration-700 bg-white text-black hover:bg-white hover:scale-105"
                    >
                        {isActive ? (
                            <><Pause className="w-8 h-8" /> Stop Concentration</>
                        ) : (
                            <><Play className="w-8 h-8" /> Start Focus</>
                        )}
                        <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[40px] scale-110" />
                    </Button>

                    <button
                        onClick={resetTimer}
                        className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all group"
                    >
                        <RotateCcw className="w-8 h-8 text-white/30 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>

            {/* Magnified Stats List */}
            <div className="flex flex-col items-start gap-12 border-l border-white/5 pl-20 py-10">
                {[
                    { icon: Brain, label: "Daily Intensity", value: "High" },
                    { icon: Star, label: "Streak", value: "12 Days" },
                    { icon: Clock, label: "Total Focus", value: "142 Hours" },
                    { icon: Trophy, label: "Rank", value: "Solar Master" },
                ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-10 group">
                        <stat.icon className="w-10 h-10 text-white opacity-20 group-hover:opacity-100 transition-opacity" />
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-2">{stat.label}</span>
                            <span className="text-2xl font-black tracking-tight text-white">{stat.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {showReward && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-3xl px-10"
                    >
                        <div className="max-w-4xl w-full text-center space-y-16">
                            <div className="w-32 h-32 bg-white flex items-center justify-center mx-auto">
                                <Trophy className="w-16 h-16 text-black" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-7xl font-black uppercase italic tracking-tighter">Session Complete</h3>
                                <p className="text-xl text-white/40 font-serif italic">Proof of Focus hashed and finalized.</p>
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[1em] text-white/20">System credits initiated</div>
                            <Button variant="primary" size="lg" className="px-32" onClick={() => setShowReward(false)}>
                                Secure Rewards
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
