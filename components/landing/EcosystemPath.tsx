import Link from "next/link";

const paths = [
  {
    step: "01",
    name: "Understand",
    href: "/docs/introduction",
    host: "RealTimeWeb.org",
    text: "The architecture, the specification, and why the network exists. Neutral and public.",
  },
  {
    step: "02",
    name: "Participate",
    href: "https://morph.space",
    host: "Morph.Space",
    text: "How people and organizations establish a domain and enter the live network.",
    external: true,
  },
  {
    step: "03",
    name: "Operate",
    href: "https://synx.tools",
    host: "Synx",
    text: "How operators configure, secure, and run their part of the network.",
    external: true,
  },
];

export function EcosystemPath() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1080px] px-6 py-20 md:py-24">
        <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent)]">THE ECOSYSTEM</p>
        <h2 className="font-serif mt-3 max-w-[20ch] text-[1.85rem] leading-tight text-[var(--ink)] md:text-[2.35rem]">
          Three places. One network.
        </h2>
        <div className="mt-10 grid gap-px bg-[var(--line)] sm:grid-cols-3">
          {paths.map((path) => {
            const className =
              "flex min-h-[220px] flex-col bg-[var(--bg)] p-6 transition-colors hover:bg-[var(--bg-elev)] md:p-8";
            const body = (
              <>
                <p className="font-mono text-[10px] tracking-[0.16em] text-[var(--muted)]">{path.step}</p>
                <h3 className="font-serif mt-3 text-[1.5rem] text-[var(--ink)]">{path.name}</h3>
                <p className="mt-1 font-mono text-[11px] text-[var(--accent)]">{path.host}</p>
                <p className="mt-4 flex-1 text-[14px] leading-7 text-[var(--muted)]">{path.text}</p>
                <p className="mt-6 font-mono text-[11px] tracking-[0.12em] text-[var(--ink)]">
                  {path.external ? "Open →" : "Read →"}
                </p>
              </>
            );
            return path.external ? (
              <a key={path.name} href={path.href} rel="noreferrer" className={className}>
                {body}
              </a>
            ) : (
              <Link key={path.name} href={path.href} className={className}>
                {body}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
