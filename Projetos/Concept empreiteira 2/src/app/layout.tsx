import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concept Empreiteira | Engenharia de Alta Performance",
  description: "Construímos o cenário da sua melhor fase. Engenharia de precisão e acabamentos de elite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-primary text-accent selection:bg-highlight/30 selection:text-highlight`}
      >
        {children}
      </body>
    </html>
  );
}
