import type { Metadata } from "next";
import { Anton, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer"; 
import Navbar from "./components/Navbar";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Álvarez | Soluciones Tech",
  description: "Desarrollo de software y sistemas de gestión a medida. Arquitecturas escalables, automatización de procesos y experiencias web de alto impacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-brand-dark text-gray-300 overflow-x-hidden">
        
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}