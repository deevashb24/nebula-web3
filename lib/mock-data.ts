export interface Player {
    address: string;
    username: string;
    avatar: string;
    wins: number;
    losses: number;
    rank: number;
}

export interface Duel {
    id: string;
    host: Player;
    opponent?: Player;
    stake: number;
    token: 'USDC' | 'ETH' | 'SOL';
    gameType: 'Aim Pro' | 'Code Clash' | 'Reflex' | 'Memory';
    status: 'lobby' | 'active' | 'finished';
    createdAt: string;
}

export const MOCK_PLAYERS: Player[] = [
    {
        address: '0x123...456',
        username: 'CyberGhost',
        avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=ghost',
        wins: 142,
        losses: 45,
        rank: 1,
    },
    {
        address: '0xabc...def',
        username: 'NeonNinja',
        avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=ninja',
        wins: 98,
        losses: 32,
        rank: 2,
    },
    {
        address: '0x789...012',
        username: 'BitBattler',
        avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=battle',
        wins: 76,
        losses: 28,
        rank: 3,
    }
];

export const MOCK_DUELS: Duel[] = [
    {
        id: 'duel-1',
        host: MOCK_PLAYERS[0],
        stake: 100,
        token: 'USDC',
        gameType: 'Aim Pro',
        status: 'lobby',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'duel-2',
        host: MOCK_PLAYERS[1],
        opponent: MOCK_PLAYERS[2],
        stake: 0.5,
        token: 'ETH',
        gameType: 'Code Clash',
        status: 'active',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'duel-3',
        host: MOCK_PLAYERS[2],
        stake: 50,
        token: 'USDC',
        gameType: 'Reflex',
        status: 'lobby',
        createdAt: new Date().toISOString(),
    }
];

export interface FocusSession {
    id: string;
    sessionId: string;
    marketTitle: string;
    choice: string;
    amount: number;
    payout: number;
    status: 'Won' | 'Live';
    marketId: string;
}

export const MOCK_HISTORY: FocusSession[] = [
    {
        id: 'h-1',
        sessionId: 'ses-001',
        marketTitle: 'Deep Work — 25 min Pomodoro',
        choice: 'Yes',
        amount: 25,
        payout: 150,
        status: 'Won',
        marketId: 'ses-001',
    },
    {
        id: 'h-2',
        sessionId: 'ses-002',
        marketTitle: 'Flow State — 50 min Block',
        choice: 'Yes',
        amount: 50,
        payout: 320,
        status: 'Won',
        marketId: 'ses-002',
    },
    {
        id: 'h-3',
        sessionId: 'ses-003',
        marketTitle: 'Sprint Session — 15 min Burst',
        choice: 'No',
        amount: 15,
        payout: 0,
        status: 'Live',
        marketId: 'ses-003',
    },
];
