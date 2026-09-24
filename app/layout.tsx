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
    default: "Nexora — Digital Solutions",
    template: "%s — Nexora",
  },

  description:
    "Nexora builds modern websites, mobile apps, custom software, AI and automation solutions for businesses and startups.",

  keywords: [
    "Nexora",
    "software development",
    "web development",
    "mobile app development",
    "custom software development",
    "AI automation",
    "digital solutions",
    "Kenya software development",
  ],

  authors: [
    {
      name: "Nexora",
    },
  ],

  creator: "Nexora",

  openGraph: {
    title: "Nexora — Digital Solutions",
    description:
      "Modern websites, mobile apps, custom software, AI and automation solutions.",
    type: "website",
    siteName: "Nexora",
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
