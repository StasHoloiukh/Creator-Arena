import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creator Arena",
  description: "A gamified creator intelligence network. Compete to predict what wins, test your thumbnails and hooks before publishing, and explore trend relations.",
  keywords: ["Creator Arena", "A/B Testing", "Thumbnails", "YouTube Creators", "Trends", "Creator Economy", "Prediction Game", "Relation Map"],
  openGraph: {
    title: "Creator Arena",
    description: "Compete to predict what wins, test your ideas before publishing, and explore trend relations.",
    type: "website",
    siteName: "Creator Arena",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Arena",
    description: "Test your ideas. See what is winning — and why.",
  },
  icons: {
    icon: "/creator-arena-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex text-text-main bg-bg-main">
        <Sidebar />
        <main className="flex-1 flex flex-col ml-62.5 min-w-0">
          <Topbar />
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
