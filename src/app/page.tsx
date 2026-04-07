const AFFILIATE_URL = "https://datacrazy.io/?via=IAPABLO";

function CouponBadge({ code }: { code: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border-2 border-dashed border-primary bg-primary/10 px-4 py-2 font-mono text-lg font-bold text-primary select-all">
      {code}
    </span>
  );
}

function CtaButton({
  children,
  size = "lg",
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <a
      href={AFFILIATE_URL}
      rel="noopener noreferrer sponsored"
      className={`glow-primary inline-flex items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02] active:scale-100 ${
        size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"
      }`}
    >
      {children}
    </a>
  );
}

const plans = [
  {
    name: "Starter",
    price: "297",
    priceWithCoupon: "197",
    features: [
      "Até 5 pipelines (máx. 8 etapas)",
      "Até 5.000 leads",
      "4 membros da equipe",
      "8 automações",
      "3 conexões multiatendimento",
      "3 integrações Webhooks",
    ],
  },
  {
    name: "Essential",
    price: "460",
    priceWithCoupon: "360",
    tag: "Melhor custo-benefício",
    features: [
      "Até 20 pipelines (máx. 15 etapas)",
      "Até 100.000 leads",
      "15 membros da equipe",
      "20 automações",
      "10 conexões multiatendimento",
      "15 integrações Webhooks",
      "Dashboards de negócios",
      "Acesso à API",
    ],
  },
  {
    name: "Pro",
    price: "807",
    priceWithCoupon: "707",
    tag: "Mais vendido",
    highlight: true,
    features: [
      "Pipelines ilimitadas",
      "Leads ilimitados",
      "Membros ilimitados",
      "Automações ilimitadas",
      "Conexões ilimitadas",
      "Webhooks ilimitados",
      "Dashboards de negócios",
      "Acesso total à API",
    ],
  },
];

const features = [
  {
    icon: "🤖",
    title: "Crazy IA Integrada",
    description:
      "Detecta intenção de compra, sentimento e comportamento. Automações baseadas em dados reais, não achismos.",
  },
  {
    icon: "📊",
    title: "BI Interno Completo",
    description:
      "Funil com LTV, CAC, tempo por etapa, taxa de conversão por origem. Tudo em dashboards visuais e em tempo real.",
  },
  {
    icon: "💬",
    title: "Multiatendimento Conectado",
    description:
      "WhatsApp, Instagram e Facebook com distribuição inteligente, fila e SLAs. Tudo em um só lugar.",
  },
  {
    icon: "⚡",
    title: "Automações Inteligentes",
    description:
      "Organiza leads em jornadas reais. Automatiza mensagens, tarefas e ações com regras de negócio.",
  },
  {
    icon: "🔗",
    title: "API e Integrações",
    description:
      "Conecte qualquer coisa, automatize tudo. Webhooks, API avançada e integrações com as principais ferramentas.",
  },
  {
    icon: "📋",
    title: "Kanbans Avançados",
    description:
      "Pipelines adaptáveis ao seu processo comercial. Visualize cada etapa e nunca perca uma oportunidade.",
  },
];

const stats = [
  { value: "+2.600", label: "empresas ativas" },
  { value: "+400", label: "novos clientes/mês" },
  { value: "10MM+", label: "mensagens/dia" },
  { value: "5 min", label: "SLA de suporte" },
];

const reviews = [
  {
    name: "Lucas M.",
    role: "Dono de Agência",
    text: "CRM incrível com IA de verdade. O cupom PABLO100 me economiza R$100 todo mês! Melhor investimento para minha agência.",
    rating: 5,
  },
  {
    name: "Ana C.",
    role: "Growth Hacker",
    text: "Substituiu 5 ferramentas na minha operação. O multiatendimento com WhatsApp e Instagram é perfeito.",
    rating: 5,
  },
  {
    name: "Rafael S.",
    role: "E-commerce",
    text: "Usei o cupom PABLO e já economizei mais de R$600. As automações e o BI interno são game changer.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Como usar o cupom de desconto DataCrazy?",
    a: "Acesse o link exclusivo datacrazy.io/?via=IAPABLO, escolha seu plano e na hora do pagamento insira o cupom PABLO100 ou PABLO para obter R$100 de desconto por mês.",
  },
  {
    q: "Qual o valor do desconto do cupom PABLO100?",
    a: "O cupom oferece R$100 de desconto por mês em qualquer plano. Exemplo: Plano Starter sai de R$297 por R$197/mês. São R$1.200 de economia por ano.",
  },
  {
    q: "O cupom funciona em qualquer plano?",
    a: "Sim! Os cupons PABLO100 e PABLO funcionam nos planos Starter (R$297/mês), Essential (R$460/mês) e Pro (R$807/mês).",
  },
  {
    q: "O que é a DataCrazy?",
    a: "A DataCrazy é um CRM com IA integrada para automação de vendas e atendimento. Inclui multiatendimento WhatsApp/Instagram/Facebook, BI interno, automações inteligentes e integrações via API. Mais de 2.600 empresas usam a plataforma.",
  },
  {
    q: "Qual a diferença entre os planos?",
    a: "Starter: ideal para começar com 5 pipelines e 5 mil leads. Essential: escala com 20 pipelines, 100 mil leads e API. Pro: tudo ilimitado para operações robustas.",
  },
  {
    q: "Qual a diferença entre o cupom PABLO100 e PABLO?",
    a: "Nenhuma! Ambos oferecem R$100 de desconto por mês. Use o que preferir no checkout.",
  },
];

const replacesTools = [
  "CRMs tradicionais",
  "Ferramentas de multiatendimento",
  "Plataformas de automação",
  "Chatbots",
  "Ferramentas de tarefas",
  "Ferramentas de BI",
];

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-primary">Crazy</span>Desconto
          </span>
          <CtaButton size="md">Usar Cupom PABLO100</CtaButton>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="gradient-hero relative py-20 sm:py-28" aria-labelledby="hero-title">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Cupom Exclusivo 2026 — Válido Agora
            </p>
            <h1
              id="hero-title"
              className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Ganhe{" "}
              <span className="text-primary">R$100 de desconto</span> por mês
              no CRM com IA mais completo do Brasil
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              A <strong className="text-foreground">DataCrazy</strong> não é apenas um CRM — é uma máquina
              de vendas com IA, automação, multiatendimento e BI interno. Use os
              cupons <strong className="text-primary">PABLO100</strong> ou{" "}
              <strong className="text-primary">PABLO</strong> e economize{" "}
              <strong className="text-foreground">R$1.200 por ano</strong>.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CtaButton>Ativar Desconto de R$100/mês →</CtaButton>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm text-muted-foreground">Cupons:</span>
              <CouponBadge code="PABLO100" />
              <span className="text-muted-foreground">ou</span>
              <CouponBadge code="PABLO" />
            </div>

            {/* Stats bar */}
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-card p-4">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANOS E PREÇOS */}
        <section className="py-20" aria-labelledby="pricing-title">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              id="pricing-title"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Planos com <span className="text-primary">R$100 OFF</span>/mês
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              Preço original vs. preço com cupom PABLO100 — o desconto é aplicado todo mês
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border-2 p-8 ${
                    plan.highlight
                      ? "border-primary glow-primary bg-card"
                      : "border-border bg-card"
                  }`}
                >
                  {plan.tag && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide ${
                        plan.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted-foreground/20 text-muted-foreground"
                      }`}
                    >
                      {plan.tag}
                    </span>
                  )}

                  <h3 className="text-xl font-bold">{plan.name}</h3>

                  <div className="mt-4">
                    <p className="flex items-baseline gap-2">
                      <span className="text-lg text-muted-foreground line-through">
                        R${plan.price}
                      </span>
                      <span className="rounded bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary">
                        -R$100
                      </span>
                    </p>
                    <p className="mt-1 flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-primary">
                        R${plan.priceWithCoupon}
                      </span>
                      <span className="text-muted-foreground">/mês</span>
                    </p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-primary">✓</span>
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={AFFILIATE_URL}
                    rel="noopener noreferrer sponsored"
                    className={`mt-8 block rounded-xl py-3 text-center font-bold transition-all hover:scale-[1.02] ${
                      plan.highlight
                        ? "bg-primary text-primary-foreground glow-primary"
                        : "border-2 border-primary/30 text-primary hover:bg-primary/10"
                    }`}
                  >
                    Assinar {plan.name} com R$100 OFF
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              * Use o cupom <strong>PABLO100</strong> ou <strong>PABLO</strong> no
              checkout. Desconto de R$100 aplicado mensalmente. Planos anuais e
              semestrais têm descontos adicionais.
            </p>
          </div>
        </section>

        {/* O QUE É A DATACRAZY */}
        <section className="border-t border-border py-20" aria-labelledby="what-is-title">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              id="what-is-title"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Não é apenas um CRM.{" "}
              <span className="text-primary">É DataCrazy.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              IA, automações com regras de negócio inteligentes, BI interno,
              mensageria conectada e decisões em tempo real — tudo fluindo em um
              sistema criado para escalar com você.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <span className="text-3xl" role="img" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SUBSTITUI FERRAMENTAS */}
        <section className="border-t border-border py-20" aria-labelledby="replaces-title">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2
              id="replaces-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Uma plataforma que <span className="text-primary">substitui várias</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Pare de pagar por 5 ferramentas diferentes. A DataCrazy unifica tudo.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {replacesTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium line-through decoration-destructive/60"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-6 py-3 text-lg font-bold text-primary">
                ✓ DataCrazy faz tudo isso
              </span>
            </div>
          </div>
        </section>

        {/* COMO USAR */}
        <section className="border-t border-border py-20" aria-labelledby="how-to-title">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              id="how-to-title"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Como usar o cupom em <span className="text-primary">3 passos</span>
            </h2>

            <ol className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Acesse o link exclusivo",
                  description:
                    "Clique no botão abaixo para acessar a DataCrazy com o link de desconto já aplicado.",
                },
                {
                  step: "2",
                  title: "Escolha seu plano",
                  description:
                    "Starter, Essential ou Pro — o cupom funciona em todos. Escolha o ideal para seu negócio.",
                },
                {
                  step: "3",
                  title: "Insira PABLO100 ou PABLO",
                  description:
                    "No checkout, insira o cupom e ganhe R$100 de desconto imediato. Todo mês.",
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="relative flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 text-center">
              <CtaButton>Acessar DataCrazy com Desconto →</CtaButton>
            </div>
          </div>
        </section>

        {/* PARA QUEM */}
        <section className="border-t border-border py-20" aria-labelledby="segments-title">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              id="segments-title"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Feito para quem <span className="text-primary">vende e escala</span>
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[
                "E-commerce",
                "Infoprodutores",
                "Agências",
                "Negócios Locais",
                "Assinaturas",
                "Educação e Cursos",
                "Clínicas",
                "Softwares / SaaS",
              ].map((segment) => (
                <div
                  key={segment}
                  className="rounded-xl border border-border bg-card p-4 text-center text-sm font-medium"
                >
                  {segment}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section className="border-t border-border py-20" aria-labelledby="reviews-title">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              id="reviews-title"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Quem usa DataCrazy <span className="text-primary">não volta atrás</span>
            </h2>
            <p className="mt-2 text-center text-muted-foreground">
              ⭐ 4.8/5 — Avaliações de clientes reais
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex gap-0.5 text-amber-400" aria-label={`${review.rating} de 5 estrelas`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <footer className="mt-4 border-t border-border pt-3">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="faq-section border-t border-border py-20"
          aria-labelledby="faq-title"
        >
          <div className="mx-auto max-w-3xl px-4">
            <h2
              id="faq-title"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Perguntas Frequentes
            </h2>

            <dl className="mt-12 space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <dt className="text-lg font-semibold">{item.q}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          className="gradient-hero border-t border-border py-20"
          aria-labelledby="final-cta-title"
        >
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2
              id="final-cta-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Não perca:{" "}
              <span className="text-primary">R$100 OFF</span> todo mês na DataCrazy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              CRM com IA, multiatendimento, automações e BI por até{" "}
              <strong className="text-foreground">R$100 menos</strong> todo mês.
              Acesse pelo link exclusivo e use o cupom no checkout.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <CtaButton>Quero Meu Desconto de R$100/mês →</CtaButton>
              <p className="text-sm text-muted-foreground">
                Link exclusivo com desconto — válido em todos os planos
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <CouponBadge code="PABLO100" />
              <span className="self-center text-muted-foreground">ou</span>
              <CouponBadge code="PABLO" />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">CrazyDesconto</span>.
            Esta página contém links de afiliado.
          </p>
          <p className="mt-2">
            <a
              href="https://datacrazy.io"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              DataCrazy.io
            </a>{" "}
            é uma marca registrada de seus respectivos proprietários.
            Suporte: Chat 9h-22h | Meet seg-sex 10h-18h
          </p>
        </div>
      </footer>
    </>
  );
}
