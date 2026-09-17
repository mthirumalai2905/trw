"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/navigation";
import { clsx } from "clsx";

export function DocsNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <nav className="space-y-1">
      {nav.map((group) => {
        const expanded = open[group.title] ?? true;
        return (
          <div key={group.title}>
            <button
              type="button"
              onClick={() =>
                setOpen((current) => ({
                  ...current,
                  [group.title]: !(current[group.title] ?? true),
                }))
              }
              className="flex w-full items-center justify-between px-2 py-2 text-left"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                {group.title}
              </span>
              <span className="font-mono text-[10px] text-[var(--muted)]">{expanded ? "–" : "+"}</span>
            </button>
            {expanded ? (
              <ul className="mb-3 space-y-0.5">
                {group.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={clsx(
                          "flex items-center justify-between gap-2 rounded-sm px-2 py-[5px] text-[13px] leading-snug",
                          active
                            ? "bg-[var(--accent-dim)] text-[var(--ink)]"
                            : "text-[#b7bcc4] hover:text-[var(--ink)]",
                        )}
                      >
                        <span>{item.title}</span>
                        {item.status === "draft" ? (
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--warn)]">
                            draft
                          </span>
                        ) : null}
                        {item.status === "pending" ? (
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--muted)]">
                            soon
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
