'use client';

import { PostCard } from './post-card';
import { useEffect, useState, useRef } from 'react';
import { Loader2 } from 'lucide-react';

const MOCK_POSTS = [
    {
        id: 1,
        creator: { name: 'Alex Rivera', handle: 'arivera', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
        content: 'Just launched my new NFT collection on Base! Check it out and let me know what you think. 🚀 #Web3 #NFT',
        likes: 124,
        tips: 45
    },
    {
        id: 2,
        creator: { name: 'Sarah Chen', handle: 'schen_dev', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
        content: 'The future of social media is decentralized. Ownership, privacy, and monetization all in one place. Proud to be building on TipStream! 💎',
        likes: 89,
        tips: 120
    },
    {
        id: 3,
        creator: { name: 'CryptoPioneer', handle: 'pioneer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pioneer' },
        content: 'Just tipped 50 $TIP to @arivera for that awesome NFT drop. Support your favorite creators folks! 💸',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
        likes: 56,
        tips: 12
    }
];

export function InfiniteFeed() {
    const [posts, setPosts] = useState(MOCK_POSTS);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    loadMore();
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, [loading]);

    const loadMore = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            const newPosts = MOCK_POSTS.map(p => ({ ...p, id: Math.random() }));
            setPosts(prev => [...prev, ...newPosts]);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col items-center py-6 px-4">
            {posts.map((post) => (
                <PostCard key={post.id} {...post} />
            ))}

            <div ref={loaderRef} className="py-8 flex justify-center w-full">
                {loading && <Loader2 className="w-6 h-6 animate-spin text-brand-primary" />}
            </div>
        </div>
    );
}
