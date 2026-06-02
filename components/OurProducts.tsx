"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import OutlineButton from "./ui/OutlineButton";
import SectionImage from "./ui/SectionImage";
import SectionLabel from "./ui/SectionLabel";
import ArrowRight from "./ui/ArrowRight";
import { images } from "@/lib/images";

const PRODUCTS = [
  {
    name: "Motherly",
    image: images.productMotherly,
    tagline: (
      <>
        Trusted care and compassionate support{" "}
        <br className="hidden lg:inline" />
        for every stage of parenthood.
      </>
    ),
    stat: "Trusted by Thousands of Growing Families",
    quote:
      "“Motherly delivers trusted care and compassionate support for every stage of parenthood.”",
    titleClass: "font-dm-sans text-[32px] font-normal leading-[40px] text-White",
  },
  {
    name: "Elderly",
    image: images.productElderly,
    tagline: (
      <>
        Trusted care and compassionate support{" "}
        <br className="hidden lg:inline" />
        for every stage of senior wellness.
      </>
    ),
    stat: "Trusted Support for Every Stage of Senior Care",
    quote:
      "“The app delivers trusted care and compassionate support designed to improve seniors’ comfort and quality of life.”",
    titleClass: "font-dm-sans text-[32px] font-normal leading-[40px] text-White",
  },
];

export default function OurProducts() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track vertical scroll progress of the tall section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Apply a spring physics model to make the scrolling extremely smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  // Transform the smoothed progress into a horizontal translation.
  // Translating to -50% reveals the second product nicely.
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      id="products"
      ref={targetRef}
      // h-[300vh] creates a tall scrolling area so the user has time to read
      className="section-dark-surface w-full relative h-[300vh]"
      aria-labelledby="products-heading"
    >
      {/* Sticky container stays in the viewport while we scroll the section */}
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center overflow-hidden py-4 sm:py-10 lg:py-12">
        <div className="section-shell flex flex-col gap-4 sm:gap-8 lg:gap-10">
          <div className="flex max-w-[607px] flex-col gap-1 sm:gap-3">
            <SectionLabel>OUR PRODUCTS</SectionLabel>
            <h2
              id="products-heading"
              className="font-dm-sans text-xl font-normal leading-8 text-color-neutral-50 sm:text-2xl sm:leading-10 lg:text-3xl"
            >
              We create digital solutions that drive growth.
            </h2>
          </div>
        </div>

        <div className="mt-4 sm:mt-8 lg:mt-12 w-full overflow-hidden px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-1200px)/2))]">
          <motion.div 
            className="flex w-max gap-4 sm:gap-10 lg:gap-16"
            style={{ x }}
          >
            {PRODUCTS.map((product) => (
              <article
                key={product.name}
                className="flex w-[80vw] sm:w-[min(92vw,1200px)] shrink-0 flex-col gap-3 sm:gap-8 bg-transparent lg:w-[min(90vw,1200px)] lg:flex-row lg:items-center lg:gap-12"
              >
                <SectionImage
                  src={product.image}
                  alt={`${product.name} product preview`}
                  className="aspect-[4/3] sm:aspect-square w-full max-w-full shrink-0 lg:max-w-[576px] lg:basis-[576px] object-cover object-center rounded-lg sm:rounded-none"
                  sizes="(max-width: 1024px) 92vw, 576px"
                />
                <div className="flex min-h-0 flex-1 flex-col justify-between gap-3 p-0 sm:gap-10 sm:p-4 lg:min-h-[480px] lg:gap-14 lg:p-6">
                  <div className="flex flex-col gap-1 sm:gap-4">
                    <h3 className="font-dm-sans text-lg font-medium leading-tight text-White sm:text-[32px] sm:font-normal sm:leading-[40px]">{product.name}</h3>
                    <p className="font-dm-sans text-sm font-normal leading-snug text-color-neutral-400 self-stretch max-w-[400px] sm:text-[20px] sm:leading-[36px]">
                      {product.tagline}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-8 lg:gap-14">
                    <div className="flex flex-col items-start gap-1 sm:gap-3 self-stretch p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-color-neutral-700 max-w-[400px]">
                      <div className="flex gap-[3px] items-center shrink-0" aria-hidden>
                        <svg width="9.124" height="16" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 h-3 w-auto sm:h-4">
                          <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167"/>
                        </svg>
                        <svg width="9.124" height="16" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 h-3 w-auto sm:h-4">
                          <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167"/>
                        </svg>
                      </div>
                      <p className="font-dm-sans text-xs sm:text-base font-normal leading-snug sm:leading-[1.5] text-White self-stretch sm:text-[20px] sm:leading-[28px]">
                        {product.stat}
                      </p>
                      <p className="font-ibm-plex text-[10px] sm:text-sm font-normal italic leading-snug sm:leading-relaxed text-color-neutral-400 self-stretch sm:text-[16px] sm:leading-[26px]">
                        {product.quote}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 sm:gap-4 text-White transition-opacity hover:opacity-70"
                    >
                      <span className="font-dm-sans text-sm sm:text-base font-medium leading-5">
                        Visit Product
                      </span>
                      <ArrowRight tone="dark" size={24} className="h-4 w-4 sm:h-6 sm:w-6" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
