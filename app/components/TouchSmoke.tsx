"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type TrailPoint = {
  x: number;
  y: number;
  life: number;
  maxLife: number;
};

export default function TouchSmoke() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame = 0;

    let pressing = false;
    let lastX = 0;
    let lastY = 0;

    let hue = 190;

    const points: TrailPoint[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const addPoint = (x: number, y: number) => {
      const distance = Math.hypot(x - lastX, y - lastY);

      if (distance < 4 && points.length > 0) return;

      points.push({
        x,
        y,
        life: 0,
        maxLife: 72,
      });

      if (points.length > 34) {
        points.shift();
      }

      lastX = x;
      lastY = y;
    };

    const pointerDown = (event: PointerEvent) => {
      pressing = true;

      hue = 170 + Math.random() * 170;

      lastX = event.clientX;
      lastY = event.clientY;

      addPoint(event.clientX, event.clientY);
    };

    const pointerMove = (event: PointerEvent) => {
      if (!pressing) return;

      addPoint(event.clientX, event.clientY);
    };

    const pointerUp = () => {
      pressing = false;
    };

    const drawSmoothTrail = (
      lineWidth: number,
      alpha: number,
      blur: number,
      hueShift: number
    ) => {
      const alive = points.filter(
        (point) => point.life < point.maxLife
      );

      if (alive.length < 2) return;

      ctx.save();

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.lineWidth = lineWidth;

      ctx.shadowBlur = blur;
      ctx.shadowColor = `hsla(${hue + hueShift}, 100%, 62%, ${alpha})`;

      const gradient = ctx.createLinearGradient(
        alive[0].x,
        alive[0].y,
        alive[alive.length - 1].x,
        alive[alive.length - 1].y
      );

      gradient.addColorStop(
        0,
        `hsla(${hue + 55}, 95%, 62%, 0)`
      );

      gradient.addColorStop(
        0.3,
        `hsla(${hue + 35}, 100%, 62%, ${alpha * 0.45})`
      );

      gradient.addColorStop(
        0.68,
        `hsla(${hue + 10}, 100%, 60%, ${alpha * 0.8})`
      );

      gradient.addColorStop(
        1,
        `hsla(${hue}, 100%, 68%, ${alpha})`
      );

      ctx.strokeStyle = gradient;

      ctx.beginPath();

      ctx.moveTo(alive[0].x, alive[0].y);

      for (let i = 1; i < alive.length - 1; i++) {
        const current = alive[i];
        const next = alive[i + 1];

        const midX = (current.x + next.x) / 2;
        const midY = (current.y + next.y) / 2;

        ctx.quadraticCurveTo(
          current.x,
          current.y,
          midX,
          midY
        );
      }

      const last = alive[alive.length - 1];

      ctx.lineTo(last.x, last.y);

      ctx.stroke();

      ctx.restore();
    };

    const drawHead = () => {
      if (!pressing || points.length === 0) return;

      const head = points[points.length - 1];

      const glow = ctx.createRadialGradient(
        head.x,
        head.y,
        0,
        head.x,
        head.y,
        52
      );

      glow.addColorStop(
        0,
        `hsla(${hue}, 100%, 72%, 0.7)`
      );

      glow.addColorStop(
        0.2,
        `hsla(${hue + 25}, 100%, 65%, 0.42)`
      );

      glow.addColorStop(
        0.55,
        `hsla(${hue + 55}, 95%, 60%, 0.14)`
      );

      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;

      ctx.beginPath();
      ctx.arc(head.x, head.y, 52, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      /*
       * Transparent fade instead of clearing instantly.
       * This is what lets the plume linger and dissolve.
       */
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.055)";
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "screen";

      /*
       * Several blurred layers make one fluid plume.
       * They are the SAME trail, not separate particles.
       */
      drawSmoothTrail(82, 0.055, 54, 65);
      drawSmoothTrail(54, 0.09, 38, 35);
      drawSmoothTrail(30, 0.16, 26, 15);
      drawSmoothTrail(12, 0.32, 18, 0);

      drawHead();

      ctx.globalCompositeOperation = "source-over";

      for (let i = points.length - 1; i >= 0; i--) {
        points[i].life += 1;

        /*
         * Old smoke slowly drifts upward instead of freezing.
         */
        if (!pressing) {
          points[i].y -= 0.08;
          points[i].x += Math.sin(
            (points[i].life + i) * 0.055
          ) * 0.07;
        }

        if (points[i].life >= points[i].maxLife) {
          points.splice(i, 1);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("pointerdown", pointerDown);
    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerup", pointerUp);
    window.addEventListener("pointercancel", pointerUp);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerup", pointerUp);
      window.removeEventListener("pointercancel", pointerUp);

      cancelAnimationFrame(animationFrame);
    };
  }, [ready]);

  if (!ready) return null;

  return createPortal(
    <canvas
      ref={canvasRef}
      className="nexora-qode-smoke"
      aria-hidden="true"
    />,
    document.body
  );
}