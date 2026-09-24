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
  title: {
    default: "Nexora — Web, App & Software Development",
    template: "%s — Nexora",
  },

  description:
    "Nexora builds modern websites, mobile apps, custom software, AI and automation solutions for businesses and startups.",

  keywords: [
    "Nexora",
    "web development Kenya",
    "mobile app development Kenya",
    "software development Kenya",
    "custom software development",
    "AI automation",
    "business websites",
    "startup software development",
  ],

  authors: [
    {
      name: "Nexora",
    },
  ],

  creator: "Nexora",

  openGraph: {
    title: "Nexora — Web, App & Software Development",
    description:
      "Modern websites, mobile apps, custom software, AI and automation solutions for businesses and startups.",
    type: "website",
    siteName: "Nexora",
    url: "https://nexora-mu-smoky.vercel.app",
    images: [
  {
    url: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: "Nexora Digital Solutions",
  },
],
  },

  robots: {
    index: true,
    follow: true,
  },
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
