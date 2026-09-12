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
  /** Above-fold: stay visible; skip arming the scroll enhance. */
  immediate?: boolean;
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
  immediate = false,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  // Visible by default for SSR / no-JS — never rest at opacity:0 pre-hydration.
  const [hydrated, setHydrated] = useState(false);
  const [shown, setShown] = useState(true);
  const Tag = as as ElementType;

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (reduced || immediate) {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const inViewNow = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      return rect.top < vh * 0.94 && rect.bottom > vh * 0.06;
    };

    // Enhance-on-scroll only after mount: arm below-fold from slight Y.
    if (!inViewNow()) {
      setShown(false);
    }

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
  }, [hydrated, reduced, once, immediate]);

  // Pre-hydration / reduced: no hiding styles. Opacity 0 only after mount when armed.
  const style: CSSProperties | undefined =
    !hydrated || reduced
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
