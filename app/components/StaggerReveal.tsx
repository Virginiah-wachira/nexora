"use client";

import {
  Children,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  distance?: number;
};

export default function StaggerReveal({
  children,
  className = "",
  stagger = 110,
  duration = 850,
  distance = 34,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);
        observer.unobserve(element);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -7% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const items = Children.toArray(children);

  return (
    <div
      ref={ref}
      className={className}
    >
      {items.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: visible ? 1 : 0,

            transform: visible
              ? "translate3d(0,0,0) scale(1)"
              : `translate3d(0,${distance}px,0) scale(0.965)`,

            filter: visible
              ? "blur(0px)"
              : "blur(5px)",

            transitionProperty:
              "opacity, transform, filter",

            transitionDuration:
              `${duration}ms`,

            transitionDelay:
              `${index * stagger}ms`,

            transitionTimingFunction:
              "cubic-bezier(0.16, 1, 0.3, 1)",

            willChange:
              "opacity, transform, filter",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}