"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const HERO_IMAGE_WIDTH = 1672;
const HERO_IMAGE_HEIGHT = 941;

export default function HeroScrollBackground() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const parallaxY = useTransform(scrollY, (value) => value * 0.22);
  const smoothY = useSpring(parallaxY, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });

  const driftX = useTransform(scrollY, [0, 4000], [0, 48]);
  const scale = useTransform(scrollY, [0, 2500], [1, 1.06]);
  const smoothScale = useSpring(scale, { stiffness: 80, damping: 24 });

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-color-primary-main" />

      <motion.div
        className="absolute left-1/2 top-[42%] flex w-[clamp(260px,58vw,960px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: smoothY,
                x: driftX,
                scale: smoothScale,
              }
        }
      >
        <motion.div
          className="relative w-full"
          style={{ aspectRatio: `${HERO_IMAGE_WIDTH} / ${HERO_IMAGE_HEIGHT}` }}
          animate={
            shouldReduceMotion
              ? { y: 0, x: 0, rotate: 0, scale: 1 }
              : {
                  y: [0, -18, -8, -22, 0],
                  x: [0, 10, -6, 5, 0],
                  rotate: [0, 1, -0.6, 0.5, 0],
                  scale: [1, 1.02, 1.012, 1.025, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/logo/bg_image_hero.png"
            alt=""
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  );
}
