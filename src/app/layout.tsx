import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PixelTracker from "../components/PixelTracker";
import CookieConsent from "../components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
    title: "Concept Digital | Desenvolvimento Web de Alta Performance",
    description: "Transformamos sua presença digital com sites de alta conversão, design premium e estratégias de SEO avançadas. Especialistas em Landing Pages e E-commerce.",
    keywords: ["desenvolvimento web", "sites de alta conversão", "SEO", "landing pages", "e-commerce", "design premium", "next.js", "react"],
    openGraph: {
        title: "Concept Digital | Desenvolvimento Web de Alta Performance",
        description: "Transformamos sua presença digital com sites de alta conversão, design premium e estratégias de SEO avançadas.",
        url: "https://conceptdigital.com.br", // Replace with actual URL if known, or leave generic
        siteName: "Concept Digital",
        images: [
            {
                url: "/og-image.jpg", // Needs to be created or mapped
                width: 1200,
                height: 630,
                alt: "Concept Digital Portfolio",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
            <body className={inter.className}>
                <PixelTracker />
                <CookieConsent />
                <Header />
                <main className="min-h-screen relative overflow-x-hidden">
                    {children}
                </main>

                {/* Simple Footer reused from App.jsx */}
                <footer className="py-8 text-center text-gray-500 text-xs uppercase tracking-widest border-t border-white/5 bg-digital-black">
                    &copy; {new Date().getFullYear()} Concept Digital. Todos os Direitos Reservados.
                </footer>
            </body>
        </html>
    );
}
