import { glossary } from "@/components/Glossary";
import Link from "next/link";

export function GlossaryTable() {
  return (
    <div className="my-6 overflow-x-auto border border-[var(--line)]">
      <table className="w-full min-w-[520px] text-left text-[13px]">
        <thead className="border-b border-[var(--line)] font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 font-normal">Term</th>
            <th className="px-4 py-2 font-normal">Meaning</th>
          </tr>
        </thead>
        <tbody>
          {glossary.map((item) => (
            <tr key={item.id} className="border-b border-[var(--line)] last:border-0">
              <td className="px-4 py-3 align-top text-[var(--ink)]">
                {item.href ? <Link href={item.href}>{item.term}</Link> : item.term}
              </td>
              <td className="px-4 py-3 text-[#c5c9d0]">{item.def}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
