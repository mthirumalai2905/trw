import Image from "next/image";
import { CornerMarks } from "@/components/CornerMarks";

export function TrackingRecord() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-[1080px] items-center gap-12 px-6 py-24 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:py-32">
        <div className="relative mx-auto w-full max-w-[340px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] border border-[var(--line)] bg-black shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
            <Image
              src="/tracking-record.png"
              alt="A walking figure mapped by pose tracking, bounding boxes, and a targeting line."
              fill
              className="object-cover"
              sizes="340px"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />
            <CornerMarks />
          </div>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            The story the old web writes
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--warn)]">03  THE RECORD</p>
          <h2 className="font-serif mt-4 text-[2.1rem] leading-[1.15] text-[var(--ink)] md:text-[2.7rem]">
            The internet is a story written in bytes.
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-[1.8] text-[var(--muted)]">
            <p>
              Each byte can be a sentence about you. A photograph. A walk down the street. The
              coordinates of where you stood. The moment you looked at your phone. Everyday life,
              turned into a file someone else keeps.
            </p>
            <p>
              Unknown platforms track those moments and store them. That is how a profile is
              assembled without a room you can enter, leave, or own.
            </p>
            <p className="text-[var(--ink)]">
              We do not do that. Real Time Web does not harvest your walk, your pictures, or your
              location. We do not store that data at all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
