import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
  // Expected static assets in public/ directory:
  // - og.png (1200x630, PNG or JPEG)
  // - favicon-16x16.png (16x16, PNG)
  // - apple-touch-icon.png (180x180, PNG)
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
      <head>
        <script>
          (function () {
            const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            document.documentElement.setAttribute('data-theme', theme);
          })();
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen font-sans antialiased text-foreground`}
      >
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
