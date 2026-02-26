'use client';

import { cn } from '@/lib/utils';
import { Home, LayoutDashboard, Rocket, User, Zap, Activity } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Lobby', href: '/feed', icon: Home },
    { name: 'Pulse', href: '/dashboard', icon: Activity },
    { name: 'Clash', href: '/battle', icon: Rocket },
    { name: 'Profile', href: '/profile', icon: User },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-80 border-r border-white/5 bg-black pt-36 px-8 hidden lg:block z-40">
            <nav className="space-y-6">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                'flex items-center justify-between py-4 transition-all duration-300 group relative',
                                isActive ? 'text-white' : 'text-white/30 hover:text-white/70'
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <item.icon className={cn('w-4 h-4 transition-transform duration-500', isActive ? 'scale-110' : 'group-hover:scale-110')} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{item.name}</span>
                            </div>
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-active"
                                    className="w-1 h-1 bg-white rounded-full"
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="absolute bottom-12 left-8 right-8">
                <Button variant="outline" size="lg" className="w-full border-white/10 hover:border-white/40 text-[10px] transition-all">
                    System Ignition
                </Button>
            </div>
        </aside>
    );
}
