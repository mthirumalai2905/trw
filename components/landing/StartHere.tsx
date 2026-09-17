import Link from "next/link";

const starts = [
  {
    href: "/docs/introduction",
    label: "Introduction",
    text: "What Real Time Web is, in specification language.",
  },
  {
    href: "/docs/architecture",
    label: "Architecture",
    text: "MAD, Ghost Space, and the layers of the network.",
  },
  {
    href: "/docs/specification",
    label: "Specification",
    text: "The evolving protocol overview. Marked where it is still pending.",
  },
  {
    href: "/blog",
    label: "Journal",
    text: "Essays on ownership, presence, and interconnected space.",
  },
];

export function StartHere() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1080px] px-6 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent)]">START HERE</p>
            <h2 className="font-serif mt-3 text-[1.85rem] leading-tight text-[var(--ink)] md:text-[2.35rem]">
              Built for people who read the architecture.
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-6 text-[var(--muted)]">
            Primary audience: architects, developers, researchers, universities, standards
            organizations, technology partners, and investors.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {starts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-[var(--line)] bg-[var(--bg-elev)] p-5 transition-colors hover:border-[var(--accent)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">{item.label}</p>
              <p className="mt-3 text-[14px] leading-6 text-[var(--muted)]">{item.text}</p>
              <p className="mt-4 font-mono text-[11px] text-[var(--ink)] group-hover:text-[var(--accent)]">Open →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
