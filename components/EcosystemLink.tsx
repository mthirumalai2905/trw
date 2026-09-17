import Link from "next/link";

type Props = {
  to: "morph" | "synx" | "rtw";
  children?: React.ReactNode;
};

const config = {
  morph: {
    kicker: "Participate",
    title: "Want to participate in the Real Time Web?",
    href: "https://morph.space",
    label: "Explore Morph.Space",
  },
  synx: {
    kicker: "Operate",
    title: "Want to configure or operate part of the network?",
    href: "https://synx.tools",
    label: "Explore Synx tools",
  },
  rtw: {
    kicker: "Understand",
    title: "Want to understand how this architecture is specified?",
    href: "/docs/specification",
    label: "Explore the technical specification",
  },
};

export function EcosystemLink({ to, children }: Props) {
  const item = config[to];
  const inner = (
    <>
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
        {item.kicker}
      </div>
      <p className="mt-1 text-[14px] text-[var(--ink)]">{children ?? item.title}</p>
      <div className="mt-2 text-[13px] text-[var(--accent)]">{item.label} →</div>
    </>
  );

  const className =
    "mt-8 block border border-[var(--line)] px-4 py-3 transition-colors hover:border-[rgba(127,211,195,0.35)]";

  if (item.href.startsWith("/")) {
    return (
      <Link href={item.href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={item.href} className={className} rel="noreferrer">
      {inner}
    </a>
  );
}
