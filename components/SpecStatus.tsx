import { clsx } from "clsx";

type Props = {
  status: "published" | "draft" | "pending" | "proposal";
  children?: React.ReactNode;
};

const copy: Record<Props["status"], { label: string; text: string }> = {
  published: {
    label: "Documented",
    text: "This page is drawn from the current RealTimeWeb.org source.",
  },
  draft: {
    label: "Architecture proposal",
    text: "Marked as draft in the source. Needs team review before publishing as final copy.",
  },
  pending: {
    label: "Specification under development",
    text: "Listed as a planned section. Body copy has not been provided yet.",
  },
  proposal: {
    label: "Implementation details coming soon",
    text: "The conceptual model is documented. Protocol-level detail is not specified in the source.",
  },
};

export function SpecStatus({ status, children }: Props) {
  const item = copy[status];
  return (
    <aside
      className={clsx(
        "mb-8 border border-[var(--line)] bg-[var(--bg-elev)] px-4 py-3 text-[13px] leading-relaxed text-[#c5c9d0]",
      )}
    >
      <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
        {item.label}
      </div>
      <p>{children ?? item.text}</p>
    </aside>
  );
}
