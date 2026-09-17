"use client";

import { useState } from "react";
import Link from "next/link";
import { FlowDown } from "@/components/diagrams/FlowArrow";

const steps = [
  {
    id: "user",
    title: "User",
    text: "A person, organization, machine, or service that needs a network identity.",
    href: "/docs/architecture/identity",
  },
  {
    id: "identity",
    title: "Identity creation",
    text: "Identity is established so the participant can be addressed in the network. How identifiers are issued is implementation-specific.",
    href: "/docs/architecture/identity",
  },
  {
    id: "synxpass",
    title: "SynxPass",
    text: "Currently there is one known authentication implementation in use: SynxPass, part of Synx Tools, used by Morph Space. It is a token-based system.",
    href: "/docs/architecture/synxpass",
  },
  {
    id: "authn",
    title: "Authentication",
    text: "The endpoint presents a token to participate. The source states the endpoint needs to refresh the token every three minutes to send data.",
    href: "/docs/architecture/authentication",
  },
  {
    id: "netid",
    title: "Network identity",
    text: "Once registered, the participant may join services by receiving access to ghosts.",
    href: "/docs/architecture/ghost-space",
  },
  {
    id: "domain",
    title: "Domain / space",
    text: "Domains and services operate at the application layer. Ownership of the service can be independent of data-layer ownership.",
    href: "/docs/architecture/domains",
  },
  {
    id: "channels",
    title: "Data channels",
    text: "Authorized data can flow along a linking path into a channel associated with a user's ghost in a local service.",
    href: "/docs/architecture/data-channels",
  },
  {
    id: "rtw",
    title: "Real Time Web",
    text: "The participant is now part of the live, bidirectional network of resources.",
    href: "/docs/introduction",
  },
];

export function SynxPassFlow() {
  const [open, setOpen] = useState("synxpass");

  return (
    <div className="diagram-block my-8 overflow-hidden border border-[var(--line)]">
      <div className="border-b border-[var(--line)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
        Conceptual identity path. Not a protocol specification.
      </div>
      <div className="grid gap-0 md:grid-cols-[220px_1fr]">
        <ol className="border-b border-[var(--line)] md:border-b-0 md:border-r">
          {steps.map((step, index) => (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => setOpen(step.id)}
                className={
                  "flex w-full items-center gap-3 px-4 py-2.5 text-left text-[13px] " +
                  (open === step.id
                    ? "bg-[var(--accent-dim)] text-[var(--ink)]"
                    : "text-[#b7bcc4] hover:text-[var(--ink)]")
                }
              >
                <span className="font-mono text-[10px] text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.title}
              </button>
              {index < steps.length - 1 ? (
                <div className="flex justify-start pl-7">
                  <FlowDown className="h-4 w-5" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="p-5">
          {steps.map((step) =>
            open === step.id ? (
              <div key={step.id}>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Expandable node
                </div>
                <div className="mt-1 text-[18px] text-[var(--ink)]">{step.title}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-[#c5c9d0]">{step.text}</p>
                <p className="mt-4 text-[13px] text-[var(--muted)]">
                  Cryptographic mechanism, token format, signing algorithm, claims, and key
                  management are not specified in the current source.
                </p>
                <Link
                  href={step.href}
                  className="mt-4 inline-block text-[13px] text-[var(--accent)]"
                >
                  Open related documentation →
                </Link>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
