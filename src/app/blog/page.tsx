import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { blogPosts } from "@/lib/blog-posts";
import {
  blogSchema,
  blogCollectionSchema,
  blogBreadcrumbSchema,
} from "@/lib/schema";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://descontodatacrazy.com.br";
const AFFILIATE_URL = "https://datacrazy.io/?via=IAPABLO";

export const metadata: Metadata = {
  title: "Blog — Dicas, Cupons e Guias sobre DataCrazy CRM",
  description:
    "Dicas, guias e comparativos sobre DataCrazy CRM com IA. Aprenda a usar cupons de desconto, conheça funcionalidades e otimize suas vendas.",
  keywords: [
    "blog datacrazy",
    "dicas CRM",
    "cupom datacrazy",
    "guia datacrazy",
    "CRM com IA dicas",
    "automação de vendas",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Blog CrazyDesconto — Dicas, Cupons e Guias DataCrazy",
    description:
      "Dicas, guias e comparativos sobre DataCrazy CRM com IA. Cupons de desconto, funcionalidades e mais.",
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          blogSchema(),
          blogCollectionSchema(blogPosts),
          blogBreadcrumbSchema(),
        ]}
      />

      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="text-lg font-bold tracking-tight">
            <span className="text-primary">Crazy</span>Desconto
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/blog"
              className="text-sm font-medium text-accent hover:text-foreground"
            >
              Blog
            </a>
            <a
              href={AFFILIATE_URL}
              rel="noopener noreferrer sponsored"
              className="glow-primary inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02]"
            >
              Usar Cupom PABLO100 →
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Blog CrazyDesconto
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Dicas, Cupons e Guias sobre{" "}
          <span className="text-accent">DataCrazy CRM</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tudo o que você precisa saber sobre o CRM com IA mais completo do
          Brasil. Guias, comparativos e cupons de desconto exclusivos.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="card-hover flex flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {post.category}
              </p>
              <h2 className="mt-2 text-xl font-bold text-foreground leading-tight">
                <a
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </a>
              </h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.readingTime} de leitura</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt + "T00:00:00").toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </div>
              <a
                href={`/blog/${post.slug}`}
                className="mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Ler artigo completo →
              </a>
            </article>
          ))}
        </div>
      </main>

      <footer className="mt-auto border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        <p>
          <a href="/" className="underline hover:text-foreground">
            ← Voltar para CrazyDesconto
          </a>
        </p>
        <p className="mt-2">
          CrazyDesconto é parceiro oficial da DataCrazy. Esta página contém
          links de afiliado.
        </p>
      </footer>
    </>
  );
}
