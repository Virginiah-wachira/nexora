"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
};

type Ribbon = {
  points: Point[];
  hue: number;
  width: number;
  offset: number;
  blur: number;
  alpha: number;
  lag: number;
};

export default function FluidSmoke() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = 1;

    let frame = 0;

    let mouseX = -1000;
    let mouseY = -1000;

    let targetX = -1000;
    let targetY = -1000;

    let lastMove = 0;

    const ribbonLength = 22;

    const createPoints = (): Point[] =>
      Array.from(
        { length: ribbonLength },
        () => ({
          x: -1000,
          y: -1000,
        })
      );

    /*
      Qode is several separate soft strands,
      not one single glow.
    */
    const ribbons: Ribbon[] = [
      {
        points: createPoints(),
        hue: 188,
        width: 34,
        offset: -22,
        blur: 26,
        alpha: 0.13,
        lag: 0.30,
      },
      {
        points: createPoints(),
        hue: 214,
        width: 29,
        offset: -8,
        blur: 24,
        alpha: 0.12,
        lag: 0.27,
      },
      {
        points: createPoints(),
        hue: 278,
        width: 31,
        offset: 10,
        blur: 27,
        alpha: 0.115,
        lag: 0.25,
      },
      {
        points: createPoints(),
        hue: 322,
        width: 27,
        offset: 22,
        blur: 25,
        alpha: 0.105,
        lag: 0.23,
      },
      {
        points: createPoints(),
        hue: 142,
        width: 24,
        offset: 34,
        blur: 24,
        alpha: 0.09,
        lag: 0.21,
      },
    ];

    const resize = () => {
      dpr = Math.min(
        window.devicePixelRatio || 1,
        1.7
      );

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    const resetRibbons = (
      x: number,
      y: number
    ) => {
      for (const ribbon of ribbons) {
        for (const point of ribbon.points) {
          point.x = x;
          point.y = y;
        }
      }
    };

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      lastMove = performance.now();

      if (targetX < -100) {
        targetX = mouseX;
        targetY = mouseY;

        resetRibbons(
          mouseX,
          mouseY
        );
      }
    };

    const updateRibbon = (
      ribbon: Ribbon,
      time: number
    ) => {
      const points = ribbon.points;

      if (points.length === 0) return;

      /*
        Active head follows the pointer,
        but with slight lag.
      */
      points[0].x +=
        (targetX - points[0].x) *
        ribbon.lag;

      points[0].y +=
        (targetY - points[0].y) *
        ribbon.lag;

      /*
        Every following point chases the point
        in front of it. This makes the long
        flowing Qode-like curve.
      */
      for (
        let i = 1;
        i < points.length;
        i++
      ) {
        const previous =
          points[i - 1];

        const point =
          points[i];

        const follow =
          Math.max(
            0.10,
            0.22 - i * 0.004
          );

        point.x +=
          (previous.x - point.x) *
          follow;

        point.y +=
          (previous.y - point.y) *
          follow;
      }

      /*
        Small fluid movement so the strands
        don't sit perfectly on top of each other.
      */
      for (
        let i = 0;
        i < points.length;
        i++
      ) {
        const strength =
          1 -
          i /
            points.length;

        points[i].y +=
          Math.sin(
            time * 0.0014 +
              i * 0.38 +
              ribbon.offset * 0.06
          ) *
          0.16 *
          strength;

        points[i].x +=
          Math.cos(
            time * 0.0011 +
              i * 0.31 +
              ribbon.offset * 0.05
          ) *
          0.11 *
          strength;
      }
    };

    const getNormal = (
      a: Point,
      b: Point
    ) => {
      const dx =
        b.x - a.x;

      const dy =
        b.y - a.y;

      const length =
        Math.hypot(dx, dy) ||
        1;

      return {
        x: -dy / length,
        y: dx / length,
      };
    };

    const drawRibbon = (
      ribbon: Ribbon,
      time: number,
      fade: number
    ) => {
      const points = ribbon.points;

      if (
        points.length < 3 ||
        points[0].x < -100
      ) {
        return;
      }

      /*
        Offset each coloured wisp sideways.
      */
      const displayPoints =
        points.map(
          (point, index) => {
            const next =
              points[
                Math.min(
                  index + 1,
                  points.length - 1
                )
              ];

            const normal =
              getNormal(
                point,
                next
              );

            const taper =
              1 -
              index /
                points.length;

            const wave =
              Math.sin(
                time * 0.001 +
                  index * 0.42 +
                  ribbon.offset
              ) *
              3;

            const side =
              ribbon.offset *
                taper +
              wave;

            return {
              x:
                point.x +
                normal.x * side,

              y:
                point.y +
                normal.y * side,
            };
          }
        );

      const head =
        displayPoints[0];

      const tail =
        displayPoints[
          displayPoints.length - 1
        ];

      /*
        Transparent tail -> visible middle/head.
      */
      const gradient =
        ctx.createLinearGradient(
          tail.x,
          tail.y,
          head.x,
          head.y
        );

      gradient.addColorStop(
        0,
        `hsla(${ribbon.hue}, 100%, 64%, 0)`
      );

      gradient.addColorStop(
        0.20,
        `hsla(${ribbon.hue}, 100%, 64%, ${
          ribbon.alpha *
          0.24 *
          fade
        })`
      );

      gradient.addColorStop(
        0.52,
        `hsla(${ribbon.hue + 10}, 100%, 67%, ${
          ribbon.alpha *
          0.70 *
          fade
        })`
      );

      gradient.addColorStop(
        0.82,
        `hsla(${ribbon.hue + 18}, 100%, 70%, ${
          ribbon.alpha *
          fade
        })`
      );

      gradient.addColorStop(
        1,
        `hsla(${ribbon.hue + 25}, 100%, 73%, ${
          ribbon.alpha *
          0.68 *
          fade
        })`
      );

      ctx.save();

      ctx.globalCompositeOperation =
        "lighter";

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.strokeStyle =
        gradient;

      ctx.lineWidth =
        ribbon.width;

      ctx.filter =
        `blur(${ribbon.blur}px)`;

      ctx.beginPath();

      ctx.moveTo(
        displayPoints[
          displayPoints.length - 1
        ].x,
        displayPoints[
          displayPoints.length - 1
        ].y
      );

      /*
        Draw from tail toward head.
      */
      for (
        let i =
          displayPoints.length - 2;
        i > 0;
        i--
      ) {
        const point =
          displayPoints[i];

        const next =
          displayPoints[i - 1];

        const midX =
          (
            point.x +
            next.x
          ) /
          2;

        const midY =
          (
            point.y +
            next.y
          ) /
          2;

        ctx.quadraticCurveTo(
          point.x,
          point.y,
          midX,
          midY
        );
      }

      ctx.lineTo(
        head.x,
        head.y
      );

      ctx.stroke();

      ctx.restore();
    };

    const drawSecondaryGlow = (
      time: number,
      fade: number
    ) => {
      if (
        ribbons[0].points[0].x <
        -100
      ) {
        return;
      }

      const head =
        ribbons[0].points[0];

      const second =
        ribbons[0].points[3];

      const dx =
        head.x - second.x;

      const dy =
        head.y - second.y;

      const angle =
        Math.atan2(
          dy,
          dx
        );

      const speed =
        Math.hypot(
          dx,
          dy
        );

      ctx.save();

      ctx.globalCompositeOperation =
        "lighter";

      ctx.translate(
        head.x,
        head.y
      );

      ctx.rotate(
        angle
      );

      /*
        Small soft elongated head,
        not a circular pointer dot.
      */
      const radius = 26;

      ctx.scale(
        1.8 +
          Math.min(
            speed * 0.025,
            0.8
          ),
        1
      );

      const gradient =
        ctx.createRadialGradient(
          0,
          0,
          0,
          0,
          0,
          radius
        );

      gradient.addColorStop(
        0,
        `rgba(120,220,255,${
          0.08 * fade
        })`
      );

      gradient.addColorStop(
        0.38,
        `rgba(92,130,255,${
          0.05 * fade
        })`
      );

      gradient.addColorStop(
        0.7,
        `rgba(170,85,255,${
          0.022 * fade
        })`
      );

      gradient.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.filter =
        "blur(15px)";

      ctx.fillStyle =
        gradient;

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();
    };

    const render = (
      time: number
    ) => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      if (mouseX > -100) {
        /*
          Slight smoothing between raw cursor
          and the wisp system.
        */
        targetX +=
          (mouseX - targetX) *
          0.52;

        targetY +=
          (mouseY - targetY) *
          0.52;
      }

      for (const ribbon of ribbons) {
        updateRibbon(
          ribbon,
          time
        );
      }

      const idle =
        performance.now() -
        lastMove;

      /*
        Qode's colour disappears soon after
        cursor movement stops.
      */
      const fade =
        idle < 110
          ? 1
          : Math.max(
              0,
              1 -
                (
                  idle -
                  110
                ) /
                  520
            );

      if (fade > 0) {
        /*
          Draw wider strands first.
        */
        drawRibbon(
          ribbons[0],
          time,
          fade
        );

        drawRibbon(
          ribbons[2],
          time,
          fade
        );

        drawRibbon(
          ribbons[4],
          time,
          fade
        );

        drawRibbon(
          ribbons[1],
          time,
          fade
        );

        drawRibbon(
          ribbons[3],
          time,
          fade
        );

        drawSecondaryGlow(
          time,
          fade
        );
      }

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
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
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
        "pointermove",
        handlePointerMove
      );

      cancelAnimationFrame(
        frame
      );
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 4,
        pointerEvents: "none",
        background: "transparent",
        mixBlendMode: "screen",
      }}
    />,
    document.body
  );
}