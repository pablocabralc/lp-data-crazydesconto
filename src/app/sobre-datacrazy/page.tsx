import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O que é DataCrazy? CRM com IA para Vendas e Automação",
  description:
    "Conheça a DataCrazy: CRM com IA integrada, multiatendimento WhatsApp/Instagram, BI interno e automações. +2.600 empresas. Meta Business Partner. Sede em Balneário Camboriú, SC.",
  keywords: [
    "o que é datacrazy",
    "datacrazy CRM",
    "datacrazy review",
    "datacrazy é bom",
    "datacrazy vale a pena",
    "CRM com IA brasil",
    "datacrazy plataforma",
  ],
  alternates: {
    canonical: "/sobre-datacrazy",
  },
};

export default function SobreDataCrazy() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="text-lg font-bold tracking-tight">
            <span className="text-primary">Crazy</span>Desconto
          </a>
          <a
            href="https://datacrazy.io/?via=IAPABLO"
            rel="noopener noreferrer sponsored"
            className="glow-primary inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02]"
          >
            Usar Cupom PABLO100 →
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16">
        <article>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Sobre a plataforma
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            O que é a <span className="text-accent">DataCrazy</span>?
          </h1>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              A <strong className="text-foreground">DataCrazy</strong> é um CRM com inteligência artificial
              integrada, projetado para empresas que querem escalar vendas, automatizar atendimento e tomar
              decisões baseadas em dados reais. Não é apenas um CRM tradicional — é uma{" "}
              <strong className="text-foreground">máquina de vendas completa</strong>.
            </p>

            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-sm font-semibold text-accent">
                Importante: O CrazyDesconto não é a DataCrazy
              </p>
              <p className="mt-2 text-sm">
                Somos um <strong className="text-foreground">parceiro oficial</strong> que distribui
                cupons de desconto exclusivos. A DataCrazy é uma empresa de tecnologia independente
                (CNPJ 54.129.748/0001-18) sediada em Balneário Camboriú, SC.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground pt-4">Funcionalidades Principais</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Crazy IA Integrada",
                  desc: "Detecta intenção de compra, sentimento e comportamento dos leads. Automações baseadas em dados reais.",
                },
                {
                  title: "BI Interno",
                  desc: "Dashboards com LTV, CAC, tempo por etapa, taxa de conversão por origem. Métricas em tempo real.",
                },
                {
                  title: "Multiatendimento",
                  desc: "WhatsApp, Instagram e Facebook conectados com distribuição inteligente, fila e SLAs.",
                },
                {
                  title: "Automações Inteligentes",
                  desc: "Fluxos de automação com regras de negócio. Mensagens, tarefas e ações automáticas.",
                },
                {
                  title: "API e Integrações",
                  desc: "Webhooks e API completa para conectar qualquer ferramenta e automatizar processos.",
                },
                {
                  title: "Kanbans Avançados",
                  desc: "Pipelines customizáveis adaptadas ao seu processo comercial com visibilidade total.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground pt-4">Planos e Preços</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 font-semibold text-foreground">Plano</th>
                    <th className="pb-3 font-semibold text-foreground">Preço Original</th>
                    <th className="pb-3 font-semibold text-primary">Com Cupom PABLO100</th>
                    <th className="pb-3 font-semibold text-foreground">Preço Anual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 font-medium text-foreground">Starter</td>
                    <td className="py-3">R$297/mês</td>
                    <td className="py-3 text-primary font-semibold">R$197/mês</td>
                    <td className="py-3">R$83/mês (com cupom)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 font-medium text-foreground">Essential</td>
                    <td className="py-3">R$460/mês</td>
                    <td className="py-3 text-primary font-semibold">R$360/mês</td>
                    <td className="py-3">R$244/mês (com cupom)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 font-medium text-foreground">Pro</td>
                    <td className="py-3">R$807/mês</td>
                    <td className="py-3 text-primary font-semibold">R$707/mês</td>
                    <td className="py-3">R$592/mês (com cupom)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground pt-4">Para quem é a DataCrazy?</h2>
            <p>
              A DataCrazy atende diversos segmentos: e-commerce, infoprodutores, agências, negócios locais,
              empresas de assinatura, educação e cursos, clínicas, consultórios e softwares/SaaS. Se você
              vende, atende ou escala com dados, a plataforma foi feita para você.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-4">Números da DataCrazy</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { v: "+2.600", l: "empresas ativas" },
                { v: "+400", l: "novos clientes/mês" },
                { v: "10MM+", l: "mensagens/dia" },
                { v: "5 min", l: "SLA de suporte" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="text-xl font-bold text-accent">{s.v}</p>
                  <p className="mt-1 text-xs">{s.l}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground pt-4">Informações da Empresa</h2>
            <ul className="space-y-2">
              <li><strong className="text-foreground">Empresa:</strong> DataCrazy</li>
              <li><strong className="text-foreground">CNPJ:</strong> 54.129.748/0001-18</li>
              <li><strong className="text-foreground">Sede:</strong> Balneário Camboriú, SC</li>
              <li><strong className="text-foreground">Engenharia:</strong> Caxias do Sul, RS</li>
              <li><strong className="text-foreground">Parceiro:</strong> Meta Business Partner oficial</li>
              <li><strong className="text-foreground">Suporte:</strong> Chat 9h-22h (sáb 14h-21h) · Meet seg-sex 10h-18h · SLA 5 minutos</li>
            </ul>

            <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
              <p className="text-lg font-bold text-foreground">
                Use o cupom <span className="text-primary">PABLO100</span> ou{" "}
                <span className="text-primary">PABLO</span> e economize R$100/mês
              </p>
              <a
                href="https://datacrazy.io/?via=IAPABLO"
                rel="noopener noreferrer sponsored"
                className="glow-primary mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02]"
              >
                Acessar DataCrazy com Desconto →
              </a>
            </div>
          </div>
        </article>
      </main>

      <footer className="mt-auto border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        <p>
          <a href="/" className="underline hover:text-foreground">← Voltar para CrazyDesconto</a>
        </p>
        <p className="mt-2">
          CrazyDesconto é parceiro oficial da DataCrazy. Esta página contém links de afiliado.
        </p>
      </footer>
    </>
  );
}
