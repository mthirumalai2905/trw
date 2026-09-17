"use client";

import { FlowArrow } from "@/components/diagrams/FlowArrow";

export function WwwVsRtw() {
  return (
    <div className="diagram-block my-8 overflow-hidden border border-[var(--line)]">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-[var(--line)] p-5 md:border-b-0 md:border-r">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
            World Wide Web
          </div>
          <svg viewBox="0 0 320 120" className="mt-4 h-auto w-full">
            <rect x="20" y="40" width="90" height="40" fill="#0d0f12" stroke="rgba(214,222,230,0.18)" />
            <rect x="210" y="40" width="90" height="40" fill="#0d0f12" stroke="rgba(214,222,230,0.18)" />
            <FlowArrow x1={110} y1={60} x2={210} y2={60} color="#8d949e" />
            <text x="65" y="64" textAnchor="middle" fill="#e8eaed" fontSize="11">
              Document
            </text>
            <text x="255" y="64" textAnchor="middle" fill="#e8eaed" fontSize="11">
              Document
            </text>
            <text x="160" y="28" textAnchor="middle" fill="#8d949e" fontSize="10">
              one-way hyperlink
            </text>
          </svg>
        </div>
        <div className="p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
            Real-Time Web
          </div>
          <svg viewBox="0 0 320 120" className="mt-4 h-auto w-full">
            <rect x="20" y="40" width="90" height="40" fill="#0d0f12" stroke="rgba(127,211,195,0.4)" />
            <rect x="210" y="40" width="90" height="40" fill="rgba(127,211,195,0.08)" stroke="#7fd3c3" />
            <FlowArrow x1={110} y1={52} x2={210} y2={52} />
            <FlowArrow x1={210} y1={68} x2={110} y2={68} />
            <text x="65" y="64" textAnchor="middle" fill="#e8eaed" fontSize="11">
              Endpoint
            </text>
            <text x="255" y="64" textAnchor="middle" fill="#e8eaed" fontSize="11">
              Ghost
            </text>
            <text x="160" y="28" textAnchor="middle" fill="#7fd3c3" fontSize="10">
              bidirectional / bijective
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
