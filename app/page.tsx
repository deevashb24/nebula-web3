"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Timer, Trophy, Users, ShieldCheck, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-secondary/10 blur-[100px] rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-primary text-sm font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-white/80">Proof of Productivity is Here.</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Nebula <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
              Productivity Verified.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Nebula helps you stay productive while earning on-chain rewards. Complete deep work
            sessions, build your focus legacy, and trade rewards in our galactic marketplace.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/focus">
              <Button size="lg" glow className="group">
                Start Focus Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/rooms">
              <Button variant="outline" size="lg">
                Enter Study Lounge
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full"
        >
          <GlassCard className="flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Timer className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">12.4k</h3>
              <p className="text-white/40 text-sm font-medium italic">Active Builders</p>
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">8.6k</h3>
              <p className="text-white/40 text-sm font-medium italic">Badges Minted</p>
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">42</h3>
              <p className="text-white/40 text-sm font-medium italic">Virtual Lounges</p>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
}
