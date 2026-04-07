const AFFILIATE_URL = "https://datacrazy.io/?via=IAPABLO";

function CouponBadge({ code }: { code: string }) {
  return (
    <span className="inline-flex items-center rounded-lg border-2 border-dashed border-primary/60 bg-primary/10 px-4 py-2 font-mono text-lg font-bold text-primary select-all">
      {code}
    </span>
  );
}

function CtaButton({
  children,
  size = "lg",
  variant = "primary",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}) {
  const sizeClass = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }[size];

  const variantClass =
    variant === "primary"
      ? "bg-primary text-primary-foreground glow-primary hover:brightness-110"
      : "border border-accent/40 text-accent hover:bg-accent/10";

  return (
    <a
      href={AFFILIATE_URL}
      rel="noopener noreferrer sponsored"
      className={`inline-flex items-center justify-center rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-100 ${sizeClass} ${variantClass}`}
    >
      {children}
    </a>
  );
}

const plans = [
  {
    name: "Starter",
    description: "Para quem está começando, com estrutura e limites ideais para pequenas equipes",
    priceMonthly: "297",
    priceSemestral: "226",
    priceAnnual: "183",
    priceMonthlyWithCoupon: "197",
    priceSemestralWithCoupon: "126",
    priceAnnualWithCoupon: "83",
    features: [
      "Até 5 pipelines (máx. 8 etapas)",
      "Até 5.000 leads com tags",
      "4 membros da equipe",
      "8 automações",
      "3 conexões multiatendimento",
      "3 integrações Webhooks",
    ],
    dashboards: false,
    api: false,
    salesStages: false,
  },
  {
    name: "Essential",
    description: "Funcionalidades avançadas e limites ampliados para empresas em crescimento constante",
    priceMonthly: "460",
    priceSemestral: "402",
    priceAnnual: "344",
    priceMonthlyWithCoupon: "360",
    priceSemestralWithCoupon: "302",
    priceAnnualWithCoupon: "244",
    tag: "Melhor custo-benefício",
    features: [
      "Até 20 pipelines (máx. 15 etapas)",
      "Até 100.000 leads",
      "15 membros da equipe",
      "20 automações",
      "10 conexões multiatendimento",
      "15 integrações Webhooks",
      "Dashboards de negócios (BI)",
      "Acesso à API",
    ],
    dashboards: true,
    api: true,
    salesStages: true,
  },
  {
    name: "Pro",
    description: "Funcionalidades avançadas e limites ampliados para empresas em crescimento constante",
    priceMonthly: "807",
    priceSemestral: "750",
    priceAnnual: "692",
    priceMonthlyWithCoupon: "707",
    priceSemestralWithCoupon: "650",
    priceAnnualWithCoupon: "592",
    tag: "Mais vendido",
    highlight: true,
    features: [
      "Pipelines ilimitadas (máx. 25 etapas)",
      "Leads ilimitados",
      "Membros ilimitados",
      "Automações ilimitadas",
      "Conexões ilimitadas",
      "Webhooks ilimitados",
      "Dashboards de negócios (BI)",
      "Acesso total à API",
    ],
    dashboards: true,
    api: true,
    salesStages: true,
  },
];

const comparisonRows = [
  { label: "Preço mensal", starter: "R$ 197/mês", essential: "R$ 360/mês", pro: "R$ 707/mês", note: "com cupom" },
  { label: "Preço anual", starter: "R$ 83/mês", essential: "R$ 244/mês", pro: "R$ 592/mês", note: "com cupom" },
  { label: "Pipelines (máximo)", starter: "5 (até 8 etapas)", essential: "20 (até 15 etapas)", pro: "Ilimitadas (25 etapas)" },
  { label: "Leads", starter: "Até 5.000", essential: "Até 100.000", pro: "Ilimitados" },
  { label: "Usuários / Membros", starter: "4", essential: "15", pro: "Ilimitados" },
  { label: "Automações", starter: "8", essential: "20", pro: "Ilimitadas" },
  { label: "Conexões", starter: "3", essential: "10", pro: "Ilimitadas" },
  { label: "Integrações com webhooks", starter: "3", essential: "15", pro: "Ilimitadas" },
  { label: "Dashboards de negócios", starter: false, essential: true, pro: true },
  { label: "Acesso à API", starter: false, essential: true, pro: true },
  { label: "Visão das etapas de vendas", starter: false, essential: true, pro: true },
];

const features = [
  {
    title: "Crazy IA integrada aos fluxos",
    description:
      "Detecta intenção de compra, sentimento e comportamento. Automações baseadas em dados reais, não achismos.",
    icon: "🤖",
  },
  {
    title: "BI interno e controle total",
    description:
      "LTV, CAC, tempo por etapa, taxa de conversão por origem. Visualize seu funil de vendas em tempo real.",
    icon: "📊",
  },
  {
    title: "Integrações e API avançada",
    description:
      "O limite é a sua criatividade. Conecte qualquer coisa, automatize tudo via Webhooks e API completa.",
    icon: "🔗",
  },
  {
    title: "Fluxos de automação inteligentes",
    description:
      "Organiza leads em jornadas reais. Automatiza mensagens, tarefas e ações com regras de negócio inteligentes.",
    icon: "⚡",
  },
  {
    title: "Multiatendimento conectado",
    description:
      "WhatsApp, Instagram e Facebook com distribuição inteligente, fila e SLAs. Tudo em um só lugar.",
    icon: "💬",
  },
  {
    title: "Kanbans avançados e automatizados",
    description:
      "Pipelines adaptáveis ao seu processo comercial. Cada etapa no seu funil ganha visibilidade total.",
    icon: "📋",
  },
];

const stats = [
  { value: "+2.600", label: "empresas ativas" },
  { value: "+400", label: "novos clientes/mês" },
  { value: "10MM+", label: "mensagens/dia" },
  { value: "5 min", label: "SLA de suporte" },
];

const replacesTools = [
  "CRMs tradicionais",
  "Ferramentas de multiatendimento",
  "Plataformas de automação",
  "Chatbots avulsos",
  "Ferramentas de tarefas",
  "Ferramentas de BI",
];

const reviews = [
  {
    name: "Hace",
    role: "Moda Fitness",
    text: "Um divisor de águas pra nós. A Crazy IA está aumentando em 20% o funil de upsell. Resultado real e mensurável.",
    rating: 5,
  },
  {
    name: "AD Pro",
    role: "Agência Fullservice",
    text: "O DataCrazy não é só um simples CRM, é uma estrutura robusta e pensada para uma gestão comercial de altíssimo nível, muito escalonável com o sistema e a base positiva, e time de suporte é impecável!",
    rating: 5,
  },
  {
    name: "André Botelho",
    role: "Empresário",
    text: "O funil de recuperação do meu e-commerce ficou 100% automático. Meu atendimento está consolidado e aproveito ao máximo a inteligência do CRM para aumentar o LTV.",
    rating: 5,
  },
  {
    name: "Ye",
    role: "Moasi",
    text: "Criamos automações robustas que suportam operações grandes. Os resultados na inteligência de recuperação são alto nível.",
    rating: 5,
  },
  {
    name: "Upscaled",
    role: "Assessoria de Marketing",
    text: "Conectamos WhatsApp, Instagram num único lugar. Hoje nosso atendimento flui e traz muito mais o cliente dentro da diferença.",
    rating: 5,
  },
  {
    name: "Lino",
    role: "Empresário",
    text: "Temos uma operação robusta, milhares de atendimentos por dia e mais de 80 mil SKUs. Precisamos de velocidade e o Datacrazy consegue gerenciar tudo isso com eficácia.",
    rating: 5,
  },
  {
    name: "Alan Lima",
    role: "Empresário",
    text: "Todos os meus clientes levaram o CRM Datacrazy. Isso profissionalizou a operação, ficam olhando os resultados de leads, vendas — e a equipe começa a escalar com segurança.",
    rating: 5,
  },
  {
    name: "Euriler Jubé",
    role: "Empresário",
    text: "CRM completo, do lançamento pago ao atendimento. Tudo integrado é excepcional.",
    rating: 5,
  },
  {
    name: "Pablo Gaulio",
    role: "Agência Minerva",
    text: "Meus clientes adoram o Datacrazy. Foi uma das melhores decisões para nosso negócio: saímos daqueles CRMs gigantes para uma gestão de leads e mensagens em plataforma automatizada. Hoje, tudo está simples e assertivo ao time. Com automações e relatórios completos.",
    rating: 5,
  },
  {
    name: "Agência Yadah",
    role: "Agência de Marketing",
    text: "Usamos Agentes da IA. Uma funcionalidade que nossos clientes sofrem com CRMs limitados. O Datacrazy sério, nosso parceiro, ajuda nós a automatizar todas as etapas do pipeline. Sensacional!",
    rating: 5,
  },
];

const segments = [
  "E-commerce",
  "Infoprodutores",
  "Agências e Negócios Locais",
  "Assinaturas",
  "Educação e Cursos",
  "Clínicas e Consultórios",
  "Softwares / SaaS",
  "Lojas Físicas",
];

const faqs = [
  {
    q: "Como usar o cupom de desconto DataCrazy?",
    a: "Acesse o link exclusivo datacrazy.io/?via=IAPABLO, escolha seu plano e na hora do pagamento insira o cupom PABLO100 ou PABLO para obter R$100 de desconto por mês.",
  },
  {
    q: "Qual o valor do desconto do cupom PABLO100?",
    a: "O cupom PABLO100 (ou PABLO) oferece R$100 de desconto por mês em qualquer plano da DataCrazy. Exemplo: Plano Starter sai de R$297 por R$197/mês. São R$1.200 de economia por ano.",
  },
  {
    q: "O cupom PABLO100 funciona em qualquer plano da DataCrazy?",
    a: "Sim! Os cupons PABLO100 e PABLO funcionam nos planos Starter (R$297/mês), Essential (R$460/mês) e Pro (R$807/mês), garantindo R$100 de desconto mensal.",
  },
  {
    q: "Qual a diferença entre o Datacrazy e um CRM tradicional?",
    a: "O Datacrazy não é apenas um CRM — é uma máquina de vendas com IA integrada, automações com regras de negócio, BI interno, multiatendimento conectado (WhatsApp, Instagram, Facebook) e decisões em tempo real. Substitui CRMs tradicionais, ferramentas de automação, chatbots, ferramentas de tarefas e BI em uma só plataforma.",
  },
  {
    q: "O Datacrazy funciona para qualquer tipo de negócio?",
    a: "Sim! Funciona para e-commerce, infoprodutores, agências, negócios locais, assinaturas, educação, clínicas e SaaS. Se você vende, atende ou escala com dados, o Datacrazy é pra você. Mais de 2.600 empresas já usam.",
  },
  {
    q: "Como o Datacrazy usa IA para aumentar vendas?",
    a: "A Crazy IA detecta intenção de compra, sentimento e comportamento dos leads em tempo real. As automações priorizam leads quentes e otimizam o funil automaticamente com regras de negócio inteligentes.",
  },
  {
    q: "O Datacrazy integra com WhatsApp, Instagram e outros canais?",
    a: "Sim! O multiatendimento conecta WhatsApp, Instagram e Facebook com distribuição inteligente, fila e SLAs. Tudo centralizado em um único lugar. A DataCrazy é Meta Business Partner oficial.",
  },
  {
    q: "Posso automatizar atendimento e funil de vendas?",
    a: "Sim! O Datacrazy permite criar fluxos completos de automação que conectam atendimento (WhatsApp, Instagram) diretamente ao funil de vendas, com regras inteligentes e ações automáticas.",
  },
  {
    q: "Qual a diferença entre os planos Starter, Essential e Pro?",
    a: "Starter (R$297/mês): 5 pipelines, 5 mil leads, 4 membros, 8 automações. Essential (R$460/mês): 20 pipelines, 100 mil leads, 15 membros, dashboards e API. Pro (R$807/mês): tudo ilimitado. Com cupom PABLO100, todos ficam R$100 mais baratos.",
  },
  {
    q: "Qual a diferença entre o cupom PABLO100 e PABLO?",
    a: "Nenhuma! Ambos oferecem R$100 de desconto por mês. Use o que preferir no checkout. O desconto funciona nos planos mensal, semestral e anual.",
  },
  {
    q: "O CrazyDesconto é a DataCrazy?",
    a: "Não. O CrazyDesconto é um parceiro oficial da DataCrazy que distribui cupons de desconto exclusivos. A DataCrazy é uma empresa de tecnologia sediada em Balneário Camboriú, SC (CNPJ 54.129.748/0001-18). Nós somos afiliados autorizados que oferecem os cupons PABLO100 e PABLO.",
  },
];

function CheckIcon() {
  return <span className="text-primary">✓</span>;
}

function XIcon() {
  return <span className="text-destructive">✗</span>;
}

export default function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-primary">Crazy</span>Desconto
          </span>
          <div className="flex items-center gap-3">
            <CtaButton size="sm" variant="secondary">Agendar Demo</CtaButton>
            <CtaButton size="sm">Usar Cupom →</CtaButton>
          </div>
        </nav>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="gradient-hero relative overflow-hidden py-20 sm:py-28" aria-labelledby="hero-title">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              CRM com IA Integrada — Cupom Exclusivo 2026
            </p>

            <h1
              id="hero-title"
              className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Desconto DataCrazy
              </span>{" "}
              — R$100 OFF/mês no CRM com IA
            </h1>

            <p className="hero-description mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
              IA, automações com regras de negócio, BI interno, mensageria conectada e
              decisões em tempo real. Use o cupom{" "}
              <strong className="text-primary">PABLO100</strong> ou{" "}
              <strong className="text-primary">PABLO</strong> e ganhe{" "}
              <strong className="text-foreground">R$100 OFF/mês</strong> em qualquer plano.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CtaButton>Ativar Desconto de R$100/mês →</CtaButton>
              <CtaButton variant="secondary">Agendar Demonstração</CtaButton>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <CouponBadge code="PABLO100" />
              <span className="text-muted-foreground">ou</span>
              <CouponBadge code="PABLO" />
            </div>

            {/* Stats */}
            <div className="top-glow mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card/80 p-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-extrabold text-accent sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="gradient-section border-t border-border/50 py-20" aria-labelledby="features-title">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-accent">
              Mais que tecnologia
            </p>
            <h2
              id="features-title"
              className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Visão, ritmo e controle sobre tudo que{" "}
              <span className="text-accent">impacta suas vendas</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              IA, automações, dados, atendimento e jornadas integradas — tudo funcionando junto, no seu ritmo.
            </p>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="card-hover group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm"
                >
                  <span className="text-3xl" role="img" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COMPARAÇÃO CRMs ===== */}
        <section className="border-t border-border/50 py-20" aria-labelledby="compare-title">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Por que mudar?
            </p>
            <h2
              id="compare-title"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Enquanto outros CRMs... Você precisa de{" "}
              <span className="text-destructive">várias ferramentas</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              O Datacrazy unifica tudo em uma plataforma. Substitua:
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {replacesTools.map((tool) => (
                <span
                  key={tool}
                  className="price-old rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="text-2xl">↓</div>
              <span className="glow-primary inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-primary/10 px-8 py-3 text-lg font-bold text-primary">
                ✓ Tudo isso é Datacrazy
              </span>
            </div>
          </div>
        </section>

        {/* ===== PLANOS — CARDS ===== */}
        <section className="gradient-section border-t border-border/50 py-20" aria-labelledby="pricing-title">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-accent">
              Plano para todo tipo de crescimento
            </p>
            <h2
              id="pricing-title"
              className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Todos os planos com{" "}
              <span className="text-primary">R$100 OFF</span>/mês
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              Tudo que você precisa pra vender com precisão, escala e estrutura.
            </p>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl p-8 ${
                    plan.highlight
                      ? "border-gradient glow-accent-strong bg-card"
                      : "border border-border bg-card/60"
                  }`}
                >
                  {plan.tag && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide ${
                        plan.highlight
                          ? "bg-accent text-secondary-foreground"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {plan.tag}
                    </span>
                  )}

                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

                  <div className="mt-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Mensal com cupom</p>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="price-old text-lg text-muted-foreground">
                        R${plan.priceMonthly}
                      </span>
                      <span className="rounded-md bg-primary/15 px-2 py-0.5 text-xs font-bold text-primary">
                        -R$100
                      </span>
                    </div>
                    <p className="mt-1 flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight text-foreground">
                        R${plan.priceMonthlyWithCoupon}
                      </span>
                      <span className="text-muted-foreground">/mês</span>
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Anual: <strong className="text-primary">R${plan.priceAnnualWithCoupon}/mês</strong>{" "}
                      <span className="price-old">R${plan.priceAnnual}</span>{" "}
                      · Semestral: <strong className="text-primary">R${plan.priceSemestralWithCoupon}/mês</strong>
                    </p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 text-primary">✓</span>
                        <span className="text-card-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={AFFILIATE_URL}
                    rel="noopener noreferrer sponsored"
                    className={`mt-8 block rounded-xl py-3.5 text-center font-bold transition-all hover:scale-[1.02] active:scale-100 ${
                      plan.highlight
                        ? "bg-primary text-primary-foreground glow-primary"
                        : "border border-accent/30 text-accent hover:bg-accent/10"
                    }`}
                  >
                    Comece Agora →
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              * Use o cupom <strong>PABLO100</strong> ou <strong>PABLO</strong> no checkout.
              Desconto de R$100 se soma aos descontos do plano semestral e anual.
            </p>
          </div>
        </section>

        {/* ===== TABELA COMPARATIVA ===== */}
        <section className="border-t border-border/50 py-20" aria-labelledby="compare-table-title">
          <div className="mx-auto max-w-5xl px-4">
            <h2
              id="compare-table-title"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Compare os planos
            </h2>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Valores com cupom PABLO100 ou PABLO aplicado
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 pr-4 text-left font-semibold text-muted-foreground">Recursos</th>
                    <th className="pb-4 px-4 text-center font-bold">Starter</th>
                    <th className="pb-4 px-4 text-center">
                      <span className="font-bold text-accent">Essential</span>
                    </th>
                    <th className="pb-4 pl-4 text-center">
                      <span className="font-bold text-primary">Pro</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-border/50">
                      <td className="py-3.5 pr-4 text-muted-foreground">
                        {row.label}
                        {row.note && (
                          <span className="ml-1 text-xs text-primary">({row.note})</span>
                        )}
                      </td>
                      {(["starter", "essential", "pro"] as const).map((plan) => {
                        const val = row[plan];
                        return (
                          <td key={plan} className="py-3.5 px-4 text-center">
                            {typeof val === "boolean" ? (
                              val ? <CheckIcon /> : <XIcon />
                            ) : (
                              <span className={plan === "pro" ? "font-semibold text-primary" : ""}>
                                {val}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <CtaButton>Assinar com R$100 OFF →</CtaButton>
            </div>
          </div>
        </section>

        {/* ===== SEGMENTOS ===== */}
        <section className="gradient-section border-t border-border/50 py-20" aria-labelledby="segments-title">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-accent">
              Para quem é o Datacrazy?
            </p>
            <h2
              id="segments-title"
              className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              De lançamentos a e-commerce.{" "}
              <span className="text-accent">De lojas físicas a consultórios.</span>
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              Se você vende, atende, integra ou escala com dados, o Datacrazy é pra você.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {segments.map((segment) => (
                <div
                  key={segment}
                  className="card-hover rounded-xl border border-border bg-card/60 p-4 text-center text-sm font-medium backdrop-blur-sm"
                >
                  {segment}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COMO USAR ===== */}
        <section className="border-t border-border/50 py-20" aria-labelledby="how-to-title">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              id="how-to-title"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Ative seu desconto em <span className="text-primary">3 passos</span>
            </h2>

            <ol className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Acesse o link exclusivo",
                  description:
                    "Clique no botão para ir à DataCrazy com o link de parceiro já aplicado.",
                },
                {
                  step: "2",
                  title: "Escolha seu plano",
                  description:
                    "Starter, Essential ou Pro — mensal, semestral ou anual. O cupom funciona em todos.",
                },
                {
                  step: "3",
                  title: "Insira PABLO100 ou PABLO",
                  description:
                    "No checkout, digite o cupom e pronto: R$100 de desconto aplicado todo mês.",
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="card-hover relative flex flex-col items-center rounded-2xl border border-border bg-card/60 p-8 text-center backdrop-blur-sm"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-xl font-bold text-primary-foreground">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 text-center">
              <CtaButton>Acessar DataCrazy com Desconto →</CtaButton>
            </div>
          </div>
        </section>

        {/* ===== AVALIAÇÕES ===== */}
        <section className="gradient-section border-t border-border/50 py-20" aria-labelledby="reviews-title">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-accent">
              O que dizem sobre o Datacrazy?
            </p>
            <h2
              id="reviews-title"
              className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Quem já usa <span className="text-accent">não volta atrás</span>
            </h2>

            <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="card-hover mb-4 break-inside-avoid rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm"
                >
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-sm">{i < review.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <footer className="mt-4 flex items-center gap-3 border-t border-border pt-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section
          className="faq-section border-t border-border/50 py-20"
          aria-labelledby="faq-title"
        >
          <div className="mx-auto max-w-3xl px-4">
            <p className="text-center">
              <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                Perguntas Frequentes
              </span>
            </p>
            <h2
              id="faq-title"
              className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Provavelmente você tenha alguma dessas dúvidas
            </h2>

            <dl className="mt-12 space-y-3">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="card-hover rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm"
                >
                  <dt className="font-semibold">{item.q}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section
          className="gradient-hero border-t border-border/50 py-24"
          aria-labelledby="final-cta-title"
        >
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2
              id="final-cta-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Leve seu negócio para o{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                próximo nível
              </span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              CRM com IA, multiatendimento, automações e BI — com{" "}
              <strong className="text-foreground">R$100 de desconto todo mês</strong>.
              Mais de 2.600 empresas já usam. Falta a sua.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CtaButton>Quero Meu Desconto de R$100/mês →</CtaButton>
              <CtaButton variant="secondary">Agendar Demonstração</CtaButton>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <CouponBadge code="PABLO100" />
              <span className="self-center text-muted-foreground">ou</span>
              <CouponBadge code="PABLO" />
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Link exclusivo com desconto — válido em todos os planos
            </p>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="mt-auto border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1 - Sobre */}
            <div>
              <p className="text-lg font-bold text-foreground">
                <span className="text-primary">Crazy</span>Desconto
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Parceiro oficial DataCrazy. Distribuímos cupons de desconto exclusivos
                para o CRM com IA mais completo do Brasil. <strong className="text-foreground">Não somos a DataCrazy</strong> — somos
                afiliados autorizados.
              </p>
            </div>

            {/* Col 2 - Cupons */}
            <div>
              <p className="font-semibold text-foreground">Cupons de Desconto</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-mono font-bold text-primary">PABLO100</span> — R$100 OFF/mês
                </li>
                <li>
                  <span className="font-mono font-bold text-primary">PABLO</span> — R$100 OFF/mês
                </li>
                <li className="pt-1">
                  <a
                    href={AFFILIATE_URL}
                    rel="noopener noreferrer sponsored"
                    className="underline hover:text-foreground"
                  >
                    Ativar desconto →
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 - Sobre DataCrazy */}
            <div>
              <p className="font-semibold text-foreground">Sobre a DataCrazy</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/sobre-datacrazy" className="underline hover:text-foreground">
                    O que é a DataCrazy?
                  </a>
                </li>
                <li>
                  <a
                    href="https://datacrazy.io"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground"
                  >
                    Site oficial DataCrazy ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://datacrazy.io/planos"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground"
                  >
                    Ver todos os planos ↗
                  </a>
                </li>
                <li>Meta Business Partner oficial</li>
                <li>CNPJ: 54.129.748/0001-18</li>
              </ul>
            </div>

            {/* Col 4 - Suporte */}
            <div>
              <p className="font-semibold text-foreground">Suporte DataCrazy</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Chat: 9h-22h (sáb 14h-21h)</li>
                <li>Meet: seg-sex 10h-18h</li>
                <li>SLA: 5 minutos</li>
                <li>Comunidade WhatsApp 24h</li>
                <li className="pt-1 text-xs">
                  Sede: Balneário Camboriú, SC
                </li>
                <li className="text-xs">
                  Engenharia: Caxias do Sul, RS
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 px-6 py-4 text-center text-sm text-muted-foreground">
            <strong className="text-foreground">Aviso:</strong> O CrazyDesconto é um parceiro/afiliado oficial
            da DataCrazy e não faz parte da empresa DataCrazy. Esta página contém links de afiliado.
            DataCrazy e sua marca são propriedade de seus respectivos donos.
          </div>
        </div>

        {/* Watermark */}
        <div className="overflow-hidden border-t border-border/30 py-6">
          <p className="text-center text-6xl font-extrabold tracking-widest text-border/40 sm:text-8xl select-none">
            DATACRAZY
          </p>
        </div>
        <div className="border-t border-border/30 py-4 text-center text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} CrazyDesconto — Parceiro Oficial DataCrazy. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}
