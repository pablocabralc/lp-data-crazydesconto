import type { WithContext, Organization, WebSite, WebPage, FAQPage, BreadcrumbList, Product, AggregateRating } from "schema-dts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://crazydesconto.com.br";
const SITE_NAME = "DataCrazy Desconto";
const AFFILIATE_URL = "https://datacrazy.io/?via=IAPABLO";

export function organizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DataCrazy",
    url: "https://datacrazy.io",
    logo: `${SITE_URL}/logo.png`,
    description: "CRM com IA integrada para automação de vendas e atendimento. +2600 empresas ativas.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Balneário Camboriú",
      addressRegion: "SC",
      addressCountry: "BR",
    },
  };
}

export function webSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Cupom de desconto exclusivo DataCrazy — Economize R$100/mês com os cupons PABLO100 ou PABLO no CRM com IA mais completo do Brasil.",
    inLanguage: "pt-BR",
  };
}

export function productSchema(): WithContext<Product> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "DataCrazy — CRM com IA para Vendas e Automação",
    description:
      "CRM com IA integrada, automação de vendas, multiatendimento WhatsApp/Instagram, BI interno e integrações ilimitadas. Use o cupom PABLO100 para R$100 OFF/mês.",
    brand: {
      "@type": "Brand",
      name: "DataCrazy",
    },
    image: `${SITE_URL}/og-image.png`,
    url: AFFILIATE_URL,
    offers: [
      {
        "@type": "Offer",
        name: "Plano Starter com Cupom PABLO100",
        price: "197",
        priceCurrency: "BRL",
        description: "Plano Starter de R$297/mês por R$197/mês com cupom PABLO100",
        url: AFFILIATE_URL,
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "Plano Essential com Cupom PABLO100",
        price: "360",
        priceCurrency: "BRL",
        description: "Plano Essential de R$460/mês por R$360/mês com cupom PABLO100",
        url: AFFILIATE_URL,
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "Plano Pro com Cupom PABLO100",
        price: "707",
        priceCurrency: "BRL",
        description: "Plano Pro de R$807/mês por R$707/mês com cupom PABLO100",
        url: AFFILIATE_URL,
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    } as AggregateRating,
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lucas M." },
        datePublished: "2026-03-15",
        reviewBody: "CRM incrível com IA de verdade. O cupom PABLO100 me economiza R$100 todo mês! Melhor investimento para minha agência.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ana C." },
        datePublished: "2026-02-20",
        reviewBody: "Substituiu 5 ferramentas na minha operação. O multiatendimento com WhatsApp e Instagram é perfeito. Recomendo demais.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rafael S." },
        datePublished: "2026-01-10",
        reviewBody: "Usei o cupom PABLO e já economizei mais de R$600. As automações e o BI interno são game changer.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
  };
}

export function faqSchema(): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como usar o cupom de desconto DataCrazy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acesse datacrazy.io/?via=IAPABLO, escolha seu plano e na hora do pagamento insira o cupom PABLO100 ou PABLO para obter R$100 de desconto por mês.",
        },
      },
      {
        "@type": "Question",
        name: "Qual o valor do desconto do cupom PABLO100?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O cupom PABLO100 (ou PABLO) oferece um desconto de R$100 por mês em qualquer plano da DataCrazy. Exemplo: Plano Starter sai de R$297 por R$197/mês. Economia de R$1.200 por ano.",
        },
      },
      {
        "@type": "Question",
        name: "O cupom PABLO100 funciona em qualquer plano da DataCrazy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Os cupons PABLO100 e PABLO funcionam nos planos Starter (R$297/mês), Essential (R$460/mês) e Pro (R$807/mês), garantindo R$100 de desconto mensal em qualquer um deles.",
        },
      },
      {
        "@type": "Question",
        name: "O que é a DataCrazy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A DataCrazy é um CRM com IA integrada para automação de vendas e atendimento. Inclui multiatendimento WhatsApp/Instagram/Facebook, BI interno com LTV, CAC e taxa de conversão, automações inteligentes, pipelines personalizáveis e integrações via API. Mais de 2.600 empresas usam a plataforma.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre os planos Starter, Essential e Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter (R$297/mês): 5 pipelines, 5 mil leads, 4 membros, 8 automações. Essential (R$460/mês): 20 pipelines, 100 mil leads, 15 membros, 20 automações, dashboards e API. Pro (R$807/mês): tudo ilimitado — pipelines, leads, membros, automações, conexões e integrações.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre o cupom PABLO100 e PABLO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nenhuma! Ambos os cupons oferecem o mesmo desconto de R$100 por mês. Use qualquer um dos dois — PABLO100 ou PABLO — no checkout.",
        },
      },
    ],
  };
}

export function breadcrumbSchema(): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cupom DataCrazy PABLO100",
        item: SITE_URL,
      },
    ],
  };
}

export function webPageSchema(): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cupom DataCrazy PABLO100 — R$100 de Desconto por Mês no CRM com IA",
    description:
      "Use o cupom PABLO100 ou PABLO e ganhe R$100 de desconto por mês na DataCrazy. CRM com IA, automação, multiatendimento e BI interno.",
    url: SITE_URL,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "pt-BR",
    datePublished: "2026-04-07",
    dateModified: new Date().toISOString().split("T")[0],
    about: {
      "@type": "Thing",
      name: "DataCrazy CRM",
      url: "https://datacrazy.io",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-description", ".faq-section"],
    },
  };
}
