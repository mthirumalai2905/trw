import Link from "next/link";

const marks = ["10", "20", "30", "40", "50", "60", "70", "80"];

export function OwnershipMat() {
  return (
    <section className="cutting-mat relative overflow-hidden px-10 py-24 md:px-14 md:py-32">
      <div className="pointer-events-none absolute inset-y-8 left-2 hidden flex-col justify-between py-6 font-mono text-[9px] tracking-widest text-[#d6ba5c]/70 md:flex">
        {marks.map((mark) => (
          <span key={mark}>{mark}</span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-10 top-3 hidden justify-between font-mono text-[9px] tracking-widest text-[#d6ba5c]/70 md:flex">
        {marks.map((mark) => (
          <span key={mark}>{mark}</span>
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[420px] max-w-[720px] items-center justify-center">
        <div className="quote-plate w-full max-w-[34rem] px-8 py-10 text-center md:px-12 md:py-12">
          <p className="font-serif text-[1.85rem] leading-[1.25] text-[#f3ead2] md:text-[2.35rem]">
            Don’t let unknown platforms govern your data.
            <br />
            Be the owner of your own data.
          </p>
          <p className="mx-auto mt-6 max-w-[28rem] text-[13px] leading-relaxed text-[#d7c89a]/80">
            RTW keeps data associated with the resource and domain where it was generated. The
            owner decides whether it is available, who may access it, and under which conditions
            it may be used.
          </p>
          <Link
            href="/docs/architecture/resource"
            className="mt-6 inline-block font-mono text-[11px] tracking-[0.14em] text-[#e6d7a8] hover:text-white"
          >
            Resource / Ownership Layer →
          </Link>
        </div>
      </div>
    </section>
  );
}
