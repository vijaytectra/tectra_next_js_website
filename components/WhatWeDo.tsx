"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import OutlineButton from "./ui/OutlineButton";
import { images } from "@/lib/images";

const SERVICE_CARDS = [
  {
    id: "01",
    title: "DESIGN",
    description:
      "We combine strategy, design, and technology to build tailored digital solutions that drive business growth.",
    image: images.whatWeDoDesign,
    bgClass: "bg-[#111111]",
  },
  {
    id: "02",
    title: "DEVELOP",
    description:
      "We develop scalable digital products engineered for performance, reliability, and seamless user experiences.",
    image: images.whatWeDoDevelop,
    bgClass: "bg-[#0d0d0d]",
  },
  {
    id: "03",
    title: "GROW",
    description:
      "We market brands through data-driven strategies, digital campaigns, and impactful digital experiences.",
    image: images.whatWeDoGrow,
    bgClass: "bg-[#0a0a0a]",
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

/* ── Layout constants ───────────────────────────────────────── */
const PEEK = 82;   // collapsed card header height (px)
const GAP = 10;   // gap between cards (px)
const EXPANDED_D = 440; // expanded height – desktop
const EXPANDED_M = 310; // expanded height – mobile

function getTopOffset(index: number, activeIndex: number, expanded: number): number {
  if (index <= activeIndex) {
    // cards at or above active sit at their natural stacked position
    return index * (PEEK + GAP);
  }
  // cards below active sit after the expanded active card
  return activeIndex * (PEEK + GAP) + expanded + GAP + (index - activeIndex - 1) * (PEEK + GAP);
}

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Maximize the scroll range: start when section enters, end when it leaves.
    // This spreads the 3 cards over the longest possible scroll distance.
    offset: ["start 95%", "end 5%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30, // Much softer spring
    damping: 20,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const index = Math.min(
      SERVICE_CARDS.length - 1,
      Math.max(0, Math.round(latest * (SERVICE_CARDS.length - 1)))
    );
    setActiveIndex(index);
  });


  const expanded = isMobile ? EXPANDED_M : EXPANDED_D;
  // total container height: one expanded + (n-1) peek strips + (n-1) gaps
  const containerH = expanded + (SERVICE_CARDS.length - 1) * (PEEK + GAP);

  return (
    <section ref={sectionRef}
      className="section-dark-surface relative w-full overflow-hidden"
      aria-labelledby="what-we-do-heading"
    >
      <div className="section-shell grid grid-cols-1 items-start gap-12 py-16 lg:min-h-[var(--Section-Height)] lg:grid-cols-2 lg:gap-8 lg:pt-10 lg:pb-[100px]">

        {/* ── Left – heading & CTA ─────────────────────────────── */}
        <motion.div
          className="flex flex-col justify-between gap-10 lg:min-h-[610px] lg:max-w-[564px]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="flex flex-col gap-8 sm:gap-10">
            <h2
              id="what-we-do-heading"
              className="font-dm-sans text-3xl font-medium leading-tight text-color-neutral-50 sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-[67.2px]"
            >
              WHAT WE DO
            </h2>
            <p className="font-dm-sans text-base font-normal leading-7 text-color-neutral-50 sm:text-xl sm:leading-9 lg:text-2xl">
              We combine strategy, design, and technology to build tailored
              digital solutions that drive business growth.
            </p>
          </div>

          <OutlineButton
            href="#projects"
            variant="dark"
            className="w-full sm:w-auto"
            circleOffset={{ left: "-42px", top: "55px" }}
          >
            View All Projects
          </OutlineButton>
        </motion.div>

        {/* ── Right – stacked cards ────────────────────────────── */}
        <div className="relative w-full lg:max-w-[564px] lg:justify-self-end">
          {/* fixed-height canvas for the stack */}
          <div
            className="relative w-full"
            style={{ height: containerH }}
          >
            {SERVICE_CARDS.map((card, index) => {
              const isActive = activeIndex === index;
              const topPx = getTopOffset(index, activeIndex, expanded);

              return (
                <motion.article
                  key={card.id}
                  ref={el => (cardRefs.current[index] = el)}
                  className={`absolute left-0 right-0 overflow-hidden rounded-[28px] cursor-pointer ${card.bgClass}`}
                  style={{
                    zIndex: isActive ? 100 : 10 + index,
                  }}
                  animate={{
                    top: topPx,
                    height: isActive ? expanded : PEEK,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                >
                  {/* Background image (always rendered, dimmed when collapsed) */}
                  <div className="absolute inset-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 100vw, 564px"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black"
                      animate={{ opacity: isActive ? 0.25 : 0.72 }}
                      transition={{ duration: 0.45 }}
                    />
                  </div>

                  {/* Card content */}
                  <div className="relative z-10 flex h-full flex-col px-8 pt-6 pb-8 md:px-10 md:pt-7 md:pb-10">
                    {/* ── Header row – always visible ── */}
                    <div className="flex shrink-0 items-center justify-between">
                      <h3 className="font-dm-sans text-[28px] font-medium leading-none text-white md:text-[40px]">
                        {card.title}
                      </h3>
                      <span className="font-dm-sans text-[28px] font-medium leading-none text-white md:text-[40px]">
                        {card.id}
                      </span>
                    </div>

                    {/* ── Body – fades in when expanded ── */}
                    <motion.div
                      className="overflow-hidden flex flex-1 flex-col justify-end"
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 16,
                        marginTop: isActive ? 20 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="max-w-[82%] font-dm-sans text-lg leading-[1.8] text-white/90 md:text-xl">
                        {card.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
