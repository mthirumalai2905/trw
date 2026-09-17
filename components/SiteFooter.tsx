import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-elev)]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--accent)]">REALTIMEWEB.ORG</p>
          <p className="mt-4 max-w-xs text-[13px] leading-6 text-[var(--muted)]">
            An architecture for interconnected real time digital spaces. Public documentation for
            the Real Time Web.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Documentation</p>
          <ul className="mt-3 space-y-2 text-[13px] text-[var(--ink)]">
            <li>
              <Link href="/docs/introduction">Introduction</Link>
            </li>
            <li>
              <Link href="/docs/architecture">Architecture</Link>
            </li>
            <li>
              <Link href="/docs/specification">Specification</Link>
            </li>
            <li>
              <Link href="/docs/reference/glossary">Glossary</Link>
            </li>
            <li>
              <Link href="/docs/reference/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Network</p>
          <ul className="mt-3 space-y-2 text-[13px] text-[var(--ink)]">
            <li>
              <Link href="/blog">Journal</Link>
            </li>
            <li>
              <Link href="/docs/brand">Brand strategy</Link>
            </li>
            <li>
              <a href="https://morph.space" rel="noreferrer">
                Morph.Space
              </a>
            </li>
            <li>
              <a href="https://synx.tools" rel="noreferrer">
                Synx
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Status</p>
          <ul className="mt-3 space-y-2 text-[13px] leading-6 text-[var(--muted)]">
            <li>Architecture: public</li>
            <li>Specification: in draft</li>
            <li>Join path: Morph.Space</li>
            <li>Operations: Synx</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-5 text-[12px] text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-6">
          <p>Real Time Web is the architecture. Morph Space is how you join. Synx is how you operate.</p>
          <p>Documentation site. Not a product dashboard.</p>
        </div>
      </div>
    </footer>
  );
}
