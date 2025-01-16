import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikken E-Commerce",
  description: "Shop the best Nikken products with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground bg-background`}
      >
        {/* Header for Navigation */}
        <Header />

        {/* Main Content */}
        <main className="container mx-auto p-4 md:p-8">
          {children}
        </main>

        {/* Footer (to be added later) */}
      </body>
    </html>
  );
}
