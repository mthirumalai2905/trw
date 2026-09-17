"use client";

import { useEffect, useRef } from "react";

function drawContinents(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#fff";
  const oval = (x: number, y: number, rx: number, ry: number, rot = 0) => {
    ctx.beginPath();
    ctx.ellipse(x * w, y * h, rx * w, ry * h, rot, 0, Math.PI * 2);
    ctx.fill();
  };

  oval(0.2, 0.34, 0.11, 0.13, -0.35);
  oval(0.28, 0.28, 0.07, 0.08, 0.2);
  oval(0.18, 0.22, 0.05, 0.05);
  oval(0.32, 0.16, 0.035, 0.07);
  oval(0.26, 0.62, 0.05, 0.16, 0.25);
  oval(0.5, 0.3, 0.055, 0.07);
  oval(0.47, 0.26, 0.03, 0.04);
  oval(0.52, 0.52, 0.07, 0.16);
  oval(0.54, 0.42, 0.045, 0.08);
  oval(0.68, 0.32, 0.16, 0.12, 0.15);
  oval(0.78, 0.28, 0.08, 0.08);
  oval(0.66, 0.44, 0.04, 0.07);
  oval(0.76, 0.48, 0.05, 0.05);
  oval(0.84, 0.34, 0.025, 0.04);
  oval(0.84, 0.66, 0.055, 0.04, 0.3);
  oval(0.92, 0.72, 0.03, 0.02);
  oval(0.5, 0.92, 0.32, 0.05);
}

export function DotWorld() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const land = document.createElement("canvas");
    const landCtx = land.getContext("2d");
    if (!landCtx) return;

    let frame = 0;
    let raf = 0;
    let landPixels = new Uint8ClampedArray();
    let landW = 1;
    let landH = 1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      landW = Math.max(80, Math.floor(width / 4));
      landH = Math.max(40, Math.floor(height / 4));
      land.width = landW;
      land.height = landH;
      landCtx.fillStyle = "#000";
      landCtx.fillRect(0, 0, landW, landH);
      drawContinents(landCtx, landW, landH);
      landPixels = landCtx.getImageData(0, 0, landW, landH).data;
    };

    const render = () => {
      const { width: w, height: h } = canvas;
      ctx.fillStyle = "#050607";
      ctx.fillRect(0, 0, w, h);

      const t = reduce ? 0 : frame * 0.004;
      const gap = Math.max(5, Math.floor(w / 220));

      for (let y = gap; y < h; y += gap) {
        const rowShift = ((y / gap) % 2) * (gap * 0.5);
        for (let x = gap; x < w; x += gap) {
          const lx = Math.min(landW - 1, Math.floor((((x / w) * landW + t * 4) % landW + landW) % landW));
          const ly = Math.min(landH - 1, Math.floor((y / h) * landH));
          const landValue = landPixels[(ly * landW + lx) * 4];
          const ocean = landValue < 20;
          if (ocean && ((x / gap + y / gap) % 4 !== 0)) continue;

          const twinkle = reduce ? 1 : 0.72 + Math.sin(t * 3 + x * 0.02 + y * 0.015) * 0.28;
          const size = ocean ? 0.65 : landValue > 80 ? 1.4 : 0.95;
          const alpha = (ocean ? 0.12 : 0.24 + landValue / 280) * twinkle;
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
