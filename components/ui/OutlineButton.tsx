"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ArrowRight from "./ArrowRight";

type OutlineButtonProps = {
  href: string;
  children: string;
  variant?: "dark" | "dark-muted" | "light" | "solid-black";
  className?: string;
  circleOffset?: { left: string; top: string };
};

const variantStyles = {
  dark: {
    outline: "outline-color-neutral-300",
    text: "text-color-neutral-0",
    arrowTone: "dark" as const,
    circle: "bg-color-primary-main",
  },
  "dark-muted": {
    outline: "outline-color-neutral-600",
    text: "text-color-neutral-50",
    arrowTone: "dark" as const,
    circle: "bg-color-primary-main",
  },
  light: {
    outline: "outline-color-neutral-300",
    text: "text-color-primary-main",
    arrowTone: "light" as const,
    circle: "bg-color-primary-main",
  },
  "solid-black": {
    outline:
      "border border-color-primary-main bg-color-primary-main outline-none",
    text: "text-color-neutral-0",
    arrowTone: "dark" as const,
    circle: "bg-color-neutral-800",
  },
};

export default function OutlineButton({
  href,
  children,
  variant = "dark",
  className = "",
  circleOffset = { left: "-42px", top: "55px" },
}: OutlineButtonProps) {
  const styles = variantStyles[variant];
  const isSolid = variant === "solid-black";

  return (
    <motion.div
      className={`inline-block w-full sm:w-auto ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        className={`relative inline-flex h-12 w-full items-center justify-center gap-4 overflow-hidden px-6 py-3 sm:w-auto sm:gap-6 ${
          isSolid
            ? styles.outline
            : `outline outline-[0.8px] outline-offset-[-0.8px] ${styles.outline}`
        }`}
      >
        <span
          aria-hidden
          className={`pointer-events-none absolute h-72 w-72 rounded-full ${styles.circle}`}
          style={{ left: circleOffset.left, top: circleOffset.top }}
        />
        <span
          className={`relative z-10 font-dm-sans text-base font-medium leading-5 sm:text-lg sm:leading-6 ${styles.text}`}
        >
          {children}
        </span>
        <span className="relative z-10">
          <ArrowRight tone={styles.arrowTone} size={20} className="h-5 w-5" />
        </span>
      </Link>
    </motion.div>
  );
}
