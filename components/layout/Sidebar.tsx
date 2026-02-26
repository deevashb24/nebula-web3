'use client';

import { cn } from '@/lib/utils';
import { Home, TrendingUp, User, LayoutDashboard, Settings, PlusSquare, Telescope, Stars, Rocket, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Gallery', href: '/feed', icon: Telescope },
    { name: 'Constellation', href: '/dashboard', icon: Stars },
    { name: 'Missions', href: '/battle', icon: Rocket },
    { name: 'Astronaut', href: '/profile', icon: User },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/5 bg-black/20 backdrop-blur-xl pt-20 px-4 hidden md:block">
            <nav className="space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group',
                                isActive
                                    ? 'bg-brand-primary text-black'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                            )}
                        >
                            <item.icon className={cn('w-5 h-5', isActive ? 'text-black' : 'group-hover:text-brand-primary')} />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="absolute bottom-8 left-4 right-4">
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:scale-105 transition-transform">
                    <Zap className="w-5 h-5" />
                    <span>Ignite Pulse</span>
                </button>
            </div>
        </aside>
    );
}
