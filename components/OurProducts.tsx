"use client";

import { motion } from "framer-motion";
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
        Trusted care and compassionate support
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
        Trusted care and compassionate support
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
  return (
    <section
      id="products"
      className="section-dark-surface w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="products-heading"
    >
      <div className="section-shell flex flex-col gap-12 lg:gap-16">
        <div className="flex max-w-[607px] flex-col gap-3">
          <SectionLabel>OUR PRODUCTS</SectionLabel>
          <h2
            id="products-heading"
            className="font-dm-sans text-2xl font-normal leading-10 text-color-neutral-50 sm:text-3xl"
          >
            We create digital solutions that drive growth.
          </h2>
        </div>

        <div className="products-track -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:-mx-0 sm:gap-10 sm:px-0 lg:gap-16">
          {PRODUCTS.map((product, index) => (
            <motion.article
              key={product.name}
              className="flex w-[min(92vw,1200px)] shrink-0 snap-center flex-col gap-8 bg-transparent lg:w-[min(90vw,1200px)] lg:flex-row lg:items-center lg:gap-12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SectionImage
                src={product.image}
                alt={`${product.name} product preview`}
                className="aspect-square w-full max-w-full shrink-0 lg:max-w-[576px] lg:basis-[576px]"
                sizes="(max-width: 1024px) 92vw, 576px"
              />
              <div className="flex min-h-0 flex-1 flex-col justify-between gap-8 p-2 sm:gap-10 sm:p-4 lg:min-h-[480px] lg:gap-14 lg:p-6">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="font-dm-sans text-2xl font-normal leading-tight text-White sm:text-[32px] sm:leading-[40px]">{product.name}</h3>
                  <p className="font-dm-sans text-base font-normal leading-relaxed text-color-neutral-400 self-stretch max-w-[400px] sm:text-[20px] sm:leading-[36px]">
                    {product.tagline}
                  </p>
                </div>
                <div className="flex flex-col gap-8 lg:gap-14">
                  <div className="flex flex-col items-start gap-3 self-stretch p-3 rounded-2xl bg-color-neutral-700 max-w-[400px] sm:p-4">
                    <div className="flex gap-[3px] items-center shrink-0" aria-hidden>
                      <svg width="9.124" height="16" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                        <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167"/>
                      </svg>
                      <svg width="9.124" height="16" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                        <path d="M9.20758 0.0960535V2.10497C5.72545 1.83708 4.68751 4.28132 4.60381 5.53692V6.9599H9.12387V16.0837H0.0837402V5.62063C0.0837402 5.62063 0.354907 4.01264 0.837085 3.10943C2.47325 0.0445671 7.08705 0.0402502 9.20758 0.0960535Z" fill="white" stroke="white" strokeWidth="0.167"/>
                      </svg>
                    </div>
                    <p className="font-dm-sans text-base font-normal leading-[1.5] text-White self-stretch sm:text-[20px] sm:leading-[28px]">
                      {product.stat}
                    </p>
                    <p className="font-ibm-plex text-sm font-normal italic leading-relaxed text-color-neutral-400 self-stretch sm:text-[16px] sm:leading-[26px]">
                      {product.quote}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 text-White transition-opacity hover:opacity-70 sm:gap-4"
                  >
                    <span className="font-dm-sans text-base font-medium leading-5">
                      Visit Product
                    </span>
                    <ArrowRight tone="dark" size={24} className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>


      </div>
    </section>
  );
}
