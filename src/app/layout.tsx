import "@/styles/globals.css";
import { Metadata } from "next";
import { Audiowide } from "next/font/google";
import React from "react";
import Providers from "./providers";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-audiowide",
  preload: true
});

export const metadata: Metadata = {
  title: "Fullyhacks 2025",
  description: "Welcome to FullyHacks 2025",
  openGraph: {
    title: "Fullyhacks 2025",
    description: "Welcome to FullyHacks 2025, CSUF's largest 24-hour hackathon",
    images: "/assets/fullyhacks_logo.png"
  },
  icons: {
    shortcut: "/favicon.ico"
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL!)
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={audiowide.variable}>
      <body className={`${audiowide.className} font-audiowide`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
