import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog-posts";
import type { BlogImage } from "@/lib/blog-posts";
import {
  blogPostArticleSchema,
  blogPostFaqSchema,
  blogBreadcrumbSchema,
} from "@/lib/schema";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://descontodatacrazy.com.br";
const AFFILIATE_URL = "https://datacrazy.io/?via=IAPABLO";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      images: [
        {
          url: `${SITE_URL}${post.coverImage.src}`,
          width: post.coverImage.width,
          height: post.coverImage.height,
          alt: post.coverImage.alt,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}${post.coverImage.src}`],
    },
  };
}

function renderInlineText(text: string): React.ReactNode[] {
  // Handle bold, links [text](/url), and plain text
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(
        <strong key={match.index} className="text-foreground">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("[")) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        parts.push(
          <a
            key={match.index}
            href={linkMatch[2]}
            className="text-primary underline hover:text-accent"
          >
            {linkMatch[1]}
          </a>
        );
      }
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

function renderMarkdownContent(content: string, images: BlogImage[]) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];

  function flushTable(key: number) {
    if (tableHeaders.length === 0) return null;
    const el = (
      <div key={`table-${key}`} className="my-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              {tableHeaders.map((h, i) => (
                <th key={i} className="pb-3 pr-4 font-semibold text-foreground">
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, ri) => (
              <tr key={ri} className="border-b border-border/50">
                {row.map((cell, ci) => (
                  <td key={ci} className="py-2.5 pr-4">
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableHeaders = [];
    tableRows = [];
    return el;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Image placeholder: {{IMAGE:0}}
    const imageMatch = line.match(/^\{\{IMAGE:(\d+)\}\}$/);
    if (imageMatch) {
      const imgIndex = parseInt(imageMatch[1], 10);
      const img = images[imgIndex];
      if (img) {
        elements.push(
          <figure key={`img-${i}`} className="my-8">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full rounded-xl border border-border/50"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              {img.alt}
            </figcaption>
          </figure>
        );
      }
      continue;
    }

    // Table detection
    if (line.startsWith("|") && line.endsWith("|")) {
      if (!inTable) {
        inTable = true;
        tableHeaders = line.split("|").filter(Boolean);
        continue;
      }
      if (line.includes("---")) continue;
      tableRows.push(line.split("|").filter(Boolean));
      continue;
    } else if (inTable) {
      inTable = false;
      const tableEl = flushTable(i);
      if (tableEl) elements.push(tableEl);
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-foreground">
          {renderInlineText(line.slice(3))}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mt-8 mb-3 text-xl font-semibold text-foreground">
          {renderInlineText(line.slice(4))}
        </h3>
      );
    } else if (line.match(/^\d+\.\s/)) {
      const text = line.replace(/^\d+\.\s/, "");
      elements.push(
        <li key={i} className="ml-6 mb-2 list-decimal text-muted-foreground leading-relaxed">
          {renderInlineText(text)}
        </li>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)/);
      if (match) {
        elements.push(
          <li key={i} className="ml-4 mb-2 text-muted-foreground leading-relaxed list-disc">
            <strong className="text-foreground">{match[1]}</strong>
            {match[2] ? `: ${renderInlineText(match[2])}` : ""}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 mb-2 text-muted-foreground leading-relaxed list-disc">
          {renderInlineText(line.slice(2))}
        </li>
      );
    } else if (line.trim() === "") {
      continue;
    } else {
      elements.push(
        <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
          {renderInlineText(line)}
        </p>
      );
    }
  }

  if (inTable) {
    const tableEl = flushTable(lines.length);
    if (tableEl) elements.push(tableEl);
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Related posts from data
  const relatedPosts = post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          blogPostArticleSchema(post),
          blogPostFaqSchema(post.faqs),
          blogBreadcrumbSchema(post.title, post.slug),
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

      <main className="mx-auto max-w-3xl px-4 py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <a href="/" className="hover:text-foreground">Home</a>
            </li>
            <li>/</li>
            <li>
              <a href="/blog" className="hover:text-foreground">Blog</a>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium truncate max-w-[250px]">
              {post.title}
            </li>
          </ol>
        </nav>

        <article>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="post-excerpt mt-4 text-lg text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Por {post.author}</span>
            <span>|</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt + "T00:00:00").toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>|</span>
            <span>{post.readingTime} de leitura</span>
          </div>

          {post.updatedAt !== post.publishedAt && (
            <p className="mt-2 text-xs text-muted-foreground">
              Atualizado em{" "}
              <time dateTime={post.updatedAt}>
                {new Date(post.updatedAt + "T00:00:00").toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </p>
          )}

          {/* Cover image */}
          <figure className="mt-8">
            <Image
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              width={post.coverImage.width}
              height={post.coverImage.height}
              className="w-full rounded-2xl border border-border/50"
              priority
            />
          </figure>

          <hr className="my-8 border-border/50" />

          {/* Article content with inline images */}
          <div className="prose-custom">
            {renderMarkdownContent(post.content, post.images)}
          </div>

          {/* FAQ Section */}
          {post.faqs.length > 0 && (
            <section className="mt-16" aria-labelledby="faq-title">
              <h2
                id="faq-title"
                className="text-2xl font-bold text-foreground"
              >
                Perguntas Frequentes
              </h2>
              <dl className="mt-6 space-y-4">
                {post.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm"
                  >
                    <dt className="font-semibold text-foreground">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
            <p className="text-lg font-bold text-foreground">
              Use o cupom <span className="text-primary">PABLO100</span> ou{" "}
              <span className="text-primary">PABLO</span> e economize R$100/mês
            </p>
            <a
              href={AFFILIATE_URL}
              rel="noopener noreferrer sponsored"
              className="glow-primary mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02]"
            >
              Acessar DataCrazy com Desconto →
            </a>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground">
              Continue lendo
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((rp) =>
                rp ? (
                  <a
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="card-hover flex flex-col rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm"
                  >
                    <Image
                      src={rp.coverImage.src}
                      alt={rp.coverImage.alt}
                      width={rp.coverImage.width}
                      height={rp.coverImage.height}
                      className="w-full rounded-lg border border-border/30"
                    />
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-accent">
                      {rp.category}
                    </p>
                    <h3 className="mt-1 font-semibold text-foreground leading-tight">
                      {rp.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
                      {rp.excerpt}
                    </p>
                    <span className="mt-3 text-sm font-semibold text-primary">
                      Ler artigo →
                    </span>
                  </a>
                ) : null
              )}
            </div>
          </section>
        )}
      </main>

      <footer className="mt-auto border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        <p>
          <a href="/" className="underline hover:text-foreground">
            ← Voltar para CrazyDesconto
          </a>
          {" | "}
          <a href="/blog" className="underline hover:text-foreground">
            Blog
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
