"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

function parseStatValue(value: string): { prefix: string; end: number; suffix: string; decimals: number } | null {
  const match = value.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const numStr = match[2];
  const decimalIndex = numStr.indexOf('.');
  const decimals = decimalIndex === -1 ? 0 : numStr.length - decimalIndex - 1;
  return {
    prefix: match[1],
    end: parseFloat(numStr),
    suffix: match[3],
    decimals,
  };
}

export default function CountUp({
  value,
  className = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const end = parsed?.end ?? 0;
  const prefix = parsed?.prefix ?? "";
  const suffix = parsed?.suffix ?? "";
  const decimals = parsed?.decimals ?? 0;
  const [display, setDisplay] = useState(() => (parsed ? `${prefix}0${suffix}` : value));

  useEffect(() => {
    if (!isInView) return;

    if (!parsed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTimeout(() => setDisplay(value), 0);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setTimeout(() => setDisplay(value), 0);
      return;
    }

    const controls = animate(0, end, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, end, prefix, suffix, decimals, value, duration, parsed]);

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
