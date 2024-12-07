import { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";
import Providers from "./providers";

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
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
