"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const PARTNERS = [
  "git", "npm", "Lucidchart", "wrike", "jQuery", "OpenStack", "ServiceNow", "Paysafe",
];

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-[#09090b] min-h-screen selection:bg-orange-500/30 selection:text-orange-200 font-[Geist,Manrope,Inter,sans-serif]">

      {/* Background noise texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Radial glow top-center */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,#f97316_0%,transparent_65%)]" />

      {/* Landing Navbar */}
      <div className="relative z-50">
        <LandingNavbar />
      </div>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-20 max-w-6xl mx-auto w-full flex-1">

        {/* Eyebrow badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/80 text-zinc-400 text-xs font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          Trusted by 1,200+ Web3 teams worldwide
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="text-5xl sm:text-6xl md:text-[72px] font-bold tracking-[-0.03em] leading-[1.08] text-white mb-7 max-w-4xl"
        >
          Scale your protocol with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
            smart infrastructure
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
        >
          The essential toolkit for deploying secure dApps. From writing your first smart
          contract to governing a global DAO, build it all on one unified layer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-zinc-100 active:scale-[0.98] transition-all duration-200 tracking-widest uppercase shadow-lg"
          >
            Start Building
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm font-semibold hover:bg-white/[0.08] hover:border-orange-500/30 active:scale-[0.98] transition-all duration-200"
          >
            View Pricing
          </Link>
        </motion.div>

        {/* Trust / Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-4xl pt-16 border-t border-zinc-800"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-zinc-600 mb-10">
            Trusted by the modern Web3 ecosystem
          </p>

          {/* Partner logos (text-based) */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mb-10">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-zinc-600 hover:text-zinc-400 transition-colors duration-300 font-semibold text-base tracking-tight select-none cursor-default"
              >
                {name}
              </span>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-orange-400 transition-colors"
          >
            Read the manifesto
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800 bg-zinc-950/80 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">

            {/* Brand */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <span className="font-bold text-white text-xl tracking-tight">NebulaNow</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                The unified infrastructure layer for the decentralized web.
              </p>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">About Us</h4>
              <ul className="space-y-3">
                {["Mission", "Team", "Newsletter", "Careers"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">Support</h4>
              <ul className="space-y-3">
                {["Contact", "Refund Policy", "FAQ's", "Status"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">Social</h4>
              <ul className="space-y-3">
                {["Instagram", "LinkedIn", "YouTube", "Twitter"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">
              Copyright © NebulaNow ·{" "}
              <Link href="#" className="hover:text-zinc-400 transition-colors">
                Terms of Service
              </Link>
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
