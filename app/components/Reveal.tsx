
"use client";

import { ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = ref.current;
    if (!wrapper) return;

    const section = wrapper.querySelector<HTMLElement>("section");
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.matchMedia(
      "(pointer: coarse)"
    ).matches;

    // IMPORTANT:
    // Never hide the whole section.
    // This prevents the black/empty screen problem.
    wrapper.style.opacity = "1";
    wrapper.style.transform = "none";

    let cards: HTMLElement[] = [];

    if (section.id === "services") {
      cards = Array.from(
        section.querySelectorAll<HTMLElement>("a")
      );
    } else if (section.id === "projects") {
      cards = Array.from(
        section.querySelectorAll<HTMLElement>(
          ".group.relative.overflow-hidden"
        )
      ).filter(
        (card) =>
          !card.parentElement?.closest(
            ".group.relative.overflow-hidden"
          )
      );
    } else if (
      section.id === "about" ||
      section.id === "why-nexora" ||
      section.id === "process"
    ) {
      cards = Array.from(
        section.querySelectorAll<HTMLElement>(".group")
      ).filter(
        (card) => !card.parentElement?.closest(".group")
      );
    }

    const cleanups: Array<() => void> = [];
    const animations: Animation[] = [];
    const animatedCards = new WeakSet<HTMLElement>();

    // Card glow and touch response
    cards.forEach((card) => {
      // Use SPAN elements so the existing CSS
      // selectors for card DIVs are not disturbed.
      const glow = document.createElement("span");
      const border = document.createElement("span");

      glow.setAttribute("aria-hidden", "true");
      border.setAttribute("aria-hidden", "true");

      Object.assign(glow.style, {
        position: "absolute",
        inset: "0",
        display: "block",
        borderRadius: "inherit",
        pointerEvents: "none",
        zIndex: "1",
        opacity: isMobile ? "0.5" : "0",
        background:
          "radial-gradient(240px circle at var(--glow-x, 65%) var(--glow-y, 30%), rgba(34,211,238,0.30), rgba(59,130,246,0.14) 35%, transparent 75%)",
        mixBlendMode: "screen",
        filter: "blur(28px)",
        transition: "opacity 300ms ease",
      } as Partial<CSSStyleDeclaration>);

      Object.assign(border.style, {
        position: "absolute",
        inset: "0",
        display: "block",
        borderRadius: "inherit",
        pointerEvents: "none",
        zIndex: "2",
        border: "1px solid rgba(103,232,249,0.5)",
        opacity: isMobile ? "0.25" : "0",
        transition: "opacity 300ms ease",
      } as Partial<CSSStyleDeclaration>);

      // Append, rather than prepend, to preserve
      // the existing card structure.
      card.append(glow, border);

      const updatePosition = (x: number, y: number) => {
        const rect = card.getBoundingClientRect();

        if (!rect.width || !rect.height) return;

        const px = Math.max(
          0,
          Math.min(100, ((x - rect.left) / rect.width) * 100)
        );

        const py = Math.max(
          0,
          Math.min(100, ((y - rect.top) / rect.height) * 100)
        );

        card.style.setProperty("--glow-x", `${px}%`);
        card.style.setProperty("--glow-y", `${py}%`);
      };

      const show = () => {
        glow.style.opacity = "1";
        border.style.opacity = "0.85";
      };

      const hide = () => {
        glow.style.opacity = isMobile ? "0.5" : "0";
        border.style.opacity = isMobile ? "0.25" : "0";
        card.style.filter = "";
      };

      const onEnter = (event: PointerEvent) => {
        if (event.pointerType === "touch") return;
        updatePosition(event.clientX, event.clientY);
        show();
      };

      const onMove = (event: PointerEvent) => {
        if (
          event.pointerType === "touch" &&
          event.buttons === 0
        ) {
          return;
        }

        updatePosition(event.clientX, event.clientY);
      };

      const onDown = (event: PointerEvent) => {
        updatePosition(event.clientX, event.clientY);
        show();

        if (event.pointerType === "touch") {
          card.style.filter = "brightness(1.08)";
        }
      };

      const onUp = () => {
        card.style.filter = "";

        if (isMobile) {
          window.setTimeout(hide, 350);
        }
      };

      const onLeave = () => hide();

      const onFocus = () => show();
      const onBlur = () => hide();

      card.addEventListener("pointerenter", onEnter);
      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerdown", onDown);
      card.addEventListener("pointerup", onUp);
      card.addEventListener("pointerleave", onLeave);
      card.addEventListener("pointercancel", onLeave);
      card.addEventListener("focusin", onFocus);
      card.addEventListener("focusout", onBlur);

      cleanups.push(() => {
        card.removeEventListener("pointerenter", onEnter);
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerdown", onDown);
        card.removeEventListener("pointerup", onUp);
        card.removeEventListener("pointerleave", onLeave);
        card.removeEventListener("pointercancel", onLeave);
        card.removeEventListener("focusin", onFocus);
        card.removeEventListener("focusout", onBlur);

        glow.remove();
        border.remove();

        card.style.filter = "";
        card.style.removeProperty("--glow-x");
        card.style.removeProperty("--glow-y");
      });
    });

    // Smooth card entrance.
    // Unlike the old code, cards never stay hidden
    // while waiting for a scroll position.
    let observer: IntersectionObserver | null = null;

    if (
      !reducedMotion &&
      "IntersectionObserver" in window
    ) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const card = entry.target as HTMLElement;

            observer?.unobserve(card);

            if (animatedCards.has(card)) return;
            animatedCards.add(card);

            const index = cards.indexOf(card);

            const startX =
              direction === "left"
                ? -28
                : direction === "right"
                  ? 28
                  : 0;

            const animation = card.animate(
              [
                {
                  opacity: 0.72,
                  transform: `translate3d(${startX}px, 42px, 0) scale(0.96)`,
                  offset: 0,
                },
                {
                  opacity: 1,
                  transform:
                    "translate3d(0, -5px, 0) scale(1.008)",
                  offset: 0.76,
                },
                {
                  opacity: 1,
                  transform:
                    "translate3d(0, 0, 0) scale(1)",
                  offset: 1,
                },
              ],
              {
                duration: isMobile ? 650 : 780,
                delay: Math.min(index % 3, 2) * 65 +
                  Math.min(delay, 200),
                easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                fill: "backwards",
              }
            );

            animations.push(animation);
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -3% 0px",
        }
      );

      cards.forEach((card) => observer?.observe(card));
    }

    return () => {
      observer?.disconnect();

      animations.forEach((animation) => {
        animation.cancel();
      });

      cleanups.forEach((cleanup) => cleanup());

      wrapper.style.opacity = "";
      wrapper.style.transform = "";
    };
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
