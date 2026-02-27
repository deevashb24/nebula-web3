"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";

const PARTNERS = [
  "git", "npm", "Lucidchart", "wrike", "jQuery", "OpenStack", "ServiceNow", "Paysafe",
];

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen selection:bg-orange-500/20 selection:text-orange-900 overflow-x-hidden">

      {/* Noise texture — exact: opacity-40 mix-blend-overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Top radial glow — exact: from-orange-500/20 top-[-10%] */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[30%] pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />

      {/* Floating pill navbar */}
      <LandingNavbar />

      {/* Hero — center aligned, larger padding for minimalist breathability */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-32 md:pt-40 pb-32 max-w-7xl mx-auto w-full flex-1">

        {/* Announcement badge */}
        <div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-sm font-medium mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          New release: Nebula Protocol v2.0
        </div>

        {/* H1 */}
        <h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-zinc-900 mb-6 max-w-4xl">
          Scale your protocol with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
            smart infrastructure
          </span>
        </h1>

        {/* Subheadline */}
        <p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] max-w-3xl mx-auto text-center text-lg md:text-xl text-zinc-600 leading-relaxed mb-12 font-medium tracking-wide">
          The essential toolkit for deploying secure dApps. From writing your first smart contract
          to governing a global DAO, build it all on one unified layer.
        </p>

        {/* CTA */}
        <div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] flex flex-col md:flex-row items-center gap-6 mb-32 z-20">
          <Link
            href="/pricing"
            className="group relative flex overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] focus:outline-none rounded-full p-[2px] items-center justify-center cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-gradient-xy opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 px-10 py-4 md:px-12 md:py-4.5 rounded-full bg-white transition-colors duration-300 group-hover:bg-transparent">
              <span className="text-sm md:text-base font-bold text-zinc-900 group-hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]">Start Building</span>
            </span>
          </Link>
        </div>

        {/* Partners */}
        <div className="[animation:fadeSlideIn_1s_ease-out_1.6s_both] w-full max-w-5xl">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-10">
            Trusted by the modern Web3 ecosystem
          </p>

          <div className="mt-4 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale mb-12">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-base md:text-lg font-semibold tracking-wide text-zinc-800 select-none cursor-default"
              >
                {name}
              </span>
            ))}
          </div>

          <Link
            href="#"
            className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-orange-600 transition-colors duration-300"
          >
            Read the manifesto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Bottom gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-white pointer-events-none z-0" />

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200/60 bg-zinc-50/50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">

            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-orange-sm">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <span className="text-base font-bold text-zinc-900 tracking-tight">NebulaNow</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                The unified infrastructure layer for the decentralized web.
              </p>
            </div>

            {[
              { title: "About Us", items: ["Mission", "Team", "Newsletter", "Careers"] },
              { title: "Support", items: ["Contact", "Refund Policy", "FAQ's", "Status"] },
              { title: "Social", items: ["Instagram", "LinkedIn", "YouTube", "Twitter"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-zinc-900 mb-5 uppercase tracking-widest">{col.title}</h4>
                <ul className="space-y-4">
                  {col.items.map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              Copyright © NebulaNow ·{" "}
              <Link href="#" className="hover:text-zinc-800 transition-colors">Terms of Service</Link>
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
