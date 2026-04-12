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
  itemListSchema,
  videoObjectSchema,
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://descontodatacrazy.com.br";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Cupom DataCrazy PABLO100 — R$100 OFF/mês no CRM com IA",
    description: DESCRIPTION,
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
        <JsonLd
          data={[
            organizationSchema(),
            affiliateOrganizationSchema(),
            webSiteSchema(),
            webPageSchema(),
            softwareApplicationSchema(),
            faqSchema(),
            howToSchema(),
            itemListSchema(),
            breadcrumbSchema(),
            ...videoObjectSchema(),
          ]}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
