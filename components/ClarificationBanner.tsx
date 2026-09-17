import Link from "next/link";

export function ClarificationBanner() {
  return (
    <div className="border border-[var(--line)] bg-[var(--bg-elev)] px-4 py-3 text-[13px] leading-relaxed text-[#c5c9d0]">
      <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--warn)]">
        Needs team approval for placement
      </div>
      <p>
        Real Time Web is a network concept and architecture. Morph Space is a commercial
        platform and reference implementation that allows people and organizations to join
        and use the network.
      </p>
      <p className="mt-2 text-[var(--muted)]">
        Canonical homes: conceptual questions on{" "}
        <Link href="/docs/introduction">RealTimeWeb.org</Link>; onboarding on Morph.Space;
        operations in Synx documentation.
      </p>
    </div>
  );
}
