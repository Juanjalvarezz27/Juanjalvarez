import type { Metadata, Viewport } from "next";
import { Inter_Tight, Inter, JetBrains_Mono, Anton, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../i18n/LanguageContext";
import { SITE_CONFIG } from "../config/site";
import Grain from "../components/ui/Grain";
import BreakpointBadge from "../components/ui/BreakpointBadge";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role} & Soluciones Tech`,
  description: "Desarrollo de software de gestión a medida, plataformas web de alta conversión y automatizaciones orientadas a devolverte el control operativo de tu negocio.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
    description: "Sistemas reales. Negocios autónomos. Software a medida, plataformas web y automatizaciones de alto impacto.",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
    description: "Sistemas reales. Negocios autónomos. Software de gestión y plataformas web a medida.",
  },
  verification: {
    google: "-FI9xlSjbVOiRsTGy43fNK7Snw9I0d3oZgBmggCnzhw",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-round.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

// Datos estructurados Schema.org para indexación semántica en Google
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  jobTitle: SITE_CONFIG.role,
  url: SITE_CONFIG.siteUrl,
  email: SITE_CONFIG.email,
  sameAs: [
    SITE_CONFIG.linkedin,
    SITE_CONFIG.instagram,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Trujillo",
    addressCountry: "VE",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${SITE_CONFIG.name} · Soluciones de Software`,
  url: SITE_CONFIG.siteUrl,
  telephone: SITE_CONFIG.whatsappNumber,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Trujillo",
    addressCountry: "VE",
  },
  description: "Desarrollo de software y sistemas de gestión a medida, automatización y páginas web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      translate="no"
      suppressHydrationWarning
      className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable} ${anton.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink overflow-x-clip font-sans antialiased selection:bg-accent selection:text-white relative" suppressHydrationWarning>
        <Grain />
        <BreakpointBadge />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
