
"use client";

import { useEffect, useRef } from "react";

export default function SectionMotion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const mobile =
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768;

    let width = 0;
    let height = 0;
    let frame = 0;
    let lastDraw = 0;
    let scroll = window.scrollY;

    const lights = mobile
      ? [
          { x: 0.2, y: 0.25, hue: 195, radius: 210 },
          { x: 0.8, y: 0.72, hue: 235, radius: 240 },
        ]
      : [
          { x: 0.15, y: 0.2, hue: 195, radius: 300 },
          { x: 0.82, y: 0.4, hue: 215, radius: 350 },
          { x: 0.45, y: 0.85, hue: 255, radius: 320 },
        ];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        mobile ? 1 : 1.25
      );

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onScroll = () => {
      scroll = window.scrollY;
    };

    const draw = (time: number) => {
      frame = requestAnimationFrame(draw);

      if (document.hidden) return;

      // Save power on mobile.
      const frameInterval = mobile ? 50 : 33;

      if (time - lastDraw < frameInterval) return;
      lastDraw = time;

      ctx.clearRect(0, 0, width, height);

      lights.forEach((light, index) => {
        const phase = time * 0.00018 + index * 2;

        const x =
          width * light.x +
          Math.sin(phase) * (mobile ? 35 : 75);

        const y =
          height * light.y +
          Math.cos(phase * 0.8) * (mobile ? 30 : 65) -
          Math.sin(scroll * 0.001 + index) * 22;

        const radius =
          light.radius +
          Math.sin(phase * 0.65) * 25;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          radius
        );

        const strength = mobile ? 0.15 : 0.12;

        gradient.addColorStop(
          0,
          `hsla(${light.hue}, 100%, 60%, ${strength})`
        );

        gradient.addColorStop(
          0.35,
          `hsla(${light.hue + 10}, 100%, 55%, ${
            strength * 0.48
          })`
        );

        gradient.addColorStop(
          0.7,
          `hsla(${light.hue + 20}, 100%, 50%, ${
            strength * 0.12
          })`
        );

        gradient.addColorStop(
          1,
          `hsla(${light.hue}, 100%, 50%, 0)`
        );

        ctx.fillStyle = gradient;
        ctx.fillRect(
          x - radius,
          y - radius,
          radius * 2,
          radius * 2
        );
      });
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 8,
        mixBlendMode: "screen",
        opacity: 0.7,
      }}
    />
  );
}
