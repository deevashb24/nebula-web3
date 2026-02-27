import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import "./globals.css";
import Web3Provider from "@/components/providers/web3-provider";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Nebula — Web3 Productivity Protocol",
  description: "Focus. Earn. Prove it on-chain. Nebula turns your deep work into verifiable blockchain proofs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-zinc-900 antialiased font-sans">
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
