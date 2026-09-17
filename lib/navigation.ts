export type DocStatus = "published" | "draft" | "pending";

export type NavItem = {
  title: string;
  href: string;
  status?: DocStatus;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const nav: NavGroup[] = [
  {
    title: "Introduction",
    items: [
      { title: "What is Real Time Web?", href: "/docs/introduction" },
      { title: "Why Real Time Web?", href: "/docs/introduction/why" },
      { title: "How it works", href: "/docs/introduction/how-it-works" },
      { title: "Vision and principles", href: "/docs/introduction/vision" },
    ],
  },
  {
    title: "Architecture",
    items: [
      { title: "Morphic Architecture", href: "/docs/architecture" },
      { title: "Infrastructure Layer", href: "/docs/architecture/infrastructure" },
      { title: "Network / Security Layer", href: "/docs/architecture/network" },
      { title: "Domain / Application Layer", href: "/docs/architecture/domain" },
      { title: "Resource / Ownership Layer", href: "/docs/architecture/resource" },
      { title: "Ghost Space", href: "/docs/architecture/ghost-space" },
      { title: "Identity", href: "/docs/architecture/identity", status: "draft" },
      { title: "Domains", href: "/docs/architecture/domains", status: "draft" },
      { title: "Data Channels", href: "/docs/architecture/data-channels", status: "draft" },
      { title: "Discovery", href: "/docs/architecture/discovery", status: "draft" },
      { title: "Authentication", href: "/docs/architecture/authentication", status: "draft" },
      { title: "SynxPass", href: "/docs/architecture/synxpass", status: "draft" },
      { title: "Interoperability", href: "/docs/architecture/interoperability", status: "draft" },
    ],
  },
  {
    title: "Brand",
    items: [
      { title: "Introduction", href: "/docs/brand" },
      { title: "Vision", href: "/docs/brand/vision" },
      { title: "Mission", href: "/docs/brand/mission" },
      { title: "Values", href: "/docs/brand/values" },
      { title: "Brand Personality", href: "/docs/brand/personality" },
      { title: "Target Audience", href: "/docs/brand/audience" },
      { title: "Position", href: "/docs/brand/position" },
      { title: "Brand Promise", href: "/docs/brand/promise" },
      { title: "Brand Proof", href: "/docs/brand/proof" },
      { title: "Brand Concept", href: "/docs/brand/concept" },
    ],
  },
  {
    title: "Specification",
    items: [
      { title: "Protocol Overview", href: "/docs/specification", status: "pending" },
      { title: "Network Specification", href: "/docs/specification/network", status: "pending" },
      { title: "Identity Specification", href: "/docs/specification/identity", status: "pending" },
      { title: "Data Channels", href: "/docs/specification/data-channels", status: "pending" },
      { title: "Communication", href: "/docs/specification/communication", status: "pending" },
      { title: "Security", href: "/docs/specification/security", status: "pending" },
      { title: "Version History", href: "/docs/specification/versions", status: "pending" },
    ],
  },
  {
    title: "Research",
    items: [
      { title: "Technical Resources", href: "/docs/research", status: "pending" },
      { title: "Experiments", href: "/docs/research/experiments", status: "pending" },
      { title: "Reference Implementations", href: "/docs/research/implementations", status: "pending" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "Glossary", href: "/docs/reference/glossary" },
      { title: "FAQ", href: "/docs/reference/faq" },
      { title: "Governance", href: "/docs/reference/governance", status: "pending" },
      { title: "Contributing", href: "/docs/reference/contributing", status: "pending" },
    ],
  },
];

export const explorePaths = [
  {
    href: "/docs/architecture",
    label: "Architecture",
    text: "Understand how the Real Time Web is structured.",
  },
  {
    href: "/docs/architecture/identity",
    label: "Identity",
    text: "Understand identities, domains, and SynxPass.",
  },
  {
    href: "/docs/architecture/data-channels",
    label: "Data",
    text: "Understand real-time data channels and shared state.",
  },
  {
    href: "/docs/specification",
    label: "Specification",
    text: "Explore the evolving technical specification.",
  },
  {
    href: "/docs/research",
    label: "Research",
    text: "Explore experiments and technical resources.",
  },
];
