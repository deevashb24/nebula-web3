"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import Web3Provider from "@/components/providers/web3-provider";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Web3Provider>
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="min-h-screen pt-32 pb-12 transition-all duration-300"
            >
              {children}
            </motion.main>
          </AnimatePresence>
        </Web3Provider>
      </body>
    </html>
  );
}
