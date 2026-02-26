"use client";

import { useMemo } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";

const data = [
    { time: "00:00", odds: 50 },
    { time: "04:00", odds: 52 },
    { time: "08:00", odds: 48 },
    { time: "12:00", odds: 55 },
    { time: "16:00", odds: 62 },
    { time: "20:00", odds: 58 },
    { time: "23:59", odds: 65 },
];

export default function LiveChart() {
    return (
        <div className="w-full h-[400px] mt-8 overflow-hidden rounded-2xl glass-card p-6">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                    Live Odds History
                </h3>
                <div className="flex gap-2">
                    {["1H", "4H", "1D", "1W"].map((t) => (
                        <button
                            key={t}
                            className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${t === "1D" ? "bg-brand-primary text-black" : "bg-white/5 text-gray-500 hover:text-white"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorOdds" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00F2FF" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#00F2FF" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis
                        dataKey="time"
                        stroke="#ffffff40"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#ffffff40"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(val) => `${val}%`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#000",
                            border: "1px solid #ffffff20",
                            borderRadius: "12px",
                            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                        }}
                        itemStyle={{ color: "#00F2FF", fontWeight: "bold" }}
                        labelStyle={{ color: "#ffffff60", marginBottom: "4px" }}
                    />
                    <Area
                        type="monotone"
                        dataKey="odds"
                        stroke="#00F2FF"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorOdds)"
                        animationDuration={2000}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
