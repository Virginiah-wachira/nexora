"use client";

import { useEffect } from "react";

export default function HeroMotion() {
  useEffect(() => {
    const hero =
      document.querySelector<HTMLElement>(
        "#home"
      );

    if (!hero) return;

    const mainPanel =
      hero.querySelector<HTMLElement>(
        ".nexora-main-panel"
      );

    const backPanel =
      hero.querySelector<HTMLElement>(
        ".nexora-panel-back"
      );

    const midPanel =
      hero.querySelector<HTMLElement>(
        ".nexora-panel-mid"
      );

    const floatA =
      hero.querySelector<HTMLElement>(
        ".nexora-float-a"
      );

    const floatB =
      hero.querySelector<HTMLElement>(
        ".nexora-float-b"
      );

    const floatC =
      hero.querySelector<HTMLElement>(
        ".nexora-float-c"
      );

    const heading =
      hero.querySelector<HTMLElement>(
        "h1"
      );

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let pointerX = 0;
    let pointerY = 0;

    let smoothX = 0;
    let smoothY = 0;

    let scrollAmount = 0;

    let frame = 0;

    const clamp = (
      value: number,
      min: number,
      max: number
    ) =>
      Math.min(
        max,
        Math.max(min, value)
      );

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      const rect =
        hero.getBoundingClientRect();

      if (
        event.clientY <
          rect.top ||
        event.clientY >
          rect.bottom
      ) {
        return;
      }

      const normalizedX =
        (
          event.clientX -
          rect.left
        ) /
          rect.width -
        0.5;

      const normalizedY =
        (
          event.clientY -
          rect.top
        ) /
          rect.height -
        0.5;

      pointerX =
        clamp(
          normalizedX,
          -0.5,
          0.5
        );

      pointerY =
        clamp(
          normalizedY,
          -0.5,
          0.5
        );
    };

    const handlePointerLeave =
      () => {
        pointerX = 0;
        pointerY = 0;
      };

    const handleScroll = () => {
      const rect =
        hero.getBoundingClientRect();

      const progress =
        clamp(
          -rect.top /
            Math.max(
              rect.height,
              1
            ),
          0,
          1
        );

      scrollAmount =
        progress;
    };

    const setMotion = (
      element: HTMLElement | null,
      x: number,
      y: number,
      scale = 1
    ) => {
      if (!element) return;

      element.style.translate =
        `${x}px ${y}px`;

      element.style.scale =
        `${scale}`;
    };

    const animate = () => {
      /*
        Slow interpolation gives the
        heavy / premium Qode-like feel.
      */
      smoothX +=
        (
          pointerX -
          smoothX
        ) * 0.055;

      smoothY +=
        (
          pointerY -
          smoothY
        ) * 0.055;

      /*
        MAIN PANEL
        Small movement only.
      */
      setMotion(
        mainPanel,
        smoothX * 18,
        smoothY * 14 -
          scrollAmount * 12,
        1
      );

      /*
        BACK PANELS
        Move at different speeds,
        creating depth.
      */
      setMotion(
        backPanel,
        smoothX * 28,
        smoothY * 21 -
          scrollAmount * 18,
        1
      );

      setMotion(
        midPanel,
        smoothX * -22,
        smoothY * -17 -
          scrollAmount * 10,
        1
      );

      /*
        FLOATING CARDS
        Each layer reacts differently.
      */
      setMotion(
        floatA,
        smoothX * 34,
        smoothY * 26 -
          scrollAmount * 20,
        1
      );

      setMotion(
        floatB,
        smoothX * -29,
        smoothY * 23 -
          scrollAmount * 15,
        1
      );

      setMotion(
        floatC,
        smoothX * 25,
        smoothY * -29 -
          scrollAmount * 24,
        1
      );

      /*
        Heading moves MUCH less.
        This keeps the text readable while
        still making the Hero feel alive.
      */
      if (heading) {
        heading.style.translate =
          `${smoothX * -4}px ${
            smoothY * -3 -
            scrollAmount * 8
          }px`;
      }

      frame =
        requestAnimationFrame(
          animate
        );
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    hero.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    frame =
      requestAnimationFrame(
        animate
      );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      hero.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      cancelAnimationFrame(
        frame
      );

      [
        mainPanel,
        backPanel,
        midPanel,
        floatA,
        floatB,
        floatC,
        heading,
      ].forEach((element) => {
        if (!element) return;

        element.style.translate =
          "";

        element.style.scale =
          "";
      });
    };
  }, []);

  return null;
}