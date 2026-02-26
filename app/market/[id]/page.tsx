"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Info, ShieldCheck, Wallet, ChevronRight } from "lucide-react";
import { MOCK_MARKETS } from "@/lib/mock-data";
import { calculateTimeRemaining, formatCurrency } from "@/lib/utils";
import LiveChart from "@/components/LiveChart";
import { cn } from "@/lib/utils";

export default function MarketDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const market = MOCK_MARKETS.find((m) => m.id === id);
    const [stakeAmount, setStakeAmount] = useState<string>("100");
    const [selectedSide, setSelectedSide] = useState<"yes" | "no">("yes");
    const [isPlacing, setIsPlacing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!market) return <div className="p-24 text-center">Market not found</div>;

    const timeLeft = calculateTimeRemaining(market.endTime);
    const potentialPayout = parseFloat(stakeAmount || "0") * (selectedSide === "yes" ? 1.5 : 2.8);

    const handlePlacePrediction = () => {
        setIsPlacing(true);
        setTimeout(() => {
            setIsPlacing(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000);
        }, 2000);
    };

    return (
        <div className="container mx-auto px-6 pt-12">
            <Link
                href="/markets"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Markets
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="relative w-full md:w-48 h-48 rounded-3xl overflow-hidden border border-white/10 shrink-0">
                            <Image src={market.image} alt={market.title} fill className="object-cover" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20">
                                    {market.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                                    <Clock className="w-3.5 h-3.5" />
                                    Ends in {timeLeft.readable}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                {market.title}
                            </h1>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {market.description}
                            </p>
                        </div>
                    </div>

                    <LiveChart />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total Volume</p>
                            <p className="text-2xl font-black text-white">{formatCurrency(market.volume)}</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Predictions</p>
                            <p className="text-2xl font-black text-white">12,482</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Market Cap</p>
                            <p className="text-2xl font-black text-white">$4.2M</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Betting UI */}
                <div className="space-y-6">
                    <div className="p-8 rounded-3xl glass-card border-brand-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[60px] rounded-full -mr-16 -mt-16" />

                        <h2 className="text-2xl font-bold text-white mb-8">Place Prediction</h2>

                        {/* Side Selector */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <button
                                onClick={() => setSelectedSide("yes")}
                                className={cn(
                                    "py-4 rounded-2xl font-bold transition-all border-2",
                                    selectedSide === "yes"
                                        ? "bg-brand-primary/20 border-brand-primary text-brand-primary shadow-[0_0_20px_rgba(0,242,255,0.2)]"
                                        : "bg-white/5 border-transparent text-gray-500 hover:text-white"
                                )}
                            >
                                YES {market.odds.yes}%
                            </button>
                            <button
                                onClick={() => setSelectedSide("no")}
                                className={cn(
                                    "py-4 rounded-2xl font-bold transition-all border-2",
                                    selectedSide === "no"
                                        ? "bg-brand-secondary/20 border-brand-secondary text-brand-secondary shadow-[0_0_20px_rgba(112,0,255,0.2)]"
                                        : "bg-white/5 border-transparent text-gray-500 hover:text-white"
                                )}
                            >
                                NO {market.odds.no}%
                            </button>
                        </div>

                        {/* Input */}
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-end">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Stake Amount</label>
                                <p className="text-xs text-gray-400">Balance: 2,450 USDC</p>
                            </div>
                            <div className="relative group">
                                <input
                                    type="number"
                                    value={stakeAmount}
                                    onChange={(e) => setStakeAmount(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-2xl font-black text-white focus:outline-none focus:border-brand-primary/50 transition-all"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-gray-500">USDC</span>
                            </div>
                            <div className="flex gap-2">
                                {["25%", "50%", "MAX"].map((p) => (
                                    <button key={p} className="flex-1 py-1 px-3 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 hover:text-white hover:bg-white/10 transition-all uppercase">
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="space-y-3 p-4 rounded-2xl bg-white/5 mb-8">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Estimated Payout</span>
                                <span className="text-brand-primary font-bold">{formatCurrency(potentialPayout)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Service Fee</span>
                                <span className="text-white">0.5% (0.50 USDC)</span>
                            </div>
                        </div>

                        {/* Action */}
                        <button
                            onClick={handlePlacePrediction}
                            disabled={isPlacing || isSuccess}
                            className={cn(
                                "w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2",
                                isSuccess
                                    ? "bg-green-500 text-black shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                                    : "bg-brand-primary text-black hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] active:scale-[0.98] disabled:opacity-50"
                            )}
                        >
                            {isPlacing ? (
                                <div className="w-6 h-6 border-4 border-black/30 border-t-black rounded-full animate-spin" />
                            ) : isSuccess ? (
                                <>
                                    <ShieldCheck className="w-6 h-6" />
                                    Prediction Placed!
                                </>
                            ) : (
                                <>
                                    <Wallet className="w-5 h-5" />
                                    Place Prediction
                                </>
                            )}
                        </button>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/5 text-gray-500 text-xs space-y-4">
                        <div className="flex gap-3">
                            <Info className="w-4 h-4 shrink-0 text-brand-primary" />
                            <p>Predictions are finalized only after the market closing conditions are met. Staked tokens are locked in the protocol vault.</p>
                        </div>
                        <div className="flex gap-3">
                            <ShieldCheck className="w-4 h-4 shrink-0 text-brand-secondary" />
                            <p>This market is verified by PredictPulse decentralized oracle network.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
