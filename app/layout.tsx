import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nebula | Web3 Productivity Portal",
  description: "Elevate your productivity, verified on-chain. Proof of focus sessions and reward marketplace.",
};

import Web3Provider from "@/components/providers/web3-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Web3Provider>
          <Navbar />
          <main className="min-h-screen pt-24 pb-12">
            {children}
          </main>
        </Web3Provider>
      </body>
    </html>
  );
}
