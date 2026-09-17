import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getDoc, getDocSlugs } from "@/lib/docs";
import { mdxComponents } from "@/components/mdx";
import { SpecStatus } from "@/components/SpecStatus";
import { OnThisPage } from "@/components/OnThisPage";

type Params = { slug?: string[] };

export function generateStaticParams() {
  return getDocSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getDoc(slug ?? []);
  if (!doc) return {};
  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
  };
}

export default async function DocPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getDoc(slug ?? []);
  if (!doc) notFound();

  const status = doc.frontmatter.status ?? "published";

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_220px]">
      <article className="px-4 py-10 md:px-10">
        <p className="mb-3 font-mono text-[11px] tracking-[0.16em] text-[var(--muted)]">
          DOCUMENTATION
        </p>
        <div className="prose-rtw">
          {status !== "published" ? (
            <SpecStatus status={status === "draft" ? "draft" : "pending"} />
          ) : null}
          <h1>{doc.frontmatter.title}</h1>
          {doc.frontmatter.description ? (
            <p className="!text-[17px] !text-[#d5d8dc]">{doc.frontmatter.description}</p>
          ) : null}
          <MDXRemote source={doc.content} components={mdxComponents} />
        </div>
      </article>
      <aside className="hidden border-l border-[var(--line)] xl:block">
        <div className="sticky top-12 px-4 py-10">
          <OnThisPage />
        </div>
      </aside>
    </div>
  );
}
