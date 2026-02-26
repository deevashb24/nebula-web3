"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Zap, CheckCircle2, Trophy } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
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
        <div className="w-full max-w-2xl mx-auto space-y-8">
            <GlassCard className="relative overflow-hidden p-8 flex flex-col items-center gap-8">
                {/* Progress Background Overlay */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-primary/5 -z-10"
                    initial={{ height: 0 }}
                    animate={{ height: `${(1 - timeLeft / (25 * 60)) * 100}%` }}
                />

                <div className="text-center space-y-2">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest flex items-center gap-2 justify-center">
                        <Zap className="w-4 h-4" />
                        Active Focus Session
                    </h2>
                    <motion.div
                        key={timeLeft}
                        initial={{ scale: 0.95, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-8xl md:text-9xl font-black tabular-nums tracking-tighter"
                    >
                        {formatTime(timeLeft)}
                    </motion.div>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        size="lg"
                        glow
                        onClick={toggleTimer}
                        className="w-48 h-14 text-lg"
                    >
                        {isActive ? (
                            <span className="flex items-center gap-2"><Pause className="w-5 h-5" /> Pause Session</span>
                        ) : (
                            <span className="flex items-center gap-2"><Play className="w-5 h-5" /> Start Focus</span>
                        )}
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={resetTimer}
                        className="h-14 w-14 rounded-full"
                    >
                        <RotateCcw className="w-5 h-5" />
                    </Button>
                </div>

                <div className="flex gap-8 pt-4">
                    <div className="text-center">
                        <div className="text-xl font-bold">{sessionsCompleted}</div>
                        <div className="text-xs text-white/40 uppercase tracking-widest font-medium">Sessions Today</div>
                    </div>
                    <div className="w-px bg-white/10" />
                    <div className="text-center">
                        <div className="text-xl font-bold">{sessionsCompleted * 50}</div>
                        <div className="text-xs text-white/40 uppercase tracking-widest font-medium">Points Earned</div>
                    </div>
                </div>
            </GlassCard>

            <AnimatePresence>
                {showReward && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-none"
                    >
                        <GlassCard className="p-12 text-center space-y-6 shadow-2xl border-primary/20 pointer-events-auto">
                            <Trophy className="w-20 h-20 text-yellow-400 mx-auto animate-bounce" />
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold">Session Complete!</h3>
                                <p className="text-white/60">Proof of Focus verified successfully.</p>
                            </div>
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                                <span className="text-primary font-bold">+50 NEBULA Points</span>
                            </div>
                            <Button size="lg" className="w-full" onClick={() => setShowReward(false)}>
                                Claim Rewards
                            </Button>
                        </GlassCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
