"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Map 0 -> 1 scroll progress to 0% -> -50% horizontal translation (since we have 2 items)
  // We use useSpring for an incredibly smooth, buttery feel as requested.
  const x = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]),
    { stiffness: 200, damping: 40, mass: 0.8 }
  );

  return (
    <section
      id="products"
      ref={targetRef}
      className="relative h-[150vh] lg:h-[180vh] w-full section-dark-surface"
      aria-labelledby="products-heading"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden pb-4 sm:pb-16 lg:pb-24">

        {/* Sticky Heading */}
        <div className="section-shell pt-6 sm:pt-12 lg:pt-24 pb-0 shrink-0 flex flex-col gap-2 sm:gap-6 lg:gap-8">
          <div className="flex max-w-[607px] flex-col gap-1 sm:gap-3">
            <SectionLabel>OUR PRODUCTS</SectionLabel>
            <h2
              id="products-heading"
              className="font-dm-sans text-2xl font-normal leading-tight text-color-neutral-50 sm:text-3xl sm:leading-10 lg:text-4xl"
            >
              We create digital solutions that drive growth.
            </h2>
          </div>
        </div>

        {/* Sliding Horizontal Track */}
        <div className="relative flex-1 w-full mt-2 lg:mt-8 overflow-hidden">
          <motion.div
            style={{ x }}
            className="absolute left-0 top-0 flex h-full w-[200vw]"
          >
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="w-[100vw] h-full flex items-start lg:items-center justify-center section-shell pb-2 lg:pb-0"
              >
                <article className="flex w-full max-w-[1200px] h-full flex-col gap-2 sm:gap-8 lg:flex-row lg:items-center lg:gap-12 bg-transparent pb-2 lg:pb-0">
                  {/* Image */}
                  <div className="relative w-[85%] max-w-[400px] lg:w-[45%] lg:max-w-[500px] flex-1 shrink-0 min-h-0 lg:h-auto lg:aspect-square flex items-center lg:mx-0">
                    <Image
                      src={product.image}
                      alt={`${product.name} product preview`}
                      fill
                      className="object-contain object-left-bottom lg:object-center lg:shadow-xl lg:shadow-black/30"
                      sizes="(max-width: 1024px) 85vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex min-h-0 flex-1 flex-col justify-center gap-2 sm:gap-8 lg:gap-12">
                    <div className="flex flex-col gap-1 sm:gap-4">
                      <h3 className="font-dm-sans text-[22px] font-medium leading-tight text-White sm:text-[36px] sm:font-normal sm:leading-[40px]">{product.name}</h3>
                      <p className="font-dm-sans text-sm font-normal leading-snug text-color-neutral-400 self-stretch max-w-[500px] sm:text-[20px] sm:leading-[36px]">
                        {product.tagline}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-8 lg:gap-14">
                      <div className="flex flex-col items-start gap-1 sm:gap-4 self-stretch p-3 sm:p-8 rounded-xl sm:rounded-2xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden max-w-[500px] shadow-lg">
                        <div className="flex gap-[4px] items-center shrink-0 mb-0.5 sm:mb-2" aria-hidden>
                          <svg width="14" height="22" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 h-3 w-auto sm:h-6">
                            <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167" />
                          </svg>
                          <svg width="14" height="22" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 h-3 w-auto sm:h-6">
                            <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167" />
                          </svg>
                        </div>
                        <p className="font-dm-sans text-xs sm:text-lg font-medium leading-[1.4] text-White self-stretch sm:text-[22px]">
                          {product.stat}
                        </p>
                        <p className="font-ibm-plex text-[11px] sm:text-base font-normal italic leading-relaxed text-color-neutral-400 self-stretch sm:text-[17px]">
                          {product.quote}
                        </p>
                      </div>
                      <Link
                        href="#"
                        className="group inline-flex w-fit items-center gap-1.5 sm:gap-4 text-White transition-opacity hover:opacity-70"
                      >
                        <span className="font-dm-sans text-[13px] sm:text-base font-medium leading-5">
                          Visit Product
                        </span>
                        <ArrowRight tone="dark" size={24} className="h-3 w-3 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CSS to fully hide scrollbar for non-inline styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </section>
  );
}
