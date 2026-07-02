"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    name: "Motherly",
    tags: ["Mobile", "Healthcare", "B2C"],
    tagline: "CONNECTING EXPECTANT MOTHERS WITH TRUSTED PREGNANCY CARE PROFESSIONALS.",
    desc: "Motherly is a healthcare platform designed to connect expectant mothers with doulas and gynecologists through a simple and convenient booking experience.",
    image: "/images/image 115.png",
    link: "#",
    objectPosition: "center 70%",
    objectFit: "object-cover",
  },
  {
    name: "Lead101",
    tags: ["Mobile", "Healthcare", "B2C"],
    tagline: "PREGNANCY & PARENTING COMPANION APP",
    desc: "A mobile health platform for expectant and new mothers — tracking, content, and community built by Tectra and run at scale.",
    image: "/images/6c54c9c1fcc0d8053731b4c270ae835e6d7b2865.png",
    link: "#",
    objectPosition: "left center",
    objectFit: "object-cover",
  },
  {
    name: "Elderly",
    tags: ["Web", "Healthcare", "SaaS"],
    tagline: "SENIOR CARE COORDINATION PLATFORM",
    desc: "A family-centric care coordination SaaS connecting seniors, caregivers, and healthcare providers in one unified platform.",
    image: "/images/ChatGPT Image May 30, 2026, 06_27_07 PM_upscayl_4x_ultrasharp-4x 1.png",
    link: "#",
    objectPosition: "center",
    objectFit: "object-cover",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function OurProducts() {
  return (
    <section
      id="products"
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="mb-[50px]"
        >
          <span
            className="mb-6 block"
            style={{
              color: "#2B2B2B",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontSize: "11.52px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "17.28px",
              letterSpacing: "2.995px",
              textTransform: "uppercase",
            }}
          >
            13 &nbsp; OUR PRODUCTS
          </span>
          <h2
            className="mt-6 text-3xl sm:text-4xl lg:text-[44px] leading-tight lg:leading-[66px]"
            style={{
              width: "100%",
              maxWidth: "800px",
              color: "#111113",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontStyle: "normal",
              fontWeight: 300,
              letterSpacing: "-1.1px",
            }}
          >
            Products we build and run ourselves.
          </h2>
        </motion.div>

        {/* Vertical Product List */}
        <div className="flex flex-col gap-[50px]">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="flex flex-col lg:flex-row border border-[#E4E4E4] rounded-xl overflow-hidden bg-white w-full lg:h-[320px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 group"
            >
              {/* Left Column - Grayscale image with hover effect */}
              <div className="w-full lg:w-[587px] shrink-0 relative aspect-[587/320] lg:aspect-auto lg:h-full bg-[#F7F7F7] overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} screenshot`}
                  fill
                  style={{
                    objectPosition: product.objectPosition || "center",
                  }}
                  className={`${product.objectFit || "object-cover"} grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.02] transition-all duration-700 ease-out`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Right Column - Product details */}
              <div className="flex-1 flex flex-col justify-center items-start gap-4 p-8 lg:p-[48px]">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-[#D4D4D4] text-[11px] font-normal tracking-wide text-neutral-500 bg-transparent select-none"
                      style={{ fontFamily: "Aspekta, system-ui, sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h3
                  style={{
                    color: "#111113",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "35.2px",
                    letterSpacing: "-0.64px",
                  }}
                >
                  {product.name}
                </h3>

                {/* Tagline */}
                <span
                  className="block w-full max-w-[364px]"
                  style={{
                    maxWidth: "100%",
                    color: "var(--color-neutral-900, #171717)",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "19.5px",
                    letterSpacing: "0.52px",
                    textTransform: "uppercase",
                  }}
                >
                  {product.tagline}
                </span>

                {/* Description */}
                <p
                  className="w-full max-w-[492px]"
                  style={{
                    maxWidth: "100%",
                    color: "#6F6F76",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24.75px",
                  }}
                >
                  {product.desc}
                </p>

                {/* Link */}
                <Link
                  href={product.link}
                  className="mt-2 text-[14px] font-medium text-neutral-900 transition-all duration-200 hover:text-neutral-500 hover:translate-x-1 inline-flex items-center gap-1 group/link"
                  style={{ fontFamily: "Aspekta, system-ui, sans-serif" }}
                >
                  Visit product
                  <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
