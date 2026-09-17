"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function JoinBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const [closeness, setCloseness] = useState(0.12);

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = sectionRef.current?.getBoundingClientRect();
    if (!box) return;
    const nx = (event.clientX - box.left) / box.width;
    const ny = (event.clientY - box.top) / box.height;
    const dist = Math.hypot(nx - 0.5, ny - 0.42);
    setCloseness(Math.max(0, 1 - dist * 1.65));
  };

  const shift = closeness * 72;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={() => setCloseness(0.12)}
      className="relative min-h-[88svh] overflow-hidden bg-black"
    >
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 w-[200%] transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${shift}px)` }}
          >
            <Image src="/join-hands.png" alt="" fill className="object-cover object-center brightness-[0.72] contrast-125" />
          </div>
        </div>
        <div className="relative w-1/2 overflow-hidden">
          <div
            className="absolute inset-y-0 right-0 w-[200%] transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${-shift}px)` }}
          >
            <Image src="/join-hands.png" alt="" fill className="object-cover object-center brightness-[0.72] contrast-125" />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7fd3c3] blur-3xl transition-opacity duration-300"
        style={{ opacity: 0.08 + closeness * 0.28 }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/50" />

      <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[760px] flex-col items-center px-5 pt-14 text-center md:pt-16">
        <h2 className="font-serif text-[2.15rem] leading-[1.12] tracking-[-0.03em] text-white md:text-[3.4rem]">
          Join the Real Time Web
        </h2>
        <p className="mt-3 max-w-[28rem] text-[14px] leading-relaxed text-white/55">
          Morph Space is how people and organizations establish a domain and enter the
          network.
        </p>
      </div>

      <a
        href="https://morph.space"
        rel="noreferrer"
        className="absolute left-1/2 top-[42%] z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 px-6 py-2.5 text-[13px] text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-black/70"
      >
        Explore Morph.Space →
      </a>
    </section>
  );
}
