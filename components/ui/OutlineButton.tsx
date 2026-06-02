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
    outline: "border border-color-neutral-300 transition-colors duration-[400ms] hover:border-color-neutral-0",
    text: "text-color-neutral-0 group-hover:text-color-neutral-900",
    arrowTone: "dark" as const,
    bgSlide: "bg-color-neutral-0",
    arrowHoverClass: "group-hover:invert-0 group-hover:brightness-0",
  },
  "dark-muted": {
    outline: "border border-color-neutral-600 transition-colors duration-[400ms] hover:border-color-neutral-0",
    text: "text-color-neutral-50 group-hover:text-color-neutral-900",
    arrowTone: "dark" as const,
    bgSlide: "bg-color-neutral-0",
    arrowHoverClass: "group-hover:invert-0 group-hover:brightness-0",
  },
  light: {
    outline: "border border-color-neutral-300 transition-colors duration-[400ms] hover:border-color-primary-main",
    text: "text-color-primary-main group-hover:text-color-neutral-0",
    arrowTone: "light" as const,
    bgSlide: "bg-color-primary-main",
    arrowHoverClass: "group-hover:invert group-hover:brightness-100",
  },
  "solid-black": {
    outline: "border border-color-primary-main bg-color-primary-main transition-colors duration-[400ms]",
    text: "text-color-neutral-0 group-hover:text-color-neutral-900",
    arrowTone: "dark" as const,
    bgSlide: "bg-color-neutral-0",
    arrowHoverClass: "group-hover:invert-0 group-hover:brightness-0",
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

  return (
    <motion.div
      className={`inline-block w-full sm:w-auto ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        className={`group relative inline-flex h-12 w-full items-center justify-center gap-4 overflow-hidden px-6 py-3 transition-colors duration-[400ms] ease-out sm:w-auto sm:gap-6 rounded-none ${styles.outline}`}
      >
        <span
          className={`absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 ${styles.bgSlide}`}
        />
        <span
          className={`relative z-10 font-dm-sans text-base font-medium leading-5 transition-colors duration-[400ms] ease-out sm:text-lg sm:leading-6 ${styles.text}`}
        >
          {children}
        </span>
        <span className="relative z-10 inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[5px] group-hover:-rotate-45">
          <ArrowRight
            tone={styles.arrowTone}
            size={20}
            className={`h-5 w-5 transition-all duration-[350ms] ease-out ${styles.arrowHoverClass}`}
          />
        </span>
      </Link>
    </motion.div>
  );
}
