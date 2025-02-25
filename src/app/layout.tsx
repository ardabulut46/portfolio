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
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            // Force dark mode
            document.documentElement.classList.add('dark');
            document.documentElement.style.backgroundColor = '#1d1132';
            document.documentElement.style.setProperty('--background', '#1d1132');
          `
        }} />
      </head>
      <body
        className={`${geist.variable} font-sans bg-[#1d1132] text-white`}
        style={{ backgroundColor: '#1d1132' }}
      >
        <LanguageProvider>
          <NavbarWrapper />
          <main className="min-h-screen">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
