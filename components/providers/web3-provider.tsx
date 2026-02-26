"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },
});

const queryClient = new QueryClient();

export default function Web3Provider({ children }: { children: React.ReactNode }) {
    return (
        <PrivyProvider
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
            config={{
                loginMethods: ['google', 'github', 'wallet', 'email'],
                appearance: {
                    theme: 'dark',
                    accentColor: '#00f2fe',
                    logo: 'https://cdn.pixabay.com/photo/2016/11/21/14/31/nebula-1845722_1280.jpg',
                    showWalletLoginFirst: false,
                },
                embeddedWallets: {
                    createOnLogin: 'all-users',
                } as any,
            }}
        >
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </WagmiProvider>
        </PrivyProvider>
    );
}
