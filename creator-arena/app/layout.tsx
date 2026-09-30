import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creator Arena | Play the internet. Test your ideas. See what wins.",
  description: "A gamified creator intelligence network. Compete to predict what wins, test your thumbnails and hooks before publishing, and explore trend relations.",
  keywords: ["Creator Arena", "A/B Testing", "Thumbnails", "YouTube Creators", "Trends", "Creator Economy", "Prediction Game", "Relation Map"],
  openGraph: {
    title: "Creator Arena | Play the internet.",
    description: "Compete to predict what wins, test your ideas before publishing, and explore trend relations.",
    type: "website",
    locale: "uk_UA",
    siteName: "Creator Arena",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Arena | Play the internet.",
    description: "Test your ideas. See what is winning — and why.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex text-text-main bg-bg-main overflow-x-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col ml-[260px] min-w-0">
          <div className="p-8 pb-14 animate-fade-in">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
