import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import { LanguageProvider } from '@/context/LanguageContext';

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "Welcome to my portfolio - Showcasing my creative work and development projects",
  keywords: ["portfolio", "developer", "web development", "design", "creative"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} font-sans bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors duration-300`}
      >
        <LanguageProvider>
          <NavbarWrapper />
          <main className="min-h-screen">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
