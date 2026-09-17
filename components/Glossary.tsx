import Link from "next/link";

type Term = { id: string; term: string; def: string; href?: string };

export const glossary: Term[] = [
  {
    id: "rtw",
    term: "Real-Time Web (RTW)",
    def: "A framework and network architecture for connecting live physical and virtual resources across the Internet.",
    href: "/docs/introduction",
  },
  {
    id: "mad",
    term: "Morphic Architecture Design (MAD)",
    def: "Architectural model introduced by Paal Kristian Levang in 2008. RTW is based on MAD and coordinates at least four logical ownership and operational layers.",
    href: "/docs/architecture",
  },
  {
    id: "ghost",
    term: "Ghost",
    def: "A shared-memory representation of a network resource. Each unique network resource is bijectively connected to its own ghost.",
    href: "/docs/architecture/ghost-space",
  },
  {
    id: "ghost-space",
    term: "Ghost Space",
    def: "Shared coordination environment through which the four layers can observe and process authorized updates around the same live resource.",
    href: "/docs/architecture/ghost-space",
  },
  {
    id: "bijective",
    term: "Bijective relationship",
    def: "The endpoint has one corresponding Ghost, and the Ghost represents one corresponding endpoint. The relationship is uniquely addressable from both sides.",
    href: "/docs/architecture/ghost-space",
  },
  {
    id: "data-channel",
    term: "Data channel",
    def: "A way to describe how a linking path collects data sources into a channel of data associated with a user's ghost in a local service.",
    href: "/docs/architecture/data-channels",
  },
  {
    id: "morph",
    term: "Morphing",
    def: "Transforming data along the linking path to fit a local data model. Each service operates only on local data structures.",
  },
  {
    id: "normalizer",
    term: "Normalizer",
    def: "To link a data source and morph the data to fit the local data model.",
    href: "/docs/architecture/interoperability",
  },
  {
    id: "materializer",
    term: "Materializer",
    def: "If a service offers to make changes to the data after the local data model has been updated.",
    href: "/docs/architecture/interoperability",
  },
  {
    id: "kernelizer",
    term: "Kernelizer",
    def: "Allows an endpoint to receive a self-contained message before the data stream, so program and interface can be built without a preinstalled client.",
    href: "/docs/architecture/interoperability",
  },
  {
    id: "micropage",
    term: "Micropage",
    def: "A mini description of a service and its data model. Service providers describe their own data schema availability here.",
  },
  {
    id: "ghostid",
    term: "ghostId",
    def: "Ownership of data at an endpoint is given by the ghostId. Whoever owns the ghostId owns the data at that endpoint.",
  },
  {
    id: "ghost-zero",
    term: "Ghost id zero",
    def: "The service (application-layer ghostid). Transferring ghost id zero transfers the service itself.",
  },
  {
    id: "heterogeneous",
    term: "Heterogeneous network",
    def: "A network not controlled by a single entity. It evolves as independent participants connect and manage their own domains and services.",
  },
  {
    id: "synxpass",
    term: "SynxPass",
    def: "The currently known authentication implementation used by Morph Space. Token-based; the endpoint refreshes the token every three minutes to send data.",
    href: "/docs/architecture/synxpass",
  },
  {
    id: "morph-space",
    term: "Morph Space",
    def: "Commercial platform and reference implementation through which users can establish domains, publish resources, and join the network.",
  },
  {
    id: "synx",
    term: "Synx tools",
    def: "Operational tools used to configure, administer, secure, and maintain RTW services. Current implementation uses TCP/IP with HTTPS and websocket.",
  },
];

export function GlossaryTerm({ id }: { id: string }) {
  const term = glossary.find((item) => item.id === id);
  if (!term) return null;
  return (
    <span className="border-b border-dotted border-[rgba(127,211,195,0.45)]" title={term.def}>
      {term.href ? <Link href={term.href}>{term.term}</Link> : term.term}
    </span>
  );
}
