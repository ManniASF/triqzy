import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Loader from "@/components/ui/Loader";
import Aurora from "@/components/ui/Aurora";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triqzy.vercel.app"),

  title: {
    default: "TRIQZY | Genesis NFT Collection",
    template: "%s | TRIQZY",
  },

  description:
    "TRIQZY is a premium Genesis NFT collection built for collectors, creators, and the culture.",

  keywords: [
    "TRIQZY",
    "NFT",
    "NFT Collection",
    "Genesis",
    "Web3",
    "Ethereum",
    "Digital Collectibles",
    "Crypto",
    "Robinhood",
  ],

  authors: [
    {
      name: "TRIQZY",
    },
  ],

  creator: "TRIQZY",

  publisher: "TRIQZY",

  openGraph: {
    title: "TRIQZY | Genesis NFT Collection",

    description:
      "A premium Genesis NFT collection built for collectors, creators, and the culture.",

    url: "https://triqzy.vercel.app",

    siteName: "TRIQZY",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TRIQZY Genesis NFT Collection",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "TRIQZY | Genesis NFT Collection",

    description:
      "A premium Genesis NFT collection built for collectors, creators, and the culture.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  robots: {
    index: true,
    follow: true,
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
        <Loader />

        <Aurora />

        <Navbar />

        {children}
      </body>
    </html>
  );
}