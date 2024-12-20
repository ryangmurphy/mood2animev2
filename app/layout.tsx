import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://mood2anime.netlify.app/"),
  title: {
    default: "Mood2Anime: Top Rated Anime for Your Mood",
    template: "%s | Mood2Anime",
  },
  description: "Explore the top-rated Anime tailored to your mood",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Mood2Anime",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Mood2Anime",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-screen">
            <main>{children}</main>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

