"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Users, TrendingUp } from "lucide-react";
import Link from 'next/link';

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-[#09090b] min-h-screen selection:bg-orange-500/30 selection:text-orange-200 overflow-hidden relative font-[Geist,Manrope,Inter,sans-serif]">

      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Orange top-center glow */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[30%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent pointer-events-none z-0" />

      {/* Navbar */}
      <header className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">Nebula</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Dashboard', 'Focus', 'Leaderboard', 'Community'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/focus">
            <Button variant="glow" size="sm" className="gap-2">
              Launch App
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-32 max-w-7xl mx-auto w-full">

        {/* Badge */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeIn}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-medium mb-8 [animation:fadeSlideIn_1s_ease-out_0.8s_both]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          Web3 Productivity Protocol — Live on Mainnet
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden" animate="visible" variants={fadeIn}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl md:text-7xl md:text-8xl font-bold tracking-tighter leading-[1.1] text-white mb-6 max-w-5xl"
        >
          Focus. Earn.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
            Prove it on-chain.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden" animate="visible" variants={fadeIn}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
        >
          Nebula turns your deep work sessions into verifiable on-chain proofs.
          Earn rewards for staying focused, build streaks, and compete on the global leaderboard.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeIn}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-24"
        >
          <Link href="/focus">
            <Button variant="glow" size="lg" className="gap-2 px-8">
              Start Focusing
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/leaderboard">
            <Button variant="glass" size="lg" className="gap-2 px-8">
              View Leaderboard
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-zinc-800 max-w-4xl"
        >
          {[
            { label: "Total Value Locked", value: "$12.4M", pulse: true },
            { label: "Verified Focus Hours", value: "842,000" },
            { label: "Protocol Status", value: "Nominal" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-10 flex flex-col items-start group ${i === 1 ? 'md:px-12 md:border-x border-zinc-800' : i === 0 ? 'md:pr-12' : 'md:pl-12'}`}
            >
              <span className="text-xs font-medium tracking-wider uppercase text-zinc-500 mb-4 group-hover:text-orange-400 transition-colors">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-3">
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.value}</h3>
                {stat.pulse && <div className="w-2 h-2 bg-green-500/50 rounded-full animate-pulse" />}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-5xl"
        >
          {[
            { icon: Shield, title: "Proof of Focus", desc: "Every session is hashed and verified on-chain, creating an immutable record of your productivity." },
            { icon: TrendingUp, title: "Earn While Working", desc: "Complete focus sessions to earn $NEBULA tokens. The longer you focus, the more you earn." },
            { icon: Users, title: "Community Rooms", desc: "Join live study rooms with other focused individuals. Accountability through blockchain transparency." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 hover:shadow-orange transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Icon className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Bottom gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-black/60 pointer-events-none z-0" />
    </div>
  );
}
