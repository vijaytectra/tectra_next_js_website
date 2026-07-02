"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import CountUp from "./ui/CountUp";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

const STAGES = [
  {
    title: "Digital Marketing",
    impact: "70% impact",
    num: "3.8x",
    numLabel: "organic reach",
    category: "AWARENESS",
    desc: "SEO, paid & content put you in front of the right buyers.",
  },
  {
    title: "Brand and Design",
    impact: "80% impact",
    num: "+64%",
    numLabel: "time on site",
    category: "IDENTITY",
    desc: "Credibility and clarity that build trust fast.",
  },
  {
    title: "UI/UX and Web",
    impact: "95% impact",
    num: "+138%",
    numLabel: "form completions",
    category: "CONVERSION",
    desc: "User experiences optimized to convert clicks into leads",
  },
  {
    title: "Software and CRM",
    impact: "87% impact",
    num: "87%",
    numLabel: "renew annually",
    category: "RETENTION",
    desc: "Eliminates manual work & improves efficiency across operations",
  },
  {
    title: "Data and Strategy",
    impact: "64% impact",
    num: "+41%",
    numLabel: "upsell rate",
    category: "EXPANSION",
    desc: "Data that increases lifetime value over time",
  },
];

const getCellClasses = (i: number) => {
  let classes = "flex flex-col justify-start py-6 px-5 border-[#E4E4E4] bg-white transition-colors duration-300 hover:bg-[#FDFDFD]";

  // Mobile (1 col)
  if (i !== 4) {
    classes += " border-b";
  }

  // Tablet (2 cols)
  if (i % 2 === 0 && i < 4) {
    classes += " md:border-r";
  } else if (i % 2 !== 0) {
    classes += " md:border-r-0";
  }
  if (i === 4) {
    classes += " md:border-b-0 md:border-r-0 md:col-span-2";
  } else {
    classes += " md:border-b";
  }

  // Desktop (5 cols)
  classes += " lg:border-b-0 lg:col-span-1";
  if (i === 4) {
    classes += " lg:border-r-0";
  } else {
    classes += " lg:border-r";
  }

  return classes;
};

export default function GrowthFunnel() {
  return (
    <section
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
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
            09 &nbsp; WHERE TECTRA IMPACTS YOUR GROWTH FUNNEL
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
            Every stage of the customer journey strengthened.
          </h2>
        </motion.div>

        {/* 5-Column Grid */}
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full border border-[#E4E4E4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
        >
          {STAGES.map((stage, i) => (
            <div key={i} className={getCellClasses(i)}>

              <div>
                {/* Stage Index */}
                <span
                  style={{
                    color: "#2B2B2B",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "10.08px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "15.12px",
                    letterSpacing: "1.411px",
                    textTransform: "uppercase",
                  }}
                >
                  STAGE 0{i + 1}
                </span>

                {/* Stage Title */}
                <h3 
                  className="mt-2 mb-4"
                  style={{
                    color: "#111",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "16.8px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "23.1px",
                    letterSpacing: "-0.4px",
                  }}
                >
                  {stage.title}
                </h3>

                {/* Separator Line */}
                <div className="w-full h-[4px] bg-[#E4E4E4] mb-3" />

                {/* Impact Level */}
                <span
                  className="mb-4 block"
                  style={{
                    color: "#2B2B2B",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "9.92px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "14.88px",
                    textTransform: "lowercase",
                  }}
                >
                  {stage.impact}
                </span>

                {/* Stat Box */}
                <div className="w-full border border-[#E4E4E4] py-[10px] px-[12px] bg-[#FAFAFA] flex flex-col items-start gap-1 rounded-sm">
                  <div
                    style={{
                      color: "#111",
                      fontFamily: '"Funnel Display", system-ui, sans-serif',
                      fontSize: "19.2px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "19.2px",
                      letterSpacing: "-0.768px",
                    }}
                  >
                    <CountUp value={stage.num} duration={1.8} />
                  </div>
                  <span
                    style={{
                      color: "#2B2B2B",
                      fontFamily: "Aspekta, system-ui, sans-serif",
                      fontSize: "9.92px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "14.88px",
                      letterSpacing: "0.248px",
                    }}
                  >
                    {stage.numLabel}
                  </span>
                </div>
              </div>

              <div className="mt-[20px]">
                {/* Category */}
                <span
                  className="mb-2 block"
                  style={{
                    color: "#111",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "9.92px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "14.88px",
                    letterSpacing: "0.992px",
                    textTransform: "uppercase",
                  }}
                >
                  {stage.category}
                </span>

                {/* Description */}
                <p
                  style={{
                    width: "182px",
                    color: "#2B2B2B",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "13.12px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "21.32px",
                  }}
                >
                  {stage.desc}
                </p>
              </div>

            </div>
          ))}
        </motion.div>

        {/* Funnel Flow Footer Row */}
        <motion.div
          variants={fadeInUp}
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          {/* Flow Path */}
          <div
            className="flex flex-wrap items-center gap-x-2 gap-y-1"
            style={{
              color: "#2B2B2B",
              fontFamily: "Aspekta, system-ui, sans-serif",
              fontSize: "13.12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "19.68px",
            }}
          >
            {["Awareness", "Consideration", "Conversion", "Retention", "Expansion"].map((step, idx) => (
              <React.Fragment key={step}>
                <span>{step}</span>
                {idx < 4 && (
                  <span className="inline-flex items-center shrink-0">
                    <Image 
                      src="/images/↓.png" 
                      width={10} 
                      height={10} 
                      alt="arrow"
                      style={{ transform: "rotate(-90deg)", filter: "brightness(0) invert(0.1686)" }} 
                    />
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Right Text */}
          <p
            style={{
              color: "#111",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontSize: "13.12px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "19.68px",
            }}
          >
            {"Tectra strengthens every stage — with one connected team."}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
