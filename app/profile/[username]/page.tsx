'use client';

import Navbar from '@/components/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { InfiniteFeed } from '@/components/feed/infinite-feed';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ProfilePage({ params }: { params: { username: string } }) {
    const username = params.username || 'user';

    return (
        <div className="min-h-screen">
            <Navbar />
            <Sidebar />

            <main className="md:ml-64 pt-24 pb-12">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
                    {/* Profile Header */}
                    <div className="relative mb-12">
                        <div className="h-48 w-full bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 rounded-3xl border border-white/5" />
                        <div className="absolute -bottom-10 left-8 flex items-end gap-6">
                            <div className="w-32 h-32 rounded-3xl bg-black p-1 border border-white/10 shadow-2xl">
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
                                    className="w-full h-full rounded-2xl object-cover"
                                />
                            </div>
                            <div className="pb-4">
                                <h1 className="text-3xl font-bold">Alex Rivera</h1>
                                <p className="text-white/40">@{username}</p>
                            </div>
                            <div className="pb-4 ml-auto">
                                <Button className="rounded-full px-8">Follow</Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20">
                        <div className="md:col-span-4 space-y-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/40">Bio</h3>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    Web3 Developer & Digital Artist. Exploring the boundaries of decentralized social media. 🚀
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/40">Stats</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xl font-bold">1.2K</p>
                                        <p className="text-xs text-white/40">Followers</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold">450</p>
                                        <p className="text-xs text-white/40">Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-8">
                            <div className="mb-8 border-b border-white/5">
                                <div className="flex gap-8">
                                    <button className="pb-4 border-b-2 border-brand-primary text-brand-primary font-bold">Posts</button>
                                    <button className="pb-4 text-white/40 hover:text-white transition-colors">Tipped</button>
                                    <button className="pb-4 text-white/40 hover:text-white transition-colors">Media</button>
                                </div>
                            </div>
                            <InfiniteFeed />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
