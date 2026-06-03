"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

export default function WhatWeDo() {
  return (
    <section
      className="section-dark-surface relative w-full"
      aria-labelledby="what-we-do-heading"
    >
      <div className="section-shell grid grid-cols-1 gap-12 py-8 lg:grid-cols-2 lg:gap-8 lg:pt-8 lg:pb-[100px] relative">

        {/* ── Left – heading & CTA ─────────────────────────────── */}
        <div className="relative w-full h-full">
          <motion.div
            className="lg:sticky lg:top-32 flex flex-col gap-12 lg:max-w-[564px] lg:h-[632px]"
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
        </div>

        {/* ── Right – stacked cards ────────────────────────────── */}
        <div className="relative w-full lg:max-w-[564px] lg:justify-self-end flex flex-col">
          {SERVICE_CARDS.map((card, index) => {
            // Calculate top position: 8rem (top-32) + 6rem per card (96px peek)
            const stickyTop = `calc(8rem + ${index * 6}rem)`;
            
            // Align sticky bottoms to prevent reverse-collapse when scrolling away
            const mb = (SERVICE_CARDS.length - 1 - index) * 6;
            // Ensure visual gap between cards is exactly 14rem
            const mt = index === 0 ? 0 : 14 - ((SERVICE_CARDS.length - 1 - (index - 1)) * 6);

            return (
              <motion.article
                key={card.id}
                className={`sticky w-full overflow-hidden rounded-[28px] ${card.bgClass} h-[440px] shadow-2xl shadow-black/40 border border-white/5`}
                style={{ 
                  top: stickyTop, 
                  marginTop: `${mt}rem`,
                  marginBottom: `${mb}rem`,
                  zIndex: 10 + index 
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 564px"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Card content */}
                <div className="relative z-10 flex h-full flex-col px-8 pt-6 pb-8 md:px-10 md:pt-7 md:pb-10">
                  {/* ── Header row ── */}
                  <div className="flex shrink-0 items-center justify-between">
                    <h3 className="font-dm-sans text-[28px] font-medium leading-none text-white md:text-[40px]">
                      {card.title}
                    </h3>
                    <span className="font-dm-sans text-[28px] font-medium leading-none text-white md:text-[40px]">
                      {card.id}
                    </span>
                  </div>

                  {/* ── Body ── */}
                  <div className="flex flex-1 flex-col justify-end mt-5">
                    <p className="max-w-[82%] font-dm-sans text-lg leading-[1.8] text-white/90 md:text-xl">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
