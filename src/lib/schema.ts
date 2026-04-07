import type {
  WithContext,
  Organization,
  WebSite,
  WebPage,
  FAQPage,
  BreadcrumbList,
  AggregateRating,
  SoftwareApplication,
  HowTo,
  ItemList,
  Article,
} from "schema-dts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://crazydesconto.com.br";
const SITE_NAME = "CrazyDesconto — Parceiro Oficial DataCrazy";
const AFFILIATE_URL = "https://datacrazy.io/?via=IAPABLO";

export function organizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DataCrazy",
    url: "https://datacrazy.io",
    logo: `${SITE_URL}/logo.png`,
    description:
      "CRM com IA integrada para automação de vendas e atendimento. Mais de 2.600 empresas ativas. Meta Business Partner oficial.",
    foundingLocation: {
      "@type": "Place",
      name: "Balneário Camboriú, SC",
    },
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Balneário Camboriú",
        addressRegion: "SC",
        addressCountry: "BR",
        description: "Sede principal",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Caxias do Sul",
        addressRegion: "RS",
        addressCountry: "BR",
        description: "Engenharia",
      },
    ],
    taxID: "54.129.748/0001-18",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Portuguese",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "22:00",
      },
    },
    sameAs: [],
  };
}

export function affiliateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CrazyDesconto",
    url: SITE_URL,
    description:
      "Parceiro oficial DataCrazy. Cupons exclusivos PABLO100 e PABLO com R$100 de desconto mensal no CRM com IA mais completo do Brasil.",
    parentOrganization: {
      "@type": "Organization",
      name: "DataCrazy",
      url: "https://datacrazy.io",
    },
  };
}

export function webSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: ["CrazyDesconto", "Crazy Desconto DataCrazy"],
    url: SITE_URL,
    description:
      "Cupom de desconto exclusivo DataCrazy — Economize R$100/mês com os cupons PABLO100 ou PABLO no CRM com IA mais completo do Brasil.",
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: "CrazyDesconto",
      url: SITE_URL,
    },
  };
}

export function softwareApplicationSchema(): WithContext<SoftwareApplication> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DataCrazy CRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "CRM com IA integrada para automação de vendas e atendimento. Multiatendimento WhatsApp, Instagram e Facebook. BI interno com LTV, CAC e taxa de conversão. Automações inteligentes e integrações via API.",
    url: "https://datacrazy.io",
    offers: [
      {
        "@type": "Offer",
        name: "Plano Starter com Cupom PABLO100",
        price: "197",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "197",
          priceCurrency: "BRL",
          unitText: "MONTH",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitCode: "MON",
          },
        },
        description:
          "CRM com IA — 5 pipelines, 5 mil leads, 4 membros, 8 automações, 3 canais. De R$297 por R$197/mês com cupom PABLO100.",
        url: AFFILIATE_URL,
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "Plano Essential com Cupom PABLO100",
        price: "360",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "360",
          priceCurrency: "BRL",
          unitText: "MONTH",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitCode: "MON",
          },
        },
        description:
          "CRM com IA — 20 pipelines, 100 mil leads, 15 membros, 20 automações, API e BI. De R$460 por R$360/mês com cupom PABLO100.",
        url: AFFILIATE_URL,
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "Plano Pro com Cupom PABLO100",
        price: "707",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "707",
          priceCurrency: "BRL",
          unitText: "MONTH",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitCode: "MON",
          },
        },
        description:
          "CRM com IA — tudo ilimitado: pipelines, leads, membros, automações, conexões e API. De R$807 por R$707/mês com cupom PABLO100.",
        url: AFFILIATE_URL,
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    } as AggregateRating,
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Hace" },
        datePublished: "2026-03-20",
        reviewBody:
          "Um divisor de águas pra nós. A Crazy IA está aumentando em 20% o funil de upsell. Resultado real e mensurável.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Organization", name: "AD Pro" },
        datePublished: "2026-03-10",
        reviewBody:
          "O DataCrazy não é só um simples CRM, é uma estrutura robusta e pensada para uma gestão comercial de altíssimo nível.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "André Botelho" },
        datePublished: "2026-02-28",
        reviewBody:
          "O funil de recuperação do meu e-commerce ficou 100% automático. Aproveitamos ao máximo a inteligência do CRM para aumentar o LTV.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Organization", name: "Upscaled" },
        datePublished: "2026-02-15",
        reviewBody:
          "Conectamos WhatsApp, Instagram num único lugar. Hoje nosso atendimento flui e traz o cliente de forma muito mais eficiente.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Pablo Gaulio" },
        datePublished: "2026-01-20",
        reviewBody:
          "Meus clientes adoram o Datacrazy. Saímos dos CRMs gigantes para uma gestão de leads automatizada. Tudo simples e assertivo.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Organization", name: "Agência Yadah" },
        datePublished: "2026-01-10",
        reviewBody:
          "Usamos Agentes da IA para automatizar todas as etapas do pipeline. Sensacional!",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
    featureList: [
      "Crazy IA integrada — detecta intenção de compra e sentimento",
      "BI interno — LTV, CAC, taxa de conversão por origem",
      "Multiatendimento — WhatsApp, Instagram, Facebook",
      "Automações inteligentes com regras de negócio",
      "Kanbans avançados e customizáveis",
      "API e integrações via Webhooks",
      "Distribuição inteligente de atendimento com SLA",
      "Gestão de leads com tags e jornadas",
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
          text: "O cupom PABLO100 (ou PABLO) oferece R$100 de desconto por mês em qualquer plano da DataCrazy. Exemplo: Plano Starter sai de R$297 por R$197/mês. Economia de R$1.200 por ano.",
        },
      },
      {
        "@type": "Question",
        name: "O cupom PABLO100 funciona em qualquer plano da DataCrazy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Os cupons PABLO100 e PABLO funcionam nos planos Starter (R$297/mês), Essential (R$460/mês) e Pro (R$807/mês), garantindo R$100 de desconto mensal.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre o Datacrazy e um CRM tradicional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Datacrazy não é apenas um CRM — é uma máquina de vendas com IA integrada, automações com regras de negócio, BI interno, multiatendimento conectado (WhatsApp, Instagram, Facebook) e decisões em tempo real. Substitui CRMs tradicionais, ferramentas de automação, chatbots, ferramentas de tarefas e BI em uma só plataforma.",
        },
      },
      {
        "@type": "Question",
        name: "O Datacrazy funciona para qualquer tipo de negócio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Funciona para e-commerce, infoprodutores, agências, negócios locais, assinaturas, educação, clínicas e SaaS. Se você vende, atende ou escala com dados, o Datacrazy é pra você. Mais de 2.600 empresas já usam.",
        },
      },
      {
        "@type": "Question",
        name: "Como o Datacrazy usa IA para aumentar vendas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Crazy IA detecta intenção de compra, sentimento e comportamento dos leads em tempo real. As automações priorizam leads quentes e otimizam o funil automaticamente com regras de negócio inteligentes.",
        },
      },
      {
        "@type": "Question",
        name: "O Datacrazy integra com WhatsApp, Instagram e outros canais?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! O multiatendimento conecta WhatsApp, Instagram e Facebook com distribuição inteligente, fila e SLAs. Tudo centralizado em um único lugar. A DataCrazy é Meta Business Partner oficial.",
        },
      },
      {
        "@type": "Question",
        name: "Posso automatizar atendimento e funil de vendas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! O Datacrazy permite criar fluxos completos de automação que conectam atendimento (WhatsApp, Instagram) diretamente ao funil de vendas, com regras inteligentes e ações automáticas.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre os planos Starter, Essential e Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter (R$297/mês): 5 pipelines, 5 mil leads, 4 membros, 8 automações. Essential (R$460/mês): 20 pipelines, 100 mil leads, 15 membros, dashboards e API. Pro (R$807/mês): tudo ilimitado. Com cupom PABLO100, todos ficam R$100 mais baratos.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre o cupom PABLO100 e PABLO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nenhuma! Ambos os cupons oferecem o mesmo desconto de R$100 por mês. Use qualquer um dos dois no checkout da DataCrazy. O desconto funciona nos planos mensal, semestral e anual.",
        },
      },
      {
        "@type": "Question",
        name: "O CrazyDesconto é a DataCrazy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. O CrazyDesconto é um parceiro oficial da DataCrazy que distribui cupons de desconto exclusivos. A DataCrazy é uma empresa de tecnologia sediada em Balneário Camboriú, SC (CNPJ 54.129.748/0001-18). Nós somos afiliados autorizados que oferecem os cupons PABLO100 e PABLO.",
        },
      },
    ],
  };
}

export function howToSchema(): WithContext<HowTo> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Como usar o cupom de desconto DataCrazy PABLO100",
    description:
      "Passo a passo para aplicar o cupom PABLO100 ou PABLO e obter R$100 de desconto mensal na DataCrazy.",
    totalTime: "PT3M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "BRL",
      value: "0",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Acesse o link exclusivo",
        text: "Clique no link datacrazy.io/?via=IAPABLO para acessar a DataCrazy com o link de parceiro oficial.",
        url: AFFILIATE_URL,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Escolha seu plano",
        text: "Selecione entre Starter (R$297/mês), Essential (R$460/mês) ou Pro (R$807/mês). O cupom funciona em todos, no mensal, semestral ou anual.",
        url: "https://datacrazy.io/planos",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Insira o cupom PABLO100 ou PABLO",
        text: "No checkout, digite PABLO100 ou PABLO no campo de cupom. O desconto de R$100 será aplicado automaticamente todo mês.",
      },
    ],
  };
}

export function itemListSchema(): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Planos DataCrazy com Cupom PABLO100",
    description: "Comparação dos 3 planos DataCrazy com desconto de R$100/mês aplicado via cupom PABLO100 ou PABLO.",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Plano Starter — R$197/mês com cupom",
        url: AFFILIATE_URL,
        item: {
          "@type": "Offer",
          name: "DataCrazy Starter",
          price: "197",
          priceCurrency: "BRL",
          description: "5 pipelines, 5 mil leads, 4 membros, 8 automações, 3 conexões. De R$297 por R$197/mês.",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plano Essential — R$360/mês com cupom (Melhor custo-benefício)",
        url: AFFILIATE_URL,
        item: {
          "@type": "Offer",
          name: "DataCrazy Essential",
          price: "360",
          priceCurrency: "BRL",
          description: "20 pipelines, 100 mil leads, 15 membros, 20 automações, dashboards e API. De R$460 por R$360/mês.",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Plano Pro — R$707/mês com cupom (Mais vendido)",
        url: AFFILIATE_URL,
        item: {
          "@type": "Offer",
          name: "DataCrazy Pro",
          price: "707",
          priceCurrency: "BRL",
          description: "Tudo ilimitado: pipelines, leads, membros, automações, conexões e API. De R$807 por R$707/mês.",
          availability: "https://schema.org/InStock",
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
        name: "CrazyDesconto",
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

export function aboutPageBreadcrumbSchema(): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "CrazyDesconto",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sobre a DataCrazy",
        item: `${SITE_URL}/sobre-datacrazy`,
      },
    ],
  };
}

export function articleSchema(): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "O que é DataCrazy? CRM com IA para Vendas e Automação",
    description:
      "Conheça a DataCrazy: CRM com IA integrada, multiatendimento WhatsApp/Instagram, BI interno e automações. +2.600 empresas. Meta Business Partner.",
    url: `${SITE_URL}/sobre-datacrazy`,
    datePublished: "2026-04-07",
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Organization",
      name: "CrazyDesconto",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CrazyDesconto",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/sobre-datacrazy`,
    },
    about: {
      "@type": "SoftwareApplication",
      name: "DataCrazy CRM",
      url: "https://datacrazy.io",
      applicationCategory: "BusinessApplication",
    },
    inLanguage: "pt-BR",
    keywords: "DataCrazy, CRM com IA, automação de vendas, multiatendimento WhatsApp, BI interno",
  };
}

export function webPageSchema(): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cupom DataCrazy PABLO100 — R$100 de Desconto por Mês no CRM com IA",
    description:
      "Parceiro oficial DataCrazy. Use o cupom PABLO100 ou PABLO e ganhe R$100 de desconto por mês no CRM com IA mais completo do Brasil. Planos a partir de R$197/mês.",
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
      "@type": "SoftwareApplication",
      name: "DataCrazy CRM",
      url: "https://datacrazy.io",
      applicationCategory: "BusinessApplication",
    },
    mentions: [
      {
        "@type": "Thing",
        name: "Cupom PABLO100",
        description: "Cupom de desconto de R$100/mês para DataCrazy CRM",
      },
      {
        "@type": "Thing",
        name: "Cupom PABLO",
        description: "Cupom de desconto de R$100/mês para DataCrazy CRM",
      },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-description", ".faq-section"],
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "DataCrazy CRM",
      url: "https://datacrazy.io",
    },
  };
}
