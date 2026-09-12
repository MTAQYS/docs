"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Translate Y in px — classical freeze default 6. */
  y?: number;
  /** Duration ms — classical freeze 200–280. */
  duration?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "article";
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 6,
  duration = 240,
  once = true,
  as = "div",
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(reduced);
  const Tag = as as ElementType;

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { rootMargin: "-6% 0px -6% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, once]);

  const style: CSSProperties | undefined = reduced
    ? undefined
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
        willChange: shown ? undefined : "opacity, transform",
      };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
