"use client";

import { useEffect, useRef } from "react";

export function ReachField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
    };

    const inReach = (nx: number, ny: number, left: boolean) => {
      const side = left ? nx : 1 - nx;
      const palm = Math.hypot(side - 0.16, ny - 0.52) < 0.16;
      const finger = side > 0.22 && side < 0.42 && Math.abs(ny - 0.5) < 0.045 + (0.42 - side) * 0.12;
      return palm || finger;
    };

    const render = () => {
      const { width: w, height: h } = canvas;
      ctx.fillStyle = "#050607";
      ctx.fillRect(0, 0, w, h);

      const t = reduce ? 0 : frame * 0.012;
      const gap = Math.max(6, Math.floor(w / 160));

      for (let y = gap; y < h; y += gap) {
        const rowShift = ((y / gap) % 2) * (gap * 0.5);
        for (let x = gap; x < w; x += gap) {
          const nx = x / w;
          const ny = y / h;
          const left = inReach(nx, ny, true);
          const right = inReach(nx, ny, false);
          const center = Math.hypot(nx - 0.5, ny - 0.5) < 0.045;
          if (!left && !right && !center) {
            if ((x / gap + y / gap) % 7 === 0) {
              ctx.fillStyle = "rgba(232,236,240,0.06)";
              ctx.beginPath();
              ctx.arc(x + rowShift, y, 0.6, 0, Math.PI * 2);
              ctx.fill();
            }
            continue;
          }

          const twinkle = reduce ? 1 : 0.7 + Math.sin(t + x * 0.03 + y * 0.02) * 0.3;
          const size = center ? 1.6 : 1.15;
          const alpha = center ? 0.85 * twinkle : 0.38 * twinkle;
          ctx.beginPath();
          ctx.fillStyle = `rgba(232, 236, 240, ${alpha})`;
          ctx.arc(x + rowShift, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!reduce) {
        frame += 1;
        raf = requestAnimationFrame(render);
      }
    };

    resize();
    render();
    const onResize = () => {
      resize();
      if (reduce) render();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />;
}
