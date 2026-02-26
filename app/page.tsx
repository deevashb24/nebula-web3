"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Timer, Trophy, Users, ShieldCheck, ArrowRight, Activity, GlobeLock } from "lucide-react";
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-[#050505] min-h-screen selection:bg-white selection:text-black overflow-hidden relative">
      <main className="relative w-full max-w-[1600px] mx-auto px-10 sm:px-20 lg:px-32 flex flex-col items-start justify-center min-h-[100vh] py-40 z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left w-full max-w-7xl"
        >
          {/* Institutional Identifier */}
          <div className="flex items-center gap-4 mb-20 opacity-40 hover:opacity-100 transition-opacity duration-700 cursor-default group">
            <div className="w-1 h-1 bg-white rounded-full group-hover:scale-150 transition-transform" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white">Security Protocol v4.02</span>
          </div>

          {/* Deity-tier Headline */}
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[110px] font-black tracking-[-0.04em] leading-[0.85] text-white uppercase italic mb-16">
            Institutional
            <br />
            <span className="opacity-20 hover:opacity-100 transition-opacity duration-1000">Intelligence.</span>
          </h1>

          {/* Minimalist Description */}
          <p className="text-lg sm:text-xl text-white/30 max-w-2xl leading-relaxed font-bold uppercase tracking-tight mb-20">
            Nebula enforces digital focus through verifiable productivity proofs. Access institutional-grade toolkit for cognitive performance.
          </p>

          {/* Launch Action */}
          <div className="flex flex-col sm:flex-row items-center gap-12 w-full">
            <Link href="/focus">
              <Button
                variant="glow"
                size="lg"
                className="group relative px-20"
              >
                Initialize Operation
                <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>

            <Link href="/rooms" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all">
              Internal Directory
            </Link>
          </div>
        </motion.div>

        {/* Protocol Stats Grid - Minimalist 1px Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-full mt-48 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/5"
        >
          <div className="py-20 flex flex-col items-start md:pr-20 group">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20 mb-8 group-hover:text-white/40 transition-colors">Total Value Locked</span>
            <div className="flex items-baseline gap-4">
              <h3 className="text-6xl font-black text-white tracking-tighter">$12.4M</h3>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="py-20 flex flex-col items-start md:px-20 border-y md:border-y-0 md:border-x border-white/5 group">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20 mb-8 group-hover:text-white/40 transition-colors">Verified Focus Hours</span>
            <h3 className="text-6xl font-black text-white tracking-tighter">842,000</h3>
          </div>

          <div className="py-20 flex flex-col items-start md:pl-20 group">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20 mb-8 group-hover:text-white/40 transition-colors">Protocol Status</span>
            <h3 className="text-6xl font-black text-white tracking-tighter uppercase italic">Nominal</h3>
          </div>
        </motion.div>

      </main>

      {/* Extreme Negative Space Gradient - Obsidian Feel */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#050505] via-transparent to-black pointer-events-none" />
    </div>
  );
}
