"use client";

import { FlowArrow } from "@/components/diagrams/FlowArrow";

export function ConceptRtw() {
  return (
    <div className="diagram-block my-8 overflow-hidden border border-[var(--line)]">
      <div className="border-b border-[var(--line)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
        Figure 3-1 concept: Bijective Network System (redrawn from source description)
      </div>
      <div className="diagram-grid px-4 py-8">
        <svg viewBox="0 0 760 260" className="mx-auto h-auto w-full max-w-3xl" role="img">
          <rect x="40" y="30" width="200" height="70" fill="#0d0f12" stroke="rgba(214,222,230,0.18)" />
          <text x="140" y="60" textAnchor="middle" fill="#e8eaed" fontSize="13">
            World Wide Web
          </text>
          <text x="140" y="78" textAnchor="middle" fill="#8d949e" fontSize="10">
            documents · media
          </text>

          <rect x="280" y="20" width="200" height="90" fill="rgba(127,211,195,0.08)" stroke="#7fd3c3" />
          <text x="380" y="55" textAnchor="middle" fill="#e8eaed" fontSize="13">
            Real-Time Web
          </text>
          <text x="380" y="74" textAnchor="middle" fill="#8d949e" fontSize="10">
            live bidirectional channels
          </text>

          <rect x="520" y="30" width="200" height="70" fill="#0d0f12" stroke="rgba(214,222,230,0.18)" />
          <text x="620" y="60" textAnchor="middle" fill="#e8eaed" fontSize="13">
            Physical world
          </text>
          <text x="620" y="78" textAnchor="middle" fill="#8d949e" fontSize="10">
            devices · sensors · people
          </text>

          <FlowArrow x1={240} y1={65} x2={280} y2={65} color="#8d949e" />
          <FlowArrow x1={480} y1={65} x2={520} y2={65} />

          <text x="380" y="150" textAnchor="middle" fill="#8d949e" fontSize="11">
            Dynamic data channels connect IoE resources to a service, application, or page
          </text>
          <text x="380" y="172" textAnchor="middle" fill="#8d949e" fontSize="11">
            for a specific user instance, concurrently with the existing Web
          </text>

          <rect
            data-flow="slow"
            x="160"
            y="196"
            width="440"
            height="36"
            fill="transparent"
            stroke="rgba(127,211,195,0.35)"
            strokeDasharray="5 7"
          />
          <text x="380" y="218" textAnchor="middle" fill="#7fd3c3" fontSize="11" fontFamily="ui-monospace, monospace">
            Internet of Everything participants
          </text>
        </svg>
      </div>
    </div>
  );
}
