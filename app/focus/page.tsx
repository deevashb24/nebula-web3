"use client";

import { motion } from "framer-motion";
import FocusTracker from "@/components/FocusTracker";

export default function FocusPage() {
    return (
        <div className="flex flex-col items-center bg-[#050505] min-h-screen selection:bg-white selection:text-black overflow-hidden relative">
            <main className="relative w-full max-w-[1800px] mx-auto px-10 sm:px-20 lg:px-40 flex flex-col items-center justify-center min-h-[100vh] py-60 z-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center w-full max-w-5xl mb-32"
                >
                    {/* Grand Header */}
                    <h1 className="text-[8vw] sm:text-[6vw] lg:text-[100px] font-black tracking-[-0.04em] leading-[0.85] text-white uppercase italic mb-12">
                        Deep Focus Chamber
                    </h1>

                    {/* Highly-Readable Subtext (Serif) */}
                    <p className="text-xl sm:text-2xl text-white/40 max-w-3xl leading-relaxed italic font-serif px-10">
                        Disconnect from the noise and enter the chamber.
                        Your productivity is hashed and verified in real-time.
                    </p>
                </motion.div>

                {/* Main Focus UI - Magnified Scale */}
                <div className="w-full max-w-5xl flex flex-col items-center">
                    <FocusTracker />
                </div>

            </main>

            {/* Expansive Space Branding */}
            <div className="fixed bottom-12 left-12 opacity-5 pointer-events-none">
                <div className="w-8 h-8 bg-white flex items-center justify-center text-black font-black text-sm">N</div>
            </div>

            {/* Ambient Depth Layer */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#050505] via-transparent to-black pointer-events-none" />
        </div>
    );
}
