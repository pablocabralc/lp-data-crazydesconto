import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import {
  organizationSchema,
  webSiteSchema,
  webPageSchema,
  productSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://crazydesconto.com.br";
const SITE_NAME = "DataCrazy Desconto";
const TITLE = "Cupom DataCrazy PABLO100 — R$100 de Desconto por Mês no CRM com IA [2026]";
const DESCRIPTION =
  "Use o cupom PABLO100 ou PABLO e ganhe R$100 OFF/mês na DataCrazy. CRM com IA integrada, multiatendimento WhatsApp, automações e BI interno. Planos a partir de R$197/mês com cupom. Economize R$1.200/ano.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "cupom datacrazy",
    "desconto datacrazy",
    "PABLO100",
    "cupom PABLO",
    "datacrazy desconto",
    "datacrazy cupom 2026",
    "datacrazy CRM",
    "CRM com IA",
    "datacrazy preço",
    "datacrazy planos",
    "cupom desconto CRM",
    "multiatendimento whatsapp",
    "automação de vendas",
  ],
  authors: [{ name: "Pablo" }],
  creator: "Pablo",
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Cupom DataCrazy PABLO100 — R$100 OFF/mês no CRM com IA",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DataCrazy — R$100 de desconto por mês com cupom PABLO100. CRM com IA, automação e multiatendimento.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cupom DataCrazy PABLO100 — R$100 OFF/mês no CRM com IA",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "pt-BR": SITE_URL,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <JsonLd
          data={[
            organizationSchema(),
            webSiteSchema(),
            webPageSchema(),
            productSchema(),
            faqSchema(),
            breadcrumbSchema(),
          ]}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
