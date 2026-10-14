"use client";

import {
  ReactNode,
  useEffect,
  useRef,
} from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
};

const clamp = (
  value: number,
  min = 0,
  max = 1
) => Math.min(max, Math.max(min, value));

const easeOutExpo = (t: number) =>
  t === 1
    ? 1
    : 1 - Math.pow(2, -10 * t);

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

    const section =
      wrapper.querySelector<HTMLElement>(
        "section"
      );

    if (!section) return;

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const isTouchDevice =
      window.matchMedia(
        "(pointer: coarse)"
      ).matches;

    let cards: HTMLElement[] = [];

    if (section.id === "services") {
      cards = Array.from(
        section.querySelectorAll<HTMLElement>(
          "a"
        )
      );
    }

    if (section.id === "projects") {
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
    }

    if (
      section.id === "about" ||
      section.id === "why-nexora"
    ) {
      cards = Array.from(
        section.querySelectorAll<HTMLElement>(
          ".group"
        )
      );
    }

    /*
      ==============================================
      CARD LIGHT / TOUCH INTERACTION
      ==============================================
    */

    const cleanupFunctions: Array<
      () => void
    > = [];

    cards.forEach((card) => {
      card.style.position =
        card.style.position ||
        "relative";

      card.style.isolation =
        "isolate";

      /*
        MAIN GLOW
      */

      const glow =
        document.createElement(
          "div"
        );

      glow.setAttribute(
        "aria-hidden",
        "true"
      );

      Object.assign(
        glow.style,
        {
          position: "absolute",
          inset: "0",
          borderRadius:
            "inherit",

          pointerEvents:
            "none",

          opacity:
            "0",

          zIndex:
            "0",

          background:
            "radial-gradient(280px circle at var(--nexora-x, 50%) var(--nexora-y, 50%), rgba(34,211,238,0.24), rgba(59,130,246,0.12) 30%, rgba(99,102,241,0.05) 52%, transparent 72%)",

          transition:
            "opacity 260ms cubic-bezier(0.16,1,0.3,1)",

          mixBlendMode:
            "screen",
        } as Partial<CSSStyleDeclaration>
      );

      /*
        EDGE LIGHT
      */

      const edge =
        document.createElement(
          "div"
        );

      edge.setAttribute(
        "aria-hidden",
        "true"
      );

      Object.assign(
        edge.style,
        {
          position: "absolute",
          inset: "0",

          borderRadius:
            "inherit",

          pointerEvents:
            "none",

          opacity:
            "0",

          zIndex:
            "2",

          padding:
            "1px",

          background:
            "radial-gradient(210px circle at var(--nexora-x, 50%) var(--nexora-y, 50%), rgba(103,232,249,0.85), rgba(96,165,250,0.32) 36%, transparent 70%)",

          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",

          WebkitMaskComposite:
            "xor",

          maskComposite:
            "exclude",

          transition:
            "opacity 240ms cubic-bezier(0.16,1,0.3,1)",
        } as Partial<CSSStyleDeclaration>
      );

      /*
        SMALL TOUCH BLOOM
      */

      const touchBloom =
        document.createElement(
          "div"
        );

      touchBloom.setAttribute(
        "aria-hidden",
        "true"
      );

      Object.assign(
        touchBloom.style,
        {
          position:
            "absolute",

          width:
            "110px",

          height:
            "110px",

          left:
            "var(--nexora-x, 50%)",

          top:
            "var(--nexora-y, 50%)",

          transform:
            "translate(-50%, -50%) scale(0.55)",

          borderRadius:
            "9999px",

          pointerEvents:
            "none",

          opacity:
            "0",

          zIndex:
            "1",

          background:
            "radial-gradient(circle, rgba(103,232,249,0.30), rgba(59,130,246,0.12) 45%, transparent 72%)",

          filter:
            "blur(8px)",

          transition:
            "opacity 220ms ease, transform 320ms cubic-bezier(0.16,1,0.3,1)",
        } as Partial<CSSStyleDeclaration>
      );

      card.prepend(
        glow
      );

      card.prepend(
        touchBloom
      );

      card.prepend(
        edge
      );

      /*
        Keep actual content above
        the glow layers.
      */

      Array.from(
        card.children
      ).forEach((child) => {
        const element =
          child as HTMLElement;

        if (
          element === glow ||
          element === edge ||
          element === touchBloom
        ) {
          return;
        }

        if (
          getComputedStyle(
            element
          ).position ===
          "static"
        ) {
          element.style.position =
            "relative";
        }

        element.style.zIndex =
          "3";
      });

      let fadeTimer:
        ReturnType<
          typeof setTimeout
        > | null = null;

      const updatePosition = (
        clientX: number,
        clientY: number
      ) => {
        const rect =
          card.getBoundingClientRect();

        if (
          rect.width <= 0 ||
          rect.height <= 0
        ) {
          return;
        }

        const x =
          clientX -
          rect.left;

        const y =
          clientY -
          rect.top;

        const xPercent =
          clamp(
            x /
              rect.width
          ) * 100;

        const yPercent =
          clamp(
            y /
              rect.height
          ) * 100;

        card.style.setProperty(
          "--nexora-x",
          `${xPercent}%`
        );

        card.style.setProperty(
          "--nexora-y",
          `${yPercent}%`
        );
      };

      const showEffect = () => {
        if (fadeTimer) {
          clearTimeout(
            fadeTimer
          );

          fadeTimer = null;
        }

        glow.style.opacity =
          isTouchDevice
            ? "1"
            : "0.9";

        edge.style.opacity =
          "1";

        card.style.boxShadow =
          isTouchDevice
            ? "0 22px 70px rgba(0,0,0,0.42), 0 0 34px rgba(34,211,238,0.08)"
            : "0 28px 90px rgba(0,0,0,0.42), 0 0 42px rgba(37,99,235,0.06)";
      };

      const hideEffect = () => {
        glow.style.opacity =
          "0";

        edge.style.opacity =
          "0";

        touchBloom.style.opacity =
          "0";

        touchBloom.style.transform =
          "translate(-50%, -50%) scale(0.55)";

        card.style.boxShadow =
          "";

        card.style.filter =
          "";

        card.style.removeProperty(
          "--touch-scale"
        );
      };

      /*
        DESKTOP
      */

      const pointerEnter = (
        event: PointerEvent
      ) => {
        if (
          event.pointerType ===
          "touch"
        ) {
          return;
        }

        updatePosition(
          event.clientX,
          event.clientY
        );

        showEffect();
      };

      const pointerMove = (
        event: PointerEvent
      ) => {
        updatePosition(
          event.clientX,
          event.clientY
        );

        if (
          event.pointerType ===
          "touch"
        ) {
          showEffect();
        }
      };

      const pointerLeave = (
        event: PointerEvent
      ) => {
        if (
          event.pointerType ===
          "touch"
        ) {
          return;
        }

        hideEffect();
      };

      /*
        MOBILE TOUCH START
      */

      const pointerDown = (
        event: PointerEvent
      ) => {
        updatePosition(
          event.clientX,
          event.clientY
        );

        showEffect();

        if (
          event.pointerType ===
          "touch"
        ) {
          touchBloom.style.opacity =
            "1";

          touchBloom.style.transform =
            "translate(-50%, -50%) scale(1)";

          /*
            Tiny physical press.
          */

          card.style.scale =
            "0.985";

          card.style.filter =
            "brightness(1.08)";
        }
      };

      /*
        MOBILE TOUCH RELEASE
      */

      const pointerUp = (
        event: PointerEvent
      ) => {
        if (
          event.pointerType !==
          "touch"
        ) {
          return;
        }

        card.style.scale =
          "1";

        card.style.filter =
          "";

        touchBloom.style.transform =
          "translate(-50%, -50%) scale(1.35)";

        touchBloom.style.opacity =
          "0";

        /*
          Let the user actually SEE the
          light before fading it away.
        */

        fadeTimer =
          setTimeout(
            () => {
              glow.style.opacity =
                "0";

              edge.style.opacity =
                "0";

              card.style.boxShadow =
                "";
            },
            420
          );
      };

      const pointerCancel = (
        event: PointerEvent
      ) => {
        if (
          event.pointerType ===
          "touch"
        ) {
          card.style.scale =
            "1";

          hideEffect();
        }
      };

      card.addEventListener(
        "pointerenter",
        pointerEnter
      );

      card.addEventListener(
        "pointermove",
        pointerMove
      );

      card.addEventListener(
        "pointerleave",
        pointerLeave
      );

      card.addEventListener(
        "pointerdown",
        pointerDown
      );

      card.addEventListener(
        "pointerup",
        pointerUp
      );

      card.addEventListener(
        "pointercancel",
        pointerCancel
      );

      cleanupFunctions.push(
        () => {
          card.removeEventListener(
            "pointerenter",
            pointerEnter
          );

          card.removeEventListener(
            "pointermove",
            pointerMove
          );

          card.removeEventListener(
            "pointerleave",
            pointerLeave
          );

          card.removeEventListener(
            "pointerdown",
            pointerDown
          );

          card.removeEventListener(
            "pointerup",
            pointerUp
          );

          card.removeEventListener(
            "pointercancel",
            pointerCancel
          );

          if (
            fadeTimer
          ) {
            clearTimeout(
              fadeTimer
            );
          }

          glow.remove();
          edge.remove();
          touchBloom.remove();

          card.style.removeProperty(
            "--nexora-x"
          );

          card.style.removeProperty(
            "--nexora-y"
          );

          card.style.boxShadow =
            "";

          card.style.filter =
            "";
        }
      );
    });

    /*
      ==============================================
      REDUCED MOTION
      ==============================================
    */

    if (
      prefersReducedMotion
    ) {
      wrapper.style.opacity =
        "1";

      wrapper.style.transform =
        "none";

      cards.forEach(
        (card) => {
          card.style.opacity =
            "1";

          card.style.translate =
            "0 0";

          card.style.scale =
            "1";
        }
      );

      return () => {
        cleanupFunctions.forEach(
          (cleanup) =>
            cleanup()
        );
      };
    }

    /*
      ==============================================
      SCROLL MOTION
      ==============================================
    */

    let sectionTop = 0;
    let sectionHeight = 0;

    let viewportHeight =
      window.innerHeight;

    let scrollFrame = 0;

    const measure = () => {
      const previousTransform =
        wrapper.style.transform;

      wrapper.style.transform =
        "none";

      const rect =
        wrapper.getBoundingClientRect();

      sectionTop =
        rect.top +
        window.scrollY;

      sectionHeight =
        rect.height;

      viewportHeight =
        window.innerHeight;

      wrapper.style.transform =
        previousTransform;
    };

    const getDirectionX = () => {
      if (
        direction ===
        "left"
      ) {
        return -42;
      }

      if (
        direction ===
        "right"
      ) {
        return 42;
      }

      return 0;
    };

    const updateScroll = () => {
      scrollFrame = 0;

      const scrollY =
        window.scrollY;

      const start =
        sectionTop -
        viewportHeight *
          0.88;

      const end =
        sectionTop -
        viewportHeight *
          0.22;

      const rawProgress =
        clamp(
          (
            scrollY -
            start
          ) /
            Math.max(
              end -
                start,
              1
            )
        );

      const progress =
        easeOutExpo(
          rawProgress
        );

      /*
        Slightly lighter movement
        on mobile.
      */

      const baseY =
        isTouchDevice
          ? 38
          : direction ===
              "scale"
            ? 36
            : 58;

      const sectionY =
        baseY *
        (1 - progress);

      const sectionX =
        getDirectionX() *
        (
          isTouchDevice
            ? 0.5
            : 1
        ) *
        (1 - progress);

      const sectionScale =
        (
          isTouchDevice
            ? 0.98
            : 0.965
        ) +
        progress *
          (
            isTouchDevice
              ? 0.02
              : 0.035
          );

      const opacity =
        0.08 +
        progress *
          0.92;

      wrapper.style.opacity =
        `${opacity}`;

      wrapper.style.transform =
        `translate3d(${sectionX}px, ${sectionY}px, 0) scale(${sectionScale})`;

      wrapper.style.transformOrigin =
        "50% 30%";

      cards.forEach(
        (card, index) => {
          const stagger =
            index *
            (
              isTouchDevice
                ? 0.035
                : 0.045
            );

          const cardRaw =
            clamp(
              (
                rawProgress -
                stagger
              ) /
                Math.max(
                  1 -
                    stagger,
                  0.01
                )
            );

          const cardProgress =
            easeOutExpo(
              cardRaw
            );

          const side =
            index % 2 === 0
              ? -1
              : 1;

          const x =
            side *
            (
              isTouchDevice
                ? 7
                : 14
            ) *
            (
              1 -
              cardProgress
            );

          const y =
            (
              isTouchDevice
                ? 48
                : 78
            ) *
            (
              1 -
              cardProgress
            );

          const scale =
            (
              isTouchDevice
                ? 0.96
                : 0.92
            ) +
            cardProgress *
              (
                isTouchDevice
                  ? 0.04
                  : 0.08
              );

          const settle =
            cardProgress >
            0.78
              ? Math.sin(
                  (
                    cardProgress -
                    0.78
                  ) /
                    0.22 *
                    Math.PI
                ) *
                (
                  isTouchDevice
                    ? -2
                    : -4
                )
              : 0;

          card.style.translate =
            `${x}px ${y + settle}px`;

          /*
            Do not overwrite mobile
            touch press while finger
            is currently down.
          */

          if (
            card.style.scale !==
            "0.985"
          ) {
            card.style.scale =
              `${scale}`;
          }

          card.style.opacity =
            `${clamp(
              cardProgress *
                1.2
            )}`;
        }
      );

      /*
        Desktop gets the extra
        parallax.

        Mobile stops once settled,
        keeping scrolling smoother.
      */

      if (!isTouchDevice) {
        const viewportCenter =
          scrollY +
          viewportHeight *
            0.5;

        const centerProgress =
          clamp(
            (
              viewportCenter -
              sectionTop
            ) /
              Math.max(
                sectionHeight,
                1
              )
          );

        if (
          rawProgress >=
          0.98
        ) {
          const parallax =
            (
              centerProgress -
              0.5
            ) *
            -14;

          wrapper.style.transform =
            `translate3d(0, ${parallax}px, 0) scale(1)`;
        }
      }

      if (
        rawProgress >=
        0.995
      ) {
        cards.forEach(
          (card) => {
            card.style.translate =
              "0 0";

            if (
              card.style.scale !==
              "0.985"
            ) {
              card.style.scale =
                "1";
            }

            card.style.opacity =
              "1";
          }
        );

        if (
          isTouchDevice
        ) {
          wrapper.style.transform =
            "translate3d(0,0,0) scale(1)";
        }
      }
    };

    const requestUpdate =
      () => {
        if (
          scrollFrame
        ) {
          return;
        }

        scrollFrame =
          requestAnimationFrame(
            updateScroll
          );
      };

    const handleResize =
      () => {
        measure();
        requestUpdate();
      };

    measure();
    updateScroll();

    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      if (
        scrollFrame
      ) {
        cancelAnimationFrame(
          scrollFrame
        );
      }

      cleanupFunctions.forEach(
        (cleanup) =>
          cleanup()
      );

      wrapper.style.opacity =
        "";

      wrapper.style.transform =
        "";

      wrapper.style.transformOrigin =
        "";

      cards.forEach(
        (card) => {
          card.style.translate =
            "";

          card.style.scale =
            "";

          card.style.opacity =
            "";
        }
      );
    };
  }, [
    delay,
    direction,
  ]);

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
}