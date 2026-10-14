"use client";

import { useEffect, useRef } from "react";

type MotionBlob = {
  x: number;
  y: number;
  radius: number;
  strength: number;
  hue: number;
  speedX: number;
  speedY: number;
  phase: number;
};

export default function SectionMotion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      return;
    }

    const coarsePointer =
      window.matchMedia(
        "(pointer: coarse)"
      ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let dpr = 1;
    let frame = 0;

    let scrollY = window.scrollY;
    let pageVisible = !document.hidden;

    /*
      Desktop gets 3 moving lights.

      Mobile gets only 2, softer and cheaper.
    */
    const desktopBlobs: MotionBlob[] = [
      {
        x: 0.18,
        y: 0.22,
        radius: 230,
        strength: 0.075,
        hue: 205,
        speedX: 0.000075,
        speedY: 0.000052,
        phase: 0.4,
      },
      {
        x: 0.78,
        y: 0.38,
        radius: 270,
        strength: 0.06,
        hue: 188,
        speedX: -0.000058,
        speedY: 0.000045,
        phase: 1.8,
      },
      {
        x: 0.43,
        y: 0.78,
        radius: 290,
        strength: 0.052,
        hue: 246,
        speedX: 0.000043,
        speedY: -0.000036,
        phase: 2.7,
      },
    ];

    const mobileBlobs: MotionBlob[] = [
      {
        x: 0.22,
        y: 0.28,
        radius: 180,
        strength: 0.055,
        hue: 205,
        speedX: 0.00005,
        speedY: 0.000036,
        phase: 0.4,
      },
      {
        x: 0.76,
        y: 0.72,
        radius: 210,
        strength: 0.042,
        hue: 238,
        speedX: -0.00004,
        speedY: 0.00003,
        phase: 2.1,
      },
    ];

    const getBlobs = () =>
      coarsePointer ||
      window.innerWidth < 768
        ? mobileBlobs
        : desktopBlobs;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      /*
        Desktop can use more resolution.

        Mobile intentionally stays lower to
        avoid wasting GPU power.
      */
      dpr =
        coarsePointer ||
        width < 768
          ? Math.min(
              window.devicePixelRatio || 1,
              1
            )
          : Math.min(
              window.devicePixelRatio || 1,
              1.35
            );

      canvas.width =
        Math.round(width * dpr);

      canvas.height =
        Math.round(height * dpr);

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleVisibility = () => {
      pageVisible =
        !document.hidden;

      /*
        Restart only when tab becomes visible.
      */
      if (
        pageVisible &&
        !frame
      ) {
        frame =
          requestAnimationFrame(
            render
          );
      }
    };

    const drawBlob = (
      blob: MotionBlob,
      time: number,
      index: number
    ) => {
      /*
        Smaller travel range on mobile.
      */
      const movementScale =
        coarsePointer ||
        width < 768
          ? 0.55
          : 1;

      const driftX =
        Math.sin(
          time *
            blob.speedX +
            blob.phase
        ) *
        90 *
        movementScale;

      const driftY =
        Math.cos(
          time *
            blob.speedY +
            blob.phase
        ) *
        70 *
        movementScale;

      /*
        Very restrained parallax.
      */
      const parallax =
        scrollY *
        (
          coarsePointer
            ? 0.004
            : 0.009 +
              index * 0.002
        );

      const x =
        width *
          blob.x +
        driftX;

      const y =
        height *
          blob.y +
        driftY -
        parallax;

      const breathing =
        Math.sin(
          time * 0.00028 +
            blob.phase
        );

      const radius =
        blob.radius +
        breathing *
          (
            coarsePointer
              ? 18
              : 30
          );

      const gradient =
        ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          radius
        );

      gradient.addColorStop(
        0,
        `hsla(${blob.hue}, 100%, 60%, ${blob.strength})`
      );

      gradient.addColorStop(
        0.3,
        `hsla(${blob.hue + 10}, 100%, 56%, ${
          blob.strength * 0.52
        })`
      );

      gradient.addColorStop(
        0.62,
        `hsla(${blob.hue + 24}, 95%, 50%, ${
          blob.strength * 0.17
        })`
      );

      gradient.addColorStop(
        1,
        `hsla(${blob.hue}, 90%, 45%, 0)`
      );

      ctx.fillStyle =
        gradient;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fill();
    };

    const render = (
      time: number
    ) => {
      /*
        Stop rendering entirely when the
        browser tab isn't visible.
      */
      if (!pageVisible) {
        frame = 0;
        return;
      }

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      ctx.globalCompositeOperation =
        "screen";

      const blobs =
        getBlobs();

      blobs.forEach(
        (blob, index) => {
          drawBlob(
            blob,
            time,
            index
          );
        }
      );

      ctx.globalCompositeOperation =
        "source-over";

      frame =
        requestAnimationFrame(
          render
        );
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    frame =
      requestAnimationFrame(
        render
      );

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      if (frame) {
        cancelAnimationFrame(
          frame
        );
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "transparent",
        mixBlendMode: "screen",
        opacity: 0.64,
      }}
    />
  );
}