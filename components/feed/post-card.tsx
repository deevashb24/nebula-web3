'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, Coins, ChevronUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PostCardProps {
    creator: {
        name: string;
        handle: string;
        avatar: string;
    };
    content: string;
    image?: string;
    likes: number;
    tips: number;
}

export function PostCard({ creator, content, image, likes, tips }: PostCardProps) {
    const [isTipping, setIsTipping] = useState(false);
    const [showTipAnimation, setShowTipAnimation] = useState(false);

    const handleTip = () => {
        setIsTipping(true);
        // Simulate transaction
        setTimeout(() => {
            setIsTipping(false);
            setShowTipAnimation(true);
            setTimeout(() => setShowTipAnimation(false), 2000);
        }, 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-xl mx-auto mb-6"
        >
            <Card className="hover:border-white/20 transition-all duration-500">
                <div className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-[2px]">
                        <img src={creator.avatar} alt={creator.name} className="w-full h-full rounded-full object-cover border-2 border-black" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">{creator.name}</h3>
                        <p className="text-xs text-white/40">Collector Index: {Math.floor(Math.random() * 1000)}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto text-xs text-primary">Signal</Button>
                </div>

                <div className="px-4 pb-3">
                    <p className="text-sm leading-relaxed text-white/80">{content}</p>
                </div>

                {image && (
                    <div className="px-4 pb-3">
                        <img src={image} alt="Post content" className="w-full h-64 object-cover rounded-xl border border-white/5" />
                    </div>
                )}

                <div className="px-4 py-3 flex items-center justify-between border-t border-white/5 bg-white/[0.01]">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1.5 text-white/40 hover:text-primary transition-colors group">
                            <Sparkles className="w-4 h-4 group-hover:scale-125 transition-transform" />
                            <span className="text-xs">{likes} Glows</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-white/40 hover:text-secondary transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-xs">Echoes</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-white/40 hover:text-brand-primary transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="relative">
                        <Button
                            onClick={handleTip}
                            disabled={isTipping}
                            className={cn(
                                "relative h-9 px-4 rounded-full gap-2 transition-all duration-300",
                                isTipping ? "opacity-70 bg-secondary" : "bg-primary"
                            )}
                        >
                            <Coins className={cn("w-4 h-4 text-black", isTipping && "animate-spin")} />
                            <span className="text-black font-bold text-xs">{isTipping ? 'Transferring...' : 'Fuel 5 $NEB'}</span>

                            <AnimatePresence>
                                {showTipAnimation && (
                                    <motion.div
                                        initial={{ y: 0, opacity: 1 }}
                                        animate={{ y: -50, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    >
                                        <div className="bg-brand-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                                            +10 XP
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
