'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Wallet, Zap, Shield, TrendingUp, Coins } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-mesh overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full -z-10" />

                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/5 text-brand-primary text-sm font-semibold mb-6 inline-block">
                            Web3 Social Revolution
                        </span>
                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
                            Empowering Creators <br />
                            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent italic">
                                One Tip at a Time
                            </span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                            TipStream is the first decentralized social platform where creators earn instantly.
                            No middlemen, no delays. Just pure appreciation in $TIP tokens.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/feed">
                                <Button size="lg" className="h-16 px-10 text-lg rounded-2xl group">
                                    Enter TipStream
                                    <Zap className="ml-2 w-5 h-5 group-hover:scale-125 transition-transform" />
                                </Button>
                            </Link>
                            <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-2xl">
                                Learn More
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mt-20 relative px-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2000"
                            alt="Dashboard Preview"
                            className="w-full max-w-5xl mx-auto rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-4 border-t border-white/5 bg-black/40">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Coins,
                            title: 'One-Click Tipping',
                            desc: 'Appreciating content has never been easier. Send tokens instantly without leaving the feed.',
                            color: 'text-brand-primary'
                        },
                        {
                            icon: TrendingUp,
                            title: 'Dynamic Earnings',
                            desc: 'Monitor your stats in real-time. Watch your creator rank climb as you get more engagement.',
                            color: 'text-brand-secondary'
                        },
                        {
                            icon: Shield,
                            title: 'True Ownership',
                            desc: 'Your content, your community. Built on blockchain for maximum transparency and control.',
                            color: 'text-brand-accent'
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm"
                        >
                            <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} />
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-white/50 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
