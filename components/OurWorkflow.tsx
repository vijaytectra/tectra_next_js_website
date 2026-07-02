"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

interface Step {
  num: string;
  title: string;
  sub: string;
  desc: string;
  details: string;
  isDark?: boolean;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discover",
    sub: "Audit & Analyse",
    desc: "We analyse your business from the ground level to uncover key challenges",
    details: "Growth Audit · Market Research · Competitive Analysis",
  },
  {
    num: "02",
    title: "Strategize",
    sub: "Plan & Prioritise",
    desc: "We build a clear plan focused on what matters most first",
    details: "Revenue Modeling · Roadmap Design · KPI Framework",
  },
  {
    num: "03",
    title: "Build",
    sub: "Design & Develop",
    desc: "We design and develop the right solution for your business needs",
    details: "Product Development · UI/UX · Automation Stack",
  },
  {
    num: "04",
    title: "Launch",
    sub: "Activate & Acquire",
    desc: "We deploy your product, attract the right audience, and turn visitors to customer",
    details: "GTM Strategy · Paid Channels · SEO · Performance Creative",
  },
  {
    num: "05",
    title: "Scale",
    sub: "Optimize & Compound",
    desc: "We refine and optimise every step and compound your growth month after month.",
    details: "Analytics · CRO · Lifecycle Marketing · Expansion Revenue",
    isDark: true,
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

export default function OurWorkflow() {
  return (
    <section
      className="w-full bg-[#F6F6F4] pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
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
            04 &nbsp; OUR WORKFLOW
          </span>
          <h2
            className="mb-8 text-3xl sm:text-4xl lg:text-[49.6px] leading-[38px] sm:leading-[46px] lg:leading-[52.576px]"
            style={{
              width: "100%",
              maxWidth: "808px",
              color: "#111",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontStyle: "normal",
              fontWeight: 300,
              letterSpacing: "-0.992px",
            }}
          >
            A strategic system,<br />
            not a to-do list.
          </h2>
          <p
            className="w-full max-w-[544px] text-base sm:text-lg lg:text-[19.2px] leading-relaxed lg:leading-[31.2px]"
            style={{
              color: "#2B2B2B",
              fontFamily: "Aspekta, system-ui, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            As a leading software development company in Chennai and the USA, our every project follows a clear five-step process, combining proven planning methods with industry expertise to deliver desired results.
          </p>
        </motion.div>

        {/* Desktop Layout: Contiguous rows with a single continuous divider line */}
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="hidden lg:grid lg:grid-cols-5 items-start w-full"
        >
          {/* Row 1: Card Boxes & Descriptions */}
          {STEPS.map((step, i) => (
            <div key={`desc-${i}`} className="flex flex-col items-center px-3 w-full">
              {/* Box Element */}
              <div
                className={`w-full h-[120px] flex flex-col justify-center items-center border select-none transition-all duration-300 hover:scale-[1.02] ${step.isDark
                    ? "bg-[#111] border-[#111] text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                    : "bg-white border-[#E4E4E4] text-[#111] hover:border-neutral-400"
                  }`}
              >
                {/* Step Number */}
                <span
                  style={{
                    color: step.isDark ? "#A3A3A3" : "#2B2B2B",
                    textAlign: "center",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "9.6px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "14.4px",
                    letterSpacing: "1.92px",
                    textTransform: "uppercase",
                  }}
                  className="mb-1"
                >
                  {step.num}
                </span>

                {/* Step Title */}
                <h3
                  style={{
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "19.2px",
                    fontWeight: 300,
                    letterSpacing: "-0.4px",
                    color: step.isDark ? "#FFF" : "#111",
                  }}
                  className="mb-1"
                >
                  {step.title}
                </h3>

                {/* Step Subtext */}
                <span
                  style={{
                    color: step.isDark ? "#A3A3A3" : "#2B2B2B",
                    textAlign: "center",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "9.92px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "14.88px",
                    letterSpacing: "0.794px",
                  }}
                >
                  {step.sub}
                </span>
              </div>

              {/* Step Description */}
              <p
                style={{
                  width: "207px",
                  flexShrink: 0,
                  color: "#2B2B2B",
                  textAlign: "center",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "13.12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "21.32px",
                }}
                className="mt-5 text-center px-2"
              >
                {step.desc}
              </p>
            </div>
          ))}

          {/* Row 2: Single Continuous Divider Line spanning all 5 columns */}
          <div
            className="col-span-5 w-full mt-6 mb-4"
            style={{ borderTop: "0.8px solid #E4E4E4" }}
          />

          {/* Row 3: Step Details */}
          {STEPS.map((step, i) => (
            <div key={`details-${i}`} className="flex justify-center w-full px-3">
              <p
                style={{
                  width: "207px",
                  flexShrink: 0,
                  color: "#2B2B2B",
                  textAlign: "center",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "9.6px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "15.6px",
                  letterSpacing: "0.768px",
                }}
                className="text-center px-1"
              >
                {step.details}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Mobile/Tablet Layout: Stacked steps where details are grouped with their box */}
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-6 w-full"
        >
          {STEPS.map((step, i) => (
            <div key={`mobile-${i}`} className="flex flex-col items-center w-full">

              {/* Box Element */}
              <div
                className={`w-full h-[120px] flex flex-col justify-center items-center border select-none transition-all duration-300 hover:scale-[1.02] ${step.isDark
                    ? "bg-[#111] border-[#111] text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                    : "bg-white border-[#E4E4E4] text-[#111] hover:border-neutral-400"
                  }`}
              >
                {/* Step Number */}
                <span
                  style={{
                    color: step.isDark ? "#A3A3A3" : "#2B2B2B",
                    textAlign: "center",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "9.6px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "14.4px",
                    letterSpacing: "1.92px",
                    textTransform: "uppercase",
                  }}
                  className="mb-1"
                >
                  {step.num}
                </span>

                {/* Step Title */}
                <h3
                  style={{
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "19.2px",
                    fontWeight: 300,
                    letterSpacing: "-0.4px",
                    color: step.isDark ? "#FFF" : "#111",
                  }}
                  className="mb-1"
                >
                  {step.title}
                </h3>

                {/* Step Subtext */}
                <span
                  style={{
                    color: step.isDark ? "#A3A3A3" : "#2B2B2B",
                    textAlign: "center",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "9.92px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "14.88px",
                    letterSpacing: "0.794px",
                  }}
                >
                  {step.sub}
                </span>
              </div>

              {/* Step Description */}
              <p
                className="mt-5 text-center px-2 w-full max-w-[290px] lg:max-w-[207px]"
                style={{
                  flexShrink: 0,
                  color: "#2B2B2B",
                  textAlign: "center",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "13.12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "21.32px",
                }}
              >
                {step.desc}
              </p>

              {/* Divider Line */}
              <div
                className="w-40 mx-auto mt-6 mb-5"
                style={{ borderTop: "0.8px solid #E4E4E4" }}
              />

              {/* Step Details list */}
              <p
                className="text-center px-1 w-full max-w-[290px] lg:max-w-[207px]"
                style={{
                  flexShrink: 0,
                  color: "#2B2B2B",
                  textAlign: "center",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "9.6px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "15.6px",
                  letterSpacing: "0.768px",
                }}
              >
                {step.details}
              </p>

            </div>
          ))}
        </motion.div>

        {/* Bottom Banner Strip */}
        <motion.div
          variants={fadeInUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="border border-[#E4E4E4] bg-white px-8 py-6 mt-16 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p
            style={{
              width: "473px",
              maxWidth: "100%",
              flexShrink: 0,
              color: "#2B2B2B",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontSize: "14.4px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "23.4px",
            }}
            className="text-center md:text-left"
          >
            Get a Free Growth Audit and Understand What Is Limiting Your Business Growth
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#111] text-white hover:bg-neutral-800 transition-colors duration-300 whitespace-nowrap"
              style={{
                padding: "14px 24px",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontSize: "11.84px",
                fontWeight: 300,
                letterSpacing: "1.421px",
                textTransform: "uppercase",
              }}
            >
              BOOK A FREE AUDIT &nbsp; →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
