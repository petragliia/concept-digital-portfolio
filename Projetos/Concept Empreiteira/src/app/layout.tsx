import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Concept Empreiteira - Construção e Reformas de Alto Padrão",
  description: "Especialistas em reformas residenciais e comerciais. Entregamos sua obra no prazo, com qualidade e transparência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased text-slate-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
