"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollContainerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    // Only trigger the scroll hint on mobile devices where swiping is primary
    if (isInView && window.innerWidth < 1024) {
      const container = scrollContainerRef.current;
      if (!container) return;

      const hintTimer = setTimeout(() => {
        // Temporarily disable snapping so the browser doesn't block the animation
        container.style.scrollSnapType = 'none';
        
        // Scroll right fully to the second card
        const scrollAmount = container.clientWidth * 0.9;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        
        // Wait for it to scroll and pause briefly, then scroll back to start
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          
          // Restore snapping after the return animation completes
          setTimeout(() => {
            container.style.scrollSnapType = '';
          }, 800);
        }, 1500); 
      }, 600);

      return () => clearTimeout(hintTimer);
    }
  }, [isInView]);

  return (
    <section
      id="products"
      className="section-dark-surface w-full relative py-8 lg:pt-12 lg:pb-32"
      aria-labelledby="products-heading"
    >
      <div className="section-shell flex flex-col gap-4 sm:gap-8 lg:gap-10">
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

      <div className="mt-8 sm:mt-12 lg:mt-16 w-full relative">
        {/* Native Horizontal Scroll Container with Snapping */}
        <div 
          ref={scrollContainerRef}
          className="flex w-full overflow-x-auto snap-x snap-mandatory gap-8 sm:gap-16 lg:gap-24 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-1200px)/2))] pb-12 pt-4 hide-scrollbar" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.map((product) => (
            <motion.article
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              key={product.name}
              className="snap-center flex w-[90vw] sm:w-[min(92vw,1200px)] shrink-0 flex-col gap-6 sm:gap-8 bg-transparent lg:w-[min(90vw,1200px)] lg:flex-row lg:items-center lg:gap-12"
            >
              <div className="relative w-full max-w-[600px] shrink-0 lg:w-[600px] lg:max-w-none aspect-square flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={`${product.name} product preview`}
                  fill
                  className="object-contain rounded-none shadow-xl shadow-black/30"
                  sizes="(max-width: 1024px) 92vw, 600px"
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col justify-between gap-6 sm:gap-10 sm:p-4 lg:min-h-[480px] lg:gap-14 lg:p-6">
                <div className="flex flex-col gap-2 sm:gap-4">
                  <h3 className="font-dm-sans text-[28px] font-medium leading-tight text-White sm:text-[36px] sm:font-normal sm:leading-[40px]">{product.name}</h3>
                  <p className="font-dm-sans text-base font-normal leading-relaxed text-color-neutral-400 self-stretch max-w-[500px] sm:text-[20px] sm:leading-[36px]">
                    {product.tagline}
                  </p>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-14">
                  <div className="flex flex-col items-start gap-3 sm:gap-4 self-stretch p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden max-w-[500px] shadow-lg">
                    <div className="flex gap-[4px] items-center shrink-0 mb-2" aria-hidden>
                      <svg width="14" height="22" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 h-5 w-auto sm:h-6">
                        <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167"/>
                      </svg>
                      <svg width="14" height="22" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 h-5 w-auto sm:h-6">
                        <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167"/>
                      </svg>
                    </div>
                    <p className="font-dm-sans text-base sm:text-lg font-medium leading-[1.5] text-White self-stretch sm:text-[22px]">
                      {product.stat}
                    </p>
                    <p className="font-ibm-plex text-sm sm:text-base font-normal italic leading-relaxed text-color-neutral-400 self-stretch sm:text-[17px]">
                      {product.quote}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="group inline-flex w-fit items-center gap-2 sm:gap-4 text-White transition-opacity hover:opacity-70"
                  >
                    <span className="font-dm-sans text-sm sm:text-base font-medium leading-5">
                      Visit Product
                    </span>
                    <ArrowRight tone="dark" size={24} className="h-4 w-4 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
          {/* Spacer to allow the last item to scroll into center without cutting off */}
          <div className="w-1 shrink-0" aria-hidden="true" />
        </div>
        
        {/* CSS to fully hide scrollbar for non-inline styles */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </section>
  );
}
