import { Sidebar } from '@/components/layout/Sidebar';
import Navbar from '@/components/Navbar';
import { InfiniteFeed } from '@/components/feed/infinite-feed';
import { TrendingUp, Users, Telescope } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

export default function FeedPage() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <Sidebar />

            <main className="md:ml-64 pt-24 pb-12 transition-all duration-500">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Gallery */}
                    <div className="lg:col-span-8">
                        <div className="mb-10 flex items-center justify-between">
                            <div>
                                <h1 className="text-4xl font-black tracking-tight text-white flex items-center gap-3">
                                    <Telescope className="text-primary w-8 h-8" />
                                    Galactic Gallery
                                </h1>
                                <p className="text-white/40 mt-2 font-medium italic">Discover creations drifting through the deep cosmos.</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <InfiniteFeed />
                        </div>
                    </div>

                    {/* Right Sidebar - Trending */}
                    <div className="hidden lg:block lg:col-span-4 space-y-6">
                        <GlassCard className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="w-5 h-5 text-primary" />
                                <h3 className="font-bold text-white tracking-widest uppercase text-xs">Top Explorers</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: 'Marcus V.', handle: 'mv_crypto', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus' },
                                    { name: 'Elena Sol', handle: 'elenasol', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena' },
                                    { name: 'Web3 Wizard', handle: 'wiz_dev', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wiz' },
                                ].map((user, i) => (
                                    <div key={i} className="flex items-center gap-3 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-all">
                                        <div className="w-10 h-10 rounded-full border border-white/10 p-[2px] group-hover:border-primary">
                                            <img src={user.avatar} className="w-full h-full rounded-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">{user.name}</p>
                                            <p className="text-xs text-white/40">Power: {Math.floor(Math.random() * 1000)}k</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-2 mb-6">
                                <Users className="w-5 h-5 text-secondary" />
                                <h3 className="font-bold text-white tracking-widest uppercase text-xs">New Signals</h3>
                            </div>
                            <p className="text-xs text-white/40 mb-4 font-medium">Coordinate with other astronauts nearby.</p>
                        </GlassCard>
                    </div>
                </div>
            </main>
        </div>
    );
}
