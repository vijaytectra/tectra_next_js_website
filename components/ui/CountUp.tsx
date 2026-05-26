"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

function parseStatValue(value: string): { end: number; suffix: string } | null {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { end: Number.parseInt(match[1], 10), suffix: match[2] };
}

export default function CountUp({
  value,
  className = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const parsed = parseStatValue(value);
  const end = parsed?.end ?? 0;
  const suffix = parsed?.suffix ?? "";
  const [display, setDisplay] = useState(() => (parsed ? `0${suffix}` : value));

  useEffect(() => {
    if (!isInView) return;

    if (!parsed) {
      setDisplay(value);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, end, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(`${Math.round(latest)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, end, suffix, value, duration, parsed]);

  return (
    <span
      ref={ref}
      className={className}
      aria-live="polite"
      aria-label={isInView ? value : undefined}
    >
      {display}
    </span>
  );
}
