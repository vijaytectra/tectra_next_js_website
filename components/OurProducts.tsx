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

  // Map 0 -> 1 scroll progress to 0% -> -50% horizontal translation
  // To ensure the cards NEVER get stuck in between, we snap the target to exactly 0 or -50 based on the scroll threshold.
  const targetX = useTransform(scrollYProgress, (v) => (v < 0.5 ? 0 : -50) as number);
  const springX = useSpring(targetX, { stiffness: 300, damping: 30, mass: 0.8 });
  const x = useTransform(springX, (v) => `${v}%`);

  return (
    <section
      id="products"
      ref={targetRef}
      className="relative h-[150vh] lg:h-[180vh] w-full section-dark-surface"
      aria-labelledby="products-heading"
    >
      {/* Sticky Container */}
      <div className="products-sticky-container sticky top-0 flex h-[100vh] md:h-[700px] lg:h-[750px] xl:h-[100vh] w-full flex-col overflow-hidden pb-4 sm:pb-16 lg:pb-6 xl:pb-12">

        {/* Sticky Heading */}
        <div className="products-heading-container section-shell pt-6 sm:pt-12 lg:pt-6 xl:pt-16 pb-0 shrink-0 flex flex-col gap-2 sm:gap-4 lg:gap-4 xl:gap-8">
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
        <div className="products-track-container relative flex-1 w-full mt-2 lg:mt-4 xl:mt-6 overflow-hidden">
          <motion.div
            style={{ x }}
            className="absolute left-0 top-0 flex h-full w-[200vw]"
          >
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="w-[100vw] h-full flex items-start md:items-center justify-center section-shell pb-2 lg:pb-0"
              >
                <article className="product-article flex w-full max-w-[1200px] h-full flex-col gap-2 sm:gap-8 md:flex-row md:items-center md:gap-6 lg:gap-8 xl:gap-12 bg-transparent pb-2 md:pb-0">
                  {/* Image */}
                  <div className="product-image-wrapper relative w-[85%] max-w-[400px] md:w-[45%] md:max-w-[500px] h-[220px] sm:h-[300px] shrink-0 md:shrink md:h-full md:min-h-0 md:max-h-[400px] xl:max-h-[500px] flex items-center md:mx-0">
                    <Image
                      src={product.image}
                      alt={`${product.name} product preview`}
                      fill
                      className="object-contain object-left-bottom md:object-center md:shadow-xl md:shadow-black/30"
                      sizes="(max-width: 768px) 85vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="product-content flex min-h-0 flex-1 flex-col justify-center gap-2 sm:gap-6 md:gap-3 lg:gap-3 xl:gap-6">
                    <div className="flex flex-col gap-1 sm:gap-3">
                      <h3 className="product-title font-dm-sans text-[22px] font-medium leading-tight text-White sm:text-[28px] xl:text-[36px] sm:font-normal sm:leading-[40px]">{product.name}</h3>
                      <p className="product-tagline font-dm-sans text-sm font-normal leading-snug text-color-neutral-400 self-stretch max-w-[500px] sm:text-[18px] sm:leading-[28px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] xl:leading-[36px]">
                        {product.tagline}
                      </p>
                    </div>
                    <div className="product-info-block flex flex-col gap-3 sm:gap-6 lg:gap-4 xl:gap-6">
                      <div className="product-quote-card flex flex-col items-start gap-1 sm:gap-3 self-stretch p-3 sm:p-6 lg:p-4 xl:p-6 rounded-xl sm:rounded-2xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden max-w-[500px] shadow-lg">
                        <div className="flex gap-[4px] items-center shrink-0 mb-0.5 sm:mb-2" aria-hidden>
                          <svg width="14" height="22" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 h-3 w-auto sm:h-6">
                            <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167" />
                          </svg>
                          <svg width="14" height="22" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 h-3 w-auto sm:h-6">
                            <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167" />
                          </svg>
                        </div>
                        <p className="product-stat font-dm-sans text-xs sm:text-lg font-medium leading-[1.4] text-White self-stretch sm:text-[18px] lg:text-[16px] xl:text-[22px]">
                          {product.stat}
                        </p>
                        <p className="product-quote font-ibm-plex text-[11px] sm:text-base font-normal italic leading-relaxed text-color-neutral-400 self-stretch sm:text-[14px] lg:text-[13px] xl:text-[17px]">
                          {product.quote}
                        </p>
                      </div>
                      <Link
                        href="#"
                        className="product-cta group inline-flex w-fit items-center gap-1.5 sm:gap-4 text-White transition-opacity hover:opacity-70"
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

        {/* CSS to fully hide scrollbar for non-inline styles & handle short viewports */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          @media (max-height: 820px) {
            .products-sticky-container {
              padding-bottom: 16px !important;
            }
            .products-heading-container {
              padding-top: 16px !important;
              gap: 8px !important;
            }
            .products-heading-container h2 {
              font-size: 1.5rem !important; /* text-2xl */
              line-height: 2rem !important;
            }
            .products-track-container {
              margin-top: 8px !important;
            }
            .product-image-wrapper {
              max-height: 320px !important;
            }
            .product-content {
              gap: 12px !important;
            }
            .product-content > div {
              gap: 8px !important;
            }
            .product-title {
              font-size: 24px !important;
              line-height: 32px !important;
            }
            .product-tagline {
              font-size: 15px !important;
              line-height: 22px !important;
            }
            .product-info-block {
              gap: 12px !important;
            }
            .product-quote-card {
              padding: 12px 16px !important;
              gap: 8px !important;
            }
            .product-quote-card svg {
              height: 16px !important;
              width: auto !important;
            }
            .product-stat {
              font-size: 15px !important;
              line-height: 20px !important;
            }
            .product-quote {
              font-size: 13px !important;
              line-height: 18px !important;
            }
            .product-cta span {
              font-size: 14px !important;
            }
            .product-cta svg {
              height: 18px !important;
              width: 18px !important;
            }
          }
        `}} />
      </div>
    </section>
  );
}
