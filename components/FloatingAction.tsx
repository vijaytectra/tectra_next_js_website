"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type FloatingActionProps = {
  className?: string;
  disableFloat?: boolean;
};

export default function FloatingAction({
  className = "",
  disableFloat = false,
}: FloatingActionProps) {
  const shouldReduceMotion = useReducedMotion();
  const isStatic = shouldReduceMotion || disableFloat;

  return (
    <motion.button
      type="button"
      aria-label="Open assistant"
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-[0.179px] border-[#ffffff]/50 bg-[#18181E] ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        isStatic
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 1, scale: 1, y: [0, -5, 0] }
      }
      transition={
        isStatic
          ? { delay: 0.55, duration: 0.45 }
          : {
              opacity: { delay: 0.55, duration: 0.45 },
              scale: { delay: 0.55, duration: 0.45 },
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            }
      }
      whileHover={
        disableFloat
          ? undefined
          : shouldReduceMotion
          ? undefined
          : {
              scale: 1.08,
              y: -4,
              rotate: 2,
              transition: { type: "spring", stiffness: 380, damping: 18 },
            }
      }
      whileTap={{ scale: 0.94 }}
    >
      <Image
        src="/logo/bg_chatbot.svg"
        alt=""
        width={56}
        height={56}
        unoptimized
        className="absolute inset-0 h-14 w-14 rounded-2xl"
        aria-hidden
      />
      <motion.span
        className="relative z-10 flex items-center justify-center"
        animate={isStatic ? undefined : { rotate: [0, 8, -8, 0], scale: [1, 1.05, 1, 1.05, 1] }}
        transition={
          isStatic
            ? undefined
            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src="/logo/chatbot_sparkle.svg"
          alt=""
          width={28}
          height={28}
          unoptimized
          className="h-7 w-7"
          aria-hidden
        />
      </motion.span>
    </motion.button>
  );
}
