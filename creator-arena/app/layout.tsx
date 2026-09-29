import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "The ultimate platform for creators to showcase their work, battle for the top spot, and build an audience.",
  keywords: ["creator", "arena", "platform", "portfolio", "battle", "showcase", "creators"],
  authors: [{ name: "Creator Arena Team" }],
  openGraph: {
    title: "Creator Arena",
    description: "The ultimate platform for creators to showcase their work, battle for the top spot, and build an audience.",
    url: "https://creator-arena.com",
    siteName: "Creator Arena",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Arena",
    description: "The ultimate platform for creators to showcase their work, battle for the top spot, and build an audience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/creator-arena-logo.svg'
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
