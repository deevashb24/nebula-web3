import React from 'react';
import type { Metadata } from 'next';
import "./globals.css";
import Web3Provider from "@/components/providers/web3-provider";

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
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#09090b] text-white antialiased" style={{ fontFamily: "'Geist', 'Manrope', 'Inter', system-ui, sans-serif" }}>
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
