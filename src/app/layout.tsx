import type { Metadata } from "next";
import { Oswald, Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-accent",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motherland 2025 Football Tournament",
  description: "Uniting the African diaspora through the beautiful game. December 15-21, 2025 - Lagos | May-June 2025 - Continental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${playfair.variable}`}>
      <body
        className="font-body bg-black text-white antialiased selection:bg-gold-500 selection:text-black"
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
