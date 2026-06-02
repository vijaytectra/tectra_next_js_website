"use client";

import { useState, useEffect, useRef } from "react";
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
    image: images.whatWeDoDevelop,
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
    image: images.whatWeDoGrow,
    bodyClass: "text-color-neutral-200",
    titleClass: "text-color-neutral-100",
    numberClass: "font-urbanist font-medium text-color-neutral-100",
    bgClass: "bg-color-neutral-500",
    overlayClass: "bg-gradient-to-b from-black via-neutral-600/0 to-black",
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const children = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const distance = Math.abs(child.offsetTop - scrollTop);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="section-dark-surface relative w-full overflow-hidden"
      aria-labelledby="what-we-do-heading"
    >
      <div className="section-shell grid grid-cols-1 items-start gap-12 py-16 lg:min-h-[var(--Section-Height)] lg:grid-cols-2 lg:gap-8 lg:pt-10 lg:pb-[100px]">
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

        <div className="relative w-full lg:max-w-[564px] lg:justify-self-end">
          <div
            ref={containerRef}
            className="what-we-do-cards flex max-h-[560px] flex-col gap-0 overflow-y-auto pr-1 sm:max-h-[700px]"
          >
            {SERVICE_CARDS.map((card, index) => {
              const collapsedHeight = isMobile ? 85 : 95;
              const expandedHeight = isMobile ? 340 : 480;
              const isActive = activeIndex === index;

              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    height: isActive ? expandedHeight : collapsedHeight,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => {
                    setActiveIndex(index);
                    const cardElement = containerRef.current?.children[index] as HTMLElement;
                    if (cardElement) {
                      containerRef.current?.scrollTo({
                        top: cardElement.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                  }}
                  className={`relative sticky overflow-hidden rounded-[28px] cursor-pointer ${card.bgClass}`}
                  style={{
                    top: `${index * collapsedHeight}px`,
                    zIndex: 10 + index,
                  }}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-all duration-500"
                      sizes="(max-width:1024px) 100vw, 564px"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90"
                      style={{
                        opacity: isActive ? 0.35 : 0.8,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col p-8 md:p-10">
                    <div className="flex items-center justify-between shrink-0">
                      <h3 className="font-dm-sans text-[30px] font-medium text-white md:text-[42px]">
                        {card.title}
                      </h3>

                      <span className="font-dm-sans text-[30px] font-medium text-white md:text-[42px]">
                        {card.id}
                      </span>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20,
                        height: isActive ? "auto" : 0,
                        marginTop: isActive ? 24 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden flex-1 flex flex-col justify-end"
                    >
                      <p className="max-w-[85%] font-dm-sans text-lg leading-[1.8] text-white md:text-xl">
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
