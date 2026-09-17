import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "docs");

export type DocFrontmatter = {
  title: string;
  description?: string;
  status?: "published" | "draft" | "pending";
};

export type LoadedDoc = {
  slug: string[];
  frontmatter: DocFrontmatter;
  content: string;
};

function walk(dir: string, prefix: string[] = []): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const next = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(next, [...prefix, entry.name]));
    } else if (entry.name.endsWith(".mdx")) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function fileToSlug(file: string): string[] {
  const rel = path.relative(CONTENT_DIR, file).replace(/\\/g, "/");
  const withoutExt = rel.replace(/\.mdx$/, "");
  if (withoutExt === "index") return [];
  if (withoutExt.endsWith("/index")) {
    return withoutExt.split("/").slice(0, -1);
  }
  return withoutExt.split("/");
}

export function getAllDocs(): LoadedDoc[] {
  return walk(CONTENT_DIR).map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const parsed = matter(raw);
    return {
      slug: fileToSlug(file),
      frontmatter: parsed.data as DocFrontmatter,
      content: parsed.content,
    };
  });
}

export function getDoc(slug: string[]): LoadedDoc | null {
  const docs = getAllDocs();
  const key = slug.join("/");
  return docs.find((doc) => doc.slug.join("/") === key) ?? null;
}

export function getDocSlugs(): string[][] {
  return getAllDocs().map((doc) => doc.slug);
}
