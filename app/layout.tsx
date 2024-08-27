import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

import { cn } from "@/lib/utils";

interface RootLayoutProps {
  children: ReactNode;
}

const metadata: Metadata = {
  title: {
    default: "Mood2Anime: Top Rated Anime for Your Mood",
    template: "%s | Mood2Anime",
  },
  description: "Explore the top-rated Anime tailored to your mood",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://mood2anime.vercel.app/",
    siteName: "Mood2Anime",
    images: [
      {
        url: "https://mood2anime.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mood2Anime",
      },
    ],
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <main>{children}</main>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

