import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPostDate, getPost, getRelated, posts } from "@/lib/blog";
import { CornerMarks } from "@/components/CornerMarks";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelated(post.slug);

  return (
    <article className="pb-20">
      <header className="border-b border-[var(--line)]">
        <div className="relative mx-auto mt-8 max-w-[1100px] overflow-hidden rounded-[4px]">
          <div className="relative h-[260px] md:h-[360px]">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="1100px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
            <CornerMarks />
            <div className="relative z-10 flex h-full max-w-[780px] flex-col justify-end px-5 pb-6 md:px-8 md:pb-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                <Link href="/blog" className="hover:text-white">
                  Journal
                </Link>
                <span className="mx-2">/</span>
                {post.category}
              </p>
              <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-white md:text-[42px] md:leading-[1.08]">
                {post.title}
              </h1>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/80">{post.excerpt}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
                Real Time Web · {formatPostDate(post.date)} · {post.readingMinutes} min read
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[640px] px-4 py-12 md:px-0">
        {post.body.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "text-[18px] leading-8 text-[var(--ink)] first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8]"
                : "mt-6 text-[17px] leading-8 text-[var(--ink)]/90"
            }
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-14 border-t border-[var(--line)] pt-8">
          <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
            ← All essays
          </Link>
        </div>
      </div>

      {related.length ? (
        <aside className="mx-auto max-w-[1100px] px-4 md:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Continue reading</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group block">
                <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-[4px]">
                  <Image
                    src={item.cover}
                    alt={item.coverAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    sizes="320px"
                  />
                  <CornerMarks />
                </div>
                <h2 className="font-serif text-lg leading-snug text-[var(--ink)] group-hover:text-[var(--accent)]">
                  {item.title}
                </h2>
              </Link>
            ))}
          </div>
        </aside>
      ) : null}
    </article>
  );
}
