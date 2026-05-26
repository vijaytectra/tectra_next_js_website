"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type FloatingActionProps = {
  className?: string;
};

export default function FloatingAction({ className = "" }: FloatingActionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-label="Open assistant"
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 1, scale: 1, y: [0, -5, 0] }
      }
      transition={
        shouldReduceMotion
          ? { delay: 0.55, duration: 0.45 }
          : {
              opacity: { delay: 0.55, duration: 0.45 },
              scale: { delay: 0.55, duration: 0.45 },
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : { scale: 1.08, y: -4, rotate: 2, transition: { type: "spring", stiffness: 380, damping: 18 } }
      }
      whileTap={{ scale: 0.94 }}
    >
      <Image
        src="/logo/bg_chatbot.svg"
        alt=""
        width={64}
        height={64}
        unoptimized
        className="absolute inset-0 h-16 w-16 rounded-2xl"
        aria-hidden
      />
      <motion.span
        className="relative z-10 flex items-center justify-center"
        animate={shouldReduceMotion ? undefined : { rotate: [0, 8, -8, 0], scale: [1, 1.05, 1, 1.05, 1] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src="/logo/chatbot_sparkle.svg"
          alt=""
          width={32}
          height={32}
          unoptimized
          className="h-8 w-8"
          aria-hidden
        />
      </motion.span>
    </motion.button>
  );
}
