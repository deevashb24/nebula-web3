"use client";

import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Clock, BarChart3 } from "lucide-react";
import { cn, formatCurrency, formatNumber, calculateTimeRemaining } from "@/lib/utils";
import { Market } from "@/lib/mock-data";

interface MarketCardProps {
    market: Market;
}

export default function MarketCard({ market }: MarketCardProps) {
    const timeLeft = calculateTimeRemaining(market.endTime);

    return (
        <Link
            href={`/market/${market.id}`}
            className="group block relative overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:scale-[1.02] hover:border-brand-primary/40 active:scale-[0.98]"
        >
            {/* Trending Badge */}
            {market.trending && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Trending
                </div>
            )}

            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={market.image}
                    alt={market.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                        {market.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                        <Clock className="w-3 h-3" />
                        {timeLeft.readable} left
                    </span>
                </div>

                <h3 className="text-xl font-bold leading-tight text-white mb-6 group-hover:text-brand-primary transition-colors line-clamp-2 min-h-[56px]">
                    {market.title}
                </h3>

                {/* Odds & Volume */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Volume</span>
                            <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                                <BarChart3 className="w-4 h-4 text-brand-secondary" />
                                {formatCurrency(market.volume)}
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Current Odds</span>
                            <div className="flex items-center gap-3 mt-1">
                                <div className="flex flex-col items-end">
                                    <span className="text-xs font-bold text-brand-primary">YES {market.odds.yes}%</span>
                                    <div className="w-16 h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                                        <div className="h-full bg-brand-primary" style={{ width: `${market.odds.yes}%` }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover Effect Light */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 -z-10" />
        </Link>
    );
}
