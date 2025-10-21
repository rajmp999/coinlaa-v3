import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coinlaa - The Ultimate Crypto Social Network",
  description: "Connect, trade, and succeed in the cryptocurrency world. Join thousands of crypto enthusiasts sharing insights, tracking markets, and building wealth together.",
  keywords: ["Coinlaa", "crypto", "cryptocurrency", "social network", "trading", "Bitcoin", "Ethereum", "DeFi", "blockchain"],
  authors: [{ name: "Coinlaa Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Coinlaa - The Ultimate Crypto Social Network",
    description: "Connect with thousands of crypto enthusiasts. Track prices, share insights, and build wealth together.",
    url: "https://coinlaa.com",
    siteName: "Coinlaa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coinlaa - The Ultimate Crypto Social Network",
    description: "Connect, trade, and succeed in the cryptocurrency world with thousands of enthusiasts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
