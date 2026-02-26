"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Trophy, Brain, Star, Clock, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function FocusTracker() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [showReward, setShowReward] = useState(false);
    const [sessionsCompleted, setSessionsCompleted] = useState(0);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleSessionComplete = useCallback(() => {
        setIsActive(false);
        setSessionsCompleted((prev) => prev + 1);
        setShowReward(true);
        setTimeout(() => setShowReward(false), 6000);
        setTimeLeft(25 * 60);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft((p) => p - 1), 1000);
        } else if (timeLeft === 0) {
            handleSessionComplete();
        }
        return () => { if (interval) clearInterval(interval); };
    }, [isActive, timeLeft, handleSessionComplete]);

    // Progress percentage for the ring
    const totalSeconds = 25 * 60;
    const progress = ((totalSeconds - timeLeft) / totalSeconds) * 100;
    const circumference = 2 * Math.PI * 120;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="w-full flex flex-col items-center gap-12">

            {/* Timer Ring */}
            <div className="relative flex items-center justify-center">
                {/* SVG Progress Ring */}
                <svg className="absolute -rotate-90" width="280" height="280">
                    {/* Background ring */}
                    <circle
                        cx="140" cy="140" r="120"
                        stroke="rgba(63,63,70,0.5)"
                        strokeWidth="2"
                        fill="none"
                    />
                    {/* Progress ring */}
                    <circle
                        cx="140" cy="140" r="120"
                        stroke="#f97316"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                        style={{ opacity: isActive ? 1 : 0.3 }}
                    />
                </svg>

                {/* Timer Display */}
                <div className="relative w-[280px] h-[280px] rounded-full bg-zinc-900/60 border border-zinc-800 flex flex-col items-center justify-center gap-2">
                    <motion.span
                        key={timeLeft}
                        className="text-7xl font-bold tabular-nums tracking-tight text-white"
                    >
                        {formatTime(timeLeft)}
                    </motion.span>
                    <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                        {isActive ? "Focusing..." : timeLeft === 25 * 60 ? "Ready" : "Paused"}
                    </span>
                    {sessionsCompleted > 0 && (
                        <div className="absolute bottom-8 flex items-center gap-1.5 text-xs text-orange-400/70">
                            <Trophy className="w-3 h-3" />
                            {sessionsCompleted} session{sessionsCompleted > 1 ? "s" : ""} today
                        </div>
                    )}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
                <Button
                    variant="glow"
                    size="lg"
                    onClick={() => setIsActive(!isActive)}
                    className="gap-3 px-10 rounded-xl"
                >
                    {isActive ? <><Pause className="w-5 h-5" /> Pause</> : <><Play className="w-5 h-5" /> Start Focus</>}
                </Button>
                <button
                    onClick={() => { setIsActive(false); setTimeLeft(25 * 60); }}
                    className="p-3 rounded-xl border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all"
                >
                    <RotateCcw className="w-5 h-5" />
                </button>
            </div>

            {/* Stats Row */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { icon: Brain, label: "Daily Intensity", value: "High" },
                    { icon: Star, label: "Streak", value: "12 Days" },
                    { icon: Clock, label: "Total Focus", value: "142 hrs" },
                    { icon: Trophy, label: "Rank", value: "Solar Master" },
                ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="group flex flex-col gap-2 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 transition-all">
                        <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-orange-400" />
                            <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{label}</span>
                        </div>
                        <span className="text-lg font-bold text-white">{value}</span>
                    </div>
                ))}
            </div>

            {/* Session Complete Modal */}
            <AnimatePresence>
                {showReward && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-2xl px-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="max-w-sm w-full text-center space-y-6 p-8 rounded-2xl bg-zinc-900 border border-orange-500/30 shadow-orange"
                        >
                            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange">
                                <Trophy className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Session Complete!</h3>
                                <p className="text-zinc-400 text-sm">Proof of Focus hashed to the network.</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                                <Zap className="w-4 h-4 text-orange-400" />
                                <span className="text-sm font-semibold text-orange-300">+25 $NEBULA earned</span>
                            </div>
                            <Button variant="glow" className="w-full" onClick={() => setShowReward(false)}>
                                Claim Rewards
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
