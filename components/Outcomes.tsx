"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

const BEFORE_ITEMS = [
  "Low, unpredictable leads",
  "Inefficient, manual processes",
  "Poor conversion rates",
  "Fragmented, disconnected systems",
  "Blending in, competing on price",
  "No visibility into what drives growth",
];

const WITH_ITEMS = [
  "Predictable, measurable growth",
  "Automated, efficient operations",
  "Higher conversion rates, same traffic",
  "One integrated system that works together seamlessly",
  "A strong, defensible market position",
  "Full-funnel attribution and clarity",
];

export default function Outcomes() {
  return (
    <section
      className="w-full pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ backgroundColor: "#F6F6F4", borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">

        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
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
            10 &nbsp; THE OUTCOMES WE DELIVER
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[49.6px] leading-[38px] sm:leading-[46px] lg:leading-[52.576px]"
            style={{
              width: "100%",
              maxWidth: "800px",
              color: "#111",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontStyle: "normal",
              fontWeight: 300,
              letterSpacing: "-0.992px",
            }}
          >
            From fragmented effort to predictable growth.
          </h2>
        </motion.div>

        {/* 2-Column Comparison Layout */}
        {/* 3-Column Comparison Layout */}
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full border border-[#E4E4E4] bg-white grid grid-cols-1 lg:grid-cols-[1fr_48px_1fr] relative rounded-sm"
        >

          {/* Before Tectra Panel */}
          <div className="p-8 pb-12 sm:p-12 lg:p-14 lg:pb-12 bg-[#F6F6F4]">
            <h3
              className="mb-8"
              style={{
                color: "#2B2B2B",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontSize: "11.2px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "16.8px",
                letterSpacing: "2.016px",
                textTransform: "uppercase",
              }}
            >
              BEFORE TECTRA
            </h3>

            <div className="flex flex-col">
              {BEFORE_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 py-[16px] ${idx < BEFORE_ITEMS.length - 1 ? "border-b border-[#E4E4E4]" : ""
                    }`}
                >
                  <span
                    className="shrink-0 mt-0.5"
                    style={{
                      color: "#A3A3A3",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                    }}
                  >
                    ✕
                  </span>
                  <p
                    style={{
                      color: "#2B2B2B",
                      fontFamily: "Aspekta, system-ui, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: "22px",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Divider Box containing Arrow */}
          <div className="bg-[#F6F6F4] border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l border-[#E4E4E4] flex items-center justify-center py-4 lg:py-0 w-full h-12 lg:h-auto select-none">
            <div className="block lg:hidden">
              {/* Vertical points down on mobile/tablet */}
              <Image
                src="/images/↓.png"
                width={11}
                height={11}
                alt="arrow down"
                style={{ filter: "brightness(0) invert(0.64)" }}
              />
            </div>
            <div className="hidden lg:block">
              {/* Horizontal points right on desktop */}
              <Image
                src="/images/↓.png"
                width={11}
                height={11}
                alt="arrow right"
                style={{ transform: "rotate(-90deg)", filter: "brightness(0) invert(0.64)" }}
              />
            </div>
          </div>

          {/* With Tectra Panel */}
          <div className="p-8 pb-12 sm:p-12 lg:p-14 lg:pb-12 bg-[#111111] text-white">
            <h3
              className="mb-8"
              style={{
                color: "#8B8B8B",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontSize: "11.2px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "16.8px",
                letterSpacing: "2.016px",
                textTransform: "uppercase",
              }}
            >
              WITH TECTRA
            </h3>

            <div className="flex flex-col">
              {WITH_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 py-[16px] ${idx < WITH_ITEMS.length - 1 ? "border-b border-neutral-800" : ""
                    }`}
                >
                  <span className="shrink-0 mt-1.5 flex items-center">
                    <Image
                      src="/images/↓.png"
                      width={10}
                      height={10}
                      alt="arrow"
                      style={{ transform: "rotate(-90deg)", filter: "brightness(0) invert(1)" }}
                    />
                  </span>
                  <p
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Aspekta, system-ui, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: "22px",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
