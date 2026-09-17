"use client";

import { FlowArrow } from "@/components/diagrams/FlowArrow";

export function EcosystemMap() {
  return (
    <div className="diagram-block my-8 overflow-hidden border border-[var(--line)]">
      <div className="border-b border-[var(--line)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
        Three locations. Do not merge these products into one navigation.
      </div>
      <div className="hidden border-b border-[var(--line)] px-10 py-2 md:block">
        <svg viewBox="0 0 900 28" className="h-7 w-full">
          <FlowArrow x1={220} y1={14} x2={340} y2={14} />
          <FlowArrow x1={560} y1={14} x2={680} y2={14} />
        </svg>
      </div>
      <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
        {[
          {
            kicker: "Understand",
            name: "RealTimeWeb.org",
            role: "Conceptual and specification layer",
            action: "Understand or implement RTW",
          },
          {
            kicker: "Participate",
            name: "Morph.Space",
            role: "Practical environment and marketplace",
            action: "Create an account or domain",
          },
          {
            kicker: "Operate",
            name: "Synx",
            role: "Operational controls and infrastructure",
            action: "Configure, secure, and administer",
          },
        ].map((item) => (
          <div key={item.name} className="bg-[var(--bg)] p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
              {item.kicker}
            </div>
            <div className="mt-2 text-[16px] text-[var(--ink)]">{item.name}</div>
            <p className="mt-2 text-[13px] leading-relaxed text-[#c5c9d0]">{item.role}</p>
            <p className="mt-3 font-mono text-[11px] text-[var(--muted)]">{item.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
