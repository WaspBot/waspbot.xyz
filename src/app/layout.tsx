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
  metadataBase: new URL("https://waspbot.xyz"),
  title: {
    default: "Waspbot",
    template: "%s | Waspbot",
  },
  description: "Waspbot is a powerful and versatile bot for Discord.",
  openGraph: {
    title: "Waspbot",
    description: "Waspbot is a powerful and versatile bot for Discord.",
    url: "https://waspbot.xyz",
    siteName: "Waspbot",
    images: [
      {
        url: "https://waspbot.xyz/og.png",
        width: 1200,
        height: 630,
        alt: "Waspbot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waspbot",
    description: "Waspbot is a powerful and versatile bot for Discord.",
    creator: "@waspbot",
    images: ["https://waspbot.xyz/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://waspbot.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen font-sans antialiased`}
      >
        {children}
      </body>{" "}
    </html>
  );
}
