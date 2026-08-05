import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Loader from "@/components/ui/Loader";
import Aurora from "@/components/ui/Aurora";
import MouseGlow from "@/components/ui/MouseGlow";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRIQZY | Genesis NFT Collection",
  description:
    "TRIQZY is a premium Genesis NFT collection built on Robinhood EVM for collectors, creators and digital culture.",
  keywords: [
    "TRIQZY",
    "NFT",
    "Robinhood",
    "Robinhood EVM",
    "Genesis",
    "Web3",
    "Collection",
  ],
  metadataBase: new URL("https://triqzy.xyz"),
  openGraph: {
    title: "TRIQZY | Genesis NFT Collection",
    description:
      "Own a piece of the Genesis collection built for the Robinhood ecosystem.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRIQZY | Genesis NFT Collection",
    description:
      "Own a piece of the Genesis collection built for the Robinhood ecosystem.",
    images: ["/og-image.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} bg-[#070707] text-white antialiased`}
      >
        {/* Global Effects */}
        <Loader />
        <Aurora />
        <MouseGlow />

        {/* Navigation */}
        <Navbar />

        {/* Website */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}