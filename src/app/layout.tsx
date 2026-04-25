import type { Metadata } from "next";
import { Anton, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Anton: Para el impacto brutalista en los H1
const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

// 2. Space Grotesk: Para la identidad técnica y subtítulos
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

// 3. Geist Mono: Para descripciones y lectura
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
      className={`${anton.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-mono text-gray-300">
        {children}
      </body>
    </html>
  );
}