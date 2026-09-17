export function MessageExample() {
  const rows = [
    { layer: "Infrastructure", who: "Hardware / connectivity provider", act: "Operate devices and transport the message" },
    { layer: "Network / security", who: "Network operator", act: "Identify, authenticate, and protect the communication" },
    { layer: "Domain / application", who: "Application developer", act: "Construct, process, send, and receive the message" },
    { layer: "Resource / ownership", who: "End user", act: "Create the message and decide to share it" },
  ];

  return (
    <div className="my-8 overflow-x-auto border border-[var(--line)]">
      <table className="w-full min-w-[540px] text-left text-[13px]">
        <thead className="border-b border-[var(--line)] font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 font-normal">Layer</th>
            <th className="px-4 py-2 font-normal">Independent participant</th>
            <th className="px-4 py-2 font-normal">Role in a message</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.layer} className="border-b border-[var(--line)] last:border-0">
              <td className="px-4 py-3 text-[var(--accent)]">{row.layer}</td>
              <td className="px-4 py-3 text-[#c5c9d0]">{row.who}</td>
              <td className="px-4 py-3 text-[#c5c9d0]">{row.act}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
