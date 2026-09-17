"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function StreakField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const streaks = Array.from({ length: 90 }, (_, i) => ({
      a: (i / 90) * Math.PI * 2 + Math.random() * 0.2,
      d: 0.08 + Math.random() * 0.9,
      len: 0.04 + Math.random() * 0.12,
      speed: 0.0018 + Math.random() * 0.0035,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
    };

    const render = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.5;
      const cy = h * 0.46;
      const max = Math.hypot(w, h) * 0.55;

      for (const streak of streaks) {
        const d0 = streak.d;
        const d1 = Math.min(1, d0 + streak.len);
        const x0 = cx + Math.cos(streak.a) * d0 * max;
        const y0 = cy + Math.sin(streak.a) * d0 * max;
        const x1 = cx + Math.cos(streak.a) * d1 * max;
        const y1 = cy + Math.sin(streak.a) * d1 * max;
        const g = ctx.createLinearGradient(x0, y0, x1, y1);
        g.addColorStop(0, "rgba(180, 255, 230, 0)");
        g.addColorStop(1, `rgba(210, 255, 245, ${0.08 + d0 * 0.22})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
        if (!reduce) {
          streak.d += streak.speed;
          if (streak.d > 1.05) streak.d = 0.06;
        }
      }

      if (!reduce) raf = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />;
}

export function CuriosityTunnel() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-black">
      <div className="tunnel-zoom absolute inset-0">
        <Image
          src="/curiosity-tunnel.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />
      <StreakField />

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[640px] flex-col items-center justify-end px-6 pb-20 text-center">
        <p className="font-serif text-[2rem] text-white md:text-[2.75rem]">Chase your curiosity</p>
        <p className="mt-4 max-w-[28rem] text-[14px] leading-relaxed text-white/70">
          The Real-Time Web is still being documented. Follow the architecture, research notes,
          and unanswered questions as the knowledge base grows.
        </p>
        <Link
          href="/docs/research"
          className="mt-7 border border-white/30 px-5 py-2.5 text-[13px] text-white transition-colors hover:border-white/70"
        >
          Open research →
        </Link>
      </div>
    </section>
  );
}
