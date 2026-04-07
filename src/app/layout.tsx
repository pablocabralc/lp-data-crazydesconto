import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import {
  organizationSchema,
  affiliateOrganizationSchema,
  webSiteSchema,
  webPageSchema,
  softwareApplicationSchema,
  faqSchema,
  howToSchema,
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
const SITE_NAME = "CrazyDesconto — Parceiro Oficial DataCrazy";
const TITLE = "Cupom DataCrazy PABLO100 — R$100 de Desconto/Mês no CRM com IA [2026]";
const DESCRIPTION =
  "Parceiro oficial DataCrazy. Cupom PABLO100 ou PABLO: R$100 OFF/mês no CRM com IA, multiatendimento WhatsApp, automações e BI interno. Starter R$197/mês, Essential R$360/mês, Pro R$707/mês. Economize R$1.200/ano.";

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
    "datacrazy review",
    "datacrazy é bom",
    "datacrazy vale a pena",
    "multiatendimento whatsapp CRM",
    "automação de vendas CRM",
    "CRM para e-commerce",
    "CRM para agência",
    "CRM com inteligência artificial",
    "desconto no datacrazy",
  ],
  authors: [{ name: "CrazyDesconto" }],
  creator: "CrazyDesconto",
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
        alt: "Cupom DataCrazy PABLO100 — R$100 de desconto por mês no CRM com IA. Parceiro oficial.",
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
  other: {
    "google-site-verification": "",
  },
};

export const viewport: Viewport = {
  themeColor: "#070b18",
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
            affiliateOrganizationSchema(),
            webSiteSchema(),
            webPageSchema(),
            softwareApplicationSchema(),
            faqSchema(),
            howToSchema(),
            breadcrumbSchema(),
          ]}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
