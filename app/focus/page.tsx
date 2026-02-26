"use client";

import { motion } from "framer-motion";
import FocusTracker from "@/components/FocusTracker";
import Navbar from "@/components/Navbar";

export default function FocusPage() {
    return (
        <div className="flex flex-col bg-[#09090b] min-h-screen overflow-hidden relative selection:bg-orange-500/30 selection:text-orange-200">
            <Navbar />

            {/* Ambient orange glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none -z-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/30 to-transparent" />

            <main className="relative w-full max-w-4xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center min-h-[calc(100vh-73px)] py-20 z-10">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center w-full mb-16"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-medium mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                        Active Focus Session
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
                        Deep Focus Chamber
                    </h1>
                    <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
                        Disconnect from the noise. Your productivity is hashed and verified in real-time.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="w-full"
                >
                    <FocusTracker />
                </motion.div>
            </main>
        </div>
    );
}
