"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FloatingAction from "./FloatingAction";
import ArrowRight from "./ui/ArrowRight";
import Navbar from "./Navbar";

const easeOut = [0.22, 1, 0.36, 1] as const;

const labelVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1, ease: easeOut },
  },
};

const headlineLine2Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2, ease: easeOut },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.35, ease: easeOut },
  },
};

const ctaButtonVariants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
  },
  hover: {
    scale: 1.03,
    y: -3,
    boxShadow: "0 14px 40px rgba(255, 255, 255, 0.2)",
    transition: { type: "spring" as const, stiffness: 420, damping: 22 },
  },
  tap: { scale: 0.98, y: 0 },
};

const ctaShimmerVariants = {
  rest: { x: "-100%", opacity: 0 },
  hover: {
    x: "100%",
    opacity: 1,
    transition: { duration: 0.55, ease: "easeInOut" as const },
  },
};

const ctaArrowVariants = {
  rest: { x: 0 },
  hover: {
    x: 6,
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  },
};

export default function Hero() {
  return (
    <section
      className="section-hero-surface relative flex min-h-[var(--Hero-Min-Height)] h-dvh max-h-dvh w-full flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[177px] z-[1] h-[537px] w-[min(955px,90vw)] -translate-x-1/2 bg-black/50"
      />

      <div className="hero-shell relative z-10 flex h-full min-h-0 w-full flex-col justify-between pt-6 pb-8 md:pt-[var(--Hero-Padding-Top)] md:pb-[var(--Hero-Padding-Bottom)]">
        <Navbar className="shrink-0" />

        <div className="relative z-20 flex w-full shrink-0 items-end justify-between gap-4">
          <div className="w-full max-w-3xl shrink-0">
            <motion.p
              className="font-dm-mono text-base font-normal leading-5 tracking-[3.2px] text-color-neutral-300"
              variants={labelVariants}
              initial="hidden"
              animate="visible"
            >
              ENTERPRISE TECHNOLOGY ECOSYSTEM
            </motion.p>

            <h1
              id="hero-heading"
              className="mt-4 font-dm-sans text-2xl font-normal leading-9 text-color-neutral-50 sm:text-3xl sm:leading-10"
            >
              <motion.span
                className="block"
                variants={headlineVariants}
                initial="hidden"
                animate="visible"
              >
                Where Vision Becomes
              </motion.span>
              <motion.span
                className="block"
                variants={headlineLine2Variants}
                initial="hidden"
                animate="visible"
              >
                Technology.
              </motion.span>
            </h1>

            <motion.div
              className="mt-5 sm:mt-6"
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="inline-block w-full sm:w-auto"
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={ctaButtonVariants}
              >
                <Link
                  href="#quote"
                  className="relative inline-flex h-12 w-full items-center justify-center gap-6 overflow-hidden bg-color-neutral-0 px-6 py-3 outline outline-[0.38px] outline-offset-[-0.38px] outline-color-neutral-0 sm:w-auto sm:min-w-[172px]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-[-59px] top-[50px] h-72 w-72 rounded-full bg-color-primary-main"
                  />
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-Black/8 to-transparent"
                    variants={ctaShimmerVariants}
                  />
                  <span className="relative z-10 font-dm-sans text-lg font-medium leading-6 text-color-primary-main">
                    Get Quote
                  </span>
                  <motion.span
                    className="relative z-10 flex shrink-0"
                    variants={ctaArrowVariants}
                  >
                    <ArrowRight tone="light" size={20} className="h-5 w-5" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <FloatingAction className="mb-0.5 ml-auto shrink-0" />
        </div>
      </div>
    </section>
  );
}
