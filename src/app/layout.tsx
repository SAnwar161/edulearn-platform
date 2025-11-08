import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduLearn - Comprehensive Educational Platform",
  description: "Empowering students with O Level, A Level, and US High School curriculum through interactive learning experiences.",
  keywords: ["EduLearn", "education", "O Level", "A Level", "US High School", "learning", "curriculum", "interactive lessons"],
  authors: [{ name: "EduLearn Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "EduLearn - Educational Platform",
    description: "Comprehensive learning platform for O Level, A Level, and US High School students",
    url: "https://chat.z.ai",
    siteName: "EduLearn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduLearn - Educational Platform",
    description: "Comprehensive learning platform for O Level, A Level, and US High School students",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
