"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/navigation";
import { clsx } from "clsx";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onLanding = pathname === "/";
  const onDocs = pathname.startsWith("/docs");
  const onBlog = pathname.startsWith("/blog");
  const overHero = onLanding;

  return (
    <header
      className={
        onLanding
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-md"
      }
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span
            className={
              "font-mono text-[11px] tracking-[0.18em] " +
              (overHero ? "text-white/70" : "text-[var(--accent)]")
            }
          >
            REALTIMEWEB.ORG
          </span>
        </Link>
        <nav
          className={
            "hidden items-center gap-6 text-[13px] md:flex " +
            (overHero ? "text-white/55" : "text-[var(--muted)]")
          }
        >
          <Link
            href="/docs/introduction"
            className={clsx("hover:text-[var(--ink)]", !onLanding && onDocs && "text-[var(--ink)]")}
          >
            Documentation
          </Link>
          <Link href="/blog" className={clsx("hover:text-[var(--ink)]", !onLanding && onBlog && "text-[var(--ink)]")}>
            Journal
          </Link>
          <Link href="/docs/architecture" className="hover:text-[var(--ink)]">
            Architecture
          </Link>
          <Link href="/docs/specification" className="hover:text-[var(--ink)]">
            Specification
          </Link>
          <Link href="/docs/reference/glossary" className="hover:text-[var(--ink)]">
            Glossary
          </Link>
          <a
            href="https://morph.space"
            rel="noreferrer"
            className={
              overHero
                ? "rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] text-white hover:bg-white/16"
                : "rounded-full border border-[var(--line)] bg-[var(--bg-elev)] px-3 py-1 text-[12px] text-[var(--ink)] hover:border-[var(--accent)]"
            }
          >
            Join
          </a>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={overHero ? "text-white/70" : "text-[var(--muted)]"}
            onClick={() => setOpen((v) => !v)}
            aria-label="Open navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] px-4 py-4 md:hidden">
          <a href="https://morph.space" rel="noreferrer" className="mb-3 block text-sm text-[var(--accent)]">
            Join on Morph.Space
          </a>
          <Link href="/blog" className="mb-4 block py-1 text-sm text-[var(--ink)]" onClick={() => setOpen(false)}>
            Journal
          </Link>
          {nav.map((group) => (
            <div key={group.title} className="mb-4">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                {group.title}
              </div>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-1 text-sm text-[var(--ink)]"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
