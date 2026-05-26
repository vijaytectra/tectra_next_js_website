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
    bodyClass: "text-White",
    titleClass: "text-color-neutral-50",
    numberClass: "font-urbanist font-semibold text-color-neutral-50",
    bgClass: "bg-color-neutral-900",
    overlayClass:
      "bg-gradient-to-b from-black/50 via-neutral-600/0 to-black/50",
  },
  {
    id: "02",
    title: "DEVELOP",
    description:
      "We develop scalable digital products engineered for performance, reliability, and seamless user experiences.",
    image: images.whatWeDoDesign,
    bodyClass: "text-color-neutral-200",
    titleClass: "text-color-neutral-50",
    numberClass: "font-urbanist font-semibold text-color-neutral-50",
    bgClass: "bg-color-neutral-500",
    overlayClass: "bg-gradient-to-b from-black via-neutral-600/0 to-black",
  },
  {
    id: "03",
    title: "GROW",
    description:
      "We market brands through data-driven strategies, digital campaigns, and impactful digital experiences.",
    image: images.blog[2],
    bodyClass: "text-color-neutral-200",
    titleClass: "text-color-neutral-100",
    numberClass: "font-urbanist font-medium text-color-neutral-100",
    bgClass: "bg-color-neutral-500",
    overlayClass: "bg-gradient-to-b from-black via-neutral-600/0 to-black",
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function WhatWeDo() {
  return (
    <section
      className="section-dark-surface relative w-full overflow-hidden"
      aria-labelledby="what-we-do-heading"
    >
      <div className="section-shell grid min-h-0 grid-cols-1 items-start gap-12 py-16 lg:min-h-[var(--Section-Height)] lg:grid-cols-2 lg:gap-[72px] lg:py-[100px]">
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
            <p className="font-dm-sans text-lg font-normal leading-8 text-color-neutral-50 sm:text-xl sm:leading-9 lg:text-2xl">
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

        <div className="relative w-full lg:max-w-[564px] lg:justify-self-end">
          <div className="what-we-do-cards flex max-h-[70vh] flex-col gap-10 overflow-y-auto pr-1 sm:gap-[82px] lg:max-h-[610px]">
            {SERVICE_CARDS.map((card, index) => (
              <motion.article
                key={card.id}
                className={`relative flex h-80 shrink-0 flex-col justify-between overflow-hidden p-6 sm:h-96 sm:p-8 ${card.bgClass}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: easeOut,
                }}
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 564px"
                  aria-hidden
                />
                <div
                  aria-hidden
                  className={`absolute inset-0 ${card.overlayClass}`}
                />
                <div className="relative z-10 flex w-full items-center justify-between gap-4">
                  <h3
                    className={`font-dm-sans text-2xl font-medium leading-10 sm:text-3xl ${card.titleClass}`}
                  >
                    {card.title}
                  </h3>
                  <span
                    className={`text-2xl leading-10 sm:text-3xl ${card.numberClass}`}
                  >
                    {card.id}
                  </span>
                </div>
                <p
                  className={`relative z-10 font-dm-sans text-lg font-normal leading-8 sm:text-xl sm:leading-9 lg:text-2xl ${card.bodyClass}`}
                >
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
