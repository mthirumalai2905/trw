import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal",
  description: "Essays from the Real Time Web on ownership, presence, and interconnected digital spaces.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-[1240px] px-4 py-14 md:px-6 md:py-16">
      <BlogIndex posts={posts} />
    </main>
  );
}
